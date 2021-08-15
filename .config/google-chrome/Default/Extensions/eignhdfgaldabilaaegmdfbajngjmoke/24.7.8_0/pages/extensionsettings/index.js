"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}cjce.registerTemplate("bm-p-extensionsettings",function(e,t){var n,a,i="object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))&&chrome&&chrome.runtime&&chrome||"object"===("undefined"==typeof browser?"undefined":_typeof(browser))&&browser||{},c="options"===t.environment;function s(){setTimeout(function(){window.location.reload()})}function o(){i.runtime.sendMessage({reloadAllInstances:!0},s),setTimeout(s,200)}function l(){cjce.applyTemplate(e,"bm-loading"),setTimeout(o,2e3)}function r(n){return browserStorage.local.get().then(function(e){return Object.keys(e).filter(function(e){return-1!==e.indexOf("bm_cache_")||n&&e.startsWith("bm_pref_")})}).then(browserStorage.local.remove)}function u(e){var n=document.createElement("p");return n.classList.add("cjmd-secondarytext"),n.textContent=e,n}function m(e){return cjce.createElement("cjmd-title",{label:e})}function g(n){return cjce.createElement("cjmd-button",{color:n.color||!0,label:n.label,onClick:n.onClick||function(){var e=n.newTabUrl||cjgShortcuts.getUrl(n.shortcutId,t.account);t.openTab(e)}})}function d(e){var n="https://apps.jeurissen.co/black-menu-for-google/contact#"+e+"|",e=["Browser: "+cjBasics.navigator.getEnvironment(),"Extension version: "+i.runtime.getManifest().version,"",""];n+=encodeURIComponent(e.join("\n")),t.openTab(n)}cjBasics.navigator.firefox&&c&&(e.classList.add("bm-p-extensionsettings--firefox"),cjBasics.navigator.firefoxMobile&&document.documentElement.classList.add("bm-p-extensionsettings__ff-android")),c||e.classList.add("bm-p-extensionsettings--sidebar"),c||(a=cjce.createElement("bm-ogb",{serviceIcon:"black_menu_for_google",pageLabel:cjBasics.lang.i18n("cj_i18n_01581","Extension settings")}),e.appendChild(a),n=cjce.createElement("cjmd-appbar",{secondary:!0}),a=cjce.createElement("cjmd-tabs",{items:{settings:cjBasics.lang.i18n("cj_i18n_00291","Home"),notifications:cjBasics.lang.i18n("cj_i18n_00296","Notifications"),help:cjBasics.lang.i18n("cj_i18n_01583","Support & Contribute")},onChange:function(e){p.dataset.view=e},selectedId:"settings"}),n.appendChild(a),e.appendChild(n));var p=cjce.createElement("cjmd-container",{scrollable:!0,shadow:!c&&"thinOnScroll"});function _(e){var n=cjce.createElement("cjmd-card",{withPadding:!0});if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&n.appendChild(e[t]);return n}p.dataset.view="settings",e.appendChild(p);var j=[{label:cjBasics.lang.i18n("cj_i18n_00416","Gmail"),iconName:"gmail",newTabUrl:"https://support.google.com/mail/answer/1075549"},{label:cjBasics.lang.i18n("cj_i18n_00302","Calendar"),iconName:"calendar",newTabUrl:"https://support.google.com/calendar/answer/37242"},{label:cjBasics.lang.i18n("cj_i18n_00390","Drive"),iconName:"drive",newTabUrl:"https://support.google.com/drive/answer/6318501"},{label:cjBasics.lang.i18n("cj_i18n_00819","Chat"),iconName:"chat",newTabUrl:"https://support.google.com/hangoutschat/answer/7655718"},{label:cjBasics.lang.i18n("cj_i18n_00809","Meet"),iconName:"meet",newTabUrl:"https://support.google.com/meet/answer/7353922"},{label:cjBasics.lang.i18n("cj_i18n_00420","Hangouts"),iconName:"hangouts",newTabUrl:"https://support.google.com/hangouts/answer/3111919"},{label:cjBasics.lang.i18n("cj_i18n_00443","Voice"),iconName:"voice",newTabUrl:"https://support.google.com/voice/answer/168521"},{label:cjBasics.lang.i18n("cj_i18n_00423","Maps"),iconName:"maps",newTabUrl:"https://support.google.com/maps/answer/6149565"},{label:cjBasics.lang.i18n("cj_i18n_00445","YouTube"),iconName:"youtube",newTabUrl:"https://support.google.com/youtube/answer/3382248"},{label:cjBasics.lang.i18n("cj_i18n_00730","Duo"),iconName:"duo",newTabUrl:"https://support.google.com/duo/answer/7496896"},{label:cjBasics.lang.i18n("cj_i18n_00554","My Business"),iconName:"my_business",newTabUrl:"https://support.google.com/business/answer/7198436"},{label:cjBasics.lang.i18n("cj_i18n_00305","Classroom"),iconName:"classroom",newTabUrl:"https://support.google.com/edu/classroom/answer/6141557"}].sort(function(e,n){return e.label>n.label?1:-1});var b,h=[{id:"settings",label:cjBasics.lang.i18n("cj_i18n_00298","Settings"),items:[_([m(cjBasics.lang.i18n("cj_i18n_01585","Customize menu")),u(cjBasics.lang.i18n("cj_i18n_01584","To add pages to the black menu bar, click on 'customize' at the bottom of the menu bar and click or drag the services you want to add. If you want to remove services, you can drag/drop them to the left side of the extension or click the remove icon.")),c?null:g({label:cjBasics.lang.i18n("cj_i18n_01586","Start customizing"),onClick:function(){t.pageManager.navigate("customize")}})]),_([m(cjBasics.lang.i18n("cj_i18n_01587","Theme")),function(){var a,n=["auto","light","classic","dark"],i={auto:cjBasics.lang.i18n("cj_i18n_01792","Auto"),classic:cjBasics.lang.i18n("cj_i18n_01611","Classic"),dark:cjBasics.lang.i18n("cj_i18n_01612","Dark"),light:cjBasics.lang.i18n("cj_i18n_01613","Light")},c=document.createElement("div");c.className="bm-p-extensionsettings-theme";var t=n.map(function(e){var n=document.createElement("div");n.className="bm-p-extensionsettings-theme__item","auto"===e&&(n.title=cjBasics.lang.i18n("cj_i18n_01793","Automatically adapt to Operating System preference")),n.addEventListener("click",function(){n!==a&&(a.classList.remove("bm-p-extensionsettings-theme__item--selected"),n.classList.add("bm-p-extensionsettings-theme__item--selected"),browserStorage.sync.set({bm_pref__main__theme:e}).then(o))}),c.appendChild(n);var t=document.createElement("img");t.className="bm-p-extensionsettings-theme__icon",t.src="/pages/extensionsettings/"+e+".svg",n.appendChild(t);t=cjce.createElement("cjmd-secondarytext",{label:i[e]});return t.classList.add("bm-p-extensionsettings-theme__title"),n.appendChild(t),n});return browserStorage.sync.getItem("bm_pref__main__theme").then(function(e){e=n.indexOf(e);(a=t[e=e<0?0:e]).classList.add("bm-p-extensionsettings-theme__item--selected")}),c}()]),_([m(cjBasics.lang.i18n("cj_i18n_04163","Language")),function(){var e="bm_pref__main__language",n=document.createElement("div"),t=document.createElement("label");n.appendChild(t);var a=document.createElement("input");a.type="checkbox",t.appendChild(a),browserStorage.sync.getItem(e).then(function(e){a.checked="en"===e}),a.addEventListener("click",function(){(a.checked?browserStorage.sync.setItem(e,"en"):browserStorage.sync.remove(e)).then(o)});var i=cjBasics.lang.i18n("cj_i18n_06432","Use English instead of the browser language"),i=document.createTextNode(i);return t.appendChild(i),n.appendChild(t),n}(),document.createElement("br"),u(cjBasics.lang.i18n("cj_i18n_01604","We are in desperate need for community translators. We would highly appreciate it if you could help us out.")),g({label:cjBasics.lang.i18n("cj_i18n_01605","Help with translations"),newTabUrl:"https://apps.jeurissen.co/black-menu-for-google/translate"})]),_([m(cjBasics.lang.i18n("cj_i18n_01594","Granted permissions")),u(cjBasics.lang.i18n("cj_i18n_01595","For some services in Black Menu for Google, we ask additional permissions for the functioning of certain features.")),g({label:cjBasics.lang.i18n("cj_i18n_01596","Revoke all permissions"),onClick:function(){cjgApis.auth.revokePermissions(t.account).then(l,l)}})]),_([m(cjBasics.lang.i18n("cj_i18n_01950","Reset settings")),g({label:cjBasics.lang.i18n("cj_i18n_01592","Remove all cache"),onClick:function(){r().then(o)}}),g({label:cjBasics.lang.i18n("cj_i18n_01590","Reset settings to default"),color:"#ea4335",onClick:function(){Promise.all([browserStorage.sync.clear(),r(!0)]).then(o)}})])]},{id:"notifications",label:cjBasics.lang.i18n("cj_i18n_00296","Notifications"),items:[_([m(cjBasics.lang.i18n("cj_i18n_06431","Desktop notifications")),u(cjBasics.lang.i18n("cj_i18n_01589","To enable or configure desktop notifications, select the product and follow the instructions.")),((b=cjce.createElement("bm-shortcutlist",{onNewTab:function(e){e=cjBasics.urlParams.attach(e,{co:"GENIE.Platform=Desktop",authuser:"0"===t.account.authuser?null:t.account.authuser});t.openTab(e)},items:j})).classList.add("bm-p-extensionsettings-applist"),b)])]},{id:"help",label:cjBasics.lang.i18n("cj_i18n_01583","Support & Contribute"),items:[_([m(cjBasics.lang.i18n("cj_i18n_00349","Feedback & Support")),u(cjBasics.lang.i18n("cj_i18n_01602","If you have any questions, feature requests or bug reports, let us know. We can't guarantee all messages get an answer due to the vast amount of messages we get.")),g({label:cjBasics.lang.i18n("cj_i18n_00350","Ask a question"),onClick:function(){d("question")}}),g({label:cjBasics.lang.i18n("cj_i18n_00352","Request a feature"),onClick:function(){d("feature_request")},color:"#34a853"}),g({label:cjBasics.lang.i18n("cj_i18n_00351","Report a bug"),onClick:function(){d("bug_report")},color:"#ea4335"})]),_([m(cjBasics.lang.i18n("cj_i18n_01603","Translations")),u(cjBasics.lang.i18n("cj_i18n_01604","We are in desperate need for community translators. We would highly appreciate it if you could help us out.")),g({label:cjBasics.lang.i18n("cj_i18n_01605","Help with translations"),newTabUrl:"https://apps.jeurissen.co/black-menu-for-google/translate"})]),_([m(cjBasics.lang.i18n("cj_i18n_00354","Donate")),u(cjBasics.lang.i18n("cj_i18n_01606","If you like the extension - and we sincerely hope you do - consider donating. It will help the development process and make it easier for us to improve it for everyone.")),g({label:cjBasics.lang.i18n("cj_i18n_00354","Donate"),newTabUrl:"https://apps.jeurissen.co/black-menu-for-google/donate"})])]}];t.debugMode&&h[0].items.push(_([m(cjBasics.lang.i18n("cj_i18n_06601","Extension updates")),function(){var n="bm_pref__main__notificationschangelog",e=document.createElement("div"),t=document.createElement("label");e.appendChild(t);var a=document.createElement("input");a.type="checkbox",t.appendChild(a),browserStorage.sync.getItem(n).then(function(e){a.checked=e}),a.addEventListener("click",function(){var e=a.checked;browserStorage.sync.setItem(n,e).then(o)});var i=cjBasics.lang.i18n("cj_i18n_06603","Display a notification after an update instead of a full page changelog page"),i=document.createTextNode(i);return t.appendChild(i),e.appendChild(t),e}(),g({label:cjBasics.lang.i18n("cj_i18n_06602","Simulate extension update"),onClick:function(){browserStorage.local.setItem("cj_landing_versionnumber","0.0.1"),i.runtime.reload()}})]));for(var f=0;f<h.length;f++)!function(n){var e;c&&((e=cjce.createElement("cjmd-title",{label:h[n].label})).classList.add("bm-p-extensionsettings-sectiontitle"),p.appendChild(e)),h[n].items.forEach(function(e){e.dataset.id=h[n].id,p.appendChild(e)})}(f)});