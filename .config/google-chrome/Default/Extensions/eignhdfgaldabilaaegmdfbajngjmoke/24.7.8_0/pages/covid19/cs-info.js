"use strict";function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}!function(){var t,o;window.top!==window&&"https://www.google.com"===window.location.origin&&(t=("object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))&&chrome&&chrome.runtime&&chrome||"object"===("undefined"==typeof browser?"undefined":_typeof(browser))&&browser||{}).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(o=window.location.ancestorOrigins)||1===o.length&&o[0]===t)&&document.addEventListener("click",function(o){var e=function o(e){return e?"A"===e.tagName?e:o(e.parentNode):null}(o.target),e=e&&e.href;e&&(window.parent.postMessage({bm_method:"covid19infoOpenUrl",bm_value:e},t),o.stopPropagation(),o.preventDefault())}))}();