"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var e,o;window.top!==window&&"https://www.google.com"===window.location.origin&&(e=("object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))&&chrome&&chrome.runtime&&chrome||"object"===("undefined"==typeof browser?"undefined":_typeof(browser))&&browser||{}).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(o=window.location.ancestorOrigins)||1===o.length&&o[0]===e)&&(window.parent.postMessage({bm_method:"reserveCurrentView",bm_value:window.location.pathname.split("maps/reserve/")[1]||"home"},e),document.addEventListener("mousedown",function(e){var o=function e(o){return o?"A"===o.tagName?o:e(o.parentNode):null}(e.target);o&&(-1!==(e=o.pathname).indexOf("/maps/reserve/")&&-1===e.indexOf("/maps/reserve/merchant")?-1===o.search.indexOf("bm_")&&(o.search=window.location.search+o.search.replace("?","&")):o.target="_blank")},!0)))}();