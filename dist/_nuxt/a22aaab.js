(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{346:function(t,e,n){"use strict";n.r(e);n(17),n(32);var o={name:"OpinionTab",computed:{blogs:function(){var t=this.$store.getters.getBlog,e=[];return t.forEach((function(t){"opinion"===t.metadata.tag&&e.push(t)})),{blogList:e}}}},r=n(55),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t.blogs.blogList?n("div",{staticClass:"grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8"},t._l(t.blogs.blogList,(function(t){return n("div",{key:t.metadata.tag},[n("keep-alive",[n("BlogCard",{directives:[{name:"show",rawName:"v-show",value:"opinion"===t.metadata.tag,expression:"blog.metadata.tag === 'opinion'"}],attrs:{blog:t}})],1)],1)})),0):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h2",{staticClass:"inline-block border-b-2 border-neutral-100 dark:border-neutral-800 max-w-max"},[t._v("\n      Opinion.\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);