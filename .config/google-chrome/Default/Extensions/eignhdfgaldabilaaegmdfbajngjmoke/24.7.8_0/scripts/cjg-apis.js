"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var cjgApis=function(){var a="undefined"!=typeof globalThis&&globalThis||window,l="object"===("undefined"==typeof chrome?"undefined":_typeof(chrome))&&chrome&&chrome.runtime&&chrome||"object"===("undefined"==typeof browser?"undefined":_typeof(browser))&&browser||{},r=l.runtime.getURL("PATH/").replace("/PATH/",""),h="object"===_typeof(l.i18n)&&"function"==typeof l.i18n.getMessage&&l.i18n.getMessage("@@extension_id")||r.split("://")[1]||"",g=a.atob,f=g("NDk0MDg2MDMwODUxLTkzdmplNzc4a29ncjlkbmZxMmhobGkyZTkxOHA0aGhhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t"),n=r.startsWith("safari-web-extension://"),p="https://www.google.com",d="https://accounts.google.com",t="https://oauth2.googleapis.com";function m(r,e,t){var o;cjBasics.navigator.firefox&&-1!==r.indexOf("SAPISID=")&&(o=cjBasics.webRequest.addListener("onBeforeSendHeaders",function(e){o.removeListener();for(var t=e.requestHeaders,n=0;n<t.length;n++)if("cookie"===t[n].name.toLowerCase())return;return cjgApis.session.hasContentBlocking=!0,t.push({name:"Cookie",value:r}),{requestHeaders:t}},{urls:[e],types:[t?"sub_frame":"xmlhttprequest"]},["blocking","requestHeaders"]))}function v(e){return cjBasics.navigator.firefox?new Promise(function(t){l.cookies.getAll({url:e},function(e){e=e.map(function(e){return e.name+"="+e.value}).join("; ");t(e)})}):Promise.resolve("")}var e,j,s,i,o=(e=cjBasics.webRequest.getTabId(),{create:function(n,r,o){e.then(function(e){var t=-1===e||-1!==a.location.search.indexOf("environment=popup");l.runtime.sendMessage({createNewPopup:{requestUrl:n,redirectUrl:r,method:o,topPosition:(e=(e=t)&&a.screenTop)?e:0<(e=(a.height-600)/2)?Math.round(e):void 0,leftPosition:0<(t=(t=t)&&a.screenLeft)?t:0<(t=(a.width-600)/2)?Math.round(t):void 0}})})}}),c=(j="https://g.carlosjeurissen.com/webext-auth",s={},i={},{getTokenInfo:A,requestPermissions:function(e,t){var n,t=(n=e,e=t,t=Array.isArray(e)?e:[],e=u(n),-1===t.indexOf(e)&&t.push(e),cjBasics.urlParams.attach(d+"/o/oauth2/v2/auth",{hl:cjBasics.lang.current,authuser:n.authuser||"0",client_id:f,login_hint:n.displayEmail,pageId:n.pageId||null,redirect_uri:j,response_type:"token",scope:t.join(" "),state:h+"---permissionrequest"}));cjgApis.popup.create(t,p+"/cjg-auth/"+h+"*","auth")},revokePermissions:function(e){return _(e).then(I)},requireToken:_});function A(e){e=cjBasics.urlParams.attach(t+"/tokeninfo",{access_token:e,prettyPrint:"false"});return cjBasics.ajax(e,{fetchAs:"json"})}function u(e){return e.pageId?"https://www.googleapis.com/auth/youtube.readonly":"https://www.googleapis.com/auth/userinfo.profile"}function y(e,t){return Promise.reject({cjg_error:"not_authorized",cjg_missing_scopes:t})}function w(e,t,n){if(!t||!t.accessToken)return y(0,n);var r=[],o=t.grantedScopes||[];return n.forEach(function(e){-1===o.indexOf(e)&&r.push(e)}),0<r.length?y(0,r):t.accessToken}function b(e,u){return new Promise(function(n){var o=h+"---"+cjBasics.uniqueId.generate(),a=document.createElement("iframe");function t(t,e){t=t.split("#")[1];if(t||!e){if("string"==typeof t){if(-1===t.indexOf("&"))try{t=g(t)}catch(e){t=""}var r,t=new URLSearchParams(t);if(t.get("state")!==o)return n(null);a.remove(),i&&i.removeListener(),s&&s.removeListener(),cjBasics.wrif.supported||l.runtime.onMessage.removeListener(c),t.get("error")?n(null):(t=A(r=t.get("access_token")).then(function(e){return e.aud!==f?null:{accessToken:r,grantedScopes:e.scope?e.scope.split(" "):[],expireTime:(t=e,n=Date.now(),(e=Number(t.expires_in))?n+e:(t=Number(t.exp))?1e3*t:n)};var t,n},function(){return null}),n(t))}}else n(null)}var s=cjBasics.webRequest.addListener("onBeforeRedirect",function(e){t(e.redirectUrl)},{types:["sub_frame"],urls:[p+"/cjg-auth/"+h+"*",d+"/*"+h+"*"]}),i=cjBasics.webRequest.catchAndStop([p+"/cjg-auth/"+h+"*"],function(e){t(e)});function c(e){e.cjgAuthUrl&&t(e.cjgAuthUrl,!0)}cjBasics.wrif.supported||l.runtime.onMessage.addListener(c),a.style.display="none";var r=cjBasics.urlParams.attach(d+"/o/oauth2/v2/auth",{authuser:e.authuser,client_id:f,include_granted_scopes:"true",pageId:e.pageId||null,prompt:"none",redirect_uri:j,response_type:"token",scope:u,state:o});a.src=r,cjBasics.navigator.firefox?v(r).then(function(e){m(e,r,!0),setTimeout(function(){document.body.appendChild(a)})}):document.body.appendChild(a)})}function _(t,n){var r=t.pageId+"-"+t.obfuscatedId;Array.isArray(n)&&0!==n.length||(n=[u(t)]);var e=s[r];if(e&&e.expireTime>Date.now()+1e4)return w(0,e,n);s[r]=null;var o,a,e=i[r];return e||(o=n[0],a=u(t),e=cjBasics.wrif.restoreSupported().then(function(){return b(t,o)}).then(function(e){return e||o===a?e:b(t,u(t))}),i[r]=e),e.then(function(e){return e&&(s[r]=e),w(0,e,n)})}function I(e){return cjBasics.ajax(t+"/revoke",{method:"POST",body:JSON.stringify({token:e}),headers:{"Content-Type":"application/json"},fetchAs:"json"})}var S,P,x,B,O={youtube:function(e,t){var n="https://www.youtube.com/";if(cjgApis.session.noMultiAccountOrPage||!cjgApis.session.account.validSession)return t?t.startsWith("http")?t:n+t:n;var r="https://music.youtube.com/",n=t.startsWith(r)?r:n,t=t.replace(n,"");return cjBasics.urlParams.attach(n+"signin",{feature:"masthead_switcher",action_handle_signin:"true",skip_identity_prompt:"True",pageid:e.pageId,authuser:e.authuser,next:t||null})},gmailThread:(S="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",P="BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz",x="thread-",B="msg-",{encode:function(e){var t=[];e.threadId&&t.push(x+"f:"+e.threadId),e.messageId&&t.push(B+"f:"+e.messageId),e.mergeId&&t.push("thread-msg-f:"+e.mergeId);e=t.join("|");return e=t=e,/^[\s\xa0]*$/.test(e)?t:(t=t.replace(x,""),q(a.btoa(t).replace(/=/g,""),S,P))},decode:k}),createWizPath:function(e){var t="";return e&&e.authuser&&"0"!==e.authuser&&(t+="u/"+e.authuser+"/"),e&&e.pageId&&(t+="b/"+e.pageId+"/"),t}};function k(t){if(!!(e=t)&&(-1!==e.indexOf(x)||-1!==e.indexOf(B))||!/^[BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz]*$/.test(t))return t;var e;try{var n=g(q(t,P,S));return-1===n.indexOf(x)?x+n:n}catch(e){return t}}function q(e,t,n){if(!n)throw Error("rd");for(var r=t.length,o=n.length,a=!0,s=0;s<e.length;s++)if(e.charAt(s)!==t.charAt(0)){a=!1;break}if(a)return n.charAt(0);var i={};for(s=0;s<r;s++)i[t.charAt(s)]=s;var c=[];for(s=e.length-1;0<=s;s--){var u=e.charAt(s);if(void 0===i[u])throw Error("sd`"+e+"`"+t+"`"+u);c.push(i[u])}var l=[];for(s=c.length-1;0<=s;s--){for(var h=0,g=0;g<l.length;g++){var f,p=l[g]*r+h;o<=p?(h=(p-(f=p%o))/o,p=f):h=0,l[g]=p}for(;h;){var d=h%o;l.push(d),h=(h-d)/o}for(h=c[s],g=0;h;g++){g>=l.length&&l.push(0);var m,v=l[g]+h;o<=v?(h=(v-(m=v%o))/o,v=m):h=0,l[g]=v}}var j=[];for(s=l.length-1;0<=s;s--){var A=l[s];if(A>=n.length||A<0)throw Error("td`"+l+"`"+A);j.push(n.charAt(A))}return j.join("")}var T,N,L={request:function(e,t,n){return cjBasics.navigator.chromeLike?C(e,t,n).catch(function(){return R(e,t,n)}):R(e,t,n).catch(function(){return C(e,t,n)})},requestWithWebRequest:R,requestWithIframeProxy:C};function C(e,t,n){return M(e,n),(N=N||new Promise(function(t,e){var n=!1;setTimeout(function(){n||e(new Error("timeout"))},1250),T=cjce.createElement("basic-iframe",{hidden:!0,src:p+"/cjg-proxy/"+h+"_"+cjBasics.uniqueId.generate()+"/",sandbox:"allow-same-origin allow-scripts",onMessage:function(e){"cjgProxyReady"===e.bm_method&&(n=!0,t())}}),document.head.appendChild(T)})).then(function(){return T.cjceSendFrameRequest({method:"cjgOriginRequest",value:a.btoa(JSON.stringify({url:e,parameters:t}))},p).then(function(e){return e.success?e.response:Promise.reject(e.response)})})}function M(e,t){t&&t.endsWith(".google.com");var r=p,o=cjBasics.webRequest.addListener("onBeforeSendHeaders",function(e){for(var t=e.requestHeaders,n=0;n<t.length;++n)if("origin"===t[n].name.toLowerCase()){t.splice(n,1);break}return t.push({name:"Origin",value:r||p}),o.removeListener(),{requestHeaders:t}},{types:["xmlhttprequest"],urls:[e]},["blocking","requestHeaders"])}function R(e,t,n){return M(e,n),cjBasics.ajax(e,t)}var D,E=(pe={displayName:cjBasics.lang.i18n("cj_i18n_02717","Not signed in"),authuser:"0",obfuscatedId:"ACCOUNT_ID_NONE",pageId:null,validSession:!1},D={displayName:cjBasics.lang.i18n("cj_i18n_06286","A Google user"),photoUrl:"/images/avatar.svg",authuser:"0",obfuscatedId:"me",pageId:null,validSession:!0},{noAccountData:pe,missingAccountData:D,list:function(e){return a.location.href.startsWith(p+"/cjg-auth/")?G(e):function(e){var t=e||{};(e=Math.floor(1e3*Math.random()))<100&&(e+=103);var n=d+"/ListAccounts?json=standard&source=ogb&md=1&cc=1&mn=1&mo=1&gpsia=1&fwput="+e;return!1!==t.listPages&&(n+="&listPages=1"),t&&t.authuser&&(n+="&authuser="+t.authuser),t&&t.pageId&&(n+="&pageId="+t.pageId),cjBasics.navigator.firefox?v(n).then(function(e){return m(e,n),U(n).catch(function(){return m(e,n+"&origin="+encodeURIComponent(p)),H(n)}).catch(function(){return m(e,n),W(n)}).then(z)}):(cjBasics.navigator.chromeLike?H(n).catch(function(){return W(n)}).catch(function(){return U(n)}):U(n).catch(function(){return H(n)}).catch(function(){return W(n)})).then(z)}(e).catch(function(){return"/views/background.html"===a.location.pathname?[D]:G(e)})},signin:function(e){var t="AddSession";return J(t=e&&!1===e.validSession?"AccountChooser":t,{Email:"string"==typeof(e=e&&e.displayEmail)&&-1!==e.indexOf("@")&&2<e.length?e:null},"signin")},signout:function(){J("Logout",null,"signout")}});function U(e){return L.requestWithWebRequest(e,{method:"POST",credentials:"include",fetchAs:"json"},"https://www.google.com")}function W(e){return L.requestWithIframeProxy(e,{method:"POST",credentials:"include",fetchAs:"json"},"https://www.google.com")}function H(e){return cjBasics.ajax(e+"&origin="+encodeURIComponent(p),{credentials:"include",fetchAs:"text"}).then(function(e){return JSON.parse(decodeURIComponent(e.split(".postMessage")[1].split("www.google.com")[0].replace(/\\x/g,"%").replace(/\\n/g,"")).slice(2,-14))})}function z(e){return e[1].map(function(e){return{displayName:e[2],displayEmail:e[3],photoUrl:e[4],authuser:e[7]?e[7].toString():"0",pageId:e[8],validSession:0!==e[9]&&!1!==e[9],obfuscatedId:e[10],ownedBySelectedAccount:e[11]}})}function G(e){return new Promise(function(t){l.runtime.sendMessage({listAccounts:e},function(e){t(e)})})}function J(e,t,n){var r=p+"/cjg-apis/"+h+"_"+cjBasics.uniqueId.generate()+"/"+n,t=t||{};t.continue=r,t.hl=cjBasics.lang.current;t=cjBasics.urlParams.attach(d+"/"+e,t);return cjgApis.popup.create(t,r+"*",n)}var F={getItem:function(e,t){return browserStorage.local.getItem(K(e)+"-"+t)},setItem:function(e,t,n){return browserStorage.local.setItem(K(e)+"-"+t,n)},remove:function(e,t){var n=K(e),t=Array.isArray(t)?t.map(function(e){return n+"-"+e}):n+"-"+t;return browserStorage.local.remove(t)}};function K(e){return e.obfuscatedId+"-"+e.pageId+"-cjg"}function X(t,n,e){var r=e||{};r.account,r.account=r.account||cjgApis.account.missingAccountData;var o=n||{},a=r.pa;if(!0===a)return V(t,o,r);var s="optional"===a&&!0;return cjgApis.auth.requireToken(e.account,e.requiredScopes).then(function(e){return n.headers=n.headers||{},n.headers.Authorization="Bearer "+e,cjBasics.ajax(t,n)},function(e){return s?V(t,o,r).catch(function(){return Promise.reject(e)}):Promise.reject(e)})}function Z(o,a,s){var n,i=p;return n=i,je.getSapisId().then(function(e){var t=Math.floor(Date.now()/1e3),e=[t,e,n||p].join(" ");return"SAPISIDHASH "+t+"_"+sha1(e)}).then(function(e){var t=new URL(o),n=t.hostname;t.hostname="content.googleapis.com"===n||"www.googleapis.com"===n||"www.google.com"===n?"clients6.google.com":n.replace("googleapis.com","clients6.google.com");var r=s.account;a.credentials="include";n=a.headers||{};return n.Authorization=e,n["X-Goog-AuthUser"]=r.authuser,r.pageId&&(n["x-Goog-PageId"]=r.pageId),"string"==typeof s.key&&(t.searchParams.set("key",s.key),n["X-Goog-Api-Key"]=s.key),a.headers=n,L.request(t.href,a,i)})}function V(e,t,n){return Z(e,t,n).catch(function(){return Z(e,t,n)})}var Q,Y={getSource:$,getIsConsumerGmail:ee,getUserDomain:function(e){return!e.validSession||ee(e)?Promise.resolve(null):$(e).then(function(e){var t;if(-1!==(e=e.replace("domainName\\u003d","domainName=")).indexOf("domainName=")&&4<(t=e.split("domainName=")[1].split('"')[0]).length&&t.length<200&&"gmail.com"!==t&&"googlemail.com"!==t)return t;if(-1!==e.indexOf("managed by"))t=e.split("managed by")[1];else{if(-1===e.indexOf("gbpbt"))return null;t=e.split("gbpbt")[1]}return(t=t.split("<b>")[1].split("<")[0]).length<200?t:null},function(){return null})},getIsAdmin:function(e){return!e.validSession||ee(e)?Promise.resolve(null):$(e).then(function(e){return-1!==e.indexOf('data-pid="199"')||-1!==e.indexOf("https://admin.google.com")})},getIsOne:function(t){if(!t.validSession)return Promise.resolve(!1);var n=$(t).then(function(e){return-1!==e.indexOf("M4.02,28.27C2.73,25.8,2,22.98,2,20c0-2.87,0.68-5.59,1.88-8l-1.72-1.04C0.78,13.67,0,16.75,0,20c0,3.31,0.8,6.43,2.23,9.18L4.02,28.27z")}).then(function(e){return e?(cjgApis.cache.setItem(t,"bm_cache_v31__account__one",!0),!0):(cjgApis.cache.remove(t,"bm_cache_v31__account__one"),!1)});return cjgApis.cache.getItem(t,"bm_cache_v31__account__one").then(function(e){return"boolean"==typeof e?e:n})}};function $(e){var t=e.pageId+"-"+e.authuser;return Q[t]||(Q[t]=(e=!(e=e)||!e.pageId?"https://ogs.google.com/u/"+e.authuser+"/widget/app?hl=en":"https://aboutme.google.com/"+cjgApis.url.createWizPath(e)+"?hl=en",cjBasics.ajax(e,{fetchAs:"text"}))),Q[t]}function ee(e){e=e.displayEmail;if(e)return e.endsWith("@gmail.com")||e.endsWith("@googlemail.com")}var te={getShortcuts:function(e){return cjgApis.info.getSource(e).then(function(e){e=("["+e.split("AF_initDataCallback({")[1].split("[[[[")[1].split(']\n,"https://www.google.com/')[0]).replace("]\n,[[","<LIST_SEPARATOR>[").split("<LIST_SEPARATOR>");return[re(e[0]),re(e[1])]}).catch(function(){return[["192","1","8","36","78","23","53","49","24","51","31","6"].map(ne),["25","10","30","461","300","136","357","429","338"].map(ne)]})},setShortcuts:function(){return Promise.resolve()}};function ne(e){return[2,[e]]}function re(e){return JSON.parse("["+e+"]").map(function(e){return ne(e[0])})}var oe,ae,se,ie,ce,ue,le,he,ge,fe,pe=(le="",he=ue=ce=!(Q={}),ge=new Promise(function(e){ae=e}),Se=new Promise(function(e){se=e}),fe=new Promise(function(e){ie=e}),me(),{get account(){return oe},get wizPath(){return le},get noMultiAccount(){return ce},get noMultiAccountOrPage(){return ue},accountsList:fe,multiAccountCheckReady:Se,changeAccount:de,init:me,ready:ge});function de(e,t){return oe=e,browserStorage.local.setItem("bm_pref__account__current",oe).then(function(){t||n||(l.runtime.sendMessage({reloadAllInstances:!0}),a.location.reload())})}function me(){return he||(he=!0,browserStorage.local.getItem("bm_pref__account__current").then(function(e){oe=e||cjgApis.account.missingAccountData,le=cjgApis.url.createWizPath(oe),ae(oe),ie(cjgApis.account.list({authuser:oe.authuser})),oe.authuser&&"0"!==oe.authuser&&oe.validSession?se():fe.then(function(e){if(!Array.isArray(e)||e.length<2)return ce=ue=!0,void se();for(var t=0;t<e.length;t++)if("1"===e[t].authuser)return void se();ce=!0,se()}),fe.then(function(e){if(Array.isArray(e)&&0!==e.length&&e[0].validSession){for(var t=0;t<e.length;t++){var n=e[t];if(oe.obfuscatedId===n.obfuscatedId&&oe.pageId===n.pageId)return n.validSession?void(oe.validSession&&oe.displayEmail===n.displayEmail&&oe.authuser===n.authuser?oe.photoUrl===n.photoUrl&&oe.displayName===n.displayName||de(n,!0):de(n)):void de(e[0])}de(e[0])}else"ACCOUNT_ID_NONE"!==oe.obfuscatedId&&de(cjgApis.account.noAccountData)})})),ge}var ve,je=(ve={groups:"groupsloginpref",play:"PLAY_ACTIVE_ACCOUNT",sites:"SITESM",store:"PLAY_ACTIVE_ACCOUNT"},{getLoginEmail:function(e){return Ae(ve[e],"https://"+e+".google.com").then(ye)},getSapisId:function(){return Ae("SAPISID",p)}});function Ae(n,r){return new Promise(function(t){l.cookies.get({name:n,url:r},function(e){l.runtime.lastError&&"SAPISID"===n&&"https://www.google.com"===r?t(Ae("SAPISID","https://accounts.google.com")):t(e?e.value:null)})})}function ye(e){if(!e)return null;e=e.split("=")[1];return-1===e.indexOf("@")?null:e}function we(e){var t,n,t=(t=e[0],n={amp:"&",lt:"<",le:"≤",gt:">",ge:"≥",quot:'"',"#039":"'"},t.replace(/&([^;]+);/g,function(e,t){return n[t]||""})),e=e[3],e=e&&e.b&&e.c?(t+="– "+e.b,e.c):t.split(/<b>|<\/b>/g).join(""),e={value:e};return-1!==t.indexOf("<b>")&&(e.domFragment=cjBasics.htmlToFragment(t.replace(/<i>|<\/i>/g,""))),e}var be,_e,Ie,Se=(be="https://mail.google.com",_e="https://www.google.com",Ie="https://maps.google.com",{handleOpenUrlMessage:function(e,t,n){if("string"==typeof e&&e.startsWith("!_{")&&(e=JSON.parse(e.replace("!_",""))).s&&e.s.startsWith("/"+t)&&Array.isArray(e.a)&&e.a[0])return function e(t,n){if(Array.isArray(t)){if(Array.isArray(t[0])){var r=t[0][0];if("string"==typeof r)try{var o=new URL(r),a=o.origin;return a===be?be+"/mail/u/"+n.authuser+"/"+o.hash:(o.pathname.startsWith("/maps")&&(a===Ie&&(o.origin=_e),a===_e&&(o.searchParams.delete("authuser"),o.searchParams.delete("source"),o.searchParams.delete("hl"))),a.endsWith(".google.com")&&"0"!==n.authuser&&o.searchParams.set("authuser",n.authuser),o.href)}catch(e){}}for(var s=0;s<t.length;s++){var i=e(t[s],n);if(i)return i}}}(e=JSON.parse(e.a[0]),n)},getInitData:function(e){var t=Math.round(1e8*Math.random()).toString(),n="I0_"+Date.now(),e="#"+cjBasics.urlParams.create({id:n,_gfid:n,parent:e?be:r,pfname:"",rpctoken:t});return{id:n,parameters:{origin:be,hai:"3",hc:"4,1,5,6",_gfid:n,id:n,usegapi:"1",pfname:"",rpctoken:t,jsh:"m;/_/scs/abc-static/_/js/k=gapi.gapi.en.Sj5LKyeUKoE.O/d=1/ct=zgms/rs=AHpOoo9ToCtoaz0mr9IKXAop6Eq9AIpSlw/m=__features__"},hash:e}}});return{account:E,auth:c,cache:F,info:Y,ogs:te,popup:o,request:X,session:pe,login:je,url:O,suggestquery:{get:function(e){return e=cjBasics.urlParams.attach("https://suggestqueries.google.com/complete/search",{client:"serp",authuser:e.gAccount?e.gAccount.authuser:null,xhr:"t",hl:e.hl,q:e.q,gs_id:e.gs_id,ds:e.ds}),cjBasics.ajax(e,{fetchAs:"json"}).then(function(e){e=e[1];return Array.isArray(e)&&0<e.length?e:null}).then(function(e){return e?e.map(we):null})}},companion:Se}}();