"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){var o,n,a,s,e,i,r,d;function l(e){e=(e.split("mail/mu/mp/")[1]||"").split("/")[0];e&&window.parent.postMessage({bm_method:"mailSessionId",bm_value:e},s)}function c(e,t){e=n.querySelectorAll(e);e[t=-1===t?e.length-1:t].click()}function m(e){for(var t=e+"/lb_data",o="sp/chrome/"+t,n=Object.keys(window.localStorage),a=0;a<n.length;a++){var i=n[a];if(i.endsWith(t)){o=i;break}}var r,e=window.localStorage[o];e&&(e=JSON.parse(e),r=function(e){for(var t={masterKey:"wa",nameKey:"name",idKey:"Y",unreadKey:"T",colorKey:"bgColor"},o={},n=0;n<e.length;n++){for(var a=e[n],i=Object.keys(a),r=void 0,s=void 0,d=0;d<i.length;d++){var l=i[d],c=a[l],m=c&&"object"===_typeof(c)&&Object.keys(c);if(m&&4<m.length){t.masterKey=l;for(var u=c.name,p=0;p<m.length;p++){var f=m[p];"name"!==f&&"string"==typeof f&&c[f]===u&&(t.idKey=f)}}else"number"==typeof c&&(!r||c<=s)&&(r=l,s=c)}o[r]?o[r]+=1:o[r]=1}for(var y=Object.keys(o),b="T",h=0;h<y.length;h++){var w=y[h];0<o[w]&&(b=w)}return t.unreadKey=b,t}(e),e=e.map(function(e){var t={};t.unreadCount=e[r.unreadKey];e=e[r.masterKey];t.name=e[r.nameKey],t.id=e[r.idKey];e=e[r.colorKey];return e&&(t.color={backgroundColor:e}),t}),window.parent.postMessage({bm_method:"mailCachedLabels",bm_value:e},s))}function t(){var e=(n.head.textContent.split('USER_EMAIL = "')[1]||"").split('"')[0]||(document.cookie.split("GAUSR=")[1]||"").split(";")||(Object.keys(window.localStorage).join("").split("pref/")[1]||"").split("/")[0];e&&function(t){if(window.openDatabase){var e;try{e=window.openDatabase(t,"","",0)}catch(e){return m(t)}e.transaction(function(e){e.executeSql("SELECT labelId,unreadCount,metadata FROM cached_labels",[],function(e,t){for(var o=[],n=0;n<t.rows.length;n++){var a=t.rows[n],i={id:a.labelId,unreadCount:a.unreadCount},r=a.metadata.startsWith("[")&&JSON.parse(a.metadata),a=r[2],r=r[4];"string"==typeof a&&(i.name=a),"string"==typeof r&&(i.color={backgroundColor:r}),o.push(i)}window.parent.postMessage({bm_method:"mailCachedLabels",bm_value:o},s)},function(){m(t)})})}else m(t)}(e)}function u(){var e=o.href;l(e),window.parent.postMessage({bm_method:"mailPageUrl",bm_value:e},s),t(),setTimeout(t,1e3),setTimeout(t,5e3)}window.top===window||"https://mail.google.com"===(o=window.location).origin&&-1!==o.pathname.indexOf("/mu/")&&(n=document,s=("object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))&&chrome&&chrome.runtime&&chrome||"object"===("undefined"==typeof browser?"undefined":_typeof(browser))&&browser||{}).runtime.getURL("PATH/").replace("/PATH/",""),("object"!==_typeof(e=o.ancestorOrigins)||1===e.length&&e[0]===s)&&(i=s.startsWith("moz-extension://"),(r=n.createElement("script")).textContent='!function(r,n,t,c,o,i){"use strict";var p=i[t],s=(o.search.split("mui=")[1]||"").split("&")[0];Object.defineProperty(i,t,{get:function(){var t=p;if(-1===t.indexOf("GMAIL_AT=")&&(t+="; GMAIL_AT="+s),-1===t.indexOf(r)){var i=(s+"__").split("__")[1].split("_")[0]||"0",e=(o.pathname.split("/mp/")[1]||"").split("/")[0];t+="; "+r+c+"#"+window.USER_EMAIL+":"+e+":"+i}return t.startsWith(n)||-1!==t.indexOf(" "+n)||(t+="; SID=1"),t}}),i.currentScript&&i.currentScript.remove()}("WML=","SID=","cookie",Date.now(),location,document);',function e(){var t;(a=n.documentElement)?(a.insertBefore(r,a.firstChild),(t=a.getAttribute("manifest"))&&l(t),t=-1!==o.search.indexOf("bm_mail_bigtop"),-1!==o.search.indexOf("__theme_dark__")&&(a.dataset.bmCsMailDarkmode="1"),t&&(a.dataset.bmCsMailHideStars="1")):setTimeout(e,.001)}(),d=!1,function e(){var t;o.hash.startsWith("#tl")&&(t=(t=n.querySelector('div[style*="translate3d"] > div:first-child'))&&"none"!==t.style.display,d!==t&&(d=t,window.parent.postMessage({bm_method:"mailSelectionState",bm_value:t},s))),setTimeout(e,100)}(),window.addEventListener("message",function(e){var t,o,n;e.origin===s&&(e.isTrusted||i)&&(e=(t=e.data||{}).bm_method,t=t.bm_value,"mailClickEle"===e&&(o=t[0],e=t[2],n=t[1]||0,e?(c(o,e),setTimeout(function(){c(o,n)})):c(o,n)))}),window.addEventListener("hashchange",function(){window.parent.postMessage({bm_method:"mailHashChange",bm_value:o.hash.replace("#","")},s)}),"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?u():window.addEventListener("DOMContentLoaded",u)))}();