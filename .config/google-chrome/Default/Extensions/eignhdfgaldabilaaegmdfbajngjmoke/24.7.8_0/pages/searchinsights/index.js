"use strict";cjce.registerTemplate("bm-p-searchinsights",function(e,a){var c="https://search.google.com",n="/search-console/insights",s=c+n,i=a.account.authuser;"0"!==i&&(s+="/u/"+i);var r=cjBasics.uniqueId.generate(),t={bm_cid:"searchinsights",bm_cst:"1",bm_iid:r,hl:cjBasics.lang.current},l={home:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),shortcutId:"125"},relatedHeader:{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},searchconsole:{iconName:"__mdi:cj_item",label:cjBasics.lang.i18n("cj_i18n_00444","Search Console"),shortcutId:"731"},searchcentral:{iconName:"__mdi:cj_item",label:cjBasics.lang.i18n("cj_i18n_06738","Search Central"),shortcutId:"246"}},i=cjBasics.urlParams.attach(s,t);cjBasics.webRequest.handleIframeHeaders([c+"/*bm_iid="+r+"*"],{disableOgs:c,handleSwCache:!0,handleFirefoxInject:!0}),cjBasics.webRequest.addListener("onBeforeRequest",function(e){if(-1===e.url.indexOf("bm_cid=searchinsights"))return{redirectUrl:cjBasics.urlParams.attach(e.url,t)}},{urls:[c+n+"*"],types:["sub_frame"]},["blocking"]);var o=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:"search_console",serviceLabel:cjBasics.lang.i18n("cj_i18n_07011","Search Console Insights"),pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),bmApis:a,onNewTab:function(){d.cjceGetCleanUrl(c).then(function(e){e=e||s;a.openTab(e)})}}),l=cjce.createElement("bm-navlist",{selectedId:"home",items:l,onClick:function(e){a.pageManager.navigate(e)},onNewTab:function(e,c){c=c.newTabUrl||cjgShortcuts.getUrl(c.shortcutId,a.account);a.openTab(c)}});o.cjceDrawerEl.appendChild(l),e.appendChild(o);var d=cjce.createElement("bm-iframe",{solid:"#fff",shadow:!0,src:i,onLoad:function(){o.cjceSetLoading(!1)}});e.appendChild(d)});