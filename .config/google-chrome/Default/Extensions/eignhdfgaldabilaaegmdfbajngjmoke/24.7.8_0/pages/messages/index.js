"use strict";cjce.registerTemplate("bm-p-messages",function(e,a){var n="https://messages.google.com",c=n+"/web/authentication",i="conversations",t=!1,s={conversations:{iconName:"__mdi:message",label:cjBasics.lang.i18n("cj_i18n_01487","Conversations"),newTabUrl:n+"/web/conversations"},archived:{iconName:"__mdi:archive",label:cjBasics.lang.i18n("cj_i18n_01740","Archived"),newTabUrl:n+"/web/conversations"},settings:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),newTabUrl:n+"/web/settings"},relatedHeader:{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},hangouts:{iconName:"__mdi:hangout",label:cjBasics.lang.i18n("cj_i18n_01337","Classic Hangouts"),shortcutId:"218"},chat:{iconName:"__mdi:chat_bubble_outline",label:cjBasics.lang.i18n("cj_i18n_00819","Chat"),shortcutId:"559",external:!a.servicesDatabase.chat},meet:{iconName:"__mdi:meet",label:cjBasics.lang.i18n("cj_i18n_00809","Meet"),shortcutId:"545",external:!a.servicesDatabase.meet}},o={authentication:cjBasics.lang.i18n("cj_i18n_01745","Connect phone"),newConversation:cjBasics.lang.i18n("cj_i18n_01741","New conversation"),newGroupConversation:cjBasics.lang.i18n("cj_i18n_01742","New group conversation"),conversation:cjBasics.lang.i18n("cj_i18n_01743","Conversation")},r=cjce.createElement("bm-ogb",{drawer:!0,withShadow:!0,serviceIcon:"messages",serviceLabel:cjBasics.lang.i18n("cj_i18n_01084","Messages"),pageLabel:cjBasics.lang.i18n("cj_i18n_01174","Loading"),bmApis:a,onNewTab:function(){h.cjceGetCleanUrl(n).then(function(e){a.openTab(e||c)})},onBack:function(){h.cjceSendFrameCommand({method:"bmCstNavigateBack"},n)}});function l(e){h.cjceSendFrameCommand({method:"bmCstClickDomElement",value:e},n)}function d(){l(".notifications-button")}e.appendChild(r);var m=cjce.createElement("cjmd-iconbutton",{label:cjBasics.lang.i18n("cj_i18n_06600","Unmute notifications"),iconName:"__mdi:notifications_off",onClick:d});m.hidden=!0,r.cjceAppendChild(m);var j=cjce.createElement("cjmd-iconbutton",{label:cjBasics.lang.i18n("cj_i18n_06599","Mute notifications"),iconName:"__mdi:notifications",onClick:d});j.hidden=!0,r.cjceAppendChild(j);var _=cjce.createElement("cjmd-iconbutton",{iconName:"__mdi:more_vert",onClick:function(){l(".conversation-menu-icon")}});_.hidden=!0,r.querySelector(".cjmd-appbar").appendChild(_);var g=cjBasics.uniqueId.generate();function b(e){var n="conversation"===e;j.hidden=!n||!t,m.hidden=!n||t,_.hidden=!n,r.cjceSetDropdownState("authentication"!==e)}cjBasics.webRequest.handleIframeHeaders([n+"/*bm_iid="+g+"*"],{handleSwCache:!0,handleFirefoxInject:!0});var h=cjce.createElement("bm-iframe",{isSelector:!0,src:cjBasics.urlParams.attach(c,{bm_iid:g,bm_cid:"messages",hl:cjBasics.lang.current,bm_cst:"1",bm_udm:a.darkMode?"1":"0"}),onMessage:function(e){var n=e.bm_method,a=e.bm_value;"messagesWebsiteView"===n?(b(i=a),e=(e=s[i])&&e.label||o[i],r.cjceSetPageLabel(e),u.cjceSelectedId=i):"messagesBackState"===n?r.cjceSetBackState(a):"messagesMutedState"===n?(t=a,j.hidden=!t,m.hidden=t):"messagesUpdateTitle"===n&&a&&(o.conversation=a,"conversation"===i&&r.cjceSetPageLabel(a))}});e.appendChild(h);e=r.cjceDrawerEl;r.querySelector("cjmd-navigator").style.transform="translateX(8px)";var u=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:i,items:s,onChange:function(e){if("chat"===e||"meet"===e||"hangouts"===e)return a.pageManager.navigate(e),void(u.cjceSelectedId=i);h.cjceSendFrameCommand({method:"messagesActivateMenuItem",value:e},n),"archived"===e&&(u.cjceSelectedId=e="conversations"),b(i=e)},onNewTab:function(e,n){n=n.newTabUrl||cjgShortcuts.getUrl(n.shortcutId,a.account);a.openTab(n)}});e.appendChild(u)});