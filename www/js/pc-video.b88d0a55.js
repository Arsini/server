(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pc-video"],{"302b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"video",attrs:{flex:""}},[i("div",{staticClass:"left"},[i("video",{attrs:{id:"videoElement",width:"860",height:"484",controls:""}}),i("ul",{staticClass:"ep",attrs:{flex:""}},t._l(30,(function(e){return i("li",{key:e},[t._v(t._s(e))])})),0),i("h3",{staticClass:"name"},[t._v("《"+t._s(t.current)+"》")]),i("p",{staticClass:"des"},[t._v("简介：不久的未来，人类的世界早已拥挤不堪，迈向星河、寻找新家园的行动迫在眉捷。正当一切有条不紊的推进之时，月相异动，脚下的大地爆发了长达数十年剧烈的地质变化，人类在这场浩劫中所剩无几。当天地逐渐恢复平静，人们从废墟和深渊中重新踏上了这片熟悉而又陌生的大地。习惯了...")])]),i("div",{staticClass:"right",attrs:{"flex-box":"1"}},[i("ul",{staticClass:"video_content",attrs:{flex:""}},t._l(t.list,(function(e){return i("li",{key:e.fileName,attrs:{"flex-box":"1"},on:{click:function(i){return t.play(e)}}},[i("div",{staticClass:"video_box"},[i("img",{attrs:{src:""}}),i("p",[t._v(t._s(e.fileName))])])])})),0)])])},a=[],n=(i("ac1f"),i("1276"),i("1947")),l={props:[],data:function(){return{list:[],current:"神探夏洛克",flvPlayer:""}},created:function(){this.getVideo()},beforeDestroy:function(){},methods:{getVideo:function(){var t=this;this.$http.get("/video").then((function(e){t.list=e.list}))},play:function(t){var e=t.fileName,i=e.split(".");this.current=i[0];var s=document.getElementById("videoElement");this.flvPlayer=n["a"].createPlayer({type:i[1],url:"/uploads/video/".concat(e)}),this.flvPlayer.attachMediaElement(s),this.flvPlayer.load()}}},r={mixins:[l],data:function(){return{}},created:function(){}},c=r,o=(i("41db"),i("2877")),u=Object(o["a"])(c,s,a,!1,null,"5483b456",null);e["default"]=u.exports},"41db":function(t,e,i){"use strict";var s=i("7a33"),a=i.n(s);a.a},"7a33":function(t,e,i){}}]);