(function() {
    var cs = document._currentScript || document.currentScript
        , doc = cs.ownerDocument
        ;
    var brbProto = Object.create(HTMLElement.prototype, {
        _size: {value: 100, writable: true}
        , _div: {writable: true, configurable: true}
        , size: {
              enumerable: true
            , get: function() {
                return this._size;
            }
            , set: function(val) {
                var s = this._size = parseInt(val || "100", 10)
                    , st = this._div.style;
                st.width = s + "px";
                st.height = s + "px";
                st["border-radius"] = Math.floor(s / 2) + "px";
                st["font-size"] = Math.floor(s / 3) + "px";
                st["line-height"] = Math.floor(s / 2) + "px";
            }
        }
        , createdCallback:
            {
                value: function() {
                    var tmpl =
                        document.importNode(doc.getElementById("brb-tmpl").content, true);
                    this._div = tmpl.querySelector("div.brb");
                    this.createShadowRoot().appendChild(tmpl);
                    this.size = this.getAttribute("size") || 100;
                }
            }
        , attributeChangedCallback: {
            value: function(name, oldVal, newVal) {
                if (name === "size")
                    this.size = newVal;
            }
        }
    });
	// chrome workaround
	if (!Element.prototype.createShadowRoot && Element.prototype.webkitCreateShadowRoot) {
		Element.prototype.createShadowRoot = Element.prototype.webkitCreateShadowRoot;
	}
    window.BigRedButton = document.registerElement("big-red-button", {
        prototype: brbProto});
}());

