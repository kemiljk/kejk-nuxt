(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{341:function(t,e,r){"use strict";(function(t){var n=r(12),o=(r(49),r(329)),l=r(162)().bucket({slug:t.env.NUXT_ENV_COSMIC_SLUG,read_key:t.env.NUXT_ENV_COSMIC_READ_KEY});e.a={name:"PortfolioView",components:{ExternalLinkIcon:o.i},data:function(){return{loading:!1,portfolio:{},id:""}},created:function(){this.id=this.$route.query.id,this.fetchPortfolioData()},methods:{fetchPortfolioData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,l.getObject({id:t.id,props:"id,slug,title,content,metadata"}).then((function(data){t.portfolio=data.object,t.loading=!1}));case 3:case"end":return e.stop()}}),e)})))()}}}}).call(this,r(56))},388:function(t,e,r){"use strict";r.r(e);var n=r(341).a,o=r(55),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative mx-auto"},[r("Nav",[r("NavItem",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("NavItem",{attrs:{to:"/thoughts"}},[t._v("Thoughts")]),t._v(" "),r("NavItem",{attrs:{href:"https://www.plugins.run",extLink:""}},[r("span",{staticClass:"flex items-center"},[t._v("\n        Plugins\n        "),r("external-link-icon",{staticClass:"ml-2 text-neutral-700 dark:text-neutral-300",attrs:{size:"1x"}})],1)]),t._v(" "),r("NavItem",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#PROJECTS",expression:"'#PROJECTS'"}],attrs:{to:"/portfolio",isActive:"",id:"PROJECTS"}},[t._v("Projects")])],1),t._v(" "),r("div",{staticClass:"mx-auto px-4"},[r("div",{staticClass:"container pt-10 pb-2 max-w-3xl mx-auto"},[r("div",{staticClass:"flex flex-row pt-16 pb-8"},[r("BackLink",{attrs:{link:"portfolio"}},[t._v(" Back to all")])],1),t._v(" "),!0===this.loading?r("div",{staticClass:"flex"},[r("svg",{staticClass:"animate-spin -ml-1 mr-3 h-5 w-5 text-neutral-600 dark:text-neutral-400",staticStyle:{"z-index":"-1"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[r("path",{staticClass:"fill-current text-neutral-600 dark:text-neutral-400",attrs:{d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]),t._v(" "),r("h3",{staticClass:"text-md font-md text-neutral-600 dark:text-neutral-400"},[t._v("\n          Loading...\n        ")])]):t._e(),t._v(" "),r("Portfolio",{attrs:{portfolio:t.portfolio}}),t._v(" "),r("div",{staticClass:"flex flex-row pt-16"},[r("BackLink",{attrs:{link:"portfolio"}},[t._v(" Back to all")])],1),t._v(" "),r("div",{staticClass:"mt-16 pb-16 border-t-2 border-neutral-200 dark:border-neutral-800"}),t._v(" "),t._m(0),t._v(" "),r("div",[r("GetInTouch")],1)],1)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"mt-4"},[r("h2",[t._v("How to reach me.")])])}],!1,null,null,null);e.default=component.exports}}]);