"use strict";cjce.registerTemplate("bm-p-groupswithlinks",function(e,a){var c="https://groups.google.com",n=c+"/"+a.wizPath,i=c+"/?web=";"0"!==a.account.authuser&&(i+="&authuser="+a.account.authuser);var s=cjce.createElement("bm-ogb",{serviceIcon:"groups",pageLabel:cjBasics.lang.i18n("cj_i18n_00291","Home"),serviceLabel:cjBasics.lang.i18n("cj_i18n_00418","Groups"),bmApis:a,onNewTab:function(){a.openTab(i)},searchbox:{onSubmit:function(e){o("search?q="+encodeURIComponent(e))},submitInNewTab:!0}});e.appendChild(s),a.setOnPageDisplayHandler(s.cjceSearchboxEl.select);c=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"}),s={"my-groups":{label:cjBasics.lang.i18n("cj_i18n_00388","My groups"),iconName:"__mdi:people",newTabUrl:!0},recent:{label:cjBasics.lang.i18n("cj_i18n_06607","Recent groups"),iconName:"__mdi:access_time",newTabUrl:!0},"starred-conversations":{label:cjBasics.lang.i18n("cj_i18n_06827","Starred conversations"),iconName:"__mdi:star_outline",newTabUrl:!0,divider:!0},search:{label:cjBasics.lang.i18n("cj_i18n_00085","Search"),iconName:"__mdi:search",newTabUrl:!0},"search-groups":{label:cjBasics.lang.i18n("cj_i18n_todo","Search groups"),iconName:"__mdi:search",newTabUrl:!0},"search-conversations":{label:cjBasics.lang.i18n("cj_i18n_todo","Search conversations"),iconName:"__mdi:search",newTabUrl:!0}};function o(e){a.openTab(n+(e||""))}function r(e,a){o("home"===e?"my-groups":e)}s=cjce.createElement("bm-navlist",{items:s,onClick:r,onNewTab:r});c.appendChild(s),e.appendChild(c)});