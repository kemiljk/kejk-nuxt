(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{330:function(t,e,n){"use strict";n(37),n(57);var r="https://kejk.tech",title="Karl Emil James Koch",o="Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.",c="https://imgix.cosmicjs.com/5e51a880-6d94-11ec-be72-1b6e4fde96ee-Twitter-Image.png";e.a=function(meta){return[{hid:"description",name:"description",content:meta&&meta.description||o},{hid:"og:type",property:"og:type",content:meta&&meta.type||"website"},{hid:"og:url",property:"og:url",content:meta&&meta.url||r},{hid:"og:title",property:"og:title",content:meta&&meta.title||title},{hid:"og:description",property:"og:description",content:meta&&meta.description||o},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||c},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||r},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||title},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||o},{hid:"twitter:image:src",name:"twitter:image:src",content:meta&&meta.mainImage||c},{hid:"twitter:site",name:"twitter:site",content:meta&&meta.twitterSite||"@_kejk"},{hid:"twitter:card",name:"twitter:card",content:meta&&meta.twitterCard||"summary_large_image"}]}},331:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(126);var o=n(163),c=n(89);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},334:function(t,e,n){"use strict";var r=n(10),o=n(335);r({target:"String",proto:!0,forced:n(336)("link")},{link:function(t){return o(this,"a","href",t)}})},335:function(t,e,n){var r=n(6),o=n(31),c=n(18),l=/"/g,d=r("".replace);t.exports=function(t,e,n,r){var m=c(o(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+d(c(r),l,"&quot;")+'"'),f+">"+m+"</"+e+">"}},336:function(t,e,n){var r=n(7);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},342:function(t,e,n){"use strict";(function(t){var r=n(12),o=n(331),c=(n(334),n(49),n(329)),l=n(330),d=n(162)().bucket({slug:t.env.NUXT_ENV_COSMIC_SLUG,read_key:t.env.NUXT_ENV_COSMIC_READ_KEY});e.a={computed:{meta:function(){return Object(l.a)({title:"Home | KEJK",description:"A Product and Frontend Designer, building for the web with Vue, Nuxt and Tailwind, building for mobile with SwiftUI.",url:"https://kejk.tech/",mainImage:"https://imgix.cosmicjs.com/5e51a880-6d94-11ec-be72-1b6e4fde96ee-Twitter-Image.png"})}},head:function(){return{title:"Home | KEJK",meta:Object(o.a)(this.meta),link:[{rel:"canonical",href:"https://kejk.tech/"}]}},components:{InfoIcon:c.n,MailIcon:c.p,ArrowRightIcon:c.b,ExternalLinkIcon:c.i},data:function(){return{loading:!1,apps:{},albums:{},mades:{},utilities:{},links:{},blogs:{},plugin:{},slug:""}},created:function(){this.slug=this.$route.params.slug,this.getAppsData(),this.getBlogsData(),this.getLinksData(),this.getUtilitiesData(),this.getAlbumsData(),this.fetchPluginData()},methods:{getAppsData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.app=null,t.loading=!0,e.next=4,d.getObjects({query:{type:"apps"},props:"_id,slug,title,content,metadata,created_at,modified_at",sort:"created_at"}).then((function(data){var e=data.objects;t.loading=!1,t.apps=e}));case 4:case"end":return e.stop()}}),e)})))()},getBlogsData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.blog=null,t.loading=!0,e.next=4,d.getObjects({limit:1,query:{type:"blogs"},props:"_id,slug,title,content,metadata,created_at,modified_at",sort:"-created_at"}).then((function(data){var e=data.objects;t.loading=!1,t.blogs=e}));case 4:case"end":return e.stop()}}),e)})))()},getLinksData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.link=null,t.loading=!0,e.next=4,d.getObjects({limit:1,query:{type:"links"},props:"_id,slug,title,content,metadata,created_at",sort:"-created_at"}).then((function(data){var e=data.objects;t.loading=!1,t.links=e}));case 4:case"end":return e.stop()}}),e)})))()},getUtilitiesData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.utility=null,t.loading=!0,e.next=4,d.getObjects({query:{type:"utilities"},props:"_id,title,metadata"}).then((function(data){var e=data.objects;t.loading=!1,t.utilities=e}));case 4:case"end":return e.stop()}}),e)})))()},getAlbumsData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.error=t.album=null,t.loading=!0,e.next=4,d.getObjects({query:{type:"albums"},props:"_id,title,metadata"}).then((function(data){var e=data.objects;t.loading=!1,t.albums=e}));case 4:case"end":return e.stop()}}),e)})))()},fetchPluginData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,d.getObject({id:"605cc05178306b0007588909",props:"slug,title,content,metadata"}).then((function(data){t.plugin=data.object,t.loading=!1}));case 3:case"end":return e.stop()}}),e)})))()}}}}).call(this,n(56))},389:function(t,e,n){"use strict";n.r(e);var r=n(342).a,o=n(55),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative mx-auto"},[n("Nav",[n("NavItem",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#HOME",expression:"'#HOME'"}],attrs:{to:"/",isActive:"",id:"HOME"}},[t._v("Home")]),t._v(" "),n("NavItem",{attrs:{to:"/thoughts"}},[t._v("Thoughts")]),t._v(" "),n("NavItem",{attrs:{href:"https://www.plugins.run",extLink:""}},[n("div",{staticClass:"w-full flex justify-center items-center"},[t._v("\n        Plugins\n        "),n("external-link-icon",{staticClass:"ml-2 text-neutral-700 dark:text-neutral-300",attrs:{size:"1x"}})],1)]),t._v(" "),n("NavItem",{attrs:{to:"/portfolio"}},[t._v("Projects")])],1),t._v(" "),n("div",{staticClass:"max-w-5xl mx-auto px-4"},[n("div",[n("Header",[t._v("\n        Hej, I'm Karl\n        "),n("div",{staticClass:"pt-2 text-center text-sm tracking-wider leading-normal uppercase text-neutral-600 dark:text-neutral-400"},[t._v("\n          Designgineer\n        ")])]),t._v(" "),n("Subheader",{scopedSlots:t._u([{key:"text",fn:function(){return[t._v("\n          I learnt to design by creating album art for my various bands in\n          cracked Photoshop. I learnt to code by hacking my MySpace page. AMA.\n        ")]},proxy:!0},{key:"buttons",fn:function(){return[n("div",{staticClass:"flex flex-col md:flex-row md:space-x-2"},[n("NuxtLink",{staticClass:"no-underline",attrs:{to:"/about"}},[n("Button",{attrs:{color:"white"},scopedSlots:t._u([{key:"icon",fn:function(){return[n("info-icon",{staticClass:"inline-block mr-2 text-neutral-50 dark:text-neutral-900",attrs:{size:"1x"}})]},proxy:!0},{key:"label",fn:function(){return[t._v(" More about me ")]},proxy:!0}])})],1),t._v(" "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#GET_IN_TOUCH",expression:"'#GET_IN_TOUCH'"}],staticClass:"no-underline",attrs:{href:"#"}},[n("Button",{staticClass:"mt-2 md:mt-0",attrs:{color:"grey"},scopedSlots:t._u([{key:"icon",fn:function(){return[n("mail-icon",{staticClass:"inline-block mr-2 text-neutral-800 dark:text-white",attrs:{size:"1x"}})]},proxy:!0},{key:"label",fn:function(){return[t._v(" Get in touch ")]},proxy:!0}])})],1)],1)]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"pt-8 text-sm tracking-wider leading-normal uppercase text-neutral-600 dark:text-neutral-400"},[t._v("\n      Currently\n    ")]),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row md:space-x-12 justify-center items-start mx-auto text-left text-black dark:text-white"},[n("div",[t._m(0),t._v(" "),n("IconText",{staticClass:"flex items-center",scopedSlots:t._u([{key:"icon",fn:function(){return[n("MoneyboxIcon",{staticClass:"mr-4 border border-neutral-200 dark:border-none"})]},proxy:!0},{key:"text",fn:function(){return[t._v("\n            Design and design systems lead at\n            "),n("a",{attrs:{href:"https://www.moneyboxapp.com",target:"_blank",rel:"noreferrer"}},[t._v("Moneybox")]),t._v(".\n          ")]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"flex items-center space-x-12"},[n("IconText",{staticClass:"flex items-center mr-2",scopedSlots:t._u([{key:"icon",fn:function(){return[n("MapIcon",{staticClass:"mr-4"})]},proxy:!0},{key:"text",fn:function(){return[t._v(" London, UK ")]},proxy:!0}])}),t._v(" "),n("IconText",{staticClass:"flex items-center",scopedSlots:t._u([{key:"icon",fn:function(){return[n("GlobeIcon",{staticClass:"mr-4"})]},proxy:!0},{key:"text",fn:function(){return[t._v(" 🇬🇧🇩🇰 ")]},proxy:!0}])})],1)],1),t._v(" "),n("div",[t._m(1),t._v(" "),n("IconText",{staticClass:"flex items-center",scopedSlots:t._u([{key:"icon",fn:function(){return[n("CosmicIcon",{staticClass:"mr-4 rounded-full border border-neutral-200 dark:border-none"})]},proxy:!0},{key:"text",fn:function(){return[t._v("\n            Leading design for the best API-first headless CMS out there at\n            "),n("a",{attrs:{href:"https://www.cosmicjs.com",target:"_blank",rel:"noreferrer"}},[t._v("Cosmic")]),t._v(".\n          ")]},proxy:!0}])}),t._v(" "),n("IconText",{staticClass:"flex items-center",scopedSlots:t._u([{key:"icon",fn:function(){return[n("MmacIcon",{staticClass:"pr-4"})]},proxy:!0},{key:"text",fn:function(){return[t._v("\n            Designing the world's best cocktail resource at\n            "),n("a",{attrs:{href:"https://www.makemeacocktail.com",target:"_blank",rel:"noreferrer"}},[t._v("Make Me A Cocktail")]),t._v(".\n          ")]},proxy:!0}])})],1)]),t._v(" "),n("div",{staticClass:"flex flex-row mt-16"},[n("div",{staticClass:"grid w-full sm:grid-cols-2 gap-4"},[n("PluginCard",{attrs:{plugin:t.plugin}}),t._v(" "),t._l(t.apps,(function(t){return n("div",{key:t.title},[n("keep-alive",[n("AppCard",{attrs:{app:t}})],1)],1)})),t._v(" "),n("div",{staticClass:"grid grid-cols-2 gap-4"},t._l(t.utilities,(function(t){return n("div",{key:t.title},[n("keep-alive",[n("UtilityCard",{attrs:{utility:t}})],1)],1)})),0)],2)]),t._v(" "),n("div",{staticClass:"flex flex-row mt-16"},[n("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 gap-8"},[t._l(t.blogs,(function(t){return n("div",{key:t._id},[n("keep-alive",[n("BlogCard",{attrs:{blog:t}})],1)],1)})),t._v(" "),t._l(t.links,(function(link){return n("div",{key:link._id},[n("keep-alive",[n("LinkCard",{attrs:{link:link}})],1)],1)}))],2)]),t._v(" "),n("MoreLink",{attrs:{link:"thoughts"}},[t._v(" See All ")]),t._v(" "),n("div",{staticClass:"flex flex-row mt-16"},[n("div",{staticClass:"grid grid-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4"},t._l(t.albums,(function(t){return n("div",{key:t._id},[n("keep-alive",[n("AlbumCard",{attrs:{album:t}})],1)],1)})),0)]),t._v(" "),n("GetInTouch",{staticClass:"mt-16",attrs:{id:"GET_IN_TOUCH"}})],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex text-sm font-bold pt-4 text-neutral-800 dark:text-neutral-200"},[t._v("\n          Full-time "),n("span",{staticClass:"ml-2 text-indigo-500"},[t._v("———")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex text-sm pt-8 md:pt-4 font-bold text-neutral-800 dark:text-neutral-200"},[t._v("\n          On the side "),n("span",{staticClass:"ml-2 text-indigo-500"},[t._v("———")])])}],!1,null,null,null);e.default=component.exports}}]);