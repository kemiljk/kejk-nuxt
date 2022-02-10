(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{289:function(t,e,r){"use strict";r.r(e);var n=r(35),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"container max-w-xl mx-auto"},[e("h1",{staticClass:"pb-6 text-5xl"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(289).default})},291:function(t,e,r){"use strict";r.r(e);var n={props:["color"],computed:{colorClasses:function(){return{red:"text-red-50 bg-red-500 hover:bg-red-600",blue:"bg-blue-500 text-white hover:bg-blue-600",purple:"bg-purple-900 hover:bg-purple-700 text-purple-100",indigo:"text-indigo-50 bg-indigo-600 hover:bg-indigo-700",grey:"bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-400 dark:hover:bg-neutral-600 text-neutral-800 dark:text-white",white:"bg-black hover:bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 dark:hover:bg-neutral-100"}[this.color]}}},o=r(35),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"flex justify-center items-center text-center font-medium w-full rounded-lg px-6 py-3 transition duration-500 ease focus:outline-none focus:ring-2 focus:ring-white no-underline",class:this.colorClasses},[this._t("icon"),this._v(" "),this._t("label")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(291).default})},292:function(t,e,r){"use strict";r.r(e);var n={props:["color"],computed:{colorClasses:function(){return{yellow:"text-yellow-700 dark:text-yellow-200 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700",purple:"text-purple-700 dark:text-purple-200 bg-purple-50 dark:bg-purple-900 border border-purple-200 dark:border-purple-700",red:"text-red-700 dark:text-red-200 bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700",pink:"text-pink-700 dark:text-pink-200 bg-pink-50 dark:bg-pink-900 border border-pink-200 dark:border-pink-700",green:"text-green-700 dark:text-green-200 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700",indigo:"text-indigo-700 dark:text-indigo-200 bg-indigo-50 dark:bg-indigo-900 border border-indigo-200 dark:border-indigo-700",blue:"text-blue-700 dark:text-blue-200 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700"}[this.color]}}},o=r(35),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"flex w-max justify-center font-mono rounded-full px-3 py-1 text-xs uppercase",class:this.colorClasses},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,r){"use strict";r.r(e);var n=r(35),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex w-full bg-white dark:bg-black"},[e("nav",{staticClass:"fixed z-50 mx-auto w-full pl-4 backdrop-blur-2xl sm:pl-6 lg:px-8"},[e("div",{staticClass:"md:overflow-none scrollbar-hidden flex h-16 w-full items-center justify-between overflow-x-auto"},[e("Logo",{staticClass:"mr-6 shrink-0 md:mr-0"}),this._v(" "),e("div",{staticClass:"mr-6 flex shrink-0 items-center justify-between space-x-2 md:mr-0 md:space-x-4"},[this._t("default")],2)],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(307).default,Nav:r(293).default})},295:function(t,e,r){"use strict";r.r(e);var n={props:{to:{type:String,required:!1},href:{type:String,required:!1},isActive:Boolean,extLink:Boolean}},o=r(35),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"flex w-full items-center justify-end sm:space-x-4 m-0"},[this.extLink?e("div",[e("a",{staticClass:"w-max flex items-center justify-center font-normal md:block px-4 py-2 text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 md:hover:bg-neutral-200 md:hover:text-black md:dark:hover:text-white md:dark:hover:bg-neutral-800 rounded-full transition ease-in-out duration-200 no-underline",class:[{"text-neutral-900 dark:text-white bg-neutral-300 dark:bg-neutral-700 border border-transparent dark:border-transparent md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700":this.isActive}],attrs:{href:""+this.href,target:"_blank"}},[this._t("default")],2)]):e("div",[e("NuxtLink",{staticClass:"w-max flex items-center justify-center font-normal md:block px-4 py-2 text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 md:hover:bg-neutral-200 md:hover:text-black md:dark:hover:text-white md:dark:hover:bg-neutral-800 rounded-full transition ease-in-out duration-200 no-underline",class:[{"text-neutral-900 dark:text-white bg-neutral-300 dark:bg-neutral-700 border border-transparent dark:border-transparent md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700":this.isActive}],attrs:{to:""+this.to}},[this._t("default")],2)],1)])}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,r){"use strict";r(309),r(312);var n="https://kejk.tech",title="Karl Emil James Koch",o="Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.",l="https://imgix.cosmicjs.com/80d7a220-89a4-11ec-9eec-e3ad41451efc-meta.png";e.a=function(meta){return[{hid:"description",name:"description",content:meta&&meta.description||o},{hid:"og:type",property:"og:type",content:meta&&meta.type||"website"},{hid:"og:url",property:"og:url",content:meta&&meta.url||n},{hid:"og:title",property:"og:title",content:meta&&meta.title||title},{hid:"og:description",property:"og:description",content:meta&&meta.description||o},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||l},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||n},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||title},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||o},{hid:"twitter:image:src",name:"twitter:image:src",content:meta&&meta.mainImage||l},{hid:"twitter:site",name:"twitter:site",content:meta&&meta.twitterSite||"@_kejk"},{hid:"twitter:card",name:"twitter:card",content:meta&&meta.twitterCard||"summary_large_image"}]}},298:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(109);var o=r(129);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},299:function(t,e,r){"use strict";var n=r(7),o=r(300);n({target:"String",proto:!0,forced:r(301)("link")},{link:function(t){return o(this,"a","href",t)}})},300:function(t,e,r){var n=r(23),o=/"/g;t.exports=function(t,e,r,l){var c=String(n(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(l).replace(o,"&quot;")+'"'),d+">"+c+"</"+e+">"}},301:function(t,e,r){var n=r(10);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},305:function(t,e,r){var n=r(9);e.f=n},306:function(t,e,r){"use strict";r.r(e);r(299);var n={props:["link"],components:{ArrowLeftIcon:r(290).a},computed:{backLink:function(){return{home:"/",about:"/about",thoughts:"/thoughts",bookmarks:"/bookmarks",uses:"/uses",portfolio:"/portfolio"}[this.link]}}},o=r(35),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("NuxtLink",{staticClass:"z-10 text-black hover:bg-neutral-50 dark:hover:bg-neutral-900 dark:text-white border-2 border-neutral-500 rounded-xl px-4 py-2 no-underline transition ease-in-out duration-200",attrs:{to:this.backLink}},[e("div",{staticClass:"flex items-center justify-between font-medium"},[e("arrow-left-icon",{staticClass:"text-neutral-700 dark:text-neutral-300 mr-2"}),this._v(" "),this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},307:function(t,e,r){"use strict";r.r(e);var n=r(35),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center"},[e("NuxtLink",{staticClass:" no-underline text-600 dark:text-400",attrs:{to:"/"}},[e("svg",{staticClass:"w-8 h-8",attrs:{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"150",cy:"111",r:"40",fill:"currentColor"}}),this._v(" "),e("circle",{attrs:{cx:"150",cy:"389",r:"40",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M380.745 85.255C387.306 91.8185 390.993 100.719 390.993 110C390.993 119.281 387.306 128.182 380.745 134.745L265.49 250L380.745 365.255C387.121 371.856 390.648 380.697 390.569 389.874C390.489 399.051 386.808 407.829 380.319 414.319C373.829 420.808 365.051 424.489 355.874 424.569C346.697 424.648 337.856 421.121 331.255 414.745L191.255 274.745C184.694 268.182 181.007 259.281 181.007 250C181.007 240.719 184.694 231.818 191.255 225.255L331.255 85.255C337.818 78.6935 346.719 75.0075 356 75.0075C365.281 75.0075 374.182 78.6935 380.745 85.255V85.255Z",fill:"currentColor"}})])])],1)}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,r){"use strict";var n=r(7),o=r(8),l=r(37),c=r(36),d=r(19),f=r(127),m=r(192),h=r(10),v=r(22),k=r(89),x=r(18),y=r(12),w=r(29),_=r(32),C=r(86),S=r(67),j=r(128),O=r(68),N=r(123),E=r(310),L=r(126),B=r(66),P=r(24),T=r(85),I=r(25),$=r(26),H=r(124),D=r(87),F=r(88),A=r(125),z=r(9),V=r(305),Q=r(311),U=r(90),J=r(46),K=r(47).forEach,G=D("hidden"),R=z("toPrimitive"),M=J.set,W=J.getterFor("Symbol"),X=Object.prototype,Y=o.Symbol,Z=l("JSON","stringify"),tt=B.f,et=P.f,nt=E.f,it=T.f,at=H("symbols"),ot=H("op-symbols"),lt=H("string-to-symbol-registry"),st=H("symbol-to-string-registry"),ut=H("wks"),ct=o.QObject,ft=!ct||!ct.prototype||!ct.prototype.findChild,pt=d&&h((function(){return 7!=j(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=tt(X,e);n&&delete X[e],et(t,e,r),n&&t!==X&&et(X,e,n)}:et,mt=function(t,e){var symbol=at[t]=j(Y.prototype);return M(symbol,{type:"Symbol",tag:t,description:e}),d||(symbol.description=e),symbol},bt=m?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},gt=function(t,e,r){t===X&&gt(ot,e,r),y(t);var n=C(e,!0);return y(r),v(at,n)?(r.enumerable?(v(t,G)&&t[G][n]&&(t[G][n]=!1),r=j(r,{enumerable:S(0,!1)})):(v(t,G)||et(t,G,S(1,{})),t[G][n]=!0),pt(t,n,r)):et(t,n,r)},ht=function(t,e){y(t);var r=_(e),n=O(r).concat(yt(r));return K(n,(function(e){d&&!vt.call(r,e)||gt(t,e,r[e])})),t},vt=function(t){var e=C(t,!0),r=it.call(this,e);return!(this===X&&v(at,e)&&!v(ot,e))&&(!(r||!v(this,e)||!v(at,e)||v(this,G)&&this[G][e])||r)},kt=function(t,e){var r=_(t),n=C(e,!0);if(r!==X||!v(at,n)||v(ot,n)){var o=tt(r,n);return!o||!v(at,n)||v(r,G)&&r[G][n]||(o.enumerable=!0),o}},xt=function(t){var e=nt(_(t)),r=[];return K(e,(function(t){v(at,t)||v(F,t)||r.push(t)})),r},yt=function(t){var e=t===X,r=nt(e?ot:_(t)),n=[];return K(r,(function(t){!v(at,t)||e&&!v(X,t)||n.push(at[t])})),n};(f||($((Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),r=function(t){this===X&&r.call(ot,t),v(this,G)&&v(this[G],e)&&(this[G][e]=!1),pt(this,e,S(1,t))};return d&&ft&&pt(X,e,{configurable:!0,set:r}),mt(e,t)}).prototype,"toString",(function(){return W(this).tag})),$(Y,"withoutSetter",(function(t){return mt(A(t),t)})),T.f=vt,P.f=gt,B.f=kt,N.f=E.f=xt,L.f=yt,V.f=function(t){return mt(z(t),t)},d&&(et(Y.prototype,"description",{configurable:!0,get:function(){return W(this).description}}),c||$(X,"propertyIsEnumerable",vt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Y}),K(O(ut),(function(t){Q(t)})),n({target:"Symbol",stat:!0,forced:!f},{for:function(t){var e=String(t);if(v(lt,e))return lt[e];var symbol=Y(e);return lt[e]=symbol,st[symbol]=e,symbol},keyFor:function(t){if(!bt(t))throw TypeError(t+" is not a symbol");if(v(st,t))return st[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!d},{create:function(t,e){return void 0===e?j(t):ht(j(t),e)},defineProperty:gt,defineProperties:ht,getOwnPropertyDescriptor:kt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:xt,getOwnPropertySymbols:yt}),n({target:"Object",stat:!0,forced:h((function(){L.f(1)}))},{getOwnPropertySymbols:function(t){return L.f(w(t))}}),Z)&&n({target:"JSON",stat:!0,forced:!f||h((function(){var symbol=Y();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,e,r){for(var n,o=[t],l=1;arguments.length>l;)o.push(arguments[l++]);if(n=e,(x(e)||void 0!==t)&&!bt(t))return k(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!bt(e))return e}),o[1]=e,Z.apply(null,o)}});Y.prototype[R]||I(Y.prototype,R,Y.prototype.valueOf),U(Y,"Symbol"),F[G]=!0},310:function(t,e,r){var n=r(32),o=r(123).f,l={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==l.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(n(t))}},311:function(t,e,r){var path=r(191),n=r(22),o=r(305),l=r(24).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});n(e,t)||l(e,t,{value:o.f(t)})}},312:function(t,e,r){"use strict";var n=r(7),o=r(19),l=r(8),c=r(22),d=r(18),f=r(24).f,m=r(190),h=l.Symbol;if(o&&"function"==typeof h&&(!("description"in h.prototype)||void 0!==h().description)){var v={},k=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof k?new h(t):void 0===t?h():h(t);return""===t&&(v[e]=!0),e};m(k,h);var x=k.prototype=h.prototype;x.constructor=k;var y=x.toString,w="Symbol(test)"==String(h("test")),_=/^Symbol\((.*)\)[^)]+$/;f(x,"description",{configurable:!0,get:function(){var symbol=d(this)?this.valueOf():this,t=y.call(symbol);if(c(v,symbol))return"";var desc=w?t.slice(7,-1):t.replace(_,"$1");return""===desc?void 0:desc}}),n({global:!0,forced:!0},{Symbol:k})}},316:function(t,e,r){"use strict";r.r(e);var n=r(290),o={components:{RssIcon:n.s,CoffeeIcon:n.f,MailIcon:n.p}},l=r(35),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex bg-neutral-50 dark:bg-neutral-900 rounded-3xl"},[r("div",{staticClass:"p-8 w-full"},[r("h3",{staticClass:"text-lg sm:text-xl text-neutral-800 dark:text-white font-bold mb-0"},[t._v("\n      Subscribe to stay up-to-date.\n    ")]),t._v(" "),r("form",{staticClass:"embeddable-buttondown-form grid grid-cols-1 gap-2 mt-2 md:grid-cols-3 pb-4",attrs:{action:"https://buttondown.email/api/emails/embed-subscribe/karl",method:"post",target:"popupwindow",onsubmit:"window.open('https://buttondown.email/karl', 'popupwindow')"}},[t._m(0),t._v(" "),r("input",{attrs:{type:"hidden",value:"1",name:"embed"}}),t._v(" "),r("Button",{attrs:{type:"submit",color:"white"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("mail-icon",{staticClass:"inline-block mr-2 text-neutral-50 dark:text-neutral-900",attrs:{size:"1x"}})]},proxy:!0},{key:"label",fn:function(){return[t._v(" Newsletter ")]},proxy:!0}])})],1),t._v(" "),r("div",{staticClass:"flex flex-row space-x-2 pt-2 items-center justify-start"},[r("a",{staticClass:"no-underline",attrs:{href:"https://www.kejk.tech/rss.xml",target:"_blank",rel:"noreferrer"}},[r("Button",{staticClass:"rounded-full w-full md:w-max",attrs:{color:"grey"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("rss-icon",{staticClass:"inline-block mr-2 text-neutral-900 dark:text-neutral-50",attrs:{size:"1x"}})]},proxy:!0},{key:"label",fn:function(){return[t._v(" RSS ")]},proxy:!0}])})],1),t._v(" "),r("a",{staticClass:"no-underline",attrs:{href:"https://app.mailbrew.com/_kejk/kejk-thoughts-QQU8XZ7Y1S4b?aff=_kejk",target:"_blank",rel:"noreferrer"}},[r("Button",{staticClass:" rounded-full w-full md:w-max",attrs:{color:"red"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("coffee-icon",{staticClass:"inline-block mr-2 text-red-100",attrs:{size:"1x"}})]},proxy:!0},{key:"label",fn:function(){return[t._v(" Mailbrew ")]},proxy:!0}])})],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"md:col-span-2",attrs:{for:"bd-email"}},[e("span",{staticClass:"sr-only"},[this._v("Enter your email")]),this._v(" "),e("input",{staticClass:"py-3 px-3 w-full rounded-lg bg-white dark:bg-black border-2 border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-50 font-medium focus:border-indigo-500 focus:border-2 focus:outline-none",attrs:{type:"email","keyup.enter":"submit",name:"email",id:"bd-email",placeholder:"e.g. sly@stallone.com",required:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(291).default})},320:function(t,e){var r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getBlog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"getObject"},arguments:[{kind:"Argument",name:{kind:"Name",value:"bucket_slug"},value:{kind:"StringValue",value:"kemiljk",block:!1}},{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}},{kind:"ObjectField",name:{kind:"Name",value:"read_key"},value:{kind:"StringValue",value:"uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modified_at"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"order"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:251}};r.loc.source={body:'query getBlog($slug: String!) {\n  getObject(\n    bucket_slug: "kemiljk"\n    input: {\n      slug: $slug\n      read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"\n    }\n  ) {\n    title\n    content\n    metadata\n    modified_at\n    order\n  }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function o(t,e){for(var i=0;i<t.definitions.length;i++){var element=t.definitions[i];if(element.name&&element.name.value==e)return element}}r.definitions.forEach((function(t){if(t.name){var e=new Set;!function t(e,r){if("FragmentSpread"===e.kind)r.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&r.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,r)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,r)})),e.definitions&&e.definitions.forEach((function(e){t(e,r)}))}(t,e),n[t.name.value]=e}})),t.exports=r,t.exports.getBlog=function(t,e){var r={kind:t.kind,definitions:[o(t,e)]};t.hasOwnProperty("loc")&&(r.loc=t.loc);var l=n[e]||new Set,c=new Set,d=new Set;for(l.forEach((function(t){d.add(t)}));d.size>0;){var f=d;d=new Set,f.forEach((function(t){c.has(t)||(c.add(t),(n[t]||new Set).forEach((function(t){d.add(t)})))}))}return c.forEach((function(e){var n=o(t,e);n&&r.definitions.push(n)})),r}(r,"getBlog")},330:function(t,e,r){"use strict";r.r(e);var n=r(298),o=r(296),l=r(290),c={name:"Blog",props:{blog:{type:Object,default:function(){}}},component:{TwitterIcon:l.t,LinkedinIcon:l.o},computed:{meta:function(){var t={type:"blog",title:this.blog.title,description:this.blog.metadata.snippet,url:"https://kejk.tech/thoughts/"+"".concat(this.$route.params.id),mainImage:this.blog.metadata.hero.imgix_url};return Object(o.a)(t)}},head:function(){return{title:this.blog.title,meta:Object(n.a)(this.meta),link:[{rel:"canonical",href:"https://kejk.tech/thoughts/".concat(this.$route.params.id)}]}}},d=r(35),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"-mt-24"},[t.blog?r("div",{staticClass:"flex flex-row text-left"},[r("div",{staticClass:"flex flex-col col-span-full md:col-span-6"},[r("Header",{staticClass:"pt-24"},[t._v("\n        "+t._s(t.blog.title)+"\n      ")]),t._v(" "),r("p",{staticClass:"font-mono text-neutral-500 dark:text-neutral-400 pt-2"},[t._v("\n        Updated "+t._s(t._f("moment")(t.blog.modified_at,"from","now"))+"\n      ")]),t._v(" "),r("Tag",{attrs:{color:"indigo"}},[t._v("\n        "+t._s(t.blog.metadata.tag)+"\n      ")])],1)]):t._e(),t._v(" "),r("div",[r("section",{staticClass:"mt-4 text-black dark:text-neutral-300",domProps:{innerHTML:t._s(t.blog.content)}})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(289).default,Tag:r(292).default})},346:function(t,e,r){"use strict";r.r(e);r(31);var n=r(6),o=r(290),l=r(320),c=r.n(l),d=r(116),f={name:"BlogView",components:{ArrowUpRightIcon:o.c},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.route,o=t.redirect,e.prev=1,e.next=4,r.apolloProvider.defaultClient.query({query:c.a,variables:{slug:n.params.id}});case 4:return l=e.sent,data=l.data,console.log("data",data),e.abrupt("return",{page:data.getObject});case 10:e.prev=10,e.t0=e.catch(1),console.log("error",e.t0),o("/thoughts");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()},mounted:function(){d.a.highlightAll()},computed:{myRoute:function(){return this.$route.params.id}}},m=r(35),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative mx-auto"},[r("Nav",[r("NavItem",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("NavItem",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#THOUGHTS",expression:"'#THOUGHTS'"}],attrs:{to:"/thoughts",isActive:"",id:"THOUGHTS"}},[t._v("Thoughts")]),t._v(" "),r("NavItem",{attrs:{href:"https://www.plugins.run",extLink:""}},[r("span",{staticClass:"flex items-center"},[t._v("\n        Plugins\n        "),r("arrow-up-right-icon",{staticClass:"ml-2 text-neutral-700 dark:text-neutral-300",attrs:{size:"1x"}})],1)]),t._v(" "),r("NavItem",{attrs:{to:"/portfolio"}},[t._v("Projects")]),t._v(" "),r("NavItem",{attrs:{href:"https://bookmarks.kejk.tech",extLink:""}},[r("span",{staticClass:"flex items-center"},[t._v("\n        Bookmarks\n        "),r("arrow-up-right-icon",{staticClass:"ml-2 text-neutral-700 dark:text-neutral-300",attrs:{size:"1x"}})],1)])],1),t._v(" "),r("div",{staticClass:"mx-auto px-4"},[r("div",{staticClass:"container pt-10 pb-2 max-w-3xl mx-auto"},[r("div",{staticClass:"flex flex-row pt-16 pb-8"},[r("BackLink",{attrs:{link:"thoughts"}},[t._v(" Back to all posts ")])],1),t._v(" "),r("keep-alive",[t.page?r("Blog",{attrs:{blog:t.page}}):t._e()],1),t._v(" "),r("div",{staticClass:"mt-16 pb-4 border-t-2 border-neutral-200 dark:border-neutral-800"}),t._v(" "),r("div",{staticClass:"flex flex-row py-8"},[r("BackLink",{attrs:{link:"thoughts"}},[t._v(" Back to all posts ")])],1),t._v(" "),t._m(0),t._v(" "),r("SubscribeCard")],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("h2",[this._v("How to follow along.")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavItem:r(295).default,Nav:r(293).default,BackLink:r(306).default,Blog:r(330).default,Header:r(289).default,SubscribeCard:r(316).default})}}]);