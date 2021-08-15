"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var s,d,a,u,e,l,m,p,n,o;function r(e){try{if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",t.style.opacity="0.01",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(e){}document.body.removeChild(t)}}catch(e){}try{window.clipboardData&&window.clipboardData.setData&&window.clipboardData.setData("Text",e)}catch(e){}}window.top===window||(s=window.location).origin===(d="https://translate.google.com")&&(a="object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))&&chrome&&chrome.runtime&&chrome||"object"===("undefined"==typeof browser?"undefined":_typeof(browser))&&browser||{},u=a.runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(e=window.location.ancestorOrigins)||1===e.length&&e[0]===u)&&(l=u.startsWith("moz-extension://"),m=["home","saved","history"],p=new Promise(function(e){"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?e():window.addEventListener("DOMContentLoaded",function(){e()})}),n="/",(o=window.location.pathname).startsWith("/u/")&&(n=o.slice(0,5)),o=!1,function e(){var t=window.location.pathname;o!==t&&(o=t,window.parent.postMessage({bm_method:"translateUpdateView",bm_value:t.replace(n,"")||"home"},u)),setTimeout(e,100)}(),document.addEventListener("click",function(e){var t,n,o;!function e(t){return!!t&&("content_copy"===t.textContent||e(t.children[0]))}(e.target)||(t=(t=document.querySelector("[data-language-to-translate-into] span")||document.querySelector("[data-phrase-index] span"))&&t.textContent)&&(n=t,navigator.clipboard?navigator.clipboard.writeText(n).then(function(){},function(){r(n)}):r(n),(o=document.createElement("div")).className="bm-cs-translate-banner",o.textContent="object"===_typeof(a.i18n)&&"function"==typeof a.i18n.getMessage&&a.i18n.getMessage("cj_i18n_06877")||"Translation copied",document.body.appendChild(o),setTimeout(function(){o.classList.add("bm-cs-translate-banner--visible")}),setTimeout(function(){o.classList.remove("bm-cs-translate-banner--visible")},3e3),setTimeout(function(){document.body.removeChild(o)},3500),e.stopPropagation())},!0),document.addEventListener("mousedown",function(e){var t,n,e=function e(t){return t?"A"===t.tagName?t:e(t.parentNode):null}(e.target);e&&e.href&&(t=e.parentNode.classList.contains("tlid-community-button")||-1!==e.pathname.indexOf("/community")||-1!==e.hash.indexOf("view=instant"),n=e.search.match(/[?&]u=([^&]+)/),(t||n)&&(e.href="",e.target="",e.addEventListener("click",function(){var e={};t?e.bm_method="translateOpenCommunity":(e.bm_method="translateOpenUrlTranslator",e.bm_value=decodeURIComponent(n[1])),window.parent.postMessage(e,u)})))}),window.addEventListener("hashchange",function(){var t="home";s.hash.replace("#","").split("&").forEach(function(e){e.startsWith("view=")&&(t=e.split("=")[1])}),window.parent.postMessage({bm_method:"translateUpdateView",bm_value:t},u)}),-1!==window.location.search.indexOf("bm_udm=1")&&p.then(function(){document.documentElement.dataset.bmCsTranslateDarkmode="1";for(var e=[],t=document.styleSheets,n=0;n<t.length;n++){var o=t[n];try{for(var a=o.rules||o.cssRules,r=0;r<a.length;r++){var i=a[r].cssText,c="rgb(66, 133, 244)",s="rgb(26, 115, 232)",d="rgb(41, 98, 255)",u="rgb(24, 90, 188)",l="#906612";-1===i.indexOf(c)&&-1===i.indexOf(s)&&-1===i.indexOf(d)&&-1===i.indexOf(u)||e.push(i.replace(c,l).replace(c,l).replace(s,l).replace(s,l).replace(d,l).replace(d,l).replace(u,l).replace(u,l))}}catch(e){}}var m=document.createElement("style");m.textContent=e.join("\n"),document.head.appendChild(m)}),window.addEventListener("message",function(e){var t,n,o,a,r,i,c;e.origin===u&&(e.isTrusted||l)&&(n=(t=e.data||{}).bm_method,o=t.bm_value,a=document.getElementById("source")||document.querySelector('textarea[aria-label*="ource"]')||document.querySelector("textarea"),"translateSubmitAndGetState"===n?(r=document.querySelector(".go-button"),i=new window.MouseEvent("mousedown"),c=new window.MouseEvent("mouseup"),r&&(r.dispatchEvent(i),r.dispatchEvent(c)),a&&a.focus(),setTimeout(function(){e.source.postMessage({bm_request:t.bm_request,bm_value:s.href.replace(d,"")},e.origin)},200)):"translateUpdateView"===n?-1!==m.indexOf(o)&&((c=s.hash.replace("#","").split("&").filter(function(e){return!e.startsWith("view=")})).unshift("view="+o),s.hash=c.join("&")):"translateFocus"===n?p.then(function(){a&&a.focus()}):"translatePrefillText"===n&&p.then(function(){var e,t;a&&(a.value=o,e=a,t="input",t=new window.InputEvent(t,{bubbles:!0,cancelable:!0}),e.dispatchEvent(t),setTimeout(function(){a.select()}))}))})))}();