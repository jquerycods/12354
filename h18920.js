﻿/* Games */
Html5Oyunlar({name:"wdg_hot_games"},["DOMSelect","DOMEvent","SWP","Cache"],function(k,l,b,u){b.init("hot_games");var d=0,c=[],h,m,g,f=window.document.getElementById("wdg_hot_games"),n=b.getProperty("totalpages")-1,q=function(a){h||a===d||0>a||a>n||(c[a]?(f.innerHTML=c[a],d=a,p(a)):(h=!0,b.Widget.refresh({page:a+1},{callback:function(e){h=!1;c[a]=e;d=a;p(a)}})))},p=function(a){var e=k.get(".previous",f),r=k.get(".next",f);switch(a){case 0:b.Utils.addClass(e,"is-disabled");break;case n:b.Utils.addClass(r,
"is-disabled");b.Utils.removeClass(e,"is-disabled");break;default:b.Utils.removeClass(e,"is-disabled"),b.Utils.removeClass(r,"is-disabled")}t()},v=function(a){var e=a.getProperty("test_thumbs"),b=[];a=function(a){this.image=a.getElementsByTagName("img")[0];this.imageSrc=this.image.getAttribute("data-src");this.applicationId=this.image.getAttribute("data-appid")||this.image.getAttribute("data-path");this.testThumb=e[this.applicationId];this.thumbVersion="A"===g||void 0===this.testThumb?this.imageSrc:
this.testThumb.image;this.eventProperties={applicationId:this.applicationId,thumb:this.thumbVersion,version:g}};a.prototype.isValidTestImage=function(){return g&&this.testThumb&&this.testThumb.image};a.prototype.isViewed=function(){return 0<=b.indexOf(this.applicationId)};a.prototype.setEvents=function(){var a=this;a.isViewed()||(Html5Oyunlar("tracker.event.express",{data:{eventCategory:"hotGames",eventAction:"thumbnailTest",eventLabel:"show",properties:a.eventProperties}}),b.push(a.applicationId));
l.add(this.image,"click",function(){Html5Oyunlar("tracker.event.express",{data:{eventCategory:"hotGames",eventAction:"thumbnailTest",eventLabel:"click",properties:a.eventProperties}})})};a.prototype.setSrc=function(){this.image.setAttribute("src",this.thumbVersion)};return a}(b),t=function(){for(var a=f.getElementsByTagName("a"),b=0,d=a.length;b<d;b++){var c=new v(a[b]);c.isValidTestImage()&&c.setEvents();c.setSrc()}};u.getItem("Tracker.visitorId",function(a){g=(m=a)?0===m%2?"A":"B":!1;t();c[0]=f.innerHTML});
l.add(f,"click",function(a){a=a||window.event;a=a.target||a.srcElement;"nl-next"==a.id||"nl-next"==a.parentNode.id?q(d+1):"nl-prev"!=a.id&&"nl-prev"!=a.parentNode.id||q(d-1)})});
/* Games */
Html5Oyunlar("SWP Utils DOMSelect Cache DOMEvent Slider BeLazy Tooltip Cookie Net ThumbnailTracker".split(" "),function(d,f,m,k,C,D,n,E,r,t,F){d.init("recent_played_games");var u=window.document,g=u.getElementById("wdg_recent_played_games"),c=d.getProperty("*"),v=c.global_user_id,w=c.siteid,x=d.get("Html5Oyunlar.module.spapi.backend"),l="recent.played.games."+c.global_user_id,h=function(a,b){k.getItem("backend"===a?l:"recent.played.games",function(a){b(f.isArray(a)?a:[])})},p=function(a,b){k.setItem({key:"backend"===
a?l:"recent.played.games",value:b.slice(0,c.games_limit_client_storage),expires:15552E3})},H=function(a){k.getItem(l+".synced",function(b){a(f.isBoolean(b)?b:!1)})},q=function(a){k.setItem({key:l+".synced",value:!0===a,expires:2592E3})},I=function(a){var b={url:x+"v1/recently-played/"+w+"/"+v+"/"+a,type:"PUT",dataType:"text",data:"",headers:{"x-auth-token":r.getItem("token")}};y("backend",a,!0);t.send(b,function(a){a.isError&&q(!1)})},J=function(a){var b=[];a.forEach(function(a){b.push({id:a,date:0})});
a={url:x+"v1/recently-played/"+w+"/"+v,type:"POST",dataType:"json",data:JSON.stringify({items:b.slice(0,c.games_limit_authenticated)}),headers:{"x-auth-token":r.getItem("token")}};t.send(a,function(a){a.isError?q(!1):q(!0)})},y=function(a,b,G){a=a||c.storage_endpoint;b=b||c.app_id;"backend"!==a||G?h(a,function(e){var c=e.indexOf(b);-1<c&&e.splice(c,1);e.unshift(b);p(a,e)}):I(b)},L=function(){var a=u.getElementById("authentication-incentive");a&&C.add(a,"click",function(){d.System.emit("popup.register.open")});
"slider"===c.ui_format&&new D({slide:m.get(".slider-slide",g),prev:m.get(".slider-prev",g),next:m.get(".slider-next",g),duration:.4,easing:"ease"});"game_thumb"===c.ui_format&&E.create(".wdg_recent_played_games .recent-game");d.getProperty("no_recent_games")?d.System.emit("recent.played.empty"):(d.System.emit("recent.played.filled"),window.setTimeout(n.trigger,500));n.handleImagesIn(g);F.track(g)},z=function(a,b,c){var e=a[0];e?h(e,function(K){a.shift();b[e]=K;z(a,b,c)}):c(b)},A=function(){if(!0!==
c.track_only){var a=["client"];"backend"===c.storage_endpoint&&(a[1]="backend");z(a,{},function(a){d.Widget.refresh({app_list:JSON.stringify(a),ui_format:c.ui_format,xhr:!0,lazyload_images:c.lazyload_images,lazyload_from_item:c.lazyload_from_item},{callback:L})})}},B=f.once(A);h("client",function(a){var b=a.map(function(a){if(f.isObject(a)&&a.gid)return a.gid}).filter(function(a){return f.isString(a)}),d=a.filter(function(a){return f.isString(a)});a=a.length-b.length-d.length;var e;if(0<b.length||
0<a)e=f.combine(d,b),p("client",e),"backend"===c.storage_endpoint&&h("backend",function(a){0===a.length&&(a=e,p("backend",a))})});(function(a){"backend"===a&&H(function(a){a||h("backend",function(a){a=a.map(function(a){f.isObject(a)&&a.gid&&(a=a.gid);return a}).filter(function(a){return f.isString(a)});0<a.length&&J(a)})})})(c.storage_endpoint);f.isEmpty(c.wait_on_js_event)&&A();n.until("visible",g,function(){d.System.emit("recent.played.visible")});d.System.init(function(a){var b=a&&a.data?a.data:
{};switch(a.name){case "inlinegame.open":case "recent.played.games.update":y(void 0,b.applicationId||void 0,!1);break;case "game.sidepanel.open":"recent_played_games"!==b.item||f.isEmpty(c.wait_on_js_event)||B();break;case c.wait_on_js_event:B()}})});
/* Games */
Html5Oyunlar("Html5Oyunlar.import",{fullName:"Favorites",deps:["SWPUtils","JSLib"],module:function(c,e){return{isUserAuthenticated:function(){return"true"===e.get("Html5Oyunlar.portal.user.authenticated")},addToFavs:function(b,c){this.checkCurrentFavs(b,function(a){a?c.call(this,b,{success:!1},"already favorite"):e("api.favourite.add",{applicationId:b},function(a){a&&void 0!==a.result?c.call(this,b,{success:a.result},null):a&&a.error&&c.call(this,b,{success:!1},a.error)})})},checkCurrentFavs:function(b,h){e("api.favourite.list",
function(a){a&&a.applicationList&&(a=-1!==c.indexOf(a.applicationList,b),h.call(this,a))})}}}});Html5Oyunlar(["SWP","Favorites","DOMEvent","Cookie","Net"],function(c,e,b,h,a){c.init("add_to_favorites");var k=document.querySelector(".wdg_add_to_favorites a")||null,f=document.getElementById("atf-current-game"),g=f&&f.value?f.value:null,d={"default":document.getElementById("atf-default"),success:document.getElementById("atf-success"),already:document.getElementById("atf-already-fav"),login:document.getElementById("atf-login"),error:document.getElementById("atf-error")},f=document.getElementById("atf-login-btn")||
null,l=document.getElementById("atf-join-now")||null,m=c.get("Html5Oyunlar.module.spapi.backend"),n=c.getProperty("guid"),p=c.getProperty("siteid");c.Widget.init(function(b){function c(b,q){a.send(b,function(a){a.isError&&q&&setTimeout(function(){c(b,!1)},500)})}switch(b.name){case "add.to.favs.clicked":e.isUserAuthenticated()&&g?(b={url:m+"v1/favorite/"+p+"/"+n+"/"+g,type:"PUT",dataType:"json",headers:{"x-auth-token":h.getItem("token")}},Html5Oyunlar("tracker.event.express",{data:{eventCategory:"page",
eventAction:"gamePageFeature",eventLabel:"favoriteGame",properties:{applicationId:g}}}),c(b,!0),e.addToFavs(g,function(b,a,c){a.success?(d["default"].style.display="none",d.success.style.display="block"):(d["default"].style.display="none","already favorite"===c?d.already.style.display="block":d.error.style.display="block")})):(d["default"].style.display="none",d.login.style.display="block")}});b.add(k,"click",function(a){b.preventDefault(a);b.preventBubbling(a);c.Widget.emit("add.to.favs.clicked")});
b.add(f,"click",function(a){b.preventDefault(a);b.preventBubbling(a);c.System.emit("popup.login.open")});b.add(l,"click",function(a){b.preventDefault(a);b.preventBubbling(a);c.System.emit("popup.register.open")})});
/* Games */
var solidopinion_login_token="";
Html5Oyunlar("Utils SWP DOMSelect DOMEvent JSLib BeLazy EventTracker".split(" "),function(t,c,k,f,u,v,w){c.init("game_comments");var l=window,h=l.document,m=0,g,x=h.getElementById("wdg_game_comments"),n=k.get(".gc-loader"),y=c.getProperty("solidopinion_id"),z=c.getProperty("dev"),A=c.getProperty("not_logged_in"),p=0,q=function(b,a){for(var e;e=a.shift();)if(e in b)b=b[e];else return;return b},B=function(b){if(!(0>b.origin.indexOf("solidopinion.com")))try{var a=JSON.parse(b.data);"response"==a.event&&
"succsses"!=a.result&&d("error",{target:a.target,result:a.result,data:a.data});"reqest"==a.event&&"User/token/"==a.target&&(p++,d("request",{target:a.target,result:p.toString()}));"response"==a.event&&"User/token/"==a.target&&d("token",{target:a.target,result:"succsses"==a.result?"success":"error",allowPost:q(a,["data","data","allow_post"]),showComments:q(a,["data","data","show_comments"]),appToken:solidopinion_login_token});if("response"==a.event&&"User/get/"==a.target){b=/(\d+)\.user@.*/;var e=
a.data?b.exec(a.data.email):!1;d("user",{result:"succsses"==a.result?"success":"error",gid:e?e[1]:"unknown",appToken:solidopinion_login_token})}"response"==a.event&&"Message/add/"==a.target&&d("post",{target:a.target,result:"succsses"==a.result?"success":"error"});"display"==a.event&&void 0!=g&&(l.clearTimeout(g),g=void 0,d("display",{appToken:solidopinion_login_token}))}catch(c){}},C=function(){g=void 0;d("timeout",{})},d=function(b,a){a.elapsed=Date.now()-m;w.track({eventCategory:"portal",eventAction:"comments",
eventLabel:b,properties:a})},r=function(){m=Date.now();d("load",{});g=setTimeout(C,9E4);f.add(window,"message",B);var b=k.get(".so_comments"),a=h.createElement("script");a.src="//"+(z?"api-dev":"api")+".solidopinion.com/widget/embed.js";a.async=!0;a.id="solidopinion_script";b.parentNode.insertBefore(a,b.nextSibling);c.Utils.addClass(n,"is-hidden")},D=t.once(function(){c.Utils.removeClass(n,"is-hidden");var b=h.querySelector(".wdg_game_comments .register-trigger"),a=h.querySelector(".wdg_game_comments .login-trigger");
b&&a&&(f.add(b,"click",function(a){f.preventDefault(a);c.System.emit("popup.register.open")}),f.add(a,"click",function(a){f.preventDefault(a);c.System.emit("popup.login.open")}));A?(solidopinion_login_token="guest",r()):u("api.auth.getApplicationToken",{cache:!1,applicationId:y},function(a){solidopinion_login_token=a.appAuth.token;r()})});v.until("visible",x,function(){D()})});
/* Games */
Html5Oyunlar(["SWP","DOMSelect","SWPUtils","DOMEvent"],function(f,e,b,d){f.init("game_side_panel");var g=window,r=g.document,v=f.getProperty("app_id"),h=f.getProperty("menu_behaviour"),c=r.getElementById("wdg_game_side_panel"),k=e.getAll("touch"===h?".tab":".game-tab",c),m=!1,l,n,w=g.getComputedStyle?parseFloat(g.getComputedStyle(c).fontSize):16,t=function(a){switch(h){case "touch":b.removeClass(e.get('[data-tab="'+a+'"] .notification',c),"is-hidden");break;case "hover":b.addClass(e.get(".game-tab--"+
a),"is-active")}},x=function(a){a=a||window.event;a=(a.target||a.srcElement).getAttribute("data-child");var c=e.get(".coach-last-played");c&&b.addClass(c,"is-hidden");a&&f.System.emit("game.sidepanel.open",{item:a})},u=function(a){var c=e.get(".game-tab--"+a);c&&(b.addClass(c,"is-extended"),f.System.emit("game.sidepanel.open",{item:a}))},p=function(){b.each(k,function(a){b.removeClass(a,"is-extended")})},q=function(){m&&(m=!1,b.removeClass(l,"is-open"),b.removeClass(n,"is-open"),n=l=void 0)},y=function(a){return"show"+
a.replace(/(?:^|_)([a-z])/g,function(a,b){return b.toUpperCase()})};(function(){d.add(c,"click",function(a){a=a||g.event;a=a.target||a.srcElement;b.hasClass(a,"login-trigger")&&f.System.emit("popup.login.open");b.hasClass(a,"register-trigger")&&f.System.emit("popup.register.open")});switch(h){case "touch":d.add(r,"click",function(a){if(m){a=a||g.event;for(a=a.target||a.srcElement;a;){if(c===a)return;a=a.parentNode}q()}});b.each(k,function(a){d.add(a,"click",function(){var d=a.getAttribute("data-tab");
if(l!==a){f.System.emit("game.sidepanel.open",{item:d});Html5Oyunlar("tracker.event.express",{data:{eventCategory:"page",eventAction:"gamePageFeature",eventLabel:y(d),properties:{applicationId:v}}});var g=e.get('[data-tab="'+d+'"]',c),d=e.get('[data-panel="'+d+'"]',c),h=e.get(".notification, .notification--count",g),k=c.getBoundingClientRect().left/w;q();21>k?b.addClass(c,"open-inside"):b.removeClass(c,"open-inside");m=!0;l=g;n=d;b.addClass(l,"is-open");b.addClass(n,"is-open");h&&b.addClass(h,"is-hidden")}else q()})});
break;case "hover":d.add(c,"mouseover",x),d.add(".game-tabs","mouseover",p),b.each(k,function(a){d.add(a,"mouseover",function(){b.removeClass(a,"is-active")})})}})();f.System.init(function(a){switch(a.name){case "game.update.achievement":case "game.update.achievement.failed":p();t("awards");u("awards");break;case "game.update.highscore":case "game.update.highscore.failed":p();t("highscores");u("highscores");break;case "walkthrough.available":(a=e.get(".game-tab--walkthrough",c)||e.get('[data-tab="walkthrough"]',
c))&&b.removeClass(a,"is-hidden")}})});
/* Games */
Html5Oyunlar("SWP SWPUtils JSLib LocalStorage Cookie Net".split(" "),function(d,e,u,p,v,w){d.init("rate");var l=window,g=d.getProperty("app_id"),q=d.getProperty("guid"),h=d.getProperty("user_logged_in"),k=h,x=d.get("Html5Oyunlar.module.spapi.backend"),c=l.document.getElementById("wdg_rate"),y={"-1":c.querySelector(".rate-vote.negative"),0:c.querySelector(".rate-vote.neutral"),1:c.querySelector(".rate-vote.positive")},m=function(a){var b=c.querySelector(".rate-vote.is-active");b&&e.removeClass(b,"is-active");
(b=y[a])&&e.addClass(b,"is-active")},r={pending:c.querySelector(".rate-info.is-pending"),success:c.querySelector(".rate-info.is-success"),error:c.querySelector(".rate-info.is-error")},t=function(){["pending","success","error"].forEach(function(a){e.addClass(r[a],"is-hidden")})},n=function(a){t();e.removeClass(r[a],"is-hidden")},f,z=function(a){var b=f;h||(q="guest",k=!1);w.send({url:x+"v1/vote/"+q+"/"+g,type:"PUT",data:JSON.stringify({vote:a}),headers:{"x-auth-token":v.getItem("token")},onsuccess:function(){u("tracker.event.express",
{eventAction:"vote",eventCategory:"application",properties:{applicationId:g,vote:a}});h||p.setItem({key:"Html5Oyunlar.rate."+g,expires:"never",value:a});n("success")},onerror:function(){f=b;m(b);n("error")}},function(){});t();f=a;m(a)};f=function(){var a=c.querySelector(".rate-vote.is-active"),b=null;h?a&&(b=l.parseInt(a.getAttribute("data-vote"),10)):(b=p.getItem("Html5Oyunlar.rate."+g),null!==b&&m(b));return b}();null===f&&(n("pending"),k=!0);k&&c.addEventListener("click",function(a){a=a.target;if(k)for(;a&&
a!==c;){if(e.hasClass(a,"rate-vote")){a=l.parseInt(a.getAttribute("data-vote"),10);z(a);break}a=a.parentNode}})});
/* Games */
(function(){var e,l,b,f,a,u,m,p,r,q;l="native";b=Date.now||function(){return(new Date).getTime()};a=window.requestAnimationFrame;r=["webkit","moz","o","ms"];m=0;for(p=r.length;m<p;m++)u=r[m],null==a&&(a=window[u+"RequestAnimationFrame"]);null==a&&(l="timer",e=0,f=null,a=function(a){var c,d;null!=f?f.push(a):(d=b(),c=Math.max(0,16.66-(d-e)),f=[a],e=d+c,setTimeout(function(){var a,c,b,d;c=f;f=null;b=0;for(d=c.length;b<d;b++)a=c[b],a(e)},c))});a(function(e){var c,d;1E12>e?null!=(null!=(d=window.performance)?
d.now:void 0)?(a.now=function(){return window.performance.now()},a.method="native-highres"):(c=b()-e,a.now=function(){return b()-c},a.method="native-highres-noperf"):a.now=b});a.now=null!=(null!=(q=window.performance)?q.now:void 0)?function(){return window.performance.now()}:b;a.method=l;window.requestAnimationFrame=a})();Html5Oyunlar("DOMSelect DOMEvent SWPUtils SWP JSLib FeatureDetector BeLazy".split(" "),function(e,l,b,f,a,u,m){function p(){h<w&&(h++,d(h,!0));h===w&&(h=0,d(0,!0))}function r(c){g.recommended_games_from_ms&&0<g.recommended_games_from_ms.length?q({applicationList:g.recommended_games_from_ms},function(){d(h,!0)}):a("api.application.similar",z,function(b){b&&b.applicationList&&0<b.applicationList.length?(z.pageControl.page++,q(b,c)):0===w&&a("api.application.new",A,function(b){b&&b.applicationList&&0<b.applicationList.length&&
(A.pageControl.page++,q(b,c))})})}function q(a,d){var f=function(b,a){var c=a;/https?\:\/\//.test(a)||(c=b+c);return c};b.each(a.applicationList,function(a,d){c=y.cloneNode(!0);b.removeClass(c,"rg-item--loading");b.addClass(c,"slider-item");"blank"===a.integration&&a.gameObjectUrl?(e.get("a",c).href=a.gameObjectUrl,e.get("a",c).target="_blank"):e.get("a",c).href=a.urlPart;t=e.get("img",c);t.setAttribute("data-src",f(g.thumbnail_cdn,a.thumbnail[g.thumbnail_size]));t.setAttribute("data-widget","recommended_games");
t.setAttribute("data-index",d);t.setAttribute("data-appid",a.applicationId);k.appendChild(c)});m.handleImagesIn(k);w=Math.ceil(k.children.length/B);d&&d()}function E(a){function b(){d+=.04;k.style.left=c+(a-c)*d+"px";1>d&&(x=window.requestAnimationFrame(b))}var c=parseFloat(k.style.left||0),d=0;window.cancelAnimationFrame(x);x=window.requestAnimationFrame(b)}f.init("recommended_games");var c,d,v,t,x,h=0,w=0,n=document.getElementById("wdg_recommended_games"),k=e.get(".slider-slide",n),y=e.get(".slider-item",
n),F=e.get(".slider-prev",n),G=e.get(".slider-next",n),g=f.getProperty("*");f=g.appid;var H=g.data_version||"no version",z={applicationId:f,pageControl:{page:1,pageSize:g.page_size},capabilityBlacklist:g.capability_blacklist,capabilityFilter:{capabilities:[g.view],joinType:"all"}},A={pageControl:{page:1,pageSize:g.pageSize},capabilityBlacklist:g.capability_blacklist,capabilityFilter:{capabilities:[g.view],joinType:"all"}},C=e.get(".slider",n).offsetWidth,D=y.offsetWidth,B=C/D|0;Html5Oyunlar("tracker.event.express",
{data:{eventCategory:"page",eventAction:"gamePageRecommended",properties:{applicationId:f,msVersion:H}}});k.removeChild(y);k.innerHTML="";l.add(F,"click",function(){0<h&&(h--,d(h,!0))});l.add(G,"click",p);l.add(window,"blur",function(){window.clearTimeout(v)});l.add(window,"focus",function(){v=window.setTimeout(p,3E4)});d=function(){var a=D*B,c=(C-a)/2;return function(d,e){var f=0===d?0:Math.round(c-a*d);e?b.removeClass(k,"no-transition"):b.addClass(k,"no-transition");!e||u.transitions()?k.style.left=
f+"px":E(f);window.clearTimeout(v);v=window.setTimeout(p,3E4);window.setTimeout(m.trigger,400)}}();b.removeClass(n,"is-concealed");m.until("visible",n,function(){r(function(){d(h,!0)})})});
/* Games */
Html5Oyunlar(["SWP","DOMEvent"],function(f,h){var m,r;function t(){return b||d.getElementById("flashgame")||d.getElementById("iframegame")}function v(a){b=t();var c=k.innerHeight||d.documentElement.clientHeight,e=p?p.clientWidth:g,f=100/(c/b.clientHeight),h=100/(e/b.clientWidth),m=h>f?e/g*100-50:c/l*100-50,c=h>f?e/g*100:c/l*100,n;"in"===a?q=n=Math.min(q+10,c):"out"===a&&(q=n=Math.max(q-10,m));a=Math.floor(g*n/100);n=Math.floor(l*n/100);b.style.width=a+"px";b.style.height=n+"px"}f.init("zoom_bar");var k=
window,d=k.document,y=d.getElementById("wdg_zoom_bar"),z=d.getElementById("zoom-in"),A=d.getElementById("zoom-out"),B=d.getElementById("zoom-fullscreen"),g=f.getProperty("game_width"),l=f.getProperty("game_height"),u,b,w,x,p=d.getElementById("theGame"),q=100;w=function(){b=t();b.style.width=u+"px";b.style.height=originalGameHeight+"px";f.Utils.removeClass(d.body,"fullscreen");var a=d.querySelector(".icon--close");a.parentNode.removeChild(a)};x=function(){var a=l,c=g,a=parseInt(a,10),c=parseInt(c,
10),e=k.innerHeight||d.documentElement.clientHeight,f=(p?p.clientWidth:c)/c,e=a*f>e?e/a:f;m=a*e;r=c*e;b.style.width=r+"px";b.style.height=m+"px";g=b.clientWidth;l=b.clientHeight;q=100};h.add(B,"click",function(){b=t();u=b.clientWidth;var a=originalGameHeight=b.clientHeight,c=u,a=parseInt(a,10),c=parseInt(c,10),e=k.innerHeight||d.documentElement.clientHeight,g=k.innerWidth||d.documentElement.clientWidth,e=Math.max(Math.min((g-120)/c,e/a),Math.min(g/c,(e-120)/a));m=a*e;r=c*e;b.style.width=r+"px";b.style.height=
m+"px";f.Utils.addClass(d.body,"fullscreen");a=d.createElement("span");a.className="icon--close";p.appendChild(a);h.add(a,"click",w)});h.add(A,"click",function(){v("out")});h.add(z,"click",function(){v("in")});document.querySelector("html.ie8")||h.add(k,"resize",function(){var a;return function(){k.clearTimeout(a);a=k.setTimeout(x,250)}}());f.System.init(function(a){switch(a.name){case "game.display":f.Utils.removeClass(y,"is-hidden");l=(b=t())?b.clientHeight:l;g=b?b.clientWidth:g;break;case "popup.header.open":f.Utils.removeClass(d.body,
"fullscreen")}})});