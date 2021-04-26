(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{319:function(t,e,r){"use strict";r.r(e);var n={props:["color"],computed:{colorClasses:function(){return{red:"text-red-50 bg-red-500 hover:bg-red-600",blue:"bg-blue-500 text-white hover:bg-blue-600",purple:"bg-purple-900 hover:bg-purple-700 text-purple-100",indigo:"text-indigo-50 bg-indigo-600 hover:bg-indigo-700",grey:"bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white",white:"bg-black hover:bg-gray-900 dark:bg-white text-white dark:text-gray-900 dark:hover:bg-gray-100"}[this.color]}}},o=r(39),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"flex justify-center items-center text-center font-medium w-full rounded-lg px-6 py-3 transition duration-500 ease focus:outline-none focus:ring-2 focus:ring-white no-underline",class:this.colorClasses},[this._t("icon"),this._v(" "),this._t("label")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(319).default})},320:function(t,e,r){"use strict";r.r(e);var n=r(39),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"container pt-10 pb-2 max-w-xl mx-auto"},[e("h1",{staticClass:"pt-16 pb-8 text-center"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(320).default})},321:function(t,e,r){"use strict";r.r(e);var n=r(318),o={mixins:[r(332).mixin],components:{MenuIcon:n.r,XIcon:n.v},data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen},close:function(){console.log("clicked away"),this.isOpen=!1}}},l=r(39),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.close,expression:"close"}],staticClass:"bg-white dark:bg-black"},[r("div",{staticClass:"w-full fixed z-50 backgroundBlur mx-auto px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"flex items-center justify-between w-full h-16"},[r("Logo"),t._v(" "),r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"flex-shrink-0"},[r("div",{staticClass:"hidden md:inline-flex"},[r("div",{staticClass:"flex items-center justify-between space-x-4"},[t._t("default")],2)])])]),t._v(" "),r("div",{staticClass:"flex justify-end md:hidden w-full"},[r("button",{staticClass:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white dark:hover:bg-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white",on:{click:t.toggle}},[r("span",{staticClass:"sr-only"},[t._v("Open main menu")]),t._v(" "),t.isOpen?r("x-icon",{staticClass:"text-black dark:text-white h-6 w-6",attrs:{size:"1x"}}):r("menu-icon",{staticClass:"text-black dark:text-white h-6 w-6",attrs:{size:"1x"}})],1)])],1),t._v(" "),r("div",{staticClass:"relative md:hidden shadow",class:{relative:t.isOpen,hidden:!t.isOpen}},[r("div",{staticClass:"bg-white dark:bg-black rounded-xl border border-gray-100 dark:border-2 dark:border-gray-800 shadow-lg absolute w-full px-2 py-2 space-y-1"},[t._t("default")],2)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(325).default,Button:r(319).default,Nav:r(321).default})},322:function(t,e,r){"use strict";r(330),r(331);var n="https://kejk.tech",title="Karl Emil James Koch",o="Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.",l="https://res.cloudinary.com/kejk/image/upload/v1610305389/OG_Image_wlile7.png";e.a=function(meta){return[{hid:"description",name:"description",content:meta&&meta.description||o},{hid:"og:type",property:"og:type",content:meta&&meta.type||"website"},{hid:"og:url",property:"og:url",content:meta&&meta.url||n},{hid:"og:title",property:"og:title",content:meta&&meta.title||title},{hid:"og:description",property:"og:description",content:meta&&meta.description||o},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||l},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||n},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||title},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||o},{hid:"twitter:image:src",name:"twitter:image:src",content:meta&&meta.mainImage||l},{hid:"twitter:site",name:"twitter:site",content:meta&&meta.twitterSite||"@_kejk"},{hid:"twitter:card",name:"twitter:card",content:meta&&meta.twitterCard||"summary_large_image"}]}},323:function(t,e,r){"use strict";r.r(e);var n={props:{to:{type:String,required:!1},href:{type:String,required:!1},isActive:Boolean,extLink:Boolean}},o=r(39),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"flex w-full items-center justify-center sm:space-x-4 m-0"},[this.extLink?e("div",[e("a",{class:["w-full md:w-max flex items-center justify-center font-medium md:block px-4 py-2 text-black dark:text-white md:border-b-2 md:border-transparent md:hover:border-b-2 md:hover:border-gray-300 md:dark:hover:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900 md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline",{"md:border-b-2 md:border-black md:dark:border-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 text-black dark:text-white md:hover:border-black md:dark:hover:border-white md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline":this.isActive}],attrs:{href:""+this.href,target:"_blank"}},[this._t("default")],2)]):e("div",[e("NuxtLink",{class:["w-full md:w-max flex items-center justify-center font-medium md:block px-4 py-2 text-black dark:text-white md:border-b-2 md:border-transparent md:hover:border-b-2 md:hover:border-gray-300 md:dark:hover:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-900 md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline",{"md:border-b-2 md:border-black md:dark:border-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900 text-black dark:text-white md:hover:border-black md:dark:hover:border-white md:bg-transparent md:hover:bg-transparent rounded-md md:rounded-none transition ease-in-out duration-200 no-underline":this.isActive}],attrs:{to:""+this.to}},[this._t("default")],2)],1)])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,r){"use strict";r.r(e);var n={name:"GetInTouch",components:{CheckIcon:r(318).d}},o=r(39),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"justify-center bg-white dark:bg-black sm:pt-0 border-2 border-gray-100 dark:border-gray-900 rounded-xl"},[r("div",{staticClass:"max-w-5xl mx-auto"},[r("div",{staticClass:"overflow-hidden"},[r("div",{staticClass:"grid grid-cols-1 md:grid-cols-2"},[r("div",{staticClass:"p-6 sm:mr-2 bg-gray-100 dark:bg-gray-900 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg"},[r("h1",{staticClass:"text-xl sm:text-2xl text-gray-800 dark:text-white font-bold tracking-tight"},[t._v("\n            Get in touch.\n          ")]),t._v(" "),r("p",{staticClass:"text-medium text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-2"},[t._v("\n            Fill in the form to start a conversation\n          ")]),t._v(" "),r("div",{staticClass:"flex items-center mt-8 text-gray-600 dark:text-gray-400"},[r("check-icon",{staticClass:"text-indigo-500",attrs:{size:"1.5x"}}),t._v(" "),r("div",{staticClass:"ml-4 text-md font-medium w-100"},[t._v("Ask me anything")])],1),t._v(" "),r("div",{staticClass:"flex items-center mt-4 text-gray-600 dark:text-gray-400"},[r("check-icon",{staticClass:"text-indigo-500",attrs:{size:"1.5x"}}),t._v(" "),r("div",{staticClass:"ml-4 text-md font-medium w-100"},[t._v("\n              Enquire about design or development work\n            ")])],1),t._v(" "),r("div",{staticClass:"flex items-center mt-4 text-gray-600 dark:text-gray-400"},[r("check-icon",{staticClass:"text-indigo-500",attrs:{size:"1.5x"}}),t._v(" "),r("div",{staticClass:"ml-4 text-md font-medium w-100"},[t._v("\n              Ask a specific question about this site\n            ")])],1),t._v(" "),r("div",{staticClass:"flex items-center mt-4 text-gray-600 dark:text-gray-400"},[r("check-icon",{staticClass:"text-indigo-500",attrs:{size:"1.5x"}}),t._v(" "),r("div",{staticClass:"ml-4 text-md font-medium w-100"},[t._v("\n              Report an error/issue\n            ")])],1)]),t._v(" "),t._m(0)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"p-6 flex flex-col justify-center",attrs:{action:"https://formcarry.com/s/mGfGBUrWtY",method:"POST","accept-charset":"UTF-8"}},[r("div",{staticClass:"flex flex-col"},[r("label",{staticClass:"font-medium text-black dark:text-white",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),r("input",{staticClass:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-indigo-500 focus:border-4 focus:outline-none",attrs:{type:"name",name:"name",id:"name",placeholder:"e.g. Arnold Schwarzenegger",required:""}})]),t._v(" "),r("div",{staticClass:"flex flex-col mt-2"},[r("label",{staticClass:"font-medium text-black dark:text-white",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{staticClass:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-indigo-500 focus:border-4 focus:outline-none",attrs:{type:"email",name:"email",id:"email",placeholder:"e.g. arnold@schwarzenegger.com",required:""}})]),t._v(" "),r("div",{staticClass:"flex flex-col mt-2"},[r("label",{staticClass:"font-medium text-black dark:text-white",attrs:{for:"message"}},[t._v("Your message")]),t._v(" "),r("textarea",{staticClass:"w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-medium focus:border-indigo-500 focus:border-4 focus:outline-none",attrs:{type:"text",name:"message",id:"message",rows:"4",placeholder:"Ask me anything",required:""}})]),t._v(" "),r("input",{attrs:{type:"hidden",name:"_gotcha"}}),t._v(" "),r("button",{staticClass:"mt-8 md:w-32 bg-black hover:bg-gray-900 dark:bg-white text-white dark:text-gray-900 dark:hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition ease-in-out duration-300",attrs:{id:"submitbutton",type:"submit"}},[t._v("\n            Submit\n          ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(319).default})},325:function(t,e,r){"use strict";r.r(e);var n=r(39),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center"},[e("NuxtLink",{staticClass:" no-underline",attrs:{to:"/"}},[e("span",{staticClass:"text-3xl font-extrabold dark:text-white text-black"},[this._v("K.")])])],1)}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.r(e);var n=r(39),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"max-w-xl"},[e("h2",[this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(320).default})},327:function(t,e,r){"use strict";r.r(e);var n=r(39),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800"})])}],!1,null,null,null);e.default=component.exports},334:function(t,e,r){"use strict";r.r(e);var n=r(39),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"pt-4 pb-4 max-w-xl mx-auto"},[e("p",{staticClass:"text-2xl text-center"},[this._t("text")],2),this._v(" "),e("div",{staticClass:"flex flex-col md:flex-row justify-center mt-6"},[this._t("buttons")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(320).default})},349:function(t,e,r){"use strict";r.r(e);var n={name:"Bookmark",components:{BookmarkIcon:r(318).c},props:{bookmark:{type:Object,default:function(){}}}},o=r(39),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"cursor-pointer mb-0",attrs:{href:t.bookmark.metadata.url,target:"`_blank",rel:"noreferrer"}},[r("button",{staticClass:"text-left w-full focus:outline-none focus:ring-2 focus:ring-white"},[r("header",{staticClass:"flex items-top justify-between pt-4 pb-2"},[r("h1",{staticClass:"text-red-600 dark:text-red-400 text-lg font-bold w-60 md:w-80"},[t._v("\n        "+t._s(t.bookmark.title)+"\n      ")]),t._v(" "),r("bookmark-icon",{staticClass:"text-gray-700 dark:text-gray-300"})],1),t._v(" "),r("p",{staticClass:"font-mono text-gray-500 dark:text-gray-400 pt-0 pb-2 font-medium"},[t._v("\n      "+t._s(t._f("moment")(t.bookmark.created_at,"from","now"))+"\n    ")]),t._v(" "),r("p",{staticClass:"text-gray-700 dark:text-gray-300 pb-4 font-medium mb-0",domProps:{innerHTML:t._s(t.bookmark.metadata.snippet)}},[t._v("\n      "+t._s(t.bookmark.metadata.snippet)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(320).default,Button:r(319).default})},368:function(t,e,r){"use strict";r.r(e);r(35);var n=r(6),o=r(329),l=r(318),d=r(322),c=r(123),m=r.n(c)()().bucket({slug:"kemiljk",read_key:"uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"}),f={computed:{meta:function(){return Object(d.a)({title:"KEJK | Bookmarks",description:"Bookmarks of interesting things I've found around the web, for me to keep and for you to enjoy.",url:"https://kejk.tech/bookmarks",mainImage:"https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1610305389/OG_Image_wlile7.png"})}},head:function(){return{title:"KEJK | Bookmarks",meta:Object(o.a)(this.meta),link:[{rel:"canonical",href:"https://kejk.tech/bookmarks"}]}},components:{ExternalLinkIcon:l.i},data:function(){return{bookmarks:{}}},created:function(){this.getBookmarksData()},methods:{getBookmarksData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,m.getObjects({type:"bookmarks",props:"_id,title,metadata,created_at",sort:"-created_at"}).then((function(data){var e=data.objects;t.loading=!1,t.bookmarks=e}));case 3:case"end":return e.stop()}}),e)})))()}}},h=r(39),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative mx-auto"},[r("Nav",[r("NavItem",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("NavItem",{attrs:{to:"/about"}},[t._v("About")]),t._v(" "),r("NavItem",{attrs:{to:"/thoughts"}},[t._v("Thoughts")]),t._v(" "),r("NavItem",{attrs:{href:"https://www.plugins.run",extLink:""}},[r("span",{staticClass:"flex items-center"},[t._v("\n        Plugins\n        "),r("external-link-icon",{staticClass:"ml-2 text-gray-700 dark:text-gray-300",attrs:{size:"1x"}})],1)]),t._v(" "),r("NavItem",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#BOOKMARKS",expression:"'#BOOKMARKS'"}],attrs:{to:"/bookmarks",isActive:"",id:"BOOKMARKS"}},[t._v("\n      Bookmarks\n    ")]),t._v(" "),r("NavItem",{attrs:{to:"/uses"}},[t._v("Uses")])],1),t._v(" "),r("div",{staticClass:"max-w-3xl mx-auto px-4"},[r("Header",[t._v("/bookmarks")]),t._v(" "),r("Subheader",{scopedSlots:t._u([{key:"text",fn:function(){return[t._v("\n        Bookmarks of interesting things I've found around the web, for me to\n        keep and for you to enjoy.\n      ")]},proxy:!0}])}),t._v(" "),r("div",{staticClass:"grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8"},t._l(t.bookmarks,(function(t){return r("div",{key:t._id},[r("keep-alive",[r("BookmarkCard",{attrs:{bookmark:t}})],1)],1)})),0),t._v(" "),r("Divider"),t._v(" "),r("H2Header",{attrs:{id:"GET_IN_TOUCH"}},[t._v("How to reach me.")]),t._v(" "),r("GetInTouch")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavItem:r(323).default,Nav:r(321).default,Header:r(320).default,Subheader:r(334).default,BookmarkCard:r(349).default,Divider:r(327).default,H2Header:r(326).default,GetInTouch:r(324).default})}}]);