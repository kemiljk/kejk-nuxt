(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{333:function(e,t,n){"use strict";(function(e){var r=n(12),c=(n(49),n(162)),o=n.n(c)()().bucket({slug:e.env.NUXT_ENV_COSMIC_SLUG,read_key:e.env.NUXT_ENV_COSMIC_READ_KEY});t.a={name:"ExternalTab",data:function(){return{links:{}}},created:function(){this.getLinksData()},methods:{getLinksData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,o.getObjects({query:{type:"links"},props:"_id,slug,title,content,metadata,created_at",sort:"-created_at"}).then((function(data){var t=data.objects;e.loading=!1,e.links=t}));case 3:case"end":return t.stop()}}),t)})))()}}}}).call(this,n(56))},348:function(e,t,n){"use strict";n.r(t);var r=n(333).a,c=n(55),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("div",{staticClass:"grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8"},e._l(e.links,(function(link){return n("div",{key:link._id},[n("keep-alive",[n("LinkCard",{attrs:{link:link}})],1)],1)})),0)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h2",{staticClass:"inline-block border-b-2 border-neutral-100 dark:border-neutral-800 max-w-max"},[e._v("\n      Links.\n    ")])])}],!1,null,null,null);t.default=component.exports}}]);