"use strict";cjce.registerTemplate("bm-p-earth",function(n,c){var i="https://earth.google.com/web/",l="0"===c.account.authuser?null:c.account.authuser;function o(a,e){return cjBasics.urlParams.attach(i+(a||""),{authuser:l,beta:e?"1":null})}function s(a){a=o("search/"+encodeURIComponent(a)+"/");c.openTab(a)}!function(){var a=cjce.createElement("bm-ogb",{serviceIcon:"earth",serviceLabel:cjBasics.lang.i18n("cj_i18n_00471","Earth"),pageLabel:cjBasics.lang.i18n("cj_i18n_01167","Links"),searchbox:{onSubmit:s,submitInNewTab:!0},bmApis:c,onNewTab:function(){var a=o("");c.openTab(a)}});n.appendChild(a),c.setOnPageDisplayHandler(a.cjceSearchboxEl.select);var e=cjce.createElement("cjmd-container",{scrollable:!0,shadow:"thinOnScroll"});n.appendChild(e),a=[{iconName:"__mdi:home",label:cjBasics.lang.i18n("cj_i18n_00291","Home"),newTabUrl:o("")},{iconName:"__mdi:explore",label:cjBasics.lang.i18n("cj_i18n_01419","Voyager"),newTabUrl:o("data=CgQSAggB"),divider:!0},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_06283","Earth apps")},{iconName:"__mdi:bug_report",label:cjBasics.lang.i18n("cj_i18n_06239","Earth Beta"),newTabUrl:o("",{beta:"1"})},{iconName:"__mdi:earth",label:cjBasics.lang.i18n("cj_i18n_01420","Earth Pro on desktop"),newTabUrl:"https://www.google.com/earth/versions/#earth-pro",divider:!0},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_06284","Classic apps")},{iconName:"__mdi:map",label:cjBasics.lang.i18n("cj_i18n_00501","Sky"),newTabUrl:"https://www.google.com/sky/"},{iconName:"__mdi:map",label:cjBasics.lang.i18n("cj_i18n_00494","Moon"),newTabUrl:"https://www.google.com/moon/"},{iconName:"__mdi:map",label:cjBasics.lang.i18n("cj_i18n_00492","Mars"),newTabUrl:"https://www.google.com/mars/",divider:!0},{header:!0,color:!0,label:cjBasics.lang.i18n("cj_i18n_01539","Related apps")},{id:"maps",iconName:"__mdi:maps",label:cjBasics.lang.i18n("cj_i18n_00423","Maps"),shortcutId:"101"},{id:"mymaps",label:cjBasics.lang.i18n("cj_i18n_00410","My Maps"),iconName:"__mdi:file_map",shortcutId:"167"}],a=cjce.createElement("bm-navlist",{compact:!0,items:a,onClick:function(a,e){"maps"===a||"mymaps"===a?c.pageManager.navigate(a):c.openTab(e.newTabUrl)},onNewTab:function(a,e){e=e.newTabUrl||cjgShortcuts.getUrl(e.shortcutId,c.account);c.openTab(e)}}),e.appendChild(a)}()});