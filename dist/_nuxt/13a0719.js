(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{333:function(t,e,r){"use strict";var n=r(7),l=r(335);n({target:"String",proto:!0,forced:r(336)("link")},{link:function(t){return l(this,"a","href",t)}})},335:function(t,e,r){var n=r(23),l=/"/g;t.exports=function(t,e,r,o){var d=String(n(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(o).replace(l,"&quot;")+'"'),c+">"+d+"</"+e+">"}},336:function(t,e,r){var n=r(10);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},342:function(t,e,r){"use strict";r.r(e);var n={components:{GlobeIcon:r(318).l}},l=r(39),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-center bg-indigo-100 rounded-full h-12 w-12"},[e("globe-icon",{staticClass:"text-indigo-800",attrs:{size:"1x"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobeIcon:r(342).default})},354:function(t,e,r){"use strict";r.r(e);var n={components:{MapPinIcon:r(318).q}},l=r(39),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-center bg-gray-100 rounded-full h-12 w-12"},[e("map-pin-icon",{staticClass:"text-gray-800",attrs:{size:"1x"}})],1)}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,r){"use strict";r.r(e);var n={name:"Plugin",components:{ExternalLinkIcon:r(318).i},data:function(){return{plugins:["Shape››frame","Perfect››radius","Default››export","Round››all","Place››holder","Hand››over"]}},props:{plugin:{type:Object,default:function(){}}}},l=r(39),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.plugin.title?r("div",[r("a",{attrs:{href:t.plugin.metadata.url,target:"`_blank",rel:"noreferrer",cursor:"pointer"}},[r("button",{staticClass:"bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"},[r("div",{staticClass:"px-4 py-4"},[r("header",{staticClass:"mb-4 flex items-start justify-between"},[r("div",{staticClass:"flex max-w-xl"},[r("img",{staticClass:"rounded-md max-h-24 sm:max-h-32 mr-4 sm:mr-8",attrs:{src:t.plugin.metadata.hero.imgix_url,alt:"Image of media"}}),t._v(" "),r("div",[r("h4",{staticClass:"font-bold text-lg text-gray-900 dark:text-gray-100"},[t._v("\n                "+t._s(t.plugin.title)+"\n              ")]),t._v(" "),r("p",{staticClass:"mb-0 pt-2 text-gray-700 dark:text-gray-200 font-mono text-sm"},[t._v("\n                "+t._s(t.plugin.metadata.subtitle)+"\n              ")]),t._v(" "),r("p",{staticClass:"mb-0 pt-1 text-gray-500 dark:text-gray-400 text-sm",domProps:{innerHTML:t._s(t.plugin.metadata.body)}})])]),t._v(" "),r("external-link-icon",{staticClass:"text-gray-700 dark:text-gray-300 -mt-2 sm:mt-0 h-10 w-10 sm:h-6"})],1),t._v(" "),r("hr",{staticClass:"border border-solid border-gray-300 dark:border-gray-800"}),t._v(" "),r("div",{staticClass:"flex items-center space-x-4 mt-2"},[r("Tag",{attrs:{color:"pink"}},[t._v("Figma")]),t._v(" "),r("div",{staticClass:"flex pl-4 space-x-4"},t._l(t.plugins,(function(e){return r("span",{key:e,staticClass:"py-1 text-md hidden sm:flex"},[t._v(t._s(e))])})),0)],1)])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(320).default,Tag:r(328).default,Button:r(319).default})},356:function(t,e,r){"use strict";r.r(e);var n=r(318),l={name:"App",components:{ArrowRightIcon:n.b,CompassIcon:n.f,DownloadIcon:n.g,HeartIcon:n.m},props:{app:{type:Object,default:function(){}}}},o=r(39),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.app.metadata.url?r("div",[r("a",{attrs:{href:t.app.metadata.url,target:"`_blank",rel:"noreferrer",cursor:"pointer"}},[r("button",{staticClass:"bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-xl text-left max-w-5/6 w-full focus:outline-none focus:ring-2 focus:ring-white"},[r("div",{staticClass:"px-4 py-4"},[r("header",{staticClass:"mb-4 flex justify-between"},[r("img",{staticClass:"rounded-md max-h-24",attrs:{src:t.app.metadata.cover.imgix_url,alt:"Image of media"}}),t._v(" "),t.app.metadata.website?r("compass-icon",{staticClass:"text-gray-700 dark:text-gray-300"}):t._e(),t._v(" "),t.app.metadata.download?r("download-icon",{staticClass:"text-gray-700 dark:text-gray-300"}):t._e()],1),t._v(" "),r("div",{staticClass:"divide-y divide-solid divide-gray-300 dark:divide-gray-800"},[r("div",{staticClass:"flex space-x-2 mb-4"},[t.app.metadata.ios?r("Tag",{attrs:{color:"yellow"}},[t._v("iOS ")]):t._e(),t._v(" "),t.app.metadata.macos?r("Tag",{attrs:{color:"purple"}},[t._v("macOS ")]):t._e()],1),t._v(" "),r("h4",{staticClass:"pt-4 font-bold text-sm text-gray-900 dark:text-gray-100"},[t._v("\n            "+t._s(t.app.title)+"\n          ")])]),t._v(" "),r("p",{staticClass:"mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"},[t._v("\n          "+t._s(t.app.metadata.subtitle)+"\n        ")])])])])]):r("div",[r("nuxt-link",{attrs:{to:t.app.metadata.to,rel:"noreferrer",cursor:"pointer"}},[r("button",{staticClass:"bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"},[r("div",{staticClass:"px-4 py-4"},[r("header",{staticClass:"mb-4 flex justify-between"},[r("img",{staticClass:"rounded-md max-h-24",attrs:{src:t.app.metadata.cover.imgix_url,alt:"Image of media"}}),t._v(" "),t.app.metadata.internal?r("arrow-right-icon",{staticClass:"text-gray-700 dark:text-gray-300"}):t._e()],1),t._v(" "),r("div",{staticClass:"divide-y divide-solid divide-gray-300 dark:divide-gray-800"},[r("div",{staticClass:"flex space-x-2 mb-4"},[t.app.metadata.ios?r("Tag",{attrs:{color:"yellow"}},[t._v("iOS ")]):t._e(),t._v(" "),t.app.metadata.macos?r("Tag",{attrs:{color:"purple"}},[t._v("macOS ")]):t._e()],1),t._v(" "),r("h4",{staticClass:"pt-4 font-bold text-sm text-gray-900 dark:text-gray-100"},[t._v("\n            "+t._s(t.app.title)+"\n          ")])]),t._v(" "),r("p",{staticClass:"mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"},[t._v("\n          "+t._s(t.app.metadata.subtitle)+"\n        ")])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(320).default,Tag:r(328).default,Button:r(319).default})},357:function(t,e,r){"use strict";r.r(e);var n=r(318),l={name:"App",components:{ArrowRightIcon:n.b,CompassIcon:n.f,DownloadIcon:n.g,HeartIcon:n.m},props:{utility:{type:Object,default:function(){}}}},o=r(39),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.utility.metadata.url?r("div",[r("a",{attrs:{href:t.utility.metadata.url,target:"`_blank",rel:"noreferrer",cursor:"pointer"}},[r("button",{staticClass:"bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-xl text-left max-w-5/6 w-full focus:outline-none focus:ring-2 focus:ring-white"},[r("div",{staticClass:"px-4 py-4"},[r("header",{staticClass:"mb-4 flex justify-between"},[r("img",{staticClass:"rounded-md max-h-24",attrs:{src:t.utility.metadata.cover.imgix_url,alt:"Image of media"}}),t._v(" "),t.utility.metadata.website?r("compass-icon",{staticClass:"text-gray-700 dark:text-gray-300"}):t._e(),t._v(" "),t.utility.metadata.download?r("download-icon",{staticClass:"text-gray-700 dark:text-gray-300"}):t._e()],1),t._v(" "),r("div",{staticClass:"divide-y divide-solid divide-gray-300 dark:divide-gray-800"},[r("div",{staticClass:"flex space-x-2 mb-4"},[t.utility.metadata.ios?r("Tag",{attrs:{color:"yellow"}},[t._v("iOS ")]):t._e(),t._v(" "),t.utility.metadata.macos?r("Tag",{attrs:{color:"purple"}},[t._v("macOS ")]):t._e()],1),t._v(" "),r("h4",{staticClass:"pt-4 font-bold text-sm text-gray-900 dark:text-gray-100"},[t._v("\n            "+t._s(t.utility.title)+"\n          ")])]),t._v(" "),r("p",{staticClass:"mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"},[t._v("\n          "+t._s(t.utility.metadata.subtitle)+"\n        ")])])])])]):r("div",[r("nuxt-link",{attrs:{to:t.utility.metadata.to,rel:"noreferrer",cursor:"pointer"}},[r("button",{staticClass:"bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"},[r("div",{staticClass:"px-4 py-4"},[r("header",{staticClass:"mb-4 flex justify-between"},[r("img",{staticClass:"rounded-md max-h-24",attrs:{src:t.utility.metadata.cover.imgix_url,alt:"Image of media"}}),t._v(" "),t.utility.metadata.internal?r("arrow-right-icon",{staticClass:"text-gray-700 dark:text-gray-300"}):t._e()],1),t._v(" "),r("div",{staticClass:"divide-y divide-solid divide-gray-300 dark:divide-gray-800"},[r("div",{staticClass:"flex space-x-2 mb-4"},[t.made.metadata.drafts?r("Tag",{attrs:{color:"blue"}},[t._v("Drafts ")]):t._e(),t._v(" "),t.made.metadata.shortcuts?r("Tag",{attrs:{color:"red"}},[t._v("Shortcuts ")]):t._e()],1),t._v(" "),r("h4",{staticClass:"pt-4 font-bold text-sm text-gray-900 dark:text-gray-100"},[t._v("\n            "+t._s(t.utility.title)+"\n          ")])]),t._v(" "),r("p",{staticClass:"mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"},[t._v("\n          "+t._s(t.utility.metadata.subtitle)+"\n        ")])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(320).default,Tag:r(328).default,Button:r(319).default})},358:function(t,e,r){"use strict";r.r(e);r(333);var n={props:["link"],components:{ArrowRightIcon:r(318).b},computed:{linkLocation:function(){return{home:"/",about:"/about",thoughts:"/thoughts",uses:"/uses"}[this.link]}}},l=r(39),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("NuxtLink",{staticClass:"flex flex-row justify-start w-max mt-4 text-black hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-white rounded-xl px-4 py-2 no-underline",attrs:{to:this.linkLocation}},[this._t("default"),this._v(" "),e("arrow-right-icon",{staticClass:"text-gray-700 dark:text-gray-300 ml-2"})],2)}),[],!1,null,null,null);e.default=component.exports},359:function(t,e,r){"use strict";r.r(e);var n=r(318),l={name:"HelpedMake",components:{CompassIcon:n.f,DownloadIcon:n.g},props:{helpedMake:{type:Object,default:function(){}}}},o=r(39),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:t.helpedMake.metadata.url,target:"`_blank",rel:"noreferrer"}},[r("button",{staticClass:"text-left bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-white"},[r("div",{staticClass:"px-4 py-4"},[r("header",{staticClass:"mb-4 flex justify-between"},[r("img",{staticClass:"rounded-md max-h-24",attrs:{src:t.helpedMake.metadata.cover.imgix_url,alt:"Image of media"}}),t._v(" "),t.helpedMake.metadata.website?r("compass-icon",{staticClass:"text-gray-700 dark:text-gray-300"}):t._e(),t._v(" "),t.helpedMake.metadata.download?r("download-icon",{staticClass:"text-gray-700 dark:text-gray-300"}):t._e()],1),t._v(" "),r("div",{staticClass:"divide-y divide-solid divide-gray-300 dark:divide-gray-800"},[r("div",{staticClass:"flex space-x-2 mb-4"},[t.helpedMake.metadata.design?r("Tag",{attrs:{color:"yellow"}},[t._v("Design ")]):t._e(),t._v(" "),t.helpedMake.metadata.development?r("Tag",{attrs:{color:"purple"}},[t._v("Development\n          ")]):t._e(),t._v(" "),t.helpedMake.metadata.brand?r("Tag",{attrs:{color:"pink"}},[t._v("Brand\n          ")]):t._e()],1),t._v(" "),r("h4",{staticClass:"pt-4 font-bold text-sm text-gray-900 dark:text-gray-100"},[t._v("\n          "+t._s(t.helpedMake.title)+"\n        ")])]),t._v(" "),r("p",{staticClass:"mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"},[t._v("\n        "+t._s(t.helpedMake.metadata.subtitle)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(320).default,Tag:r(328).default,Button:r(319).default})},360:function(t,e,r){"use strict";r.r(e);var n={name:"Media",components:{ExternalLinkIcon:r(318).i},props:{media:{type:Object,default:function(){}}}},l=r(39),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:t.media.metadata.url,target:"`_blank",rel:"noreferrer"}},[r("button",{staticClass:"bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-xl text-left w-full focus:outline-none focus:ring-2 focus:ring-white"},[r("div",{staticClass:"px-4 py-4"},[r("header",{staticClass:"mb-4 flex justify-between"},[r("img",{staticClass:"rounded-md max-h-24",attrs:{src:t.media.metadata.cover.imgix_url,alt:"Image of media"}}),t._v(" "),r("external-link-icon",{staticClass:"text-gray-700 dark:text-gray-300"})],1),t._v(" "),r("div",{staticClass:"divide-y divide-solid divide-gray-300 dark:divide-gray-800"},[r("div",{staticClass:"flex space-x-2 mb-4"},[t.media.metadata.indie?r("Tag",{attrs:{color:"yellow"}},[t._v("Indie ")]):t._e(),t._v(" "),t.media.metadata.open_source?r("Tag",{attrs:{color:"purple"}},[t._v("Open source\n          ")]):t._e()],1),t._v(" "),r("h4",{staticClass:"pt-4 font-bold text-sm text-gray-900 dark:text-gray-100"},[t._v("\n          "+t._s(t.media.title)+"\n        ")])]),t._v(" "),r("p",{staticClass:"mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"},[t._v("\n        "+t._s(t.media.metadata.subtitle)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(320).default,Tag:r(328).default,Button:r(319).default})},361:function(t,e,r){"use strict";r.r(e);var n={name:"Media",components:{MusicIcon:r(318).s},props:{album:{type:Object,default:function(){}}}},l=r(39),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{attrs:{href:t.album.metadata.url,target:"`_blank",rel:"noreferrer",cursor:"pointer"}},[r("button",{staticClass:"bg-gray-100 dark:bg-gray-900 hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:-rotate-2 transition ease-in-out duration-300 rounded-xl w-full text-left focus:outline-none focus:ring-2 focus:ring-white"},[r("div",{staticClass:"px-4 py-4"},[r("div",{staticClass:"divide-y divide-solid divide-gray-300 dark:divide-gray-800"},[r("header",{staticClass:"mb-4 flex justify-between"},[r("img",{staticClass:"rounded-md max-h-24",attrs:{src:t.album.metadata.cover.imgix_url,alt:"Image of album"}}),t._v(" "),r("music-icon",{staticClass:"text-gray-700 dark:text-gray-300"})],1),t._v(" "),r("h4",{staticClass:"pt-4 font-bold text-sm text-gray-900 dark:text-gray-100"},[t._v("\n            "+t._s(t.album.title)+"\n          ")])]),t._v(" "),r("p",{staticClass:"mb-0 pt-1 text-gray-500 dark:text-gray-400 font-normal text-sm"},[t._v("\n          "+t._s(t.album.metadata.subtitle)+"\n        ")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(320).default,Button:r(319).default})},362:function(t,e,r){"use strict";r.r(e);var n=r(39),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("svg",{attrs:{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"24",cy:"24",r:"24",fill:"#4A47C6"}}),this._v(" "),e("path",{attrs:{d:"M31.7536 12.4783L16.3913 16.0632V30.7391L31.7536 27.2303V12.4783Z",fill:"#4A47C6"}}),this._v(" "),e("path",{attrs:{d:"M32.913 10.739L15.0869 14.9309V37.1158L21.5421 30.6625L32.913 27.9887V10.739ZM23.4436 28.1327L21.2064 28.6487L21.1982 22.7964L19.1498 23.2685L19.158 29.1208L16.9204 29.6364L16.9242 16.8404L19.1616 16.3246L19.1591 21.3452L21.2076 20.8731L21.2096 15.8525L23.4475 15.3364L23.4436 28.1327ZM28.8346 26.8772L28.8264 21.0249L26.7781 21.497L26.7862 27.3493L24.5487 27.8651L24.5522 15.0689L26.7901 14.5531L26.7876 19.5737L28.8364 19.1017L28.8388 14.0811L31.0765 13.5651L31.0727 26.3612L28.8346 26.8772Z",fill:"white"}})])])}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,r){"use strict";r.r(e);var n=r(39),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex py-2"},[this._t("icon"),this._v(" "),e("div",{staticClass:"text-base leading-6"},[this._t("text")],2)],2)}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,r){"use strict";r.r(e);var n=r(39),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("svg",{attrs:{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{attrs:{width:"48",height:"48",rx:"24",fill:"white"}}),t._v(" "),r("path",{attrs:{d:"M21.3864 20.2623C21.9547 19.7531 22.4793 19.244 23.0476 18.7811C22.6105 18.4571 22.217 18.1794 21.8236 17.9016C21.3427 18.3182 20.8618 18.7811 20.3809 19.244C20.8618 19.4291 21.2115 19.7994 21.3864 20.2623Z",fill:"#29ABE2"}}),t._v(" "),r("path",{attrs:{d:"M19.99 22.6281C21.042 22.631 21.897 21.7526 21.8998 20.6661C21.9025 19.5797 21.052 18.6966 20 18.6937C18.948 18.6908 18.093 19.5692 18.0902 20.6557C18.0875 21.7421 18.938 22.6252 19.99 22.6281Z",fill:"#29ABE2"}}),t._v(" "),r("path",{attrs:{d:"M21.6739 31.6233C18.9722 33.1492 16.6368 33.5306 15.5836 32.4816C14.1183 31.0034 15.4463 27.1409 18.6517 23.2308C18.148 23.0878 17.7358 22.7063 17.5069 22.2295C12.8362 27.6655 10.7298 33.1492 12.7904 35.1996C14.4847 36.9162 18.5601 35.7718 23.0476 32.72C22.5897 32.3862 22.1318 32.0047 21.6739 31.6233Z",fill:"#29ABE2"}}),t._v(" "),r("path",{attrs:{d:"M24.7555 18.5939C24.8925 18.0709 25.2577 17.6429 25.7143 17.4051C20.3267 12.7924 14.8477 10.7476 12.7931 12.7924C11.1038 14.5043 12.1996 18.5464 15.2587 23.0164C15.6239 22.5409 15.9892 22.1129 16.3544 21.6374C14.8477 18.9268 14.4368 16.5967 15.4869 15.503C16.9937 14.0288 20.8289 15.4079 24.7555 18.5939Z",fill:"#29ABE2"}}),t._v(" "),r("path",{attrs:{d:"M28.6413 19.8688C28.4635 20.3457 28.0635 20.7272 27.6191 20.918C28.2857 21.6334 28.908 22.301 29.4413 23.0164C29.7524 22.5872 30.0635 22.1579 30.2857 21.7287C29.7968 21.1088 29.2191 20.4888 28.6413 19.8688Z",fill:"#29ABE2"}}),t._v(" "),r("path",{attrs:{d:"M27.2381 21.8361C28.3012 21.8361 29.1428 20.9724 29.1428 19.8688C29.1428 18.7653 28.3012 17.9016 27.2381 17.9016C26.175 17.9016 25.3333 18.7653 25.3333 19.8688C25.3333 20.9244 26.175 21.8361 27.2381 21.8361Z",fill:"#29ABE2"}}),t._v(" "),r("path",{attrs:{d:"M32.4469 15.5298C33.9182 17.0064 32.5848 20.8645 29.3663 24.7702C29.8721 24.9131 30.2859 25.2942 30.5158 25.7705C35.1596 20.3405 37.2746 14.8153 35.2056 12.7672C33.5044 11.1001 29.4123 12.2433 24.9524 15.2917C25.4122 15.6251 25.872 16.0061 26.3318 16.3872C29.0445 14.863 31.3894 14.4819 32.4469 15.5298Z",fill:"#29ABE2"}}),t._v(" "),r("path",{attrs:{d:"M26.9551 27.3443C26.3021 28.0091 25.6055 28.6264 24.9524 29.1962C25.3878 29.5286 25.7796 29.8135 26.215 30.0984C26.8245 29.5761 27.3905 29.0063 28 28.389C27.5211 28.199 27.1728 27.8191 26.9551 27.3443Z",fill:"#29ABE2"}}),t._v(" "),r("path",{attrs:{d:"M28.3914 25.3716C27.3394 25.3686 26.4843 26.2469 26.4814 27.3333C26.4786 28.4198 27.329 29.303 28.381 29.306C29.4329 29.309 30.2881 28.4307 30.2909 27.3442C30.2938 26.2578 29.4434 25.3746 28.3914 25.3716Z",fill:"#29ABE2"}}),t._v(" "),r("path",{attrs:{d:"M20.381 27.082C19.7143 26.3666 19.0921 25.699 18.5587 24.9836C18.2476 25.4128 17.9365 25.842 17.7143 26.2712C18.2476 26.8912 18.781 27.5112 19.3587 28.1311C19.5365 27.6542 19.8921 27.2727 20.381 27.082Z",fill:"#29ABE2"}}),t._v(" "),r("path",{attrs:{d:"M32.7522 24.9836C32.3881 25.4574 32.024 25.8839 31.66 26.3577C33.1617 29.0586 33.5713 31.333 32.4791 32.4228C30.9774 33.8917 27.1549 32.5176 23.2413 29.3903C23.1048 29.9115 22.7408 30.3379 22.2857 30.5749C27.7009 35.1711 33.1617 37.2559 35.2095 35.2185C36.8932 33.4653 35.8011 29.3903 32.7522 24.9836Z",fill:"#29ABE2"}}),t._v(" "),r("path",{attrs:{d:"M22.6716 28.1415C22.6744 27.0551 21.8238 26.172 20.7719 26.1691C19.7199 26.1663 18.8649 27.0447 18.8621 28.1311C18.8594 29.2176 19.7099 30.1007 20.7619 30.1035C21.8139 30.1064 22.6689 29.228 22.6716 28.1415Z",fill:"#29ABE2"}})])])}),[],!1,null,null,null);e.default=component.exports},365:function(t,e,r){"use strict";r.r(e);var n=r(39),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("svg",{attrs:{width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"0.5",y:"0.5",width:"47",height:"47",rx:"23.5",fill:"#354D72"}}),this._v(" "),e("path",{attrs:{d:"M11.2542 19.9956L27.1422 10.8226",stroke:"white","stroke-width":"2.84972","stroke-linecap":"round"}}),this._v(" "),e("path",{attrs:{d:"M24.8637 25.2221L27.142 10.8225",stroke:"white","stroke-width":"2.84972","stroke-linecap":"round"}}),this._v(" "),e("path",{attrs:{d:"M24.8638 25.2223L11.2542 19.9956",stroke:"white","stroke-width":"2.84972","stroke-linecap":"round"}}),this._v(" "),e("path",{attrs:{d:"M24.8638 25.2222L30.2596 34.5681",stroke:"white","stroke-width":"2.84972","stroke-linecap":"round"}}),this._v(" "),e("path",{attrs:{d:"M33.5307 32.6794L26.9885 36.4565",stroke:"white","stroke-width":"2.84972","stroke-linecap":"round"}}),this._v(" "),e("rect",{attrs:{x:"0.5",y:"0.5",width:"47",height:"47",rx:"23.5",stroke:"#C4C4C4"}})])])}),[],!1,null,null,null);e.default=component.exports},372:function(t,e,r){"use strict";r.r(e);r(333),r(35);var n=r(6),l=r(329),o=r(318),d=r(322),c=r(123)().bucket({slug:"kemiljk",read_key:"uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"}),f={computed:{meta:function(){return Object(d.a)({title:"KEJK | Home",description:"A Product and Frontend Designer, building for the web with Vue, Nuxt and Tailwind, building for mobile with SwiftUI.",url:"https://kejk.tech/",mainImage:"https://res.cloudinary.com/kejk/image/upload/q_auto,f_auto/v1610305389/OG_Image_wlile7.png"})}},head:function(){return{title:"KEJK | Home",meta:Object(l.a)(this.meta),link:[{rel:"canonical",href:"https://kejk.tech/"}]}},components:{InfoIcon:o.n,MailIcon:o.p,ArrowRightIcon:o.b,ExternalLinkIcon:o.i},data:function(){return{loading:!1,apps:{},medias:{},albums:{},mades:{},utilities:{},helpedMakes:{},links:{},blogs:{},plugin:{},slug:""}},created:function(){this.slug=this.$route.params.slug,this.getAppsData(),this.getBlogsData(),this.getLinksData(),this.getUtilitiesData(),this.getHelpedMakesData(),this.getMediasData(),this.getAlbumsData(),this.fetchPluginData()},methods:{getAppsData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.app=null,t.loading=!0,e.next=4,c.getObjects({type:"apps",props:"_id,slug,title,content,metadata,created_at,modified_at",sort:"-created_at"}).then((function(data){var e=data.objects;t.loading=!1,t.apps=e}));case 4:case"end":return e.stop()}}),e)})))()},getBlogsData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.blog=null,t.loading=!0,e.next=4,c.getObjects({limit:1,type:"blogs",props:"_id,slug,title,content,metadata,created_at,modified_at",sort:"-created_at"}).then((function(data){var e=data.objects;t.loading=!1,t.blogs=e}));case 4:case"end":return e.stop()}}),e)})))()},getLinksData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.link=null,t.loading=!0,e.next=4,c.getObjects({limit:1,type:"links",props:"_id,slug,title,content,metadata,created_at",sort:"-created_at"}).then((function(data){var e=data.objects;t.loading=!1,t.links=e}));case 4:case"end":return e.stop()}}),e)})))()},getMadesData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.made=null,t.loading=!0,e.next=4,c.getObjects({type:"mades",props:"_id,title,metadata"}).then((function(data){var e=data.objects;t.loading=!1,t.mades=e}));case 4:case"end":return e.stop()}}),e)})))()},getUtilitiesData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.utility=null,t.loading=!0,e.next=4,c.getObjects({type:"utilities",props:"_id,title,metadata"}).then((function(data){var e=data.objects;t.loading=!1,t.utilities=e}));case 4:case"end":return e.stop()}}),e)})))()},getHelpedMakesData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.helpedMake=null,t.loading=!0,e.next=4,c.getObjects({limit:6,type:"helpedmakes",props:"_id,title,metadata"}).then((function(data){var e=data.objects;t.loading=!1,t.helpedMakes=e}));case 4:case"end":return e.stop()}}),e)})))()},getMediasData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.media=null,t.loading=!0,e.next=4,c.getObjects({limit:6,type:"medias",props:"_id,title,metadata"}).then((function(data){var e=data.objects;t.loading=!1,t.medias=e}));case 4:case"end":return e.stop()}}),e)})))()},getAlbumsData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.album=null,t.loading=!0,e.next=4,c.getObjects({type:"albums",props:"_id,title,metadata"}).then((function(data){var e=data.objects;t.loading=!1,t.albums=e}));case 4:case"end":return e.stop()}}),e)})))()},fetchPluginData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,c.getObject({slug:"plugin",props:"slug,title,content,metadata"}).then((function(data){t.plugin=data.object,t.loading=!1}));case 3:case"end":return e.stop()}}),e)})))()}}},m=r(39),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative mx-auto"},[r("Nav",[r("NavItem",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#HOME",expression:"'#HOME'"}],attrs:{to:"/",isActive:"",id:"HOME"}},[t._v("Home")]),t._v(" "),r("NavItem",{attrs:{to:"/about"}},[t._v("About")]),t._v(" "),r("NavItem",{attrs:{to:"/thoughts"}},[t._v("Thoughts")]),t._v(" "),r("NavItem",{attrs:{href:"https://www.plugins.run",extLink:""}},[r("div",{staticClass:"w-full flex justify-center items-center"},[t._v("\n        Plugins\n        "),r("external-link-icon",{staticClass:"ml-2 text-gray-700 dark:text-gray-300",attrs:{size:"1x"}})],1)]),t._v(" "),r("NavItem",{attrs:{to:"/bookmarks"}},[t._v("Bookmarks")]),t._v(" "),r("NavItem",{attrs:{to:"/uses"}},[t._v("Uses")])],1),t._v(" "),r("div",{staticClass:"max-w-5xl mx-auto px-4"},[r("Header",[t._v("Hej, I'm Karl")]),t._v(" "),r("Subheader",{scopedSlots:t._u([{key:"text",fn:function(){return[t._v("\n        I design and build software, write about the intersection of design\n        and development and create music.\n        "),r("div",{staticClass:"flex flex-col md:w-3/4 pt-8 justify-center mx-auto text-left"},[r("div",{staticClass:"flex text-sm tracking-wider leading-normal uppercase text-gray-600 dark:text-gray-400"},[t._v("\n            Currently\n          ")]),t._v(" "),r("div",{staticClass:"flex text-sm font-bold pt-4 text-gray-800 dark:text-gray-200"},[t._v("\n            Full-time "),r("span",{staticClass:"ml-2 text-indigo-500"},[t._v("———")])]),t._v(" "),r("IconText",{staticClass:"flex items-center",scopedSlots:t._u([{key:"icon",fn:function(){return[r("HomeHeroIcon",{staticClass:"pr-4"})]},proxy:!0},{key:"text",fn:function(){return[t._v("\n              Designing and defining the Home as a Service at\n              "),r("a",{attrs:{href:"https://www.homehero.co.uk",target:"_blank",rel:"noreferrer"}},[t._v("HomeHero")]),t._v(".\n            ")]},proxy:!0}])}),t._v(" "),r("div",{staticClass:"flex text-sm font-bold pt-8 text-gray-800 dark:text-gray-200"},[t._v("\n            Part-time "),r("span",{staticClass:"ml-2 text-indigo-500"},[t._v("———")])]),t._v(" "),r("IconText",{staticClass:"flex items-center",scopedSlots:t._u([{key:"icon",fn:function(){return[r("CosmicIcon",{staticClass:"pr-4"})]},proxy:!0},{key:"text",fn:function(){return[t._v("\n              Designing the best API-first headless CMS out there at\n              "),r("a",{attrs:{href:"https://www.cosmicjs.com",target:"_blank",rel:"noreferrer"}},[t._v("Cosmic")]),t._v(".\n            ")]},proxy:!0}])}),t._v(" "),r("IconText",{staticClass:"flex items-center",scopedSlots:t._u([{key:"icon",fn:function(){return[r("MmacIcon",{staticClass:"pr-4"})]},proxy:!0},{key:"text",fn:function(){return[t._v("\n              Designing the world's best cocktail resource at\n              "),r("a",{attrs:{href:"https://www.makemeacocktail.com",target:"_blank",rel:"noreferrer"}},[t._v("Make Me A Cocktail")]),t._v(".\n            ")]},proxy:!0}])}),t._v(" "),r("div",{staticClass:"flex items-center pt-8 justify-between"},[r("IconText",{staticClass:"flex items-center mr-2",scopedSlots:t._u([{key:"icon",fn:function(){return[r("MapIcon",{staticClass:"mr-4"})]},proxy:!0},{key:"text",fn:function(){return[t._v(" London, UK ")]},proxy:!0}])}),t._v(" "),r("IconText",{staticClass:"flex items-center",scopedSlots:t._u([{key:"icon",fn:function(){return[r("GlobeIcon",{staticClass:"mr-4"})]},proxy:!0},{key:"text",fn:function(){return[t._v(" 🇬🇧🇩🇰 ")]},proxy:!0}])})],1)],1)]},proxy:!0},{key:"buttons",fn:function(){return[r("div",{staticClass:"flex flex-col md:flex-row md:space-x-2"},[r("NuxtLink",{attrs:{to:"/about"}},[r("Button",{attrs:{color:"white"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("info-icon",{staticClass:"inline-block mr-2 text-gray-50 dark:text-gray-900",attrs:{size:"1x"}})]},proxy:!0},{key:"label",fn:function(){return[t._v(" More about me ")]},proxy:!0}])})],1),t._v(" "),r("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#GET_IN_TOUCH",expression:"'#GET_IN_TOUCH'"}],staticClass:"no-underline",attrs:{href:"#"}},[r("Button",{staticClass:"mt-2 md:mt-0",attrs:{color:"grey"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("mail-icon",{staticClass:"inline-block mr-2 text-gray-800 dark:text-white",attrs:{size:"1x"}})]},proxy:!0},{key:"label",fn:function(){return[t._v(" Get in touch ")]},proxy:!0}])})],1)],1)]},proxy:!0}])}),t._v(" "),r("H2Header",{staticClass:"pt-16"},[t._v("Some things I've made.")]),t._v(" "),r("div",{staticClass:"flex w-full"},[r("div",{staticClass:"grid w-full"},[r("keep-alive",[r("Plugin",{attrs:{plugin:t.plugin}})],1)],1)]),t._v(" "),r("div",{staticClass:"flex flex-row pt-4"},[r("div",{staticClass:"grid w-full sm:grid-cols-2 gap-4"},t._l(t.apps,(function(t){return r("div",{key:t.title},[r("keep-alive",[r("AppCard",{attrs:{app:t}})],1)],1)})),0)]),t._v(" "),r("div",{staticClass:"flex flex-row pt-4"},[r("div",{staticClass:"grid w-full sm:grid-cols-2 gap-4"},t._l(t.utilities,(function(t){return r("div",{key:t.title},[r("keep-alive",[r("UtilityCard",{attrs:{utility:t}})],1)],1)})),0)]),t._v(" "),r("H2Header",{staticClass:"pt-16"},[t._v("Thoughts on Design and Development.")]),t._v(" "),r("div",{staticClass:"flex flex-row mt-4"},[r("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 gap-8"},[t._l(t.blogs,(function(t){return r("div",{key:t._id},[r("keep-alive",[r("BlogCard",{attrs:{blog:t}})],1)],1)})),t._v(" "),t._l(t.links,(function(link){return r("div",{key:link._id},[r("keep-alive",[r("LinkCard",{attrs:{link:link}})],1)],1)}))],2)]),t._v(" "),r("MoreLink",{attrs:{link:"thoughts"}},[t._v(" See All ")]),t._v(" "),r("H2Header",{staticClass:"pt-16"},[t._v("Some things I've helped make.")]),t._v(" "),r("div",{staticClass:"flex flex-row"},[r("div",{staticClass:"grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4"},t._l(t.helpedMakes,(function(t){return r("div",{key:t.title},[r("keep-alive",[r("HelpedMakeCard",{attrs:{helpedMake:t}})],1)],1)})),0)]),t._v(" "),r("H2Header",{staticClass:"pt-16"},[t._v("Some things I'm currently enjoying.")]),t._v(" "),r("div",{staticClass:"flex flex-row"},[r("div",{staticClass:"grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4"},t._l(t.medias,(function(t){return r("div",{key:t._id},[r("keep-alive",[r("MediaCard",{attrs:{media:t}})],1)],1)})),0)]),t._v(" "),r("H2Header",{staticClass:"pt-16"},[t._v("Music I've written.")]),t._v(" "),r("div",{staticClass:"flex flex-row"},[r("div",{staticClass:"grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4"},t._l(t.albums,(function(t){return r("div",{key:t._id},[r("keep-alive",[r("AlbumCard",{attrs:{album:t}})],1)],1)})),0)]),t._v(" "),r("H2Header",{staticClass:"pt-16",attrs:{id:"GET_IN_TOUCH"}},[t._v("How to reach me.")]),t._v(" "),r("GetInTouch")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavItem:r(323).default,Nav:r(321).default,Header:r(320).default,HomeHeroIcon:r(362).default,IconText:r(363).default,CosmicIcon:r(364).default,MmacIcon:r(365).default,MapIcon:r(354).default,GlobeIcon:r(342).default,Button:r(319).default,Subheader:r(334).default,H2Header:r(326).default,Plugin:r(355).default,AppCard:r(356).default,UtilityCard:r(357).default,BlogCard:r(337).default,LinkCard:r(339).default,MoreLink:r(358).default,HelpedMakeCard:r(359).default,MediaCard:r(360).default,AlbumCard:r(361).default,GetInTouch:r(324).default})}}]);