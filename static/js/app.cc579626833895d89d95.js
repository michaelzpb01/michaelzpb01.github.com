webpackJsonp([12],{0:function(t,e){},"5OHe":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("IvJb"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("vSla")({name:"app"},i,!1,function(t){n("rdq3")},null,null).exports,c=n("OolZ"),l=n("zO6J");o.default.use(l.a);var u=[{path:"/",name:"Welcome",component:function(t){return n.e(2).then(function(){var e=[n("F+FH")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SingIn",name:"SingIn",component:function(t){return n.e(9).then(function(){var e=[n("OL2l")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/SingUp",name:"SingUp",component:function(t){return n.e(5).then(function(){var e=[n("ns5i")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/canNotLogIn",name:"canNotLogIn",component:function(t){return n.e(3).then(function(){var e=[n("RCHU")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/logIn",name:"logIn",component:function(t){return n.e(0).then(function(){var e=[n("PTNA")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/Musical",name:"Musical",component:function(t){return n.e(1).then(function(){var e=[n("Anp4")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/genres",name:"genres",component:function(t){return n.e(10).then(function(){var e=[n("snOB")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],r=new l.a({linkActiveClass:"active",routes:u}),p=n("DMPO"),h=n.n(p),s={_:function(t){var e=[];if(document.querySelectorAll)e=document.querySelectorAll(t);else{for(var n=document.styleSheets[0]||document.createStyleSheet(),o=0,i=(t=t.split(",")).length;o<i;o++)n.addRule(t[o],"Barret:Lee");for(o=0,i=document.all.length;o<i;o++){var a=document.all[o];a.currentStyle.Barret&&e.push(a)}n.removeRule(0)}if(e.item){var c=[];for(o=0,i=e.length;o<i;o++)c.push(e.item(o));e=c}return e},scaleImg:function(){console.log(this);for(var t=0;t<this.length;t++)this[t].onload=function(){var t=this,e=function(){var e=parseFloat($(t).parent().css("width").match(/\d+/g)),n=parseFloat($(t).parent().css("height").match(/\d+/g)),o=new Image;o.src=t.src;var i=o.width,a=o.height;return{left:-(n*i/a-e)/2,top:-(e*a/i-n)/2,imgw:i,imgh:a,boxw:e,boxh:n}},n=e();n.imgw>n.imgh?(this.style.height="100%",$(this).width()<n.boxw?this.style.width="100%":this.style.marginLeft=e().left+"px"):(this.style.width="100%",this.style.marginTop=e().top+"px")}}},m=(n("rCZX"),n("5OHe"),n("U91h"),n("Wtgt"),n("wSez"));o.default.use(c.a),o.default.use(h.a),o.default.component(m.Swipe.name,m.Swipe),o.default.component(m.SwipeItem.name,m.SwipeItem),o.default.component(m.CellSwipe.name,m.CellSwipe),o.default.component(m.Cell.name,m.Cell),o.default.component(m.Checklist.name,m.Checklist),o.default.component(m.Popup.name,m.Popup),o.default.component("header_v",function(t){return n.e(8).then(function(){var e=[n("hxP8")];t.apply(null,e)}.bind(this)).catch(n.oe)}),o.default.component("titleBar",function(t){return n.e(4).then(function(){var e=[n("WoPn")];t.apply(null,e)}.bind(this)).catch(n.oe)}),o.default.component("musicList",function(t){return n.e(7).then(function(){var e=[n("yoPz")];t.apply(null,e)}.bind(this)).catch(n.oe)}),o.default.prototype._=s,o.default.prototype.Toast=m.Toast,o.default.config.productionTip=!1,new o.default({el:"#app",router:r,template:"<App/>",components:{App:a}})},U91h:function(t,e){},Wtgt:function(t,e){},rCZX:function(t,e){function n(){document.documentElement.style.fontSize=document.documentElement.clientWidth/375*100/2+"px"}document.documentElement.clientWidth;n(),window.addEventListener("resize",function(){document.documentElement.clientWidth,n()},!1)},rdq3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cc579626833895d89d95.js.map