"use strict";cjce.registerTemplate("bm-p-studio",function(a,e){function i(a){e.openTab("https://www.google.com/doubleclick/studio/"+a)}function n(a,e){i(e.newTabUrl)}var c=cjce.createElement("bm-ogb",{serviceIcon:"studio",serviceLabel:cjBasics.lang.i18n("cj_i18n_01098","Studio"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),bmApis:e,aboveTopDrawer:!0,onNewTab:function(){i("#")}});a.appendChild(c),cjce.applyTemplate(c,"append-g-marketing-toggle",{cjgShortcuts:cjgShortcuts,bmApis:e,selectedId:"studio"});c=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"});a.appendChild(c);a=[{label:cjBasics.lang.i18n("cj_i18n_01377","Dashboard"),iconName:"__mdi:dashboard",newTabUrl:"#",divider:!0},{header:!0,label:cjBasics.lang.i18n("cj_i18n_01378","Creatives")},{label:cjBasics.lang.i18n("cj_i18n_01379","Advertisers"),iconName:"__mdi:people",newTabUrl:"#advertisers:"},{label:cjBasics.lang.i18n("cj_i18n_01380","Campaigns"),iconName:"__mdi:campaign_show",newTabUrl:"#campaigns:"},{label:cjBasics.lang.i18n("cj_i18n_01378","Creatives"),iconName:"__mdi:express_campaign",newTabUrl:"#creatives:",divider:!0},{label:cjBasics.lang.i18n("cj_i18n_01382","Assets"),iconName:"__mdi:dashboard",newTabUrl:"#assets:"},{label:cjBasics.lang.i18n("cj_i18n_01383","Layouts"),iconName:"__mdi:express_campaign",newTabUrl:"#layouts:"},{label:cjBasics.lang.i18n("cj_i18n_01384","Quality Assurance"),iconName:"__mdi:thumb_up",newTabUrl:"#qa/campaigns:"},{label:cjBasics.lang.i18n("cj_i18n_01385","Admin"),iconName:"__mdi:settings",newTabUrl:"#admin/account:"},{label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),iconName:"__mdi:settings",newTabUrl:"#profile:"}],a=cjce.createElement("bm-navlist",{items:a,onClick:n,onNewTab:n});c.appendChild(a)});