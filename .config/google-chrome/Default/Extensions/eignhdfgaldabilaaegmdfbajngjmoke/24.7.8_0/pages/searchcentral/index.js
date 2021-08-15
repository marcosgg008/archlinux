"use strict";cjce.registerTemplate("bm-p-searchcentral",function(c,n){var i,l,e=cjBasics.wrif.supported,a="https://search.google.com",t="/"+n.wizPath,r=a+t,s=cjBasics.lang.i18n("cj_i18n_01167","Links"),o=!1;function d(e){e=cjgShortcuts.getUrl(e,n.account);n.openTab(e)}function _(e){if(e){var a=e.toLowerCase(),c=b.querySelectorAll(".cjmd-item");for(t=0;t<c.length;t++){var n=c[t];n.hidden=-1===n.textContent.toLowerCase().indexOf(a)}var i=b.querySelectorAll(".cjmd-subheader");for(t=0;t<i.length;t++)i[t].hidden=!0}else for(var l=b.querySelectorAll(".cjmd-item[hidden],.cjmd-subheader[hidden]"),t=0;t<l.length;t++)l[t].hidden=!1}var m=cjce.createElement("bm-ogb",{loading:!1,serviceIcon:"search_central",serviceLabel:cjBasics.lang.i18n("cj_i18n_06738","Search Central"),pageLabel:s,searchbox:{color:!0,onInput:_,onClear:_,onSubmit:function(){b.querySelector(".cjmd-item:not([hidden])").click()}},bmApis:n,onBack:function(){o=!1,l.hidden=!0,l.src="about:blank",b.hidden=!1,m.cjceSetBackState(!1),h.hidden=!1,m.cjceSetPageLabel(s)},onNewTab:function(){o?l.cjceGetCleanUrl(a).then(function(e){e=e||cjBasics.cleanBmUrl(l.src);n.openTab(e)}):d("246")}});c.appendChild(m);var h=m.cjceSearchboxEl;n.setOnPageDisplayHandler(h.select);var b=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"});c.appendChild(b);e=[{iconName:"__mdi:chat_bubble",label:cjBasics.lang.i18n("cj_i18n_06747","Search Central Blog"),shortcutId:"1128",external:!0},{iconName:"__mdi:forum",label:cjBasics.lang.i18n("cj_i18n_06746","Help Community"),shortcutId:"1126",external:!0},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01504","Tools")},{newTabUrl:"search-console",id:"searchconsole",iconName:"__mdi:build",label:cjBasics.lang.i18n("cj_i18n_00444","Search Console")},{iconName:"__mdi:verified_user",label:cjBasics.lang.i18n("cj_i18n_06339","Site Verification"),shortcutId:"509",external:!0},{iconName:"__mdi:speed",label:cjBasics.lang.i18n("cj_i18n_00275","PageSpeed Insights"),shortcutId:"221",external:!0},{newTabUrl:"test/amp",iconName:"__mdi:offline_bolt",label:cjBasics.lang.i18n("cj_i18n_00288","AMP Test"),external:!e},{newTabUrl:"test/mobile-friendly",iconName:"__mdi:mobile_friendly",label:cjBasics.lang.i18n("cj_i18n_00287","Mobile-Friendly Test"),external:!e},{newTabUrl:"test/rich-results",iconName:"__mdi:search",label:cjBasics.lang.i18n("cj_i18n_01005","Rich Results Test"),external:!e},{iconName:"__mdi:build",label:cjBasics.lang.i18n("cj_i18n_00270","Structured Data Testing Tool"),shortcutId:"220",external:!0},{iconName:"__mdi:build",label:cjBasics.lang.i18n("cj_i18n_00271","Structured Data Markup Helper"),shortcutId:"223",external:!0},{iconName:"__mdi:email",label:cjBasics.lang.i18n("cj_i18n_00272","Email Markup Tester"),shortcutId:"224",external:!0},{iconName:"__mdi:visibility_off",label:cjBasics.lang.i18n("cj_i18n_06739","Remove outdated content"),shortcutId:"190",newTabUrl:"search-console/remove-outdated-content",external:!e},{iconName:"__mdi:image_search",label:cjBasics.lang.i18n("cj_i18n_00673","Preview Tool"),shortcutId:"378",toolUrl:a+"/appindex/preview/"+n.wizPath},{iconName:"__mdi:attach_money",label:cjBasics.lang.i18n("cj_i18n_00772","Report paid links"),shortcutId:"496",external:!0},{iconName:"__mdi:swap_horiz",label:cjBasics.lang.i18n("cj_i18n_00773","Transcoder"),shortcutId:"497",external:!0}];e=cjce.createElement("bm-navlist",{compact:!0,items:e,onClick:function(e,a){"searchconsole"===e?n.pageManager.navigate(e):(e=a,m.cjceSetLoading(!0),o=!0,m.cjceSetBackState(!0),h.hidden=!0,m.cjceSetPageLabel(e.label),i||(a=cjBasics.uniqueId.generate(),cjBasics.webRequest.handleIframeHeaders([r+"*bm_iid="+a+"*"],{handleFirefoxInject:!0}),i={bm_cid:"searchcentral",bm_cst:"1",bm_wiz:"1",bm_iid:a,hl:cjBasics.lang.current}),e=e.toolUrl||r+e.newTabUrl,e=cjBasics.urlParams.attach(e,i),l?l.src=e:((l=cjce.createElement("bm-iframe",{src:e,solid:"#fff",onLoad:function(){m.cjceSetLoading(!1)}})).hidden=!0,c.appendChild(l)),b.hidden=!0,l.hidden=!1)},onNewTab:function(e,a){a.newTabUrl?n.openTab(r+a.newTabUrl):d(a.shortcutId)}});b.appendChild(e)});