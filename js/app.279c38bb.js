(function(t){function n(n){for(var i,s,o=n[0],l=n[1],r=n[2],v=0,p=[];v<o.length;v++)s=o[v],e[s]&&p.push(e[s][0]),e[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(n);while(p.length)p.shift()();return a.push.apply(a,r||[]),c()}function c(){for(var t,n=0;n<a.length;n++){for(var c=a[n],i=!0,o=1;o<c.length;o++){var l=c[o];0!==e[l]&&(i=!1)}i&&(a.splice(n--,1),t=s(s.s=c[0]))}return t}var i={},e={app:0},a=[];function s(n){if(i[n])return i[n].exports;var c=i[n]={i:n,l:!1,exports:{}};return t[n].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=t,s.c=i,s.d=function(t,n,c){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:c})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)s.d(c,i,function(n){return t[n]}.bind(null,i));return c},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/estrest/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=n,o=o.slice();for(var r=0;r<o.length;r++)n(o[r]);var u=l;a.push([0,"chunk-vendors"]),c()})({0:function(t,n,c){t.exports=c("56d7")},"0514":function(t,n,c){},"122c":function(t,n,c){"use strict";var i=c("7848"),e=c.n(i);e.a},1798:function(t,n,c){},"1e74":function(t,n,c){"use strict";var i=c("e71e"),e=c.n(i);e.a},"28bf":function(t,n,c){},"3bae":function(t,n,c){},"40f9":function(t,n,c){"use strict";var i=c("d6a7"),e=c.n(i);e.a},"496d":function(t,n,c){"use strict";var i=c("28bf"),e=c.n(i);e.a},"4fab":function(t,n,c){},"56d7":function(t,n,c){"use strict";c.r(n);c("cadf"),c("551c"),c("f751"),c("097d");var i=c("2b0e"),e=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{attrs:{id:"app"}},[c("StaticGrid"),c("transition",{attrs:{name:"loader"}},[t.loader||t.initialLoad?c("Loader",{attrs:{initialLoader:t.initialLoad}}):t._e()],1),c("section",{staticClass:"app-wrap"},[c("header",{staticClass:"navigation",class:{"leaving-nav":t.viewChange}},[c("div",{staticClass:"container"},[c("div",{staticClass:"row align-items-center"},[c("div",{staticClass:"col"},[c("a",{staticClass:"logo",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.goTo("/")}}},[c("Logo",{attrs:{width:t.logo.width,color:t.logo.color}})],1)]),c("div",{staticClass:"col text-right"},[c("a",{staticClass:"contacts letter-animation",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.goTo("/contact")}}},[c("span",[t._v("К")]),c("span",[t._v("О")]),c("span",[t._v("Н")]),c("span",[t._v("Т")]),c("span",[t._v("А")]),c("span",[t._v("К")]),c("span",[t._v("Т")]),c("span",[t._v("Ы")])])])])])]),c("div",{staticClass:"view",class:{leaving:t.viewChange,changeDelay:t.newDelay}},[c("router-view")],1)])],1)},a=[],s=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"static-grid"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col"}),c("div",{staticClass:"col"}),c("div",{staticClass:"col"}),c("div",{staticClass:"col"})])])])}],l={name:"StaticGrid"},r=l,u=c("2877"),v=Object(u["a"])(r,s,o,!1,null,null,null),p=v.exports,d=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"loader__outer-wrapper"},[c("div",{staticClass:"stick"}),c("div",{staticClass:"loader",class:{initialLoading:t.initialLoader}},[c("div",{staticClass:"col"}),c("div",{staticClass:"col"}),c("div",{staticClass:"col"}),c("div",{staticClass:"col hide-xs"}),c("div",{staticClass:"col hide-xs"}),c("div",{staticClass:"col hide-xs"})])])},f=[],h={name:"Loader",props:{initialLoader:Boolean}},_=h,C=(c("5850"),Object(u["a"])(_,d,f,!1,null,"770787ee",null)),m=C.exports,w=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",[c("svg",{staticStyle:{"enable-background":"new 0 0 252.1 85.2"},style:{fill:t.color,width:t.width},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",height:"85.2px",viewBox:"0 0 252.1 85.2","xml:space":"preserve"}},[c("path",{staticClass:"st0",attrs:{d:"M65,49.4l-2.6,1.4l-11.3-6l2.6-1.4L65,49.4z M28.8,43.4l-11.3,6l2.6,1.4l11.3-6L28.8,43.4z M77.6,56.1l-4.8-2.6\n\tl-2.6,1.4l6.3,3.3c1.2,0.7,2.1,1.4,2.5,2.2c0.2,0.4,0.3,0.8,0.3,1.2c0,0.4-0.1,0.8-0.3,1.2c-0.4,0.8-1.2,1.5-2.5,2.2L49,79.6\n\tc-2.1,1.1-4.9,1.7-7.7,1.7c-2.8,0-5.6-0.6-7.7-1.7L6.1,65c-1.2-0.7-2.1-1.4-2.5-2.2c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.4,0.1-0.8,0.3-1.2\n\tc0.4-0.8,1.2-1.5,2.5-2.2l6.3-3.3l-2.6-1.4L5,56.1c-1.7,0.9-2.8,2-3.5,3.2c-0.4,0.7-0.6,1.5-0.6,2.3c0,0.8,0.2,1.5,0.6,2.3\n\tc0.6,1.2,1.8,2.3,3.5,3.2l27.5,14.6c2.5,1.3,5.7,2,8.9,2s6.4-0.7,8.9-2l27.5-14.6c1.7-0.9,2.8-2,3.5-3.2c0.4-0.7,0.6-1.5,0.6-2.3\n\tc0-0.8-0.2-1.5-0.6-2.3C80.5,58.1,79.3,57,77.6,56.1z M6.1,39.3l7.6-4l-2.6-1.4L5,37.2c-1.7,0.9-2.8,2-3.5,3.2\n\tc-0.4,0.7-0.6,1.5-0.6,2.3c0,0.8,0.2,1.5,0.6,2.3c0.6,1.2,1.8,2.3,3.5,3.2l27.5,14.6c2.5,1.3,5.7,2,8.9,2s6.4-0.7,8.9-2l27.5-14.6\n\tc1.7-0.9,2.8-2,3.5-3.2c0.4-0.7,0.6-1.5,0.6-2.3c0-0.8-0.2-1.5-0.6-2.3c-0.6-1.2-1.8-2.3-3.5-3.2l-6.1-3.3l-2.6,1.4l7.6,4\n\tc1.2,0.7,2.1,1.4,2.5,2.2c0.2,0.4,0.3,0.8,0.3,1.2c0,0.4-0.1,0.8-0.3,1.2c-0.4,0.8-1.2,1.5-2.5,2.2L49,60.7\n\tc-2.1,1.1-4.9,1.7-7.7,1.7c-2.8,0-5.6-0.6-7.7-1.7L6.1,46c-1.2-0.7-2.1-1.4-2.5-2.2c-0.2-0.4-0.3-0.8-0.3-1.2s0.1-0.8,0.3-1.2\n\tC4,40.8,4.9,40,6.1,39.3z M214.4,50.6c1.1,1,1.6,2.3,1.6,3.9v4.8c0,1.4-0.6,2.6-1.7,3.6c-1.1,1-2.5,1.4-4,1.4c-1.6,0-3-0.5-4.1-1.4\n\tc-1.1-0.9-1.6-2.1-1.6-3.6c0-1.5,0.5-2.6,1.5-3.4c1-0.8,2.4-1.1,4.1-1.1h1.8v-0.3c0-0.7-0.2-1.2-0.5-1.5c-0.3-0.4-0.8-0.5-1.3-0.5\n\tc-1.1,0-2.5,0.2-4,0.7l-0.9-3.1c2-0.6,3.7-0.9,4.9-0.9C211.9,49.1,213.3,49.6,214.4,50.6z M212,57.6h-1.8c-1.1,0-1.6,0.6-1.6,1.7\n\tc0,0.4,0.1,0.8,0.4,1.2c0.3,0.3,0.7,0.5,1.3,0.5c0.5,0,1-0.2,1.3-0.5c0.3-0.3,0.5-0.7,0.5-1.1V57.6z M182.7,50.6\n\tc-1.1,1-1.7,2.4-1.7,4V64h3.9v-9.3c0-0.7,0.2-1.2,0.5-1.6c0.4-0.4,0.8-0.6,1.4-0.6c0.6,0,1.2,0.1,2,0.3l0.8-3.2\n\tc-0.9-0.3-1.8-0.4-2.8-0.4C185.2,49.1,183.8,49.6,182.7,50.6z M200.6,50.6c1.1,1,1.6,2.3,1.6,3.9v4.8c0,1.4-0.6,2.6-1.7,3.6\n\tc-1.1,1-2.5,1.4-4,1.4c-1.6,0-3-0.5-4.1-1.4c-1.1-0.9-1.6-2.1-1.6-3.6c0-1.5,0.5-2.6,1.5-3.4c1-0.8,2.4-1.1,4.1-1.1h1.8v-0.3\n\tc0-0.7-0.2-1.2-0.5-1.5c-0.3-0.4-0.8-0.5-1.3-0.5c-1.1,0-2.5,0.2-4,0.7l-0.9-3.1c2-0.6,3.7-0.9,4.9-0.9\n\tC198.1,49.1,199.5,49.6,200.6,50.6z M198.2,57.6h-1.8c-1.1,0-1.6,0.6-1.6,1.7c0,0.4,0.1,0.8,0.4,1.2c0.3,0.3,0.7,0.5,1.3,0.5\n\tc0.5,0,1-0.2,1.3-0.5c0.3-0.3,0.5-0.7,0.5-1.1V57.6z M161.1,50.6c1.1,1,1.6,2.3,1.6,3.9v4.8c0,1.4-0.6,2.6-1.7,3.6\n\tc-1.1,1-2.5,1.4-4,1.4c-1.6,0-3-0.5-4.1-1.4c-1.1-0.9-1.6-2.1-1.6-3.6c0-1.5,0.5-2.6,1.5-3.4c1-0.8,2.4-1.1,4.1-1.1h1.8v-0.3\n\tc0-0.7-0.2-1.2-0.5-1.5c-0.3-0.4-0.8-0.5-1.3-0.5c-1.1,0-2.5,0.2-4,0.7l-0.9-3.1c2-0.6,3.7-0.9,4.9-0.9\n\tC158.7,49.1,160.1,49.6,161.1,50.6z M158.8,57.6h-1.8c-1.1,0-1.6,0.6-1.6,1.7c0,0.4,0.1,0.8,0.4,1.2c0.3,0.3,0.7,0.5,1.3,0.5\n\tc0.5,0,1-0.2,1.3-0.5c0.3-0.3,0.5-0.7,0.5-1.1V57.6z M173.7,58.1c0,1.9-0.7,2.9-2,2.9c-0.6,0-1.1-0.2-1.5-0.7\n\tc-0.4-0.5-0.5-1.2-0.5-2.2v-8.6h-3.9v8.8c0,1.9,0.6,3.4,1.7,4.5c1.1,1.1,2.5,1.6,4.3,1.6c1.7,0,3.1-0.5,4.3-1.6\n\tc1.1-1.1,1.7-2.6,1.7-4.5v-8.8h-4V58.1z M249.4,49.1c-1.7,0-3.1,0.5-4.2,1.6s-1.7,2.4-1.7,4V64h3.9v-9.3c0-0.7,0.2-1.2,0.5-1.6\n\tc0.4-0.4,0.8-0.6,1.4-0.6c0.6,0,1.2,0.1,2,0.3l0.8-3.2C251.2,49.2,250.3,49.1,249.4,49.1z M224,45l-4,0.5v3.9h-2.4l0.6,2.6h1.8V64h4\n\tV52.1h2.3v-2.6H224V45z M112,34.9h-7.4v-4.3h5.8l0.2-3.3h-6v-4.2h7.1v-3.5h-11.2v18.8H112V34.9z M238.8,50.8\n\tc1.1,1.1,1.7,2.7,1.7,4.6V58c0,1.9-0.6,3.5-1.7,4.6c-1.1,1.1-2.6,1.7-4.5,1.7s-3.3-0.6-4.5-1.7c-1.1-1.1-1.7-2.7-1.7-4.6v-2.5\n\tc0-1.9,0.6-3.5,1.7-4.6c1.1-1.1,2.6-1.7,4.5-1.7S237.6,49.6,238.8,50.8z M236.6,55.6c0-2.1-0.8-3.1-2.3-3.1s-2.3,1-2.3,3.1v2.3\n\tc0,2.1,0.8,3.1,2.3,3.1s2.3-1,2.3-3.1V55.6z M155,23.8h-4v14.5h4V23.8z M116.4,37.1c-1.2-1.1-1.8-2.6-1.8-4.6v-2.8\n\tc0-1.9,0.6-3.4,1.7-4.5c1.1-1.1,2.5-1.6,4.2-1.6c1.7,0,3.1,0.5,4.2,1.6c1.1,1.1,1.7,2.4,1.7,4v3.2h-7.9v0.2c0,1.9,0.9,2.9,2.6,2.9\n\tc1.2,0,2.5-0.2,4-0.7l0.8,3.2c-1.6,0.6-3.1,0.9-4.8,0.9C119.2,38.7,117.6,38.2,116.4,37.1z M118.6,29.5h3.9v-0.4\n\tc0-0.6-0.2-1.2-0.5-1.6c-0.4-0.4-0.8-0.6-1.4-0.6c-0.6,0-1,0.2-1.4,0.6c-0.4,0.4-0.6,1-0.6,1.6V29.5z M125.9,50.7\n\tc1.1,1.1,1.7,2.4,1.7,4v3.2h-7.9V58c0,1.9,0.9,2.9,2.6,2.9c1.2,0,2.5-0.2,4-0.7l0.8,3.2c-1.6,0.6-3.1,0.9-4.8,0.9\n\tc-2,0-3.6-0.5-4.7-1.6c-1.2-1.1-1.8-2.6-1.8-4.6v-2.8c0-1.9,0.6-3.4,1.7-4.5c1.1-1.1,2.5-1.6,4.2-1.6\n\tC123.3,49.1,124.7,49.6,125.9,50.7z M123.6,54.7c0-0.6-0.2-1.2-0.5-1.6c-0.4-0.4-0.8-0.6-1.4-0.6c-0.6,0-1,0.2-1.4,0.6\n\tc-0.4,0.4-0.6,1-0.6,1.6v0.4h3.9V54.7z M110,56.4l3.6,7.6H109l-3.1-7h-1.4v7h-4.1V45.2h6.7c1.8,0,3.3,0.6,4.5,1.8\n\tc1.1,1.2,1.7,2.6,1.7,4.2c0,1.1-0.3,2.2-0.9,3.1C111.9,55.2,111.1,55.9,110,56.4z M109.2,51.2c0-0.7-0.2-1.3-0.6-1.8\n\tc-0.4-0.5-1-0.7-1.6-0.7h-2.4v5.1h2.4c0.7,0,1.2-0.2,1.6-0.7C109,52.6,109.2,51.9,109.2,51.2z M134.3,35c-0.3,0.2-0.8,0.3-1.3,0.3\n\tc-1.2,0-2.5-0.2-3.8-0.7l-0.8,3.2c1.6,0.6,3.2,0.9,4.6,0.9c1.8,0,3.3-0.4,4.3-1.3c1-0.9,1.5-2,1.5-3.2c0-0.9-0.2-1.8-0.6-2.4\n\tc-0.4-0.7-0.9-1.2-1.5-1.5c-0.6-0.3-1.1-0.6-1.7-0.8c-0.6-0.2-1.1-0.5-1.5-0.7c-0.4-0.3-0.6-0.6-0.6-0.9c0-0.7,0.4-1,1.3-1\n\tc0.8,0,1.9,0.2,3.1,0.6l0.8-3.3c-1.3-0.5-2.6-0.7-3.9-0.7c-1.6,0-2.9,0.4-3.9,1.2c-1,0.8-1.5,1.9-1.5,3.1c0,0.9,0.2,1.7,0.6,2.4\n\tc0.4,0.7,0.9,1.1,1.5,1.5c0.6,0.3,1.2,0.6,1.7,0.8c0.6,0.2,1.1,0.5,1.5,0.8c0.4,0.3,0.6,0.6,0.6,1C134.8,34.6,134.7,34.8,134.3,35z\n\t M142.4,38.4h4V26.5h2.3v-2.6h-2.3v-4.4l-4,0.5v3.9H140l0.6,2.6h1.8V38.4z M147.4,45l-4,0.5v3.9h-2.4l0.6,2.6h1.8V64h4V52.1h2.3\n\tv-2.6h-2.3V45z M137.8,55.9c-0.6-0.3-1.1-0.6-1.7-0.8c-0.6-0.2-1.1-0.5-1.5-0.7c-0.4-0.3-0.6-0.6-0.6-0.9c0-0.7,0.4-1,1.3-1\n\tc0.8,0,1.9,0.2,3.1,0.6l0.8-3.3c-1.3-0.5-2.6-0.7-3.9-0.7c-1.6,0-2.9,0.4-3.9,1.2c-1,0.8-1.5,1.9-1.5,3.1c0,0.9,0.2,1.7,0.6,2.4\n\tc0.4,0.7,0.9,1.1,1.5,1.5c0.6,0.3,1.2,0.6,1.7,0.8c0.6,0.2,1.1,0.5,1.5,0.8c0.4,0.3,0.6,0.6,0.6,1c0,0.3-0.2,0.6-0.5,0.8\n\tc-0.3,0.2-0.8,0.3-1.3,0.3c-1.2,0-2.5-0.2-3.8-0.7l-0.8,3.2c1.6,0.6,3.2,0.9,4.6,0.9c1.8,0,3.3-0.4,4.3-1.3s1.5-2,1.5-3.2\n\tc0-0.9-0.2-1.8-0.6-2.4C138.9,56.7,138.4,56.2,137.8,55.9z M153,21.9c0.6,0,1.1-0.2,1.6-0.7c0.4-0.4,0.7-0.9,0.7-1.5\n\tc0-0.6-0.2-1.1-0.7-1.5c-0.4-0.4-1-0.6-1.6-0.6c-0.6,0-1.1,0.2-1.6,0.6s-0.7,0.9-0.7,1.5c0,0.6,0.2,1.1,0.7,1.6\n\tC151.8,21.7,152.3,21.9,153,21.9z M78.2,27.6L49.9,42.7c-4.7,2.5-12.4,2.5-17.1,0L4.4,27.6c-4.7-2.5-4.7-6.6,0-9.1L32.7,3.4\n\tc4.7-2.5,12.4-2.5,17.1,0l28.3,15.1C82.9,21,82.9,25.1,78.2,27.6z M43.3,15.5l3.9,2.1c-0.2-0.4-0.7-0.8-1.4-1.2\n\tC45,15.9,44.2,15.7,43.3,15.5z M40.2,15.5l3.6,1.9l3.4,1.8c0.1-0.2,0.1-0.4,0.2-0.6c0,0,0-0.1,0-0.1l-5.9-3.1l-0.1,0\n\tC41,15.4,40.6,15.4,40.2,15.5z M44.7,18.7c0,0,0,0.1,0,0.1c-0.1,0.2-0.2,0.3-0.3,0.5l2.1,1.1c0.2-0.2,0.4-0.4,0.5-0.6L44.7,18.7z\n\t M41.8,21.1l-0.2,0.1l1.8,1l1.8,0.1l-2.8-1.5L41.8,21.1z M38.1,16l1.9,1c0.4-0.1,0.8-0.2,1.1-0.2l-2.1-1.1\n\tC38.7,15.8,38.4,15.9,38.1,16z M36.8,16.6l-0.4,0.2l1.8,1c0.3-0.1,0.6-0.3,0.8-0.4l-1.9-1C37.1,16.5,37,16.5,36.8,16.6L36.8,16.6z\n\t M34.9,17.6l1.8,1l0.2-0.1l0.5-0.3l-1.8-1l-0.5,0.3L34.9,17.6z M48.3,26.9L48,26.7L46.7,26l-0.2-0.1L46.2,26l-4.9,2.6l-5-2.7\n\tl4.9-2.6l0.2-0.1l-0.2-0.1l-0.7-0.4l-0.7-0.4l-0.2-0.1l-0.2,0.1L34.4,25l-4.9-2.6l4.9-2.6l0.2-0.1l-0.2-0.1l-1.3-0.7l-0.2-0.1\n\tl-0.2,0.1L26,22.3l-0.2,0.1l0.2,0.1l14.9,7.9l0.2,0.1l0.2-0.1L48,27L48.3,26.9z M48.8,22.5l-5-2.7c-0.2,0.2-0.4,0.3-0.7,0.5l3.9,2.1\n\tL48.8,22.5z M52.3,22.8l-3.2-1.7l-1.8-0.1l3.2,1.7L52.3,22.8z M55.7,22.9l-3-1.6l-1.8-0.1l3.2,1.7l1.3,0.1l0.2,0L55.7,22.9\n\tL55.7,22.9z M57.2,22.1l-1-0.6l-1.8-0.1l2,1.1L57.2,22.1z M58,21.7L58,21.7L58,21.7L58,21.7z"}})])])},b=[],g={name:"Logo",props:{width:String,color:String}},M=g,x=(c("6274"),Object(u["a"])(M,w,b,!1,null,"55ebeeb0",null)),L=x.exports,y={name:"App",data:function(){return{initialLoad:!0,loader:!1,viewChange:!1,newDelay:!1,currentView:this.$router.currentRoute.fullPath,logo:{width:"140px",color:"#fff"}}},mounted:function(){this.initialLoad=!1,window.innerWidth<768&&(this.logo.color="#000")},methods:{changeLogoColor:function(t){this.logo.color=t},goTo:function(t){var n=this;t!==this.currentView&&(this.loader=!0,this.viewChange=!0,this.newDelay=!0,setTimeout(function(){n.loader=!1},1500),setTimeout(function(){n.currentView=t,n.$router.push(t),n.viewChange=!1},1700))}},components:{StaticGrid:p,Loader:m,Logo:L}},k=y,z=(c("5c0b"),Object(u["a"])(k,e,a,!1,null,null,null)),O=z.exports,$=c("8c4f"),S=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"main"},[t.showCube?c("Cube"):t._e(),c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-1"}),c("div",{staticClass:"col-sm-12 col-md-6"},[c("div",{staticClass:"about__img-wrap"},[c("SlickCarousel")],1)]),t._m(0)])])],1)},V=[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"col"},[c("div",{staticClass:"about__info slide-to-left--animation"},[c("span",[t._v("РЕАЛИЗУЕМ ПРОЕКТЫ,")]),c("span",[t._v("КОТОРЫЕ ПОДГОНЯЮТ")]),c("span",[t._v("ВРЕМЯ ВПЕРЕД")])])])}],j=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{class:{initialLoading:t.initialLoader},attrs:{id:"cube"}})},E=[],T={name:"Cube",props:{initialLoader:Boolean}},I=T,N=(c("1e74"),Object(u["a"])(I,j,E,!1,null,null,null)),G=N.exports,D=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"image__reveal",class:{out:!t.visible}},[i("div",{staticClass:"reveal__outer-wrapper"},[i("div",{staticClass:"reveal__inner-wrapper"},[i("slick",{ref:"slick",attrs:{options:t.slickOptions}},[i("img",{attrs:{width:"100%",src:c("c510")}}),i("img",{attrs:{width:"100%",src:c("8d88")}}),i("img",{attrs:{width:"100%",src:c("880b")}})])],1)]),i("div",{staticClass:"slick--buttons"},[i("SlickButtons")],1)])},F=[],W=c("7ecd"),B=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",[c("button",{staticClass:"component-icon-arrow icon-arrow--black icon-arrow--left",on:{click:function(n){return n.preventDefault(),t.prev()}}},[c("span",{staticClass:"icon-arrow__line"}),t._m(0)]),c("button",{staticClass:"component-icon-arrow icon-arrow--black icon-arrow--right",on:{click:function(n){return n.preventDefault(),t.next()}}},[c("span",{staticClass:"icon-arrow__line"}),t._m(1)])])},P=[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("span",{staticClass:"icon-arrow__peak"},[c("i",{staticClass:"peak__first"}),c("i",{staticClass:"peak__second"})])},function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("span",{staticClass:"icon-arrow__peak"},[c("i",{staticClass:"peak__first"}),c("i",{staticClass:"peak__second"})])}],R={name:"SlickButtons",methods:{next:function(){this.$parent.next()},prev:function(){this.$parent.prev()}}},A=R,H=(c("f74d"),Object(u["a"])(A,B,P,!1,null,"549e4a1a",null)),J=H.exports,K={name:"SlickCarousel",data:function(){return{visible:!1,slickOptions:{slidesToShow:1,slidesToScroll:1}}},components:{Slick:W["a"],SlickButtons:J},methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},onWaypoint:function(t){var n=t.going;t.direction;n===this.$waypointMap.GOING_IN&&(this.visible=!0)}}},q=K,Q=(c("bb81"),Object(u["a"])(q,D,F,!1,null,null,null)),U=Q.exports,X={name:"Main",data:function(){return{showCube:!1}},methods:{next:function(){this.$refs.slick.next()}},mounted:function(){this.showCube=!0},components:{Cube:G,SlickCarousel:U}},Y=X,Z=(c("40f9"),Object(u["a"])(Y,S,V,!1,null,"ed22bca8",null)),tt=Z.exports,nt=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",[c("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.contactFirst,options:t.intersectionOptions},expression:"{ active: true, callback: contactFirst, options: intersectionOptions }"}],staticClass:"contact__first"},[t.showCube?c("Cube"):t._e(),c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-1 hide-xs"}),c("div",{staticClass:"col-sm-12 col-md-6"},[c("ImageR")],1),t._m(0)])])],1),c("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.contactForm,options:t.intersectionOptions},expression:"{ active: true, callback: contactForm, options: intersectionOptions }"}]},[c("div",{staticClass:"contact__form"},[c("div",{staticClass:"container"},[c("div",{staticClass:"row"},[t._m(1),c("div",{staticClass:"col-sm-12 col-md-6 no-padding"},[c("Form")],1)])])])])])},ct=[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"col"},[c("div",{staticClass:"contacts__info"},[c("p",[t._v("ЗВОНИТЕ И РАССКАЖИТЕ О"),c("br"),t._v("ВАШИХ ИДЕЯХ.")]),c("p",{staticClass:"contacts__info--mobile"},[t._v("\n              +375 (29) 631-01-75"),c("br"),t._v("\n              +375 (29) 645-63-85\n            ")]),c("p",{staticClass:"contacts__info--message"},[t._v("\n              Оставьте ваши контакты, если\n              сейчас неудобно говорить.\n            ")])])])},function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"col-sm-12 col-md-6 no-padding"},[c("div",{staticClass:"contact__form--info"},[c("div",{staticClass:"info-title"},[c("p",[t._v("НАПИШИТЕ НИЖЕ ВАШИ ИМЯ, ФАМИЛИЮ,"),c("br"),t._v("НОМЕР ТЕЛЕФОНА И ВОПРОСЫ."),c("br"),t._v("ПЕРЕЗВОНИМ И ОТВЕТИМ НА КАЖДЫЙ.")])]),c("div",{staticClass:"social"},[c("a",{attrs:{href:"#"}},[t._v("FACEBOOK")]),c("a",{attrs:{href:"#"}},[t._v("INSTAGRAM")])])])])}],it=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint,options:t.intersectionOptions},expression:"{ active: true, callback: onWaypoint, options: intersectionOptions }"}],staticClass:"image__reveal",class:{out:!t.visible}},[t._m(0)])},et=[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"reveal__outer-wrapper"},[c("div",{staticClass:"reveal__inner-wrapper"},[c("span")])])}],at={name:"ImageR",data:function(){return{visible:!1,slickOptions:{slidesToShow:1,slidesToScroll:1}}},methods:{next:function(){this.$refs.slick.next()},prev:function(){this.$refs.slick.prev()},onWaypoint:function(t){var n=t.going;t.direction;n===this.$waypointMap.GOING_IN&&(this.visible=!0,console.log("hi"))}}},st=at,ot=(c("9e90"),Object(u["a"])(st,it,et,!1,null,null,null)),lt=ot.exports,rt=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("form",{attrs:{action:"#"}},[c("div",{staticClass:"row"},[c("div",{staticClass:"col"},[c("input",{attrs:{type:"text",placeholder:"ИМЯ"}})]),c("div",{staticClass:"col"},[c("input",{attrs:{type:"text",placeholder:"ФАМИЛИЯ"}})])]),c("div",{staticClass:"row mt-60"},[c("div",{staticClass:"col"},[c("input",{attrs:{type:"tel",placeholder:"ТЕЛЕФОН"}})])]),c("div",{staticClass:"row mt-60"},[c("div",{staticClass:"col"},[c("input",{attrs:{type:"tel",placeholder:"СООБЩЕНИЕ"}})])]),c("button",{staticClass:"mt-60",attrs:{type:"submit"}},[t._v("ОТПРАВИТЬ")])])}],vt={name:"Form"},pt=vt,dt=(c("122c"),Object(u["a"])(pt,rt,ut,!1,null,"e1a25ffe",null)),ft=dt.exports,ht={name:"Contact",components:{Cube:G,ImageR:lt,Form:ft},data:function(){return{showCube:!1,intersectionOptions:{root:null,rootMargin:"100px",threshold:1}}},props:{name:String},methods:{contactForm:function(t){var n=t.going,c=t.direction;window.innerWidth>767&&n===this.$waypointMap.GOING_IN&&c===this.$waypointMap.DIRECTION_TOP&&this.$parent.changeLogoColor("#000")},contactFirst:function(t){var n=t.going,c=t.direction;window.innerWidth>767&&n===this.$waypointMap.GOING_IN&&c===this.$waypointMap.DIRECTION_BOTTOM&&this.$parent.changeLogoColor("#fff")}},mounted:function(){this.showCube=!0}},_t=ht,Ct=(c("496d"),Object(u["a"])(_t,nt,ct,!1,null,"03c6fa6c",null)),mt=Ct.exports;i["a"].use($["a"]);var wt=new $["a"]({mode:"history",base:"/estrest/",routes:[{path:"/",name:"Main",component:tt},{path:"/contact",name:"about",component:mt}]}),bt=c("d740"),gt=c.n(bt);i["a"].use(gt.a),i["a"].config.productionTip=!1,new i["a"]({router:wt,render:function(t){return t(O)}}).$mount("#app")},5850:function(t,n,c){"use strict";var i=c("0514"),e=c.n(i);e.a},"5c0b":function(t,n,c){"use strict";var i=c("5e27"),e=c.n(i);e.a},"5e27":function(t,n,c){},6274:function(t,n,c){"use strict";var i=c("3bae"),e=c.n(i);e.a},7848:function(t,n,c){},"880b":function(t,n,c){t.exports=c.p+"img/slide3.47cd4276.jpg"},"8d88":function(t,n,c){t.exports=c.p+"img/slide2.29cc3871.jpg"},"9a70":function(t,n,c){},"9e90":function(t,n,c){"use strict";var i=c("9a70"),e=c.n(i);e.a},bb81:function(t,n,c){"use strict";var i=c("1798"),e=c.n(i);e.a},c510:function(t,n,c){t.exports=c.p+"img/slide1.9091a9b9.jpg"},d6a7:function(t,n,c){},e71e:function(t,n,c){},f74d:function(t,n,c){"use strict";var i=c("4fab"),e=c.n(i);e.a}});
//# sourceMappingURL=app.279c38bb.js.map