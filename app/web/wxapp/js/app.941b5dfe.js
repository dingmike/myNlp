(function(e){function t(t){for(var a,o,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)o=c[l],i[o]&&f.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-22e066f2":"565d7016","chunk-2d224d70":"e20a7d14","chunk-2d22d746":"f0d238ec","chunk-311e7386":"9e60be9b","chunk-4febc0dc":"349be239","chunk-6630fb2e":"2d96ff49","chunk-9088706c":"6f040269","chunk-a02bf87c":"0141efbd"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-22e066f2":1,"chunk-311e7386":1,"chunk-4febc0dc":1,"chunk-6630fb2e":1,"chunk-9088706c":1,"chunk-a02bf87c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-22e066f2":"8f3955b7","chunk-2d224d70":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-311e7386":"6364e7cf","chunk-4febc0dc":"f37000d4","chunk-6630fb2e":"b959b736","chunk-9088706c":"7dd984cf","chunk-a02bf87c":"1d4f0db7"}[e]+".css",i=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===a||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],d.parentNode.removeChild(d),n(r)},d.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){o[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e),u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+o+")");r.type=a,r.request=o,n[1](r)}i[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1730:function(e,t,n){},"1cb2":function(e,t,n){},"1f39":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"van-fade"}},[e.confirmDialog.show?n("div",{staticClass:"confirmDialog",on:{click:e.closeMask}},[n("div",{staticClass:"mask"}),n("div",{staticClass:"dialogCon"},[e.confirmDialog.title?n("h5",{staticClass:"van-hairline--bottom"},[e._v(e._s(e.confirmDialog.title))]):e._e(),e.confirmDialog.msg?n("p",{staticClass:"msg"},[e._v(e._s(e.confirmDialog.msg))]):e._e(),n("div",[n("button",{staticClass:"own-btn-cancel",on:{click:e.confirmDialog.cancelAction}},[e._v(e._s(e.confirmDialog.cancelText))]),n("button",{staticClass:"own-btn-confirm",on:{click:e.confirmDialog.confirmAction}},[e._v(e._s(e.confirmDialog.confirmText))])])])]):e._e()])},o=[],i={name:"ConfirmDialog",props:{confirmDialog:{type:Object,require:!0}},watch:{"confirmDialog.show":function(){this.confirmDialog.show?this.myUtils.forbidBodyScroll():this.myUtils.allowBodyScroll()}},methods:{closeMask:function(){this.confirmDialog.show=!1,this.myUtils.allowBodyScroll()}}},r=i,c=(n("54dd"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"50c3f0f4",null);t["a"]=s.exports},2290:function(e,t,n){"use strict";var a=n("b45d"),o=n.n(a);o.a},"2d7d":function(e,t,n){"use strict";var a=n("36b0"),o=n.n(a);o.a},"36b0":function(e,t,n){},"4dcb":function(e,t,n){},"54dd":function(e,t,n){"use strict";var a=n("1730"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"baseUrl",function(){return Ke}),n.d(a,"iconfontUrl",function(){return Je}),n.d(a,"iconfontVersion",function(){return Ve}),n.d(a,"codeUrl",function(){return Ze}),n.d(a,"env",function(){return Ge});n("ab71");var o,i,r,c,s=n("58e6"),u=(n("66b9"),n("b650")),l=(n("e7e5"),n("d399")),f=(n("2994"),n("2bdd")),d=(n("537a"),n("ac28")),m=(n("a52c"),n("2ed4")),p=(n("e17f"),n("2241")),h=(n("c194"),n("7744")),g=(n("5f1a"),n("a3e2")),v=(n("4d48"),n("d1e1")),b=(n("81e6"),n("9ffb")),w=(n("da3c"),n("0b33")),k=(n("bda7"),n("5e46")),S=(n("c3a6"),n("ad06")),y=(n("4142"),n("39d1")),_=(n("a481"),n("456d"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d"),n("7189"),n("4dcb"),n("2b0e")),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gradient",attrs:{id:"app"}},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view"):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view"),e.$route.meta.navShow?n("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:e.showNavBar,expression:"showNavBar"}],staticClass:"own-nav-b",attrs:{route:e.routeType,border:e.showBorder,"active-color":"#3dcc97","safe-area-inset-bottom":""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tabbar-item",{attrs:{to:"/",replace:e.replaceNow},scopedSlots:e._u([{key:"icon",fn:function(t){return n("img",{staticClass:"own-tab-icon",attrs:{src:t.active?e.homeIcon.active:e.homeIcon.normal}})}}],null,!1,1445376566)},[n("span",[e._v("学习")])]),n("van-tabbar-item",{attrs:{to:"/center",replace:e.replaceNow},scopedSlots:e._u([{key:"icon",fn:function(t){return n("img",{staticClass:"own-tab-icon",attrs:{src:t.active?e.centerIcon.active:e.centerIcon.normal}})}}],null,!1,2049110326)},[n("span",[e._v("我的")])])],1):e._e()],1)},C=[],x=n("cebc"),O=n("2f62"),j={computed:Object(x["a"])({},Object(O["b"])(["showNavBar"])),data:function(){return{active:0,routeType:!0,showBorder:!1,replaceNow:!1,homeIcon:{normal:"http://bkcdn.fecstec.com/1/20190509/1438014047621f.png",active:"http://bkcdn.fecstec.com/1/20190509/14374113369439.png"},centerIcon:{normal:"http://bkcdn.fecstec.com/1/20190509/1438396864a26e.png",active:"http://bkcdn.fecstec.com/1/20190509/14382070769b4b.png"}}},created:function(){"/"===this.$route.path&&(this.active=0),"/center"===this.$route.path&&(this.active=1)},mounted:function(){},methods:{changTabbar:function(e){alert(e),0===e?this.$router.replace("/"):this.$router.replace("/center")}}},A=j,T=(n("7c55"),n("2877")),D=Object(T["a"])(A,I,C,!1,null,null,null),E=D.exports,L=(n("7f7f"),n("8c4f")),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gradient"},[n("div",{staticClass:"own-container"},[n("div",{staticClass:"own-panel"},[n("div",{staticClass:"own-panel-title"},[n("router-link",{staticClass:"own-page-title",attrs:{to:"/articleList"}},[n("transition",{attrs:{name:"van-slide-left"}},[n("div",[n("img",{staticClass:"panel-card-img",attrs:{src:"http://bkcdn.fecstec.com/1/20190304/091647286c6abd.png",alt:""}}),n("div",{staticClass:"panel-hide-lay"},[n("van-row",[n("van-col",{attrs:{span:"12"}},[n("p",{staticClass:"panel-card-title"},[n("span",[e._v("英语阅读理解")])])]),n("van-col",{attrs:{span:"12"}},[n("p",{staticClass:"panel-card-title"},[n("span",[e._v("学习新的")]),n("van-icon",{staticClass:"own-card-icon",attrs:{name:"arrow"}})],1)])],1)],1)])])],1)],1),n("div",{staticClass:"own-panel-title van-hairline--bottom"},[n("router-link",{staticClass:"own-page-title",attrs:{to:"/learned"}},[n("transition",{attrs:{name:"van-slide-left"}},[n("div",[n("img",{staticClass:"panel-card-img",attrs:{src:"http://bkcdn.fecstec.com/1/20190107/08395280469bda.png",alt:""}}),n("div",{staticClass:"panel-hide-lay"},[n("van-row",[n("van-col",{attrs:{span:"12"}},[n("p",{staticClass:"panel-card-title"},[n("span",[e._v("英语阅读理解")])])]),n("van-col",{attrs:{span:"12"}},[n("p",{staticClass:"panel-card-title"},[n("span",[e._v("去复习")]),n("van-icon",{staticClass:"own-card-icon",attrs:{name:"arrow"}})],1)])],1)],1)])])],1)],1)])])])},M=[],N=(n("96cf"),n("3b8d")),P=n("bd86"),R=(n("3647"),n("ea47")),q=(n("480b"),n("a37c")),B=n("96ec"),$=n("1f39"),W=n("be6e"),z=n.n(W),Q={name:"home",components:(o={ConfirmDialog:B["a"],OrderDialog:$["a"]},Object(P["a"])(o,q["a"].name,q["a"]),Object(P["a"])(o,R["a"].name,R["a"]),Object(P["a"])(o,"Calendar",z.a),o),computed:Object(x["a"])({},Object(O["b"])(["userInfo"])),created:function(){},mounted:function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),data:function(){return{}},methods:{}},K=Q,V=(n("c8fb"),Object(T["a"])(K,U,M,!1,null,"76943058",null)),J=V.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user"},[n("van-skeleton",{attrs:{title:"",row:3,loading:e.loading}},[n("van-row",{staticClass:"user-poster"},[n("van-col",{attrs:{span:"8"}},[n("div",{staticClass:"poster"},[n("img",{staticClass:"poster-img",attrs:{src:e.userInfo.headimgurl,alt:""}})])]),n("van-col",{attrs:{span:"16"}},[n("van-row",{staticClass:"own-name-line"},[n("div",{staticClass:"poster-name"},[e._v(e._s(e.userInfo.nickname))])])],1)],1)],1),n("van-row",{staticClass:"user-attribute"},[n("van-col",{attrs:{span:12}},[n("div",{staticClass:"own-keep",staticStyle:{padding:"4vw"}},[n("i",{staticClass:"iconfont icon-drxx18",staticStyle:{"font-size":"14vw"}})])]),n("van-col",{attrs:{span:12}},[n("div",{staticClass:"own-keep"},[e._v("\n                "+e._s(e.readInfo.read_pages)+"\n            ")]),n("div",{staticClass:"own-keep-b"},[e._v("学习文章 / 篇")])])],1),n("van-cell-group",[n("van-cell",{attrs:{icon:"question-o",title:"学习排行",size:"large",to:"/rank","is-link":""}}),n("van-cell",{attrs:{icon:"service-o",title:"联系我们",size:"large",to:"/groupCode","is-link":""}})],1)],1)},G=[],X=(n("0653"),n("34e9")),F=(n("0209"),n("7d5e")),H={name:"center",components:(i={},Object(P["a"])(i,F["a"].name,F["a"]),Object(P["a"])(i,v["a"].name,v["a"]),Object(P["a"])(i,b["a"].name,b["a"]),Object(P["a"])(i,S["a"].name,S["a"]),Object(P["a"])(i,h["a"].name,h["a"]),Object(P["a"])(i,X["a"].name,X["a"]),i),data:function(){return{loading:!1,orderId:"",readInfo:""}},computed:Object(x["a"])({},Object(O["b"])(["userInfo"])),created:function(){this.loading=!0},mounted:function(){console.log(this.userInfo),this.getUserReadInfo(),this.loading=!1},methods:{logOut:function(){var e=this;this.$dialog.confirm({message:"确认要退出登录吗？"}).then(function(){localStorage.clear(),e.$router.replace("/logout")}).catch(function(){})},getUserReadInfo:function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.apis.user.getUserReadInfo({openid:this.userInfo.openid});case 2:t=e.sent,console.log(t),200===t.code&&(this.readInfo=t.data);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},Y=H,ee=(n("2290"),Object(T["a"])(Y,Z,G,!1,null,null,null)),te=ee.exports,ne=n("18a0"),ae=n.n(ne),oe="SET_FIRSTLINK",ie="SET_USERINFO",re="SET_TOKEN",ce="SET_NAVBAR",se="SET_WXREDIRECTURL",ue={state:{firstLink:"",showNavBar:!0,wxRedirectUrl:""},actions:{},mutations:(r={},Object(P["a"])(r,oe,function(e,t){localStorage.setItem("firstLink",t),e.firstLink=t}),Object(P["a"])(r,ce,function(e,t){e.showNavBar=t}),Object(P["a"])(r,se,function(e,t){e.wxRedirectUrl=t}),r)},le=ue,fe=n("5f87"),de={state:{userInfo:JSON.parse(localStorage.getItem("wxUserInfo")),token:Object(fe["a"])()},actions:{resetToken:function(e){var t=e.commit;return new Promise(function(e){t("SET_TOKEN",""),Object(fe["b"])(),e()})},loginByCode:function(e,t){var n=e.commit;return new Promise(function(e,a){_["a"].apis.public.getWxUserInfo(t).then(function(t){console.log(t);var a=t.data;localStorage.setItem("openid",a.userInfo.openid),n("SET_USERINFO",a.userInfo),n("SET_TOKEN",a.token),Object(fe["c"])(a.token),localStorage.setItem("wxUserInfo",JSON.stringify(a.userInfo)),e(t)}).catch(function(e){a(e)})})}},mutations:(c={},Object(P["a"])(c,ie,function(e,t){e.userInfo=t}),Object(P["a"])(c,re,function(e,t){console.log(t),e.token=t}),c)},me=de,pe={firstLink:function(e){return e.common.firstLink},userInfo:function(e){return e.user.userInfo},wxRedirectUrl:function(e){return e.common.wxRedirectUrl},token:function(e){return e.user.token},showNavBar:function(e){return e.common.showNavBar}},he=pe,ge=n("b054"),ve=n.n(ge);_["a"].use(O["a"]);var be=!0,we=new O["a"].Store({modules:{common:le,user:me},getters:he,plugins:be?[ve()()]:[]}),ke=we,Se=n("d225"),ye=n("bc3a"),_e=n.n(ye),Ie=void 0,Ce=!1,xe=!1,Oe="http://cnnapi.ngrok.tecfcs.com";-1!==window.location.origin.indexOf("http://cnnapi.ngrok.tecfcs.com")&&(Oe="http://cnnapi.ngrok.tecfcs.com"),_e.a.defaults.timeout=2e4,_e.a.interceptors.request.use(function(e){return ke.state.user.token&&(e.headers["wx-token"]=Object(fe["a"])()),xe&&l["a"].loading({mask:!0,duration:0}),e},function(e){return Ie&&Ce&&Ie.$toast("请求超时!"),xe&&l["a"].clear(),Promise.reject(e)}),_e.a.interceptors.response.use(function(e){xe&&l["a"].clear();var t=e.data.code||200;if(401===t&&(window.localStorage.clear(),Le.replace("/wxAuth")),e.data)return e.data},function(e){return xe&&l["a"].clear(),e.response?(console.error("response-error-data",e.response.data),null!=e.response.data.msg&&e.response.data.msg.length>0&&Ie&&Ce&&Ie.$toast(e.response.data.msg)):(console.error("Error",e.message),Ie&&Ce&&Ie.$toast("网络出错了，未请求到数据")),Promise.reject(e)});var je=function e(){Object(Se["a"])(this,e)};Object(P["a"])(je,"pureGet",function(e,t){return Ie=void 0,Ce=!1,xe=!1,_e()({method:"get",url:e,params:t,baseURL:Oe})}),Object(P["a"])(je,"purePost",function(e,t){return Ce=!1,xe=!1,_e()({method:"post",url:e,data:t,baseURL:Oe})}),Object(P["a"])(je,"get",function(e,t,n){return Ce=!0,xe=!0,null!=e&&(Ie=e),!1===n&&(Ce=n),_e()({method:"get",url:t,params:params,baseURL:Oe})}),Object(P["a"])(je,"post",function(e,t,n,a){return Ce=!0,xe=!0,null!=e&&(Ie=e),!1===a&&(Ce=a),_e()({method:"post",url:t,data:n,baseURL:Oe})});var Ae={initConfig:function(e){/micromessenger/i.test(navigator.userAgent)&&(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)&&(ke.state.firstLink?e=ke.state.firstLink:ke.commit("SET_FIRSTLINK",e)),je.purePost("http://cnnapi.ngrok.tecfcs.com/common/jsapi",{signurl:e}).then(function(e){e&&(ae.a.config({debug:!1,appId:e.appId,nonceStr:e.nonceStr,signature:e.signature,timestamp:e.timestamp,jsApiList:["checkJsApi","updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline","scanQRCode","playVoice","pauseVoice","onVoicePlayEnd","stopVoice","uploadVoice","chooseImage","previewImage","downloadImage","downloadVoice","uploadImage","chooseWXPay"]}),ae.a.ready(function(){console.log("conf ok"),ae.a.checkJsApi({jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","scanQRCode","playVoice","pauseVoice","onVoicePlayEnd","stopVoice","uploadVoice","chooseImage","previewImage","downloadImage","downloadVoice","uploadImage","chooseWXPay"],success:function(e){0!=e.checkResult.getLocation||alert("你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！")}})}),ae.a.error(function(e){console.log(e)}))}))},share:function(e,t,n,a,o){if(/micromessenger/i.test(navigator.userAgent)){var i=location.origin+"/";e&&(i=e);var r="微信公众号英文能力";t&&(r=t);var c="关注微信公众号英文能力坚持提高英语水平";n&&(c=n);var s="默认分享图片地址";a&&(s=a),ae.a.ready(function(){ae.a.updateAppMessageShareData({title:r,desc:c,link:i,imgUrl:s,success:function(){console.log("share success!")}}),ae.a.updateTimelineShareData({title:r,link:i,imgUrl:s,success:function(){console.log("share success!")}}),ae.a.onMenuShareAppMessage({title:r,desc:c,link:i,imgUrl:s,success:function(){console.log("share success!")}}),ae.a.onMenuShareTimeline({title:r,link:i,imgUrl:s,success:function(){console.log("share success!")}}),ae.a.hideMenuItems({menuList:["menuItem:favorite","menuItem:editTag","menuItem:delete","menuItem:originPage","menuItem:readMode","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:email","menuItem:share:brand","menuItem:share:qq","menuItem:share:QZone","menuItem:share:facebook","menuItem:share:weiboApp"]}),ae.a.error(function(e){console.log(e)})})}}},Te=(n("b54a"),n("28a5"),{wx_error:"",jsSDKAuth:"",shareSign:{appid:"",jsapi_ticket:"",nonceStr:"",signature:"",timestamp:"",url:""},defaultWxShareConfig:{title:"微信公众号英文能力",desc:"关注微信公众号英文能力坚持提高英语水平",link:location.href.split("#")[0],imgUrl:"https://res.wx.qq.com/a/wx_fed/weixin_portal/res/static/img/dNEBuK6.png",jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","hideMenuItems","closeWindow","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"],hideMenuList:["menuItem:favorite","menuItem:editTag","menuItem:delete","menuItem:originPage","menuItem:readMode","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:email","menuItem:share:brand","menuItem:share:qq","menuItem:share:QZone","menuItem:share:facebook","menuItem:share:weiboApp"]},wxShareConfig:{}});function De(e){this.config=e||Te}De.prototype.wxShareAuth=function(e){var t=this;if(e){var n={signurl:e};return console.log(t.config.jsSDKAuth),_e.a.post(t.config.jsSDKAuth,n).then(function(e){var n=e.appId,a=e.nonceStr,o=e.signature,i=e.timestamp;return t.config.shareSign.appid=n,t.config.shareSign.nonceStr=a,t.config.shareSign.signature=o,t.config.shareSign.timestamp=i,e}).catch(function(e){console.log(e.response)})}console.error("缺少授权页面url")},De.prototype.initWxShare=function(e){if(/micromessenger/i.test(navigator.userAgent)){/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)&&(ke.state.firstLink?e=ke.state.firstLink:ke.commit("SET_FIRSTLINK",e));var t=this;this.wxShareAuth(e).then(function(e){t.config.wxShareConfig=Object.assign({},t.config.defaultWxShareConfig),alert("vm"),t.configWXJSSDK()})}},De.prototype.updateWxShareConfig=function(e){if(console.log(e),e){var t=e.title,n=e.desc,a=e.link,o=e.imgUrl,i=e.jsApiList,r=e.hideMenuList,c=this.config.defaultWxShareConfig;this.config.wxShareConfig.title=t||c.title,this.config.wxShareConfig.desc=n||c.desc,this.config.wxShareConfig.link=a||c.link,this.config.wxShareConfig.imgUrl=o||c.imgUrl,this.config.wxShareConfig.jsApiList=i||c.jsApiList,this.config.wxShareConfig.hideMenuList=r||c.hideMenuList,this.startShare()}},De.prototype.resetWxShareConfig=function(){var e=this.config.defaultWxShareConfig,t=e.title,n=e.desc,a=e.link,o=e.imgUrl,i=e.jsApiList,r=e.hideMenuList;this.config.wxShareConfig.title=t,this.config.wxShareConfig.desc=n,this.config.wxShareConfig.link=a,this.config.wxShareConfig.imgUrl=o,this.config.wxShareConfig.jsApiList=i,this.config.wxShareConfig.hideMenuList=r,this.configWXJSSDK()},De.prototype.updateWxShareSign=function(e){},De.prototype.configWXJSSDK=function(){var e=this.config.shareSign,t=this.config.wxShareConfig;ae.a.config({debug:!1,appId:e.appid,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:t.jsApiList}),ae.a.ready(function(){console.log("conf ok"),ae.a.checkJsApi({jsApiList:t.jsApiList,success:function(e){0!=e.checkResult.getLocation||alert("你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！")}})}),ae.a.error(function(e){console.log(e)})},De.prototype.startShare=function(){if(/micromessenger/i.test(navigator.userAgent)){var e=this;ae.a.ready(function(){var t=e.config.wxShareConfig,n=t.title,a=t.desc,o=t.link,i=t.imgUrl,r=t.hideMenuList;ae.a.updateAppMessageShareData({title:n,desc:a,link:o,imgUrl:i,success:function(){alert("分享成功")}}),ae.a.onMenuShareAppMessage({title:n,desc:a,link:o,imgUrl:i,success:function(){alert("分享成功")},fail:function(){alert("分享失败")},cancel:function(){alert("取消分享")}}),ae.a.updateTimelineShareData({title:n,link:o,imgUrl:i,success:function(){alert("分享成功")},cancel:function(){alert("取消分享")}}),ae.a.onMenuShareTimeline({title:n,link:o,imgUrl:i,success:function(){alert("分享成功")},cancel:function(){alert("取消分享")}}),ae.a.onMenuShareQQ({title:n,link:o,imgUrl:i,success:function(){alert("分享成功")},cancel:function(){alert("取消分享")}}),ae.a.onMenuShareWeibo({title:n,link:o,imgUrl:i,success:function(){alert("分享成功")},cancel:function(){alert("取消分享")}}),ae.a.onMenuShareQZone({title:n,link:o,imgUrl:i,success:function(){alert("分享成功")},cancel:function(){alert("取消分享")}}),ae.a.hideMenuItems({menuList:r})})}};new De;_["a"].use(L["a"]);var Ee=new L["a"]({mode:"history",base:"/",scrollBehavior:function(e,t,n){if("articleList"===e.name||"learned"===e.name)return{x:0,y:0}},routes:[{path:"/",name:"home",component:J,meta:{keepAlive:!0,navShow:!0},beforeRouteEnter:function(e,t,n){n()}},{path:"/center",name:"center",component:te,meta:{keepAlive:!0,navShow:!0}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))},meta:{keepAlive:!0,navShow:!1}},{path:"/rank",name:"rank",component:function(){return n.e("chunk-4febc0dc").then(n.bind(null,"3a97"))},meta:{keepAlive:!1,navShow:!1}},{path:"/groupCode",name:"groupCode",component:function(){return n.e("chunk-2d224d70").then(n.bind(null,"e29f"))},meta:{keepAlive:!0,navShow:!1}},{path:"/article/:id",name:"article",component:function(){return n.e("chunk-311e7386").then(n.bind(null,"3ad6"))},meta:{keepAlive:!1,navShow:!1}},{path:"/articleList",name:"articleList",component:function(){return n.e("chunk-a02bf87c").then(n.bind(null,"7f05"))},meta:{keepAlive:!1,navShow:!1}},{path:"/learned",name:"learned",component:function(){return n.e("chunk-6630fb2e").then(n.bind(null,"39ed"))},meta:{keepAlive:!1,navShow:!1}},{path:"/payedArticle/:id",name:"payedArticle",component:function(){return n.e("chunk-22e066f2").then(n.bind(null,"3757"))},meta:{keepAlive:!1,navShow:!1}},{path:"/wxAuth",name:"wAuth",component:function(){return n.e("chunk-9088706c").then(n.bind(null,"c048"))},meta:{keepAlive:!1,navShow:!1}}]});Ee.beforeEach(function(e,t,n){if(/micromessenger/i.test(navigator.userAgent))if("wxAuth"!==e.name){var a=sessionStorage.getItem("wxUserInfo");if(a)n();else{sessionStorage.setItem("wxRedirectUrl",e.fullPath);var o="wx2bac5a2f552cd30b",i=encodeURIComponent("http://wedding.fecstec.com/wxAuth");-1!==window.location.origin.indexOf("http://wedding.fecstec.com")&&(o="wx2bac5a2f552cd30b",i=encodeURIComponent("http://wedding.fecstec.com/wxAuth")),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(o,"&redirect_uri=").concat(i,"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect")}}else n();else n()}),Ee.afterEach(function(e,t){Ae.initConfig(window.location.origin+""+e.fullPath)});var Le=Ee,Ue={getWxUserInfo:function(e){return je.pureGet("/common/authWechat",Object(x["a"])({},e))},getArticleDetail:function(e){return je.pureGet("/apiv1/article/detail",Object(x["a"])({},e))}},Me={createOrder:function(e){return je.post("/apiv1/order/createOrder",Object(x["a"])({},e))},createArticleOrder:function(e,t,n){return je.post(e,"/apiv1/order/createArticleOrder",Object(x["a"])({},n),t)},orderDoPay:function(e,t,n){return je.post(e,"/apiv1/order/doPay",Object(x["a"])({},n),t)},articleDoPay:function(e,t,n){return je.post(e,"/apiv1/order/articleDoPay",Object(x["a"])({},n),t)},articleDetail:function(e){return je.purePost("/apiv1/payed/article/detail",Object(x["a"])({},e))}},Ne={getUserReadInfo:function(e){return je.pureGet("/apiv1/user/readInfo",Object(x["a"])({},e))},setReadSeconds:function(e){return je.purePost("/apiv1/user/setReadSeconds",Object(x["a"])({},e))}},Pe={getArticleList:function(e){return je.pureGet("/apiv1/article/list",Object(x["a"])({},e))},getPayedArticleList:function(e){return je.pureGet("/apiv1/payed/article/list",Object(x["a"])({},e))},getArticleDetail:function(e){return je.pureGet("/apiv1/article/detail",Object(x["a"])({},e))}},Re={public:Ue,order:Me,user:Ne,article:Pe};_["a"].directive("resetPage",{inserted:function(e){document.body.addEventListener("focusout",function(){/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)&&setTimeout(function(){var e=document.documentElement.scrollTop||document.body.scrollTop||0;window.scrollTo(0,Math.max(e-1,0))},100)})}});n("3b2b"),n("4917");var qe=n("b0b4");String.prototype.ossImg=function(e){var t=this;if(Be.isNull(t))return"";var n=2;switch("undefined"!==typeof window&&(n=window.devicePixelRatio),e){case"banner":n<1.5?t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_lfit,w_563/quality,Q_85":1.5<=n<2.5?t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_lfit,w_750/quality,Q_90":n>=2.5&&(t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_lfit,w_750/quality,Q_95");break;case"thumb":n<1.5?t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_fill,w_163,h_105/quality,q_80":1.5<=n<2.5?t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_fill,w_244,h_158/quality,q_85":n>=2.5&&(t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_fill,w_325,h_210/quality,q_85");break;case"thumb-md":n<1.5?t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_fill,w_164,h_92/quality,q_80":1.5<=n<2.5?t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_fill,w_246,h_138/quality,q_85":n>=2.5&&(t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_fill,w_328,h_184/quality,q_85");break;case"avatar":n<1.5?t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_fill,w_44,h_44/quality,q_80":1.5<=n<2.5?t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_fill,w_66,h_66/quality,q_85":n>=2.5&&(t=t.replace("http:","")+"?x-oss-process=image/auto-orient,1/resize,m_fill,w_88,h_88/quality,q_85");break;default:t=t.replace("http:","");break}return t};var Be=function(){function e(){Object(Se["a"])(this,e)}return Object(qe["a"])(e,null,[{key:"loadStyle",value:function(e){var t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=e;var n=document.getElementsByTagName("head")[0];n.appendChild(t)}},{key:"isNull",value:function(e){return null==e||0===e.length||""===e}},{key:"isIdCard",value:function(e){return/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(e)}},{key:"isPhoneNum",value:function(e){return/^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/.test(e)}},{key:"hidePhoneNum",value:function(e){return e.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}},{key:"isMail",value:function(e){return/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(e)}},{key:"setTitle",value:function(e){document.title=e}},{key:"setCookie",value:function(e,t,n){var a=new Date;a.setTime(a.getTime()+24*n*60*60*1e3);var o="expires="+a.toUTCString();document.cookie=e+"="+t+"; "+o+"; path=/"}},{key:"getCookie",value:function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=t?unescape(t[2]):null}},{key:"clearCookie",value:function(e){this.setCookie(e,"",-1)}},{key:"setHistorySearchKeys",value:function(e){window.localStorage.setItem("historySearchKeys",JSON.stringify(e))}},{key:"getHistorySearchKeys",value:function(){return JSON.parse(window.localStorage.getItem("historySearchKeys"))}},{key:"showToast",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;e.Toast({message:t,position:"bottom",duration:n})}},{key:"bodyScroll",value:function(e){e.preventDefault()}},{key:"forbidBodyScroll",value:function(){document.getElementsByTagName("body")[0].addEventListener("touchmove",this.bodyScroll,{passive:!1})}},{key:"allowBodyScroll",value:function(){document.getElementsByTagName("body")[0].removeEventListener("touchmove",this.bodyScroll)}},{key:"getArrIndex",value:function(e,t){var n=e.length;while(n--)if(e[n]===t)return n;return-1}},{key:"resetPageInIOS",value:function(){document.activeElement.blur(),document.body.scrollTop=0,document.documentElement.scrollTop=0}},{key:"validatenull",value:function(e){if("boolean"==typeof e)return!1;if("number"==typeof e)return!1;if(e instanceof Array){if(0==e.length)return!0}else{if(!(e instanceof Object))return"null"==e||null==e||"undefined"==e||void 0==e||""==e;if("{}"===JSON.stringify(e))return!0}return!1}}]),e}(),$e=n("8cf7"),We=n.n($e),ze=n("3a34"),Qe=n.n(ze),Ke="",Ve=["1168543_ungozdnfdoq","1168543_1814p5905kj"],Je="//at.alicdn.com/t/font_$key.css",Ze="".concat(Ke,"/code"),Ge=Object({NODE_ENV:"production",BASE_URL:"/"});"development"==Ge.NODE_ENV?Ke="":"production"==Ge.NODE_ENV?Ke="":"test"==Ge.NODE_ENV&&(Ke="");var Xe=new Qe.a;t["default"]=Xe;_["a"].config.productionTip=!1,_["a"].prototype.apis=Re,_["a"].prototype.wxShare=Ae,_["a"].prototype.myUtils=Be,_["a"].prototype.$wx=ae.a,Object.keys(a).forEach(function(e){_["a"].prototype[e]=a[e]}),Ve.forEach(function(e){Be.loadStyle(Je.replace("$key",e))}),_["a"].use(s["a"]).use(u["a"]).use(l["a"]).use(f["a"]).use(d["a"]).use(m["a"]).use(p["a"]).use(h["a"]).use(g["a"]).use(v["a"]).use(b["a"]).use(w["a"]).use(k["a"]).use(S["a"]).use(y["a"]),_["a"].use(We.a,{iconType:"MaterialDesign"}),new _["a"]({router:Le,store:ke,render:function(e){return e(E)}}).$mount("#app")},"5c48":function(e,t,n){},"5f87":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return s});var a=n("a78e"),o=n.n(a),i="Admin-Token";function r(){return o.a.get(i)}function c(e){return o.a.set(i,e)}function s(){return o.a.remove(i)}},7189:function(e,t,n){},"7c55":function(e,t,n){"use strict";var a=n("5c48"),o=n.n(a);o.a},"96ec":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"van-fade"}},[e.confirmDialog.show?n("div",{staticClass:"confirmDialog",on:{click:e.closeMask}},[n("div",{staticClass:"mask"}),n("div",{staticClass:"dialogCon"},[e.confirmDialog.title?n("h5",[e._v(e._s(e.confirmDialog.title))]):e._e(),e.confirmDialog.msg?n("p",{staticClass:"msg van-hairline--bottom"},[e._v(e._s(e.confirmDialog.msg))]):e._e(),n("div",[n("button",{staticClass:"btn-cancel",on:{click:e.confirmDialog.cancelAction}},[e._v(e._s(e.confirmDialog.cancelText))]),n("button",{staticClass:"btn-confirm",on:{click:e.confirmDialog.confirmAction}},[e._v(e._s(e.confirmDialog.confirmText))])])])]):e._e()])},o=[],i={name:"ConfirmDialog",props:{confirmDialog:{type:Object,require:!0}},watch:{"confirmDialog.show":function(){this.confirmDialog.show?this.myUtils.forbidBodyScroll():this.myUtils.allowBodyScroll()}},methods:{closeMask:function(){this.$emit("closeShow",!0),this.confirmDialog.show=!1,this.myUtils.allowBodyScroll()}}},r=i,c=(n("2d7d"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"7ebd283b",null);t["a"]=s.exports},b45d:function(e,t,n){},c8fb:function(e,t,n){"use strict";var a=n("1cb2"),o=n.n(a);o.a}});
//# sourceMappingURL=app.941b5dfe.js.map