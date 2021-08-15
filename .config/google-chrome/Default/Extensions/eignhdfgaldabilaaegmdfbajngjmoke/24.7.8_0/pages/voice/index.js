"use strict";cjce.registerTemplate("bm-p-voice",function(c,n){var i,t,s,l,r,a,o,e,d,m="https://voice.google.com",b=m+"/u/"+n.account.authuser+"/",p="https://www.google.com/voice/b/"+n.account.authuser+"/",u=cjBasics.uniqueId.generate(),j={bm_cid:"voicewithwebapp",bm_iid:u,bm_cst:"1",hl:cjBasics.lang.current},g=cjBasics.urlParams.attach(b,j),_="calls",h=_,v="#00897b",f=cjBasics.wrif.supported,w=!0,B={voicemail:{name:"__mdi:voicemail"},sms:{name:"__mdi:textsms"},missed:{name:"__mdi:call_missed",color:"#ea4335"},received:{name:"__mdi:call_received",color:"#34a853"},placed:{name:"__mdi:call_made",color:v}},C=["missed","received","voicemail","","","","","","","received","sms","sms"];function T(){i={calls:{iconName:"__mdi:call",label:cjBasics.lang.i18n("cj_i18n_01170","Calls"),testId:"sidenav-calls",newTabUrl:!0},messages:{iconName:"__mdi:message",label:cjBasics.lang.i18n("cj_i18n_01128","Messages"),testId:"sidenav-messages",newTabUrl:!0,external:!f},voicemail:{iconName:"__mdi:voicemail",label:cjBasics.lang.i18n("cj_i18n_01129","Voicemail"),testId:"sidenav-voicemail",newTabUrl:!0,external:!f,divider:!0},archive:{iconName:"__mdi:archive",label:cjBasics.lang.i18n("cj_i18n_00821","Archive"),testId:"sidenav-archive",newTabUrl:!0,external:!f},spam:{iconName:"__mdi:report",label:cjBasics.lang.i18n("cj_i18n_00306","Spam"),testId:"sidenav-spam",newTabUrl:!0,external:!f,divider:!0},credits:{iconName:"__mdi:account_balance_wallet",label:cjBasics.lang.i18n("cj_i18n_00398","Credits"),newTabUrl:!0,external:!f},settings:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),newTabUrl:!0,external:!f,testId:"settings-ogb-button"}}}function x(c){var e=cjce.createElement("cjmd-card",{withPadding:!0}),a=cjce.createElement("cjmd-title",{label:c.displayNumber});e.appendChild(a);a=C[c.type]||"placed",a=B[a],a=cjce.createElement("cjmd-icon",a);a.classList.add("bm-p-voice-callicon"),e.appendChild(a);a=document.createElement("p");a.textContent=c.displayStartDateTime,e.appendChild(a);a=cjce.createElement("cjmd-secondarytext",{label:c.relativeStartTime});e.appendChild(a);a=cjce.createElement("cjmd-button",{hairline:!0,color:v,label:cjBasics.lang.i18n("cj_i18n_00213","Call"),onClick:function(){var e,a;e={number:c.phoneNumber},a=e||{},e={authuser:n.account.authuser},void 0!==a.number?(e.hip=a.number,e.hpn=a.number):e.hip="",e=cjBasics.urlParams.attach("https://plus.google.com/hangouts/_/",e),n.openTab(e)}});return a.classList.add("bm-p-voice-callbutton"),e.appendChild(a),e}function S(){var n=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"transparentOnScroll"});function e(){var e=cjce.createElement("cjmd-emptystate",{color:v,label:cjBasics.lang.i18n("cj_i18n_00394","No recent calls"),iconName:"__mdi:call"});n.appendChild(e)}return cjce.applyTemplate(n,"bm-loading",{state:!0}),cjBasics.ajax(p+"inbox/recent/all/?hl="+cjBasics.lang.current,{fetchAs:"xml"}).then(function(e){e=e.querySelector("json").textContent.replace("<![CDATA[","").replace("]]>","");return JSON.parse(e).messages}).then(function(c){Object.keys(c).length<1?e():Object.keys(c).forEach(function(e){var a=c[e];a.isTrash||a.isSpam||(e=x(c[e]),n.appendChild(e))})},e).then(function(){cjce.applyTemplate(n,"bm-loading",{state:!1})}),n}function E(){var e=cjce.createElement("bm-ogb",{drawer:{color:v},serviceIcon:"voice",serviceLabel:cjBasics.lang.i18n("cj_i18n_00443","Voice"),pageLabel:f?cjBasics.lang.i18n("cj_i18n_00291","Home"):cjBasics.lang.i18n("cj_i18n_01170","Calls"),searchbox:{color:v,onSubmit:L,submitInNewTab:!0},bmApis:n,onNewTab:function(){f?k():n.openTab(b)}});c.appendChild(e);var a=e.cjceDrawerEl;n.setOnPageDisplayHandler(e.cjceSearchboxEl.select),t=cjce.createElement("bm-navlist",{isSelector:!0,items:i,selectedId:_,onChange:y,onNewTab:function(e){e="credits"===e?b+"settings#payments":b+e;n.openTab(e)}}),a.appendChild(t);a=e.cjceSearchboxEl;return n.setOnPageDisplayHandler(a.select),cjBasics.ajax(p+"request/user?hl="+cjBasics.lang.current,{fetchAs:"json"}).then(function(e){e=e&&e.formattedCredit;if(e)return e;throw Error()},function(){throw Error()}).then(function(e){var a;e&&1<e.length&&((a=t.cjceGetItemElement("credits")).classList.add("bm-p-voice-credits"),!f&&n.darkMode&&a.classList.add("bm-p-voice-credits--dark"),a.dataset.creditcount=e)},function(){}),e}function N(e){var a=e.bm_method,e=e.bm_value;"voicewithwebappLoaded"===a?w=!1:"voicewithwebappPageTitle"===a?l.cjceSetPageLabel(e):"voicewithwebappUpdateView"===a&&e&&(l.hidden=!(a="back"===e||"signup"===e),h=e,a||(_=e,t.cjceSelectedId=e,e=i[e].label,s.cjceSetPageLabel(e)))}function y(e){var a='[gv-test-id="'+i[e].testId+'"]';"credits"===e?(t.cjceSelectedId="settings",_="settings",a='gv-nav-item[ng-if*="obs_isCreditVisible"], gv-nav-item[ng-click*="onCreditClick"]'):"markallasread"===e?(t.cjceSelectedId=_,a='gv-nav-item[ng-click*="onMarkAllAsRead"]'):_=e,r.cjceSendFrameCommand({method:"bmCstClickDomElement",value:a},m)}function L(e){e=cjBasics.urlParams.attach(b+"search",{from:"[]",q:JSON.stringify(e.split(" "))});n.openTab(e)}function k(){r.cjceGetCleanUrl(m).then(function(e){e=e||b;n.openTab(e)})}function I(e){return w=!1,function(){c.textContent="";var e=cjce.createElement("bm-fulldialog",{bmApis:n,onNewTab:function(){n.openTab(b)},lockup:{label:cjBasics.lang.i18n("cj_i18n_00443","Voice")},iconName:"voice",message:cjBasics.lang.i18n("cj_i18n_01175","You are not signed up to Voice yet"),actionLabel:cjBasics.lang.i18n("cj_i18n_00337","Sign up"),action:function(){n.openTab(b+"signup")}});c.appendChild(e)}(),a&&a.removeListener(),o&&o.removeListener(),{cancel:!0}}T(),s=E(),c.appendChild(s),o=cjBasics.webRequest.addListener("onBeforeRedirect",I,{types:["xmlhttprequest"],urls:[p+"*"]}),f&&(a=cjBasics.webRequest.addListener("onBeforeRequest",I,{types:["sub_frame"],urls:[b+"about"]},["blocking"])),f?(f=!1,(d=cjce.createElement("bm-ogb",{displayBack:!0,floating:!0,serviceLabel:cjBasics.lang.i18n("cj_i18n_00443","Voice"),pageLabel:cjBasics.lang.i18n("cj_i18n_01174","Loading")+"...",searchbox:{color:v,onSubmit:L,submitInNewTab:!0},bmApis:n,onNewTab:k,onBack:function(){y(_),d.hidden=!0,"signup"===h&&(r.src="about:blank",setTimeout(function(){r.src=g}))}})).hidden=!0,l=d,c.appendChild(l),cjBasics.webRequest.handleIframeHeaders([m+"/*bm_iid="+u+"*"],{handleSwCache:!0,useMobileUserAgent:!0}),cjBasics.webRequest.addListener("onBeforeRedirect",function(e){e=e.redirectUrl;-1===e.indexOf("bm_iid=")&&(r.src=cjBasics.urlParams.attach(e,j))},{types:["sub_frame"],urls:[m+"/*bm_iid="+u+"*"]}),r=cjce.createElement("bm-iframe",{src:g,solid:"#fff",shadow:!0,onMessage:N}),c.appendChild(r),setTimeout(function(){var e;w&&(f=!1,T(),c.textContent="",s=E(),c.appendChild(s),e=S(),c.appendChild(e))},3e3)):(e=S(),c.appendChild(e))});