"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var o,e,n,r,t;window.top!==window&&("https://workspace.google.com"!==window.location.origin&&"https://gsuite.google.com"!==window.location.origin||-1!==window.location.pathname.indexOf("/marketplace")&&(o=("object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))&&chrome&&chrome.runtime&&chrome||"object"===("undefined"==typeof browser?"undefined":_typeof(browser))&&browser||{}).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(e=window.location.ancestorOrigins)||1===e.length&&e[0]===o)&&(n=o.startsWith("moz-extension://"),window.addEventListener("message",function(e){var t=e.data||{};e.origin===o&&(e.isTrusted||n)&&("marketplaceToggleDrawer"===(t=t.bm_method)?r.click():"marketplaceGoBack"===t?document.querySelector('path[d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"]').parentNode.parentNode.click():"marketplaceClearResults"===t&&document.querySelector('a[href="./marketplace/appfinder"]').click())}),window.addEventListener("load",function(){r=document.querySelector('path[d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"]').parentNode.parentNode,t=r.parentNode.parentNode.parentNode,new window.MutationObserver(function(){window.parent.postMessage({bm_method:"marketplaceBackState",bm_value:"none"===t.style.display},o)}).observe(t,{attributes:!0,attributeOldValue:!1,characterDataOldValue:!1,characterData:!1,attributeFilter:["style"]})}))))}();