"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var o,n,e,t,r,i,a;function c(e){return e?"A"===e.tagName?e:c(e.parentNode):null}function s(e){var t=new URL(e);if(!("https://www.google.com"===t.origin||"https://search.google.com"===t.origin))return e;if(!URLSearchParams)return e;e=new URLSearchParams(t.search);return e.set("bm_cid","googletravel"),e.set("bm_iid",i),e.set("bm_wiz","1"),e.set("bm_cst","1"),t.search=e,t.href}window.top===window||"https://www.google.com"===(o=window.location).origin&&(n=("object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))&&chrome&&chrome.runtime&&chrome||"object"===("undefined"==typeof browser?"undefined":_typeof(browser))&&browser||{}).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(e=window.location.ancestorOrigins)||1===e.length&&e[0]===n)&&((r=document.createElement("script")).textContent='Object.defineProperty(window,"GOOGLE_FEEDBACK_DESTROY_FUNCTION",{get:function(){return function(){}},set:function(){}});',function e(){(t=document.documentElement)?t.insertBefore(r,t.firstChild):setTimeout(e,.001)}(),i=new URLSearchParams(o.search).get("bm_iid"),document.addEventListener("pointerdown",function(e){var t=e.target;t.classList.contains("gws-flights__back-button")?o.hash+=";t:e":(e=c(t))&&!e.bmProcessed&&(e.bmProcessed=!0,t="",e.href&&"#"!==e.getAttribute("href")?t=s(e.href):e.dataset.href&&(t=s(e.dataset.href)),e.href=t,e.dataset.href=t)}),document.addEventListener("pointerup",function(e){e.target.classList.contains("gws-flights__back-button")&&(o.hash+=";t:e")}),document.addEventListener("click",function(e){var t=c(e.target),t=t&&t.bmHrefValue;t&&(window.parent.postMessage({bm_method:"googletravelOpenUrl",bm_value:t},n),e.stopPropagation(),e.preventDefault())}),function e(){var t=window.location.pathname;a!==t&&(window.parent.postMessage({bm_method:"googletravelPathUpdate",bm_value:t},n),a=t),setTimeout(e,100)}()))}();