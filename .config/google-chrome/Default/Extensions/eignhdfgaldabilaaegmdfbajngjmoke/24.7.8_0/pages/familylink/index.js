"use strict";cjce.registerTemplate("bm-p-familylink",function(e,n){var i=!cjBasics.wrif.supported,a="https://families.google.com",c=a+"/"+n.wizPath,l=c+"families/",t={home:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_01494","Family management"),newTabUrl:l,frameIcon:"home"},invite:{iconName:"__mdi:add_circle_outline",label:cjBasics.lang.i18n("cj_i18n_01495","Invite family member"),newTabUrl:l+"invite",frameIcon:"add_circle_outline"},parentaccesscode:{iconName:"__mdi:perm_device_information",label:cjBasics.lang.i18n("cj_i18n_01496","Parent access code"),newTabUrl:c+"familylink/parentaccesscode",frameIcon:"perm_device_information"},notificationsettings:{iconName:"__mdi:notifications",label:cjBasics.lang.i18n("cj_i18n_01497","Notification settings"),newTabUrl:l+"notificationsettings",frameIcon:"notifications"}},s=cjce.createElement("bm-ogb",{loading:!i,drawer:!i,serviceIcon:"family_link",serviceLabel:cjBasics.lang.i18n("cj_i18n_00897","Families"),pageLabel:i?cjBasics.lang.i18n("cj_i18n_01167","Links"):cjBasics.lang.i18n("cj_i18n_01492","Management"),bmApis:n,onNewTab:function(){o.cjceGetCleanUrl(a).then(function(e){n.openTab(e||l)})}});e.appendChild(s);c=s.cjceDrawerEl;function m(e,i){n.openTab(i.newTabUrl)}t=cjce.createElement("bm-navlist",{items:t,onClick:i?m:function(e,i){o.cjceSendFrameCommand({method:"bmCstClickDomElement",value:'#gb img[src*="icons/material/system/"][src*="'+i.frameIcon+'"]'},a)},onNewTab:m});if(i){i=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"});return i.appendChild(t),void e.appendChild(i)}c.appendChild(t);c=cjBasics.uniqueId.generate(),t=cjBasics.urlParams.attach(l,{bm_cid:"familylink",bm_iid:c,bm_wiz:"1",bm_cst:"1",hl:cjBasics.lang.current});cjBasics.webRequest.handleIframeHeaders([a+"/*bm_iid="+c+"*"],{disableOgs:a,handleFirefoxInject:!0});var o=cjce.createElement("bm-iframe",{shadow:!0,solid:"#fff",src:t,onLoad:function(){s.cjceSetLoading(!1)}});e.appendChild(o)});