(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{353:function(e,t,n){"use strict";var l=n(4);l="default"in l?l.default:l;var c="2.2.2";/^2\./.test(l.version)||l.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+l.version);var o="_vue_clickaway_handler";function d(e,t,n){r(e);var l=n.context,c=t.value;if("function"==typeof c){var d=!1;setTimeout((function(){d=!0}),0),e[o]=function(t){var path=t.path||(t.composedPath?t.composedPath():void 0);if(d&&(path?path.indexOf(e)<0:!e.contains(t.target)))return c.call(l,t)},document.documentElement.addEventListener("click",e[o],!1)}}function r(e){document.documentElement.removeEventListener("click",e[o],!1),delete e[o]}var v={bind:d,update:function(e,t){t.value!==t.oldValue&&d(e,t)},unbind:r},f={directives:{onClickaway:v}};t.version=c,t.directive=v,t.mixin=f},380:function(e,t,n){"use strict";n.r(t);var l=n(329),c={mixins:[n(353).mixin],components:{MenuIcon:l.r,XIcon:l.v},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen},close:function(){console.log("clicked away"),this.isOpen=!1}}},o=n(55),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.close,expression:"close"}],staticClass:"bg-white dark:bg-black"},[n("div",{staticClass:"w-full fixed z-50 backdrop-filter backdrop-blur-2xl mx-auto px-4 sm:px-6 lg:px-8"},[n("div",{staticClass:"flex items-center justify-between w-full h-16"},[n("Logo"),e._v(" "),n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"flex-shrink-0"},[n("div",{staticClass:"hidden md:inline-flex"},[n("div",{staticClass:"flex items-center justify-between space-x-4"},[e._t("default")],2)])])]),e._v(" "),n("div",{staticClass:"flex justify-end md:hidden w-full"},[n("button",{staticClass:"inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white dark:hover:bg-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white",on:{click:e.toggle}},[n("span",{staticClass:"sr-only"},[e._v("Open main menu")]),e._v(" "),e.isOpen?n("x-icon",{staticClass:"text-black dark:text-white h-6 w-6",attrs:{size:"1x"}}):n("menu-icon",{staticClass:"text-black dark:text-white h-6 w-6",attrs:{size:"1x"}})],1)])],1),e._v(" "),n("div",{staticClass:"relative md:hidden",class:{relative:e.isOpen,hidden:!e.isOpen}},[n("div",{staticClass:"-z-1 bg-black w-full h-full opacity-50 m-0 p-0"})]),e._v(" "),n("div",{staticClass:"w-full fixed md:hidden shadow bg-white dark:bg-black",class:{relative:e.isOpen,hidden:!e.isOpen}},[n("div",{staticClass:"z-50 backdrop-filter backdrop-blur-3xl rounded-xl border border-neutral-100 dark:border-2 dark:border-neutral-800 shadow-lg absolute w-full px-2 py-2 mt-4 space-y-1"},[e._t("default")],2)])])])])}),[],!1,null,null,null);t.default=component.exports}}]);