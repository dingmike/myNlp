(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22e066f2"],{1437:function(t,e,i){"use strict";var a=i("c31d"),n=i("dab0"),s=i("a142"),r=i("4598"),o=i("7744"),c=i("dfaf"),l=i("9884"),d=Object(n["a"])("collapse-item"),u=d[0],h=d[1],p=["title","icon","right-icon"];e["a"]=u({mixins:[Object(l["a"])("vanCollapse")],props:Object(a["a"])({},c["a"],{name:[String,Number],disabled:Boolean,isLink:{type:Boolean,default:!0}}),data:function(){return{show:null,inited:null}},computed:{currentName:function(){return Object(s["b"])(this.name)?this.name:this.index},expanded:function(){var t=this;if(!this.parent)return null;var e=this.parent.value;return this.parent.accordion?e===this.currentName:e.some(function(e){return e===t.currentName})}},created:function(){this.show=this.expanded,this.inited=this.expanded},watch:{expanded:function(t,e){var i=this;null!==e&&(t&&(this.show=!0,this.inited=!0),Object(r["a"])(function(){var e=i.$refs,a=e.content,n=e.wrapper;if(a&&n){var s=a.clientHeight;if(s){var o=s+"px";n.style.height=t?0:o,Object(r["a"])(function(){n.style.height=t?o:0})}else i.onTransitionEnd()}}))}},methods:{onClick:function(){if(!this.disabled){var t=this.parent,e=t.accordion&&this.currentName===t.value?"":this.currentName;this.parent.switch(e,!this.expanded)}},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height=null:this.show=!1}},render:function(t){var e=this,i=this.disabled,n=this.expanded,s=p.reduce(function(t,i){return e.slots(i)&&(t[i]=function(){return e.slots(i)}),t},{});this.slots("value")&&(s.default=function(){return e.slots("value")});var r=t(o["a"],{attrs:{role:"button",tabindex:i?-1:0,"aria-expanded":String(n)},class:h("title",{disabled:i,expanded:n}),on:{click:this.onClick},scopedSlots:s,props:Object(a["a"])({},this.$props)}),c=this.inited&&t("div",{directives:[{name:"show",value:this.show}],ref:"wrapper",class:h("wrapper"),on:{transitionend:this.onTransitionEnd}},[t("div",{ref:"content",class:h("content")},[this.slots()])]);return t("div",{class:[h(),{"van-hairline--top":this.index}]},[r,c])}})},"342a":function(t,e,i){"use strict";i("68ef"),i("09fe"),i("bff0")},3757:function(t,e,i){"use strict";i.r(e);var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article"},[i("van-skeleton",{staticStyle:{"margin-top":"8vw"},attrs:{title:"",row:8,loading:t.loadingSkeleton}},[i("div",{staticClass:"article-title"},[t._v("\n      "+t._s(t.detail.article_title)+"\n    ")]),i("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[i("van-collapse-item",{attrs:{title:"原文",name:"1",size:"large"}},[i("div",{staticClass:"article-content",domProps:{innerHTML:t._s(t.detail.article_content)}})]),i("van-collapse-item",{attrs:{title:"翻译",name:"2",size:"large"}},[i("div",{staticClass:"article-translate",domProps:{innerHTML:t._s(t.detail.article_translate)}})]),i("van-collapse-item",{attrs:{title:"解析",name:"3",size:"large"}},[i("div",{domProps:{innerHTML:t._s(t.detail.article_analysis)}})])],1)],1)],1)},s=[],r=i("bd86"),o=(i("342a"),i("1437")),c=(i("5d17"),i("f9bd")),l=(i("7f7f"),i("0209"),i("7d5e")),d=i("cebc"),u=i("2f62"),h={name:"payedArticle",computed:Object(d["a"])({},Object(u["b"])(["userInfo"])),data:function(){return{orderId:"",loadingSkeleton:!0,activeNames:["1"],detailParams:{orderId:"",openid:"",payed:1},detail:"",loadingBtn:!1}},components:(a={},Object(r["a"])(a,l["a"].name,l["a"]),Object(r["a"])(a,c["a"].name,c["a"]),Object(r["a"])(a,o["a"].name,o["a"]),a),created:function(){this.detailParams.openid=this.userInfo.openid,this.detailParams.orderId=this.$route.params.id,console.log(this.orderId)},mounted:function(){this.articleDetail()},methods:{articleDetail:function(){var t=this;this.apis.order.articleDetail(this.detailParams).then(function(e){t.detail=e.data.article,t.loadingSkeleton=!1})}}},p=h,f=(i("c8d9"),i("2877")),m=Object(f["a"])(p,n,s,!1,null,null,null);e["default"]=m.exports},"5d17":function(t,e,i){"use strict";i("68ef")},b038:function(t,e,i){},bff0:function(t,e,i){},c8d9:function(t,e,i){"use strict";var a=i("b038"),n=i.n(a);n.a},f9bd:function(t,e,i){"use strict";var a=i("dab0"),n=i("9884"),s=Object(a["a"])("collapse"),r=s[0],o=s[1];e["a"]=r({mixins:[Object(n["b"])("vanCollapse")],props:{accordion:Boolean,value:[String,Number,Array],border:{type:Boolean,default:!0}},methods:{switch:function(t,e){this.accordion||(t=e?this.value.concat(t):this.value.filter(function(e){return e!==t})),this.$emit("change",t),this.$emit("input",t)}},render:function(t){return t("div",{class:[o(),{"van-hairline--top-bottom":this.border}]},[this.slots()])}})}}]);
//# sourceMappingURL=chunk-22e066f2.565d7016.js.map