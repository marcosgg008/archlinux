"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}cjce.registerTemplate("bm-p-translate",function(t,c){var r,i,o,s="object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))&&chrome&&chrome.runtime&&chrome||"object"===("undefined"==typeof browser?"undefined":_typeof(browser))&&browser||{},l=s.scripting||s.tabs,e=!cjBasics.wrif.supported,n="home",m="https://translate.google.com",d=m+"/u/"+c.account.authuser+"/",u=null;"0"!==c.account.authuser&&(u=c.account.authuser);var b=cjBasics.uniqueId.generate(),p={bm_cid:"translate",bm_iid:b,bm_cst:"2",bm_wiz:"1",bm_udm:c.darkMode?"1":null,hl:cjBasics.lang.current},j={home:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:""},history:{iconName:"__mdi:history",label:cjBasics.lang.i18n("cj_i18n_00155","History"),newTabUrl:"history"},saved:{iconName:"__mdi:star",label:cjBasics.lang.i18n("cj_i18n_01355","Saved"),newTabUrl:"saved"},contribute:{iconName:"__mdi:supervisor_account",label:cjBasics.lang.i18n("cj_i18n_00353","Contribute"),newTabUrl:"contribute",divider:!0},docupload:{iconName:"__mdi:drive_file",label:cjBasics.lang.i18n("cj_i18n_01777","Documents"),newTabUrl:"?op=docs",external:!e}};function f(e){c.openTab(d+e)}function h(e,a){f(a.newTabUrl)}if(e){var a=cjce.createElement("bm-ogb",{serviceIcon:"translate",serviceLabel:cjBasics.lang.i18n("cj_i18n_00440","Translate"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),bmApis:c,searchbox:{submitInNewTab:!0,onSubmit:function(e){f(cjBasics.urlParams.create({op:"translate",sl:"auto",tl:"auto",text:e}))}},onNewTab:function(){h(0,j.home)}});t.appendChild(a),c.setOnPageDisplayHandler(a.cjceSearchboxEl.select);e=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"}),a=cjce.createElement("bm-navlist",{items:j,onClick:h,onNewTab:h});return e.appendChild(a),void t.appendChild(e)}function _(e){var a=j[n=e];r.cjceSetBackState("home"!==e),r.cjceSetPageLabel(a.label),o.cjceSelectedId=e}function g(e){e&&"string"==typeof e&&i.cjceSendFrameCommand({method:"translatePrefillText",value:e},m)}function y(){i.cjceSendFrameCommand({method:"translateFocus"},m)}function v(e){var a=j[e];a.external?(c.openTab(a.newTabUrl),o.cjceSelectedId=n):(cjBasics.urlParams.attach(a.newTabUrl,p)&&i.cjceSendFrameCommand({method:"bmCstUpdateState",value:cjBasics.urlParams.attach(a.newTabUrl,p)+"#view="+e},m),_(e))}!function(){r=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:"translate",serviceLabel:cjBasics.lang.i18n("cj_i18n_00440","Translate"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),bmApis:c,onNewTab:function(){i.cjceSendFrameRequest({method:"translateSubmitAndGetState"},m).then(function(e){e=cjBasics.cleanBmUrl(m+e);c.openTab(e)})},onBack:function(){v("home")}}),t.appendChild(r);var e=r.cjceDrawerEl;o=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:"home",items:j,onChange:v,onNewTab:h}),e.appendChild(o);var a=cjBasics.urlParams.attach(d,p),e="https://consent.google.com";cjBasics.webRequest.handleIframeHeaders([m+"/*bm_iid="+b+"*",e+"/*bm_iid="+b+"*",e+"/*bm_iid%3D"+b+"*"],{disableOgs:m,handleSwCache:!0,handleFirefoxInject:!0});var n="popup"===c.environment&&l&&l.executeScript?new Promise(function(a){l.executeScript({file:"/pages/translate/cs-selection.js",runAt:"document_start"},function(e){s.runtime.lastError||!e?a(""):Array.isArray(e)?a(e[0]||""):a(e.toString())})}):Promise.resolve("");i=cjce.createElement("bm-iframe",{solid:!!c.darkMode||"#fff",src:a,shadow:!0,onMessage:function(e){var a=e.bm_method,e=e.bm_value;"translateUpdateView"===a?_(e):"translateOpenCommunity"===a?f("contribute"):"translateOpenUrlTranslator"===a&&(a=e,a=cjBasics.urlParams.attach(m+"/translate",{u:e,authuser:u}),c.openTab(a))},onLoad:function(){r.cjceSetLoading(!1),n.then(g),c.setOnPageDisplayHandler(y)}}),t.appendChild(i)}()});