"use strict";cjce.registerTemplate("bm-p-one",function(e,c){var n,i,a,s,t="https://one.google.com",o="/"+c.wizPath,l=t+o,r=l+"getupdates",d=cjBasics.uniqueId.generate(),m={bm_cid:"one",bm_iid:d,bm_wiz:"1",bm_cst:"1",hl:cjBasics.lang.current};function b(e,a){c.openTab(o+e)}cjBasics.webRequest.handleIframeHeaders([t+"/*bm_iid="+d+"*"],{handleFirefoxInject:!0}),i=cjce.createElement("bm-ogb",{loading:!0,drawer:!0,serviceIcon:"one",pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),serviceLabel:cjBasics.lang.i18n("cj_i18n_01165","Google One"),bmApis:c,onNewTab:function(){c.openTab(l)}}),a=[{id:"home",newTabUrl:!0,iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home")},{id:"storage",newTabUrl:!0,iconName:"__mdi:cloud",label:cjBasics.lang.i18n("cj_i18n_06572","Storage")},{id:"storage/management",newTabUrl:!0,iconName:"__mdi:cloud_done",label:cjBasics.lang.i18n("cj_i18n_06895","Storage manager")},{id:"benefits",newTabUrl:!0,iconName:"__mdi:star_border",label:cjBasics.lang.i18n("cj_i18n_06896","Benefits")},{id:"support",newTabUrl:!0,iconName:"__mdi:favorite_border",label:cjBasics.lang.i18n("cj_i18n_01140","Support")},{id:"plans",newTabUrl:!0,iconName:"__mdi:add_circle_outline",label:cjBasics.lang.i18n("cj_i18n_06897","Plans"),divider:!0},{id:"settings",newTabUrl:!0,iconName:"__mdi:settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings")}],s=i.cjceDrawerEl,a=cjce.createElement("bm-navlist",{isSelector:!0,selectedId:"home",items:a,onChange:function(e,a){i.cjceSetPageLabel(a.label),n.cjceSendFrameCommand({method:"bmCstUpdateState",value:cjBasics.urlParams.attach(o+e,m)})},onNewTab:b}),s.appendChild(a),e.appendChild(i),cjBasics.webRequest.catchAndStop([r],function(){n.src=cjBasics.urlParams.attach(r,m)},!0),cjBasics.webRequest.catchAndStop(["https://play.google.com/store/epurchase*com.google.android.apps.subscriptions.red*parent="+t+"*"],function(e){c.openTab(e)},!0),n=cjce.createElement("bm-iframe",{solid:"#fff",shadow:!0,src:cjBasics.urlParams.attach(l,m),onLoad:function(){i.cjceSetLoading(!1)}}),e.appendChild(n)});