"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){var e,t,o,n,i,r;function s(){var t;t=window.location.pathname.match(/\/(?:u\/\d\/)?([a-z]{2,30})(?:\/l\/(\d{10,28}))?/),o=t[1],n=t[2],t=document.documentElement.textContent.split('[["'+n+'","')[1],r=t?(t=t.split('",["'),i=t[0].split('",')[0],t[1].split('"],')[0].split('"]\n')[0].split('"]↵')[0].split('"]')[0].split('","')):i=null,window.parent.postMessage({bm_method:"mybusinessWebsiteData",bm_value:{viewId:o,listingId:n,listingTitle:i,addressData:r}},e)}function d(){window.parent.postMessage({bm_method:"mybusinessStopLoading"},e),s()}window.top!==window&&"https://business.google.com"===window.location.origin&&(e=("object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))&&chrome&&chrome.runtime&&chrome||"object"===("undefined"==typeof browser?"undefined":_typeof(browser))&&browser||{}).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(t=window.location.ancestorOrigins)||1===t.length&&t[0]===e)&&(document.addEventListener("mousedown",function(t){t=function t(e){return e?"A"===e.tagName?e:t(e.parentNode):null}(t.target);t&&-1===t.search.indexOf("bm_")&&"https://ads.google.com"!==t.origin&&"https://adwords.google.com"!==t.origin&&(t.search=window.location.search)}),function t(){s(),setTimeout(t,1e3)}(),"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?d():window.addEventListener("DOMContentLoaded",d)))}();