(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{345:function(e,t,r){"use strict";r.r(t);r(17),r(32);var n={name:"DevelopmentTab",computed:{blogs:function(){var e=this.$store.getters.getBlog,t=[];return e.forEach((function(e){"development"===e.metadata.tag&&t.push(e)})),{blogList:t}}}},o=r(55),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v(" "),e.blogs.blogList?r("div",{staticClass:"grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8"},e._l(e.blogs.blogList,(function(e){return r("div",{key:e.metadata.tag},[r("keep-alive",[r("BlogCard",{directives:[{name:"show",rawName:"v-show",value:"development"===e.metadata.tag,expression:"blog.metadata.tag === 'development'"}],attrs:{blog:e}})],1)],1)})),0):e._e()])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h2",{staticClass:"inline-block border-b-2 border-neutral-100 dark:border-neutral-800 max-w-max"},[e._v("\n      Development.\n    ")])])}],!1,null,null,null);t.default=component.exports}}]);