"use strict";cjce.registerTemplate("bm-p-gaccount",function(c,a){var e=!cjBasics.wrif.supported,n="https://myaccount.google.com",i=n+"/";"0"!==a.account.authuser&&(i+="u/"+a.account.authuser+"/"),a.account.pageId&&(i+="b/"+a.account.pageId+"/");var t=cjce.createElement("bm-ogb",{drawer:!0,serviceIcon:"my_account",serviceLabel:"Google",pageLabel:cjBasics.lang.i18n("cj_i18n_01506","Account"),bmApis:a,onNewTab:function(){_.cjceGetCleanUrl(n).then(function(c){c=c||i;a.openTab(c)})}});c.appendChild(t);var s={aboutme:{iconName:"__mdi:cj_item",label:cjBasics.lang.i18n("cj_i18n_00161","About me"),shortcutId:"334"},myaccount:{iconName:"__mdi:cj_item",label:cjBasics.lang.i18n("cj_i18n_01506","Account"),shortcutId:"79"},myactivity:{iconName:"__mdi:cj_item",label:cjBasics.lang.i18n("cj_i18n_00689","My Activity"),shortcutId:"407",external:!0},adsettings:{iconName:"__mdi:cj_item",label:cjBasics.lang.i18n("cj_i18n_00745","Ads Settings"),shortcutId:"466",external:!0}},l=[{label:cjBasics.lang.i18n("cj_i18n_00291","Home"),iconName:"__mdi:account_circle",shortcutId:"79"},{label:cjBasics.lang.i18n("cj_i18n_01534","Personal info"),iconName:"__mdi:badge",shortcutId:"475"},{label:cjBasics.lang.i18n("cj_i18n_01775","Data & personalisation"),iconName:"__mdi:toggle_on",shortcutId:"476"},{label:cjBasics.lang.i18n("cj_i18n_01533","Security"),iconName:"__mdi:lock",shortcutId:"470"},{label:cjBasics.lang.i18n("cj_i18n_01535","People & sharing"),iconName:"__mdi:people",shortcutId:"864"},{label:cjBasics.lang.i18n("cj_i18n_01536","Payments & subscriptions"),iconName:"__mdi:payment",shortcutId:"865"}];function o(c,e){e=e.newTabUrl||cjgShortcuts.getUrl(e.shortcutId,a.account);a.openTab(e)}s=cjce.createElement("bm-navlist",{selectedId:"myaccount",items:s,onClick:function(c){a.pageManager.navigate(c)},onNewTab:o});if(t.cjceDrawerEl.appendChild(s),e){var r=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"}),m=cjce.createElement("bm-navlist",{items:l,onClick:o,onNewTab:o});return r.appendChild(m),void c.appendChild(r)}m=cjBasics.uniqueId.generate(),r=cjBasics.urlParams.attach(i,{bm_iid:m,bm_cid:"gaccount",bm_cst:"2",bm_wiz:"1",hl:cjBasics.lang.current});cjBasics.webRequest.handleIframeHeaders([n+"/*bm_iid="+m+"*"],{disableOgs:n,handleFirefoxInject:!0});var _=cjce.createElement("bm-iframe",{src:r,solid:"#fff",onMessage:function(c){var e=c.bm_method,c=c.bm_value;"bmCstOpenUrl"===e&&(c=cjBasics.cleanBmUrl(c),a.openTab(c))}});c.appendChild(_)});