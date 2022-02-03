(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{352:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getBlog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getObject"},arguments:[{kind:"Argument",name:{kind:"Name",value:"bucket_slug"},value:{kind:"StringValue",value:"kemiljk",block:!1}},{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}},{kind:"ObjectField",name:{kind:"Name",value:"read_key"},value:{kind:"StringValue",value:"uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modified_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"order"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:251}};t.loc.source={body:'query getBlog($slug: String!) {\n  getObject(\n    bucket_slug: "kemiljk"\n    input: {\n      slug: $slug\n      read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"\n    }\n  ) {\n    title\n    content\n    metadata\n    modified_at\n    order\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var t=e.type;"NamedType"===t.kind&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,n)})),e.definitions&&e.definitions.forEach((function(e){r(e,n)}))}var l={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;r(e,n),l[e.name.value]=n}})),e.exports=t,e.exports.getBlog=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var r=l[n]||new Set,d=new Set,c=new Set;for(r.forEach((function(e){c.add(e)}));c.size>0;){var v=c;c=new Set,v.forEach((function(e){d.has(e)||(d.add(e),(l[e]||new Set).forEach((function(e){c.add(e)})))}))}return d.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"getBlog")},356:function(e,n,t){"use strict";t.r(n);var r=t(12),l=(t(49),t(329)),o=t(352),d=t.n(o),c=t(156),v={name:"BlogView",components:{ExternalLinkIcon:l.i},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,l,o,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.app,r=e.route,l=e.redirect,n.prev=1,n.next=4,t.apolloProvider.defaultClient.query({query:d.a,variables:{slug:r.params.id}});case 4:return o=n.sent,data=o.data,console.log("data",data),n.abrupt("return",{page:data.getObject});case 10:n.prev=10,n.t0=n.catch(1),console.log("error",n.t0),l("/thoughts");case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()},mounted:function(){c.a.highlightAll()},computed:{myRoute:function(){return this.$route.params.id}}},m=t(55),component=Object(m.a)(v,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"relative mx-auto"},[t("Nav",[t("NavItem",{attrs:{to:"/"}},[e._v("Home")]),e._v(" "),t("NavItem",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#THOUGHTS",expression:"'#THOUGHTS'"}],attrs:{to:"/thoughts",isActive:"",id:"THOUGHTS"}},[e._v("Thoughts")]),e._v(" "),t("NavItem",{attrs:{href:"https://www.plugins.run",extLink:""}},[t("span",{staticClass:"flex items-center"},[e._v("\n        Plugins\n        "),t("external-link-icon",{staticClass:"ml-2 text-neutral-700 dark:text-neutral-300",attrs:{size:"1x"}})],1)]),e._v(" "),t("NavItem",{attrs:{to:"/portfolio"}},[e._v("Projects")])],1),e._v(" "),t("div",{staticClass:"mx-auto px-4"},[t("div",{staticClass:"container pt-10 pb-2 max-w-3xl mx-auto"},[t("div",{staticClass:"flex flex-row pt-16 pb-8"},[t("BackLink",{attrs:{link:"thoughts"}},[e._v(" Back to all posts ")])],1),e._v(" "),t("keep-alive",[e.page?t("Blog",{attrs:{blog:e.page}}):e._e()],1),e._v(" "),t("div",{staticClass:"mt-16 pb-4 border-t-2 border-neutral-200 dark:border-neutral-800"}),e._v(" "),t("div",{staticClass:"flex flex-row py-8"},[t("BackLink",{attrs:{link:"thoughts"}},[e._v(" Back to all posts ")])],1),e._v(" "),e._m(0),e._v(" "),t("SubscribeCard")],1)])],1)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",[t("h2",[e._v("How to follow along.")])])}],!1,null,null,null);n.default=component.exports}}]);