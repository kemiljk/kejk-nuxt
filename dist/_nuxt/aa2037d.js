(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{374:function(t,e,o){"use strict";o.r(e);var l={name:"Tools",components:{ExternalLinkIcon:o(329).i},props:{tool:{type:Object,default:function(){}}}},n=o(55),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:t.tool.metadata.url,target:"`_blank",rel:"noreferrer"}},[o("button",{staticClass:"bg-neutral-50 dark:bg-neutral-900 hover:shadow-lg hover:bg-neutral-50 dark:hover:bg-neutral-800   transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"},[o("div",{staticClass:"px-4 py-4"},[o("header",{staticClass:"mb-4 flex justify-between"},[o("img",{staticClass:"rounded-md max-h-24",attrs:{src:t.tool.metadata.cover.imgix_url,alt:"Image of tool"}}),t._v(" "),o("external-link-icon",{staticClass:"text-neutral-700 dark:text-neutral-300"})],1),t._v(" "),o("div",{staticClass:"divide-y divide-solid divide-neutral-300 dark:divide-neutral-800"},[o("div",{staticClass:"flex space-x-2 mb-4"},[t.tool.metadata.indie?o("Tag",{attrs:{color:"yellow"}},[t._v(" Indie ")]):t._e(),t._v(" "),t.tool.metadata.open_source?o("Tag",{attrs:{color:"purple"}},[t._v("\n            Open source\n          ")]):t._e(),t._v(" "),t.tool.metadata.company?o("Tag",{attrs:{color:"red"}},[t._v("\n            "+t._s(t.tool.metadata.company)+"\n          ")]):t._e()],1),t._v(" "),o("h4",{staticClass:"pt-4 font-bold text-sm text-neutral-900 dark:text-neutral-100"},[t._v("\n          "+t._s(t.tool.title)+"\n        ")])]),t._v(" "),o("p",{staticClass:"mb-0 pt-1 text-neutral-500 dark:text-neutral-400 font-normal text-sm"},[t._v("\n        "+t._s(t.tool.metadata.subtitle)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports}}]);