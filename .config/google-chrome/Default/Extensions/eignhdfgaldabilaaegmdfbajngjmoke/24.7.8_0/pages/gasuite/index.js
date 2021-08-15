"use strict";cjce.registerTemplate("bm-p-gasuite",function(e,n){var a="recentlyviewed",i=n.instanceParameters.productId||"gasuite",c=cjBasics.lang.i18n("cj_i18n_01107","Recently viewed"),t=!cjBasics.wrif.supported,l="0"===n.account.authuser?null:n.account.authuser,r=l?"?authuser="+l:"",s="https://marketingplatform.google.com",o="https://tagmanager.google.com/"+r,m="https://optimize.google.com/optimize/home/"+r,_="https://analytics.google.com/analytics/",g=_+"web/"+r,d={gasuite:{serviceIcon:"marketing_platform",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:s+"/home"+r},analytics:{serviceIcon:"analytics",label:cjBasics.lang.i18n("cj_i18n_00186","Analytics"),newTabUrl:g+"#/report-home/"},tagmanager:{serviceIcon:"tag_manager",label:cjBasics.lang.i18n("cj_i18n_00513","Tag Manager"),newTabUrl:o},optimize:{serviceIcon:"optimize",label:cjBasics.lang.i18n("cj_i18n_00664","Optimize"),newTabUrl:m},datastudio:{serviceIcon:"data_studio",label:cjBasics.lang.i18n("cj_i18n_00333","Data Studio"),shortcutId:"366"},surveys:{serviceIcon:"surveys",label:cjBasics.lang.i18n("cj_i18n_00467","Surveys"),shortcutId:"37"},attribution:{serviceIcon:"attribution",label:cjBasics.lang.i18n("cj_i18n_00666","Attribution"),shortcutId:"369"},audiencecenter:{serviceIcon:"audience_center",label:cjBasics.lang.i18n("cj_i18n_00665","Audience Center"),shortcutId:"368"}},b=d[i]||d.gasuite;var u,j,p,h,w,T=(u={iconName:"__mdi:person",label:cjBasics.lang.i18n("cj_i18n_02169","Certified partners"),newTabUrl:s+"/about/partners/find-a-partner",external:!t},"gasuite"===i?{gasuite:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:s+"/home"+r,external:!t},recentlyviewed:{iconName:"__mdi:history",label:c,newTabUrl:s+"/home/recents"+r},integrationcenter:{iconName:"__mdi:swap_horiz",label:cjBasics.lang.i18n("cj_i18n_01105","Integration Center"),newTabUrl:s+"/home/integrations"+r,external:!t},administration:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_01106","Administration"),newTabUrl:s+"/home/orgs"+r,external:!t},partners:u}:"tagmanager"===i?{home:{iconName:"__mdi:people",label:cjBasics.lang.i18n("cj_i18n_02168","Accounts"),newTabUrl:o+"#/home",external:!t},recentlyviewed:{iconName:"__mdi:history",label:c,newTabUrl:o+"#/home"},admin:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_01385","Admin"),newTabUrl:o+"#/admin/",external:!t},usersettings:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),newTabUrl:o+"#/admin/user/settings",external:!t},partners:u}:"optimize"===i?{home:{iconName:"__mdi:people",label:cjBasics.lang.i18n("cj_i18n_02168","Accounts"),newTabUrl:m+"#/accounts",external:!t},recentlyviewed:{iconName:"__mdi:history",label:c,newTabUrl:m+"#/accounts"},settings:{iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),newTabUrl:m+"#/user/settings",external:!t},resourcehub:{iconName:"__mdi:developer_board",label:cjBasics.lang.i18n("cj_i18n_02167","Resource hub"),newTabUrl:"https://support.google.com/optimize"+r,external:!t},userforum:{iconName:"__mdi:forum",label:cjBasics.lang.i18n("cj_i18n_02166","User forum"),newTabUrl:"https://support.google.com/optimize/community"+r,external:!t},partners:u}:"analytics"===i?{home:{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:g+"#/report-home/",external:!t},recentlyviewed:{iconName:"__mdi:history",label:c,newTabUrl:g},gallery:{iconName:"__mdi:developer_board",label:cjBasics.lang.i18n("cj_i18n_02170","Solutions gallery"),newTabUrl:_+"gallery/",external:!t},attribution:{iconName:"__mdi:swap_calls",label:cjBasics.lang.i18n("cj_i18n_00666","Attribution"),newTabUrl:_+"attribution/",external:!t},partners:u}:null),B=cjBasics.uniqueId.generate(),v=cjBasics.urlParams.attach(s+"/home/recents",{bm_cid:"gasuite",bm_wiz:"1",bm_iid:B,bm_pid:i,bm_udm:n.darkMode?"1":null,authuser:l,hl:cjBasics.lang.current});function U(e,a){a=a.newTabUrl||cjgShortcuts.getUrl(a.shortcutId,n.account);n.openTab(a)}cjBasics.webRequest.handleIframeHeaders([s+"/*bm_iid="+B+"*"],{handleFirefoxInject:!0}),w=cjce.createElement("bm-ogb",{loading:!0,serviceIcon:b.serviceIcon,serviceLabel:b.label,pageLabel:t?cjBasics.lang.i18n("cj_i18n_01167","Links"):c,drawer:!t&&T?{}:null,aboveTopDrawer:!0,bmApis:n,onNewTab:function(){var e=T&&T[a]||d[i],e=e.newTabUrl||cjgShortcuts.getUrl(e.shortcutId,n.account);n.openTab(e)}}),e.appendChild(w),cjce.applyTemplate(w,"append-g-marketing-toggle",{cjgShortcuts:cjgShortcuts,bmApis:n,selectedId:i}),T&&(j=cjce.createElement("bm-navlist",{selectedId:t?null:a,items:T,onClick:function(e,a){!t&&"recentlyviewed"===e||U(0,a)},onNewTab:U}),t?((p=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"})).appendChild(j),e.appendChild(p)):w.cjceDrawerEl.appendChild(j)),"tagmanager"===i&&(h=cjce.createElement("gmd-fab",{label:cjBasics.lang.i18n("cj_i18n_02171","Create account"),onClick:function(){n.openTab(o+"#/admin/accounts/create")}}),e.appendChild(h)),t||(h=cjce.createElement("bm-iframe",{src:v,shadow:!0,solid:!0,onLoad:function(){w.cjceSetLoading(!1)}}),e.appendChild(h))});