(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],v=0,d=[];v<r.length;v++)s=r[v],o[s]&&d.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("1356"),o=a.n(n);o.a},1356:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),o=a("bb71");a("da64");n["a"].use(o["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"back"},[a("v-app",{attrs:{dark:"",id:"comp"}},[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("Chaim Finson's Website  ")]),a("span",{staticClass:"font-weight-light"},[t._v("Built with Vue-NodeJS-MongoDB")])]),a("v-spacer"),a("v-btn",[a("span",{staticClass:"mr-2"},[t._v("Download my CV")])])],1),a("v-content",[a("Main")],1)],1)],1)},s=[],r=a("df4c"),l=a("bc3a"),c=a.n(l),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("sidebar"),n("v-container",{attrs:{"text-xs-center":""}},[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1)],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\r\n          Welcome to My Page\r\n        ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\r\n          Content coming soon...\r\n        ")])]),n("v-flex",{attrs:{"mb-5":"",xs12:""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("How this site was made and deployed")]),n("v-expansion-panel",[n("v-expansion-panel-content",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("Info")]),n("v-card",[n("v-card-text",[t._v("This site was created using vue-cli3 for the frontend, Vuetify was added from the getgo to style and expediate the development. In addtion\r\n             addition in order to write clean code with separate concerns, where each section of the app only deals with ONE task vue-compose was used. Similar to architechture in React's recompose library vue-compose\r\n             provides composable High Order Functions, where the logic and state is maintained there. The .vue files serve as the view and accept all data as props (with the exception of some local data needed for UI effects)\r\n         "),n("v-btn",[n("span",{staticClass:"mr-2 move"},[t._v("Click to see some code")])])],1)],1)],1)],1)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("On the Back End")]),n("v-layout",{attrs:{"justify-center":""}},[t._v("\r\n          The App uses a NodeJS server to communicate with mongoDB\r\n          "),n("v-expansion-panel",[n("v-expansion-panel-content",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("Info")]),n("v-card",[n("v-card-text",[t._v("\r\n            MongoDB Atlas was used to store information. The NodeJS server connects to the DB and exposes information through different routes provided to the Front End. \r\n         "),n("v-btn",[n("span",{staticClass:"mr-2 move"},[t._v("Click to see some code")])])],1)],1)],1)],1)],1)],1),n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),t._v("\r\n          This is a function which mutates the props then returns another value: "+t._s(t.customFunction())+"\r\n        "),t.List&&t.List.length?n("div",[n("h1",[t._v("This is Data from mongoDB Atlas: "+t._s(t.List))]),n("h2",[t._v("Currently the data only displays if running the server locally")])]):n("h1",[t._v("Loading...")]),t._v("\r\n        Here will be a loading component\r\n      ")])],1)],1)],1)},v=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{stateless:"",value:"true",fixed:"true",floating:"true",clipped:"true",app:"true"}},[a("v-list",[a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("home")])],1),a("v-list-tile-title",[t._v("Home")])],1),a("v-list-group",{attrs:{"prepend-icon":"account_circle",value:"true"}},[a("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-tile-title",[t._v("Users")])],1),a("v-list-group",{attrs:{"no-action":"","sub-group":"",value:"true"}},[a("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-tile-title",[t._v("Admin")])],1),a("v-list-tile",[a("v-list-tile-title",{domProps:{textContent:t._s("Hello")}}),a("v-list-tile-action",[a("v-icon",{domProps:{textContent:t._s("There")}})],1)],1)],1),a("v-list-group",{attrs:{"sub-group":"","no-action":""}},[a("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[a("v-list-tile-title",[t._v("Actions")])],1),a("v-list-tile",[a("v-list-tile-title",{domProps:{textContent:t._s("Boo")}}),a("v-list-tile-action",[a("v-icon",{domProps:{textContent:t._s("Ya!")}})],1)],1)],1)],1)],1)],1)},p=[],h={},f=h,m=a("2877"),b=a("6544"),g=a.n(b),_=a("132d"),x=a("8860"),y=a("56b0"),w=a("ba95"),V=a("40fe"),C=a("5d23"),T=a("f774"),O=Object(m["a"])(f,d,p,!1,null,null,null),j=O.exports;g()(O,{VIcon:_["a"],VList:x["a"],VListGroup:y["a"],VListTile:w["a"],VListTileAction:V["a"],VListTileTitle:C["a"],VNavigationDrawer:T["a"]});var L={props:["propsToPlayWith","customFunction","fetchList","List"],components:{sidebar:j},created(){this.fetchList()}},P=L,B=(a("6d64"),a("8336")),M=a("b0af"),S=a("99d9"),k=a("a523"),E=a("cd55"),A=a("49e2"),D=a("0e8f"),F=a("adda"),I=a("a722"),N=Object(m["a"])(P,u,v,!1,null,null,null),H=N.exports;g()(N,{VBtn:B["a"],VCard:M["a"],VCardText:S["a"],VContainer:k["a"],VExpansionPanel:E["a"],VExpansionPanelContent:A["a"],VFlex:D["a"],VImg:F["a"],VLayout:I["a"]});var J=Object(r["a"])(Object(r["b"])({List:{initialValue:[]},propsToPlayWith:{initialValue:"My intial Test Value"}}),Object(r["c"])(t=>({customFunction(){const e=t.propsToPlayWith+"Now with secondary value";return e},async fetchList(){const t=await c.a.get("url");this.$emit("List",t.data)}})))(H),W={name:"App",components:{Main:J},data(){return{}}},$=W,U=(a("034f"),a("7496")),G=a("549c"),R=a("9910"),Y=a("71d9"),q=a("2a7f"),z=Object(m["a"])($,i,s,!1,null,null,null),K=z.exports;g()(z,{VApp:U["a"],VBtn:B["a"],VContent:G["a"],VSpacer:R["a"],VToolbar:Y["a"],VToolbarTitle:q["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:t=>t(K)}).$mount("#app")},"6d64":function(t,e,a){"use strict";var n=a("7c43"),o=a.n(n);o.a},"7c43":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.07d1e22e.svg"}});
//# sourceMappingURL=app.176ef6ca.js.map