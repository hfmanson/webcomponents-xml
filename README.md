# webcomponents-xml

This is a proof of concept to demonstrate that custom elements could be put in another namespace than the XHTML
namespace "http://www.w3.org/1999/xhtml". In that case the dash requirement for new custom element tag names could be
removed. It would be possible to create XHTML extensions such as XForms using custom elements.

This projects runs on Firefox (which doesn't natively support document.registerElement) without any change in
webcomponents.js

This project is an invitation to investigate whether an enhancement of document.registerElement to add an extra
parameter containing the namespace URL of the new component would be feasible. This parameter will then only be
applicable to XHTML documents.

The example component 'Big Red Button' is based on a webcomponent sample from Robin Berjon's presentation
'Distributed Extensibility: Finally Done Right?' on XML Prague 2014.

brb-test-polyfill.xhtml is the original file and brb-test-polyfill-ce.xhtml contains a custom element in the
xmlns:ce="http://mansoft.nl/custom-element" namespace. An important change is to no longer use the HTML-specific
onclick functions but the generic DOM AddEventListener pattern.

