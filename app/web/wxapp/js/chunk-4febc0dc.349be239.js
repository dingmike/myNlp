(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4febc0dc"],{"3a97":function(e,t,a){"use strict";a.r(t);var n,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("van-skeleton",{attrs:{title:"",row:3,loading:e.loading}},[a("van-row",{staticClass:"user-poster"},[a("van-col",{attrs:{span:"8"}},[a("div",{staticClass:"poster"},[a("img",{attrs:{src:e.userInfo.headimgurl,alt:""}})]),a("div",[e._v(e._s(e.userInfo.nickname))])]),a("van-col",{attrs:{span:"16"}},[a("van-row",{staticClass:"own-name-line"},[a("div",{staticClass:"poster-name"},[e._v("Fans ZX")])])],1)],1)],1)],1)},o=[],r=(a("96cf"),a("3b8d")),c=(a("a481"),a("cebc")),i=a("bd86"),u=(a("0653"),a("34e9")),d=(a("c194"),a("7744")),l=(a("c3a6"),a("ad06")),f=(a("81e6"),a("9ffb")),p=(a("7f7f"),a("4d48"),a("d1e1")),h=a("2f62"),m={components:(n={},Object(i["a"])(n,p["a"].name,p["a"]),Object(i["a"])(n,f["a"].name,f["a"]),Object(i["a"])(n,l["a"].name,l["a"]),Object(i["a"])(n,d["a"].name,d["a"]),Object(i["a"])(n,u["a"].name,u["a"]),n),data:function(){return{loading:!1,orderId:"",readInfo:""}},computed:Object(c["a"])({},Object(h["b"])(["userInfo"])),created:function(){this.loading=!0},mounted:function(){console.log(this.userInfo),this.getUserReadInfo(),this.loading=!1},methods:{logOut:function(){var e=this;this.$dialog.confirm({message:"确认要退出登录吗？"}).then(function(){localStorage.clear(),e.$router.replace("/logout")}).catch(function(){})},getUserReadInfo:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.apis.user.getUserReadInfo({openid:this.userInfo.openid});case 2:t=e.sent,console.log(t),200===t.code&&(this.readInfo=t.data);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},b=m,g=(a("bd67"),a("2877")),v=Object(g["a"])(b,s,o,!1,null,null,null);t["default"]=v.exports},a2c4:function(e,t,a){},bd67:function(e,t,a){"use strict";var n=a("a2c4"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-4febc0dc.349be239.js.map