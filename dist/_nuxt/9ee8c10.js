(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{355:function(t,e,r){"use strict";r.r(e);var n=r(44),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"container mx-auto max-w-xl"},[e("h1",{staticClass:"pb-6 text-5xl font-bold"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(355).default})},357:function(t,e,r){"use strict";r.r(e);var n={props:["color"],computed:{colorClasses:function(){return{red:"text-red-50 bg-red-500 hover:bg-red-600",blue:"bg-blue-500 text-white hover:bg-blue-600",purple:"bg-purple-900 hover:bg-purple-700 text-purple-100",indigo:"text-indigo-50 bg-indigo-600 hover:bg-indigo-700",grey:"bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-400 dark:hover:bg-neutral-600 text-neutral-800 dark:text-white",white:"bg-black hover:bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 dark:hover:bg-neutral-100"}[this.color]}}},o=r(44),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"ease flex w-full items-center justify-center rounded-lg px-6 py-3 text-center font-medium no-underline transition duration-500",class:this.colorClasses},[this._t("icon"),this._v(" "),this._t("label")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(357).default})},358:function(t,e,r){"use strict";r.r(e);var n=r(44),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"supports-backdrop-blur:bg-white/95 supports-backdrop-blur:dark:bg-black/95 absolute top-0 z-50 mx-auto h-16 w-full bg-white dark:bg-black"},[e("div",{staticClass:"background-blur fixed z-50 mx-auto w-full flex-none pl-4 duration-500 sm:pl-6 lg:px-8"},[e("div",{staticClass:"md:overflow-none scrollbar-hidden flex h-16 w-full items-center justify-between overflow-x-auto"},[e("Logo",{staticClass:"mr-6 shrink-0 md:mr-0"}),this._v(" "),e("div",{staticClass:"mr-6 flex shrink-0 items-center justify-between space-x-2 md:mr-0 md:space-x-4"},[this._t("default")],2)],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(362).default,Nav:r(358).default})},359:function(t,e,r){var n=r(11);e.f=n},360:function(t,e,r){"use strict";r.r(e);var n={props:{to:{type:String,required:!1},href:{type:String,required:!1},isActive:Boolean,extLink:Boolean}},o=r(44),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"flex w-full items-center justify-end sm:space-x-4 m-0"},[this.extLink?e("div",[e("a",{staticClass:"w-max flex items-center justify-center font-normal md:block px-4 py-2 text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 md:hover:bg-neutral-200 md:hover:text-black md:dark:hover:text-white md:dark:hover:bg-neutral-800 rounded-full transition ease-in-out duration-200 no-underline",class:[{"text-neutral-900 dark:text-white bg-neutral-300 dark:bg-neutral-700 border border-transparent dark:border-transparent md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700":this.isActive}],attrs:{href:""+this.href,target:"_blank"}},[this._t("default")],2)]):e("div",[e("NuxtLink",{staticClass:"w-max flex items-center justify-center font-normal md:block px-4 py-2 text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 md:hover:bg-neutral-200 md:hover:text-black md:dark:hover:text-white md:dark:hover:bg-neutral-800 rounded-full transition ease-in-out duration-200 no-underline",class:[{"text-neutral-900 dark:text-white bg-neutral-300 dark:bg-neutral-700 border border-transparent dark:border-transparent md:hover:bg-neutral-300 md:dark:hover:bg-neutral-700":this.isActive}],attrs:{to:""+this.to}},[this._t("default")],2)],1)])}),[],!1,null,null,null);e.default=component.exports},362:function(t,e,r){"use strict";r.r(e);var n=r(44),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center"},[e("NuxtLink",{staticClass:" no-underline text-600 dark:text-400",attrs:{to:"/"}},[e("svg",{staticClass:"w-8 h-8",attrs:{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"150",cy:"111",r:"40",fill:"currentColor"}}),this._v(" "),e("circle",{attrs:{cx:"150",cy:"389",r:"40",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M380.745 85.255C387.306 91.8185 390.993 100.719 390.993 110C390.993 119.281 387.306 128.182 380.745 134.745L265.49 250L380.745 365.255C387.121 371.856 390.648 380.697 390.569 389.874C390.489 399.051 386.808 407.829 380.319 414.319C373.829 420.808 365.051 424.489 355.874 424.569C346.697 424.648 337.856 421.121 331.255 414.745L191.255 274.745C184.694 268.182 181.007 259.281 181.007 250C181.007 240.719 184.694 231.818 191.255 225.255L331.255 85.255C337.818 78.6935 346.719 75.0075 356 75.0075C365.281 75.0075 374.182 78.6935 380.745 85.255V85.255Z",fill:"currentColor"}})])])],1)}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,r){"use strict";r(366),r(369);var n="https://kejk.tech",title="Karl Emil James Koch",o="Karl is a Product Designer, crafting intelligent interfaces for the web, mobile and meta services.",l="https://imgix.cosmicjs.com/067798c0-9221-11ec-9a4e-05fc85d83574-meta.png";e.a=function(meta){return[{hid:"description",name:"description",content:meta&&meta.description||o},{hid:"og:type",property:"og:type",content:meta&&meta.type||"website"},{hid:"og:url",property:"og:url",content:meta&&meta.url||n},{hid:"og:title",property:"og:title",content:meta&&meta.title||title},{hid:"og:description",property:"og:description",content:meta&&meta.description||o},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||l},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||n},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||title},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||o},{hid:"twitter:image:src",name:"twitter:image:src",content:meta&&meta.mainImage||l},{hid:"twitter:site",name:"twitter:site",content:meta&&meta.twitterSite||"@_kejk"},{hid:"twitter:card",name:"twitter:card",content:meta&&meta.twitterCard||"summary_large_image"}]}},364:function(t,e,r){"use strict";r.r(e);var n={name:"GetInTouch",components:{CheckIcon:r(356).d},data:function(){return{socials:[{href:"https://www.figma.com/@_kejk",figma:!0,title:"Figma"},{href:"https://www.twitter.com/_kejk",twitter:!0,title:"Twitter"},{href:"https://www.Linkedin.com/in/kejk",linkedin:!0,title:"LinkedIn"},{href:"https://www.github.com/kemiljk/",github:!0,title:"Github"},{href:"https://dribbble.com/_kejk",dribbble:!0,title:"Dribbble"},{href:"https://www.ko-fi.com/kemiljk",coffee:!0,title:"Ko-Fi"}]}}},o=r(44),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"justify-center rounded-3xl border-2 border-neutral-100 bg-white dark:border-neutral-900 dark:bg-black sm:pt-0"},[e("div",{staticClass:"mx-auto max-w-5xl"},[e("div",{staticClass:"overflow-hidden"},[e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2"},[e("div",{staticClass:"rounded-tl-lg rounded-tr-lg p-6 sm:mr-2 sm:rounded-tr-none sm:rounded-bl-lg"},[e("h3",{staticClass:"mb-0 pt-0 text-xl font-bold tracking-tight text-neutral-800 dark:text-white sm:text-2xl"},[this._v("\n            Get in touch.\n          ")]),this._v(" "),e("div",{staticClass:"grid-row grid w-full grid-cols-2 gap-4 pt-4 md:grid-cols-2"},this._l(this.socials,(function(t){return e("div",{key:t._id},[e("keep-alive",[e("SocialCard",{attrs:{social:t}})],1)],1)})),0)]),this._v(" "),this._m(0)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"flex flex-col justify-center p-6",attrs:{action:"https://formcarry.com/s/mGfGBUrWtY",method:"POST","accept-charset":"UTF-8"}},[r("div",{staticClass:"mt-2 flex flex-col"},[r("label",{staticClass:"font-medium text-black dark:text-white",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{staticClass:"w-100 mt-2 rounded-lg border-2 border-neutral-200 bg-white py-3 px-3 font-medium text-neutral-800 focus:border-2 focus:border-indigo-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50",attrs:{type:"email",name:"email",id:"email",placeholder:"e.g. arnold@schwarzenegger.com",required:""}})]),t._v(" "),r("div",{staticClass:"mt-2 flex flex-col"},[r("label",{staticClass:"font-medium text-black dark:text-white",attrs:{for:"message"}},[t._v("Your message")]),t._v(" "),r("textarea",{staticClass:"w-100 mt-2 rounded-lg border-2 border-neutral-200 bg-white py-3 px-3 font-medium text-neutral-800 focus:border-2 focus:border-indigo-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50",attrs:{type:"text",name:"message",id:"message",rows:"4",placeholder:"Ask me anything",required:""}})]),t._v(" "),r("input",{attrs:{type:"hidden",name:"_gotcha"}}),t._v(" "),r("button",{staticClass:"mt-8 rounded-lg bg-black py-3 px-6 font-medium text-white transition duration-300 ease-in-out hover:bg-neutral-900 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 md:w-32",attrs:{id:"submitbutton",type:"submit"}},[t._v("\n            Submit\n          ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialCard:r(370).default,Button:r(357).default})},365:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(112);var o=r(153);function l(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},366:function(t,e,r){"use strict";var n=r(9),o=r(10),l=r(46),c=r(45),d=r(23),f=r(151),h=r(232),m=r(12),v=r(25),x=r(109),k=r(24),_=r(14),w=r(34),y=r(37),C=r(75),j=r(74),S=r(110),O=r(76),E=r(105),L=r(367),z=r(150),I=r(54),P=r(28),D=r(106),F=r(31),$=r(29),N=r(148),B=r(107),T=r(108),H=r(149),A=r(11),G=r(359),K=r(368),J=r(111),U=r(55),R=r(47).forEach,Y=B("hidden"),W=A("toPrimitive"),M=U.set,Q=U.getterFor("Symbol"),V=Object.prototype,Z=o.Symbol,X=l("JSON","stringify"),tt=I.f,et=P.f,nt=L.f,at=D.f,it=N("symbols"),st=N("op-symbols"),ot=N("string-to-symbol-registry"),lt=N("symbol-to-string-registry"),ct=N("wks"),ut=o.QObject,ft=!ut||!ut.prototype||!ut.prototype.findChild,ht=d&&m((function(){return 7!=S(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=tt(V,e);n&&delete V[e],et(t,e,r),n&&t!==V&&et(V,e,n)}:et,mt=function(t,e){var symbol=it[t]=S(Z.prototype);return M(symbol,{type:"Symbol",tag:t,description:e}),d||(symbol.description=e),symbol},pt=h?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Z},bt=function(t,e,r){t===V&&bt(st,e,r),_(t);var n=C(e,!0);return _(r),v(it,n)?(r.enumerable?(v(t,Y)&&t[Y][n]&&(t[Y][n]=!1),r=S(r,{enumerable:j(0,!1)})):(v(t,Y)||et(t,Y,j(1,{})),t[Y][n]=!0),ht(t,n,r)):et(t,n,r)},vt=function(t,e){_(t);var r=y(e),n=O(r).concat(_t(r));return R(n,(function(e){d&&!gt.call(r,e)||bt(t,e,r[e])})),t},gt=function(t){var e=C(t,!0),r=at.call(this,e);return!(this===V&&v(it,e)&&!v(st,e))&&(!(r||!v(this,e)||!v(it,e)||v(this,Y)&&this[Y][e])||r)},xt=function(t,e){var r=y(t),n=C(e,!0);if(r!==V||!v(it,n)||v(st,n)){var o=tt(r,n);return!o||!v(it,n)||v(r,Y)&&r[Y][n]||(o.enumerable=!0),o}},kt=function(t){var e=nt(y(t)),r=[];return R(e,(function(t){v(it,t)||v(T,t)||r.push(t)})),r},_t=function(t){var e=t===V,r=nt(e?st:y(t)),n=[];return R(r,(function(t){!v(it,t)||e&&!v(V,t)||n.push(it[t])})),n};(f||($((Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=H(t),r=function(t){this===V&&r.call(st,t),v(this,Y)&&v(this[Y],e)&&(this[Y][e]=!1),ht(this,e,j(1,t))};return d&&ft&&ht(V,e,{configurable:!0,set:r}),mt(e,t)}).prototype,"toString",(function(){return Q(this).tag})),$(Z,"withoutSetter",(function(t){return mt(H(t),t)})),D.f=gt,P.f=bt,I.f=xt,E.f=L.f=kt,z.f=_t,G.f=function(t){return mt(A(t),t)},d&&(et(Z.prototype,"description",{configurable:!0,get:function(){return Q(this).description}}),c||$(V,"propertyIsEnumerable",gt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:Z}),R(O(ct),(function(t){K(t)})),n({target:"Symbol",stat:!0,forced:!f},{for:function(t){var e=String(t);if(v(ot,e))return ot[e];var symbol=Z(e);return ot[e]=symbol,lt[symbol]=e,symbol},keyFor:function(t){if(!pt(t))throw TypeError(t+" is not a symbol");if(v(lt,t))return lt[t]},useSetter:function(){ft=!0},useSimple:function(){ft=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!d},{create:function(t,e){return void 0===e?S(t):vt(S(t),e)},defineProperty:bt,defineProperties:vt,getOwnPropertyDescriptor:xt}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:kt,getOwnPropertySymbols:_t}),n({target:"Object",stat:!0,forced:m((function(){z.f(1)}))},{getOwnPropertySymbols:function(t){return z.f(w(t))}}),X)&&n({target:"JSON",stat:!0,forced:!f||m((function(){var symbol=Z();return"[null]"!=X([symbol])||"{}"!=X({a:symbol})||"{}"!=X(Object(symbol))}))},{stringify:function(t,e,r){for(var n,o=[t],l=1;arguments.length>l;)o.push(arguments[l++]);if(n=e,(k(e)||void 0!==t)&&!pt(t))return x(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!pt(e))return e}),o[1]=e,X.apply(null,o)}});Z.prototype[W]||F(Z.prototype,W,Z.prototype.valueOf),J(Z,"Symbol"),T[Y]=!0},367:function(t,e,r){var n=r(37),o=r(105).f,l={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==l.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(n(t))}},368:function(t,e,r){var path=r(231),n=r(25),o=r(359),l=r(28).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});n(e,t)||l(e,t,{value:o.f(t)})}},369:function(t,e,r){"use strict";var n=r(9),o=r(23),l=r(10),c=r(25),d=r(24),f=r(28).f,h=r(230),m=l.Symbol;if(o&&"function"==typeof m&&(!("description"in m.prototype)||void 0!==m().description)){var v={},x=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof x?new m(t):void 0===t?m():m(t);return""===t&&(v[e]=!0),e};h(x,m);var k=x.prototype=m.prototype;k.constructor=x;var _=k.toString,w="Symbol(test)"==String(m("test")),y=/^Symbol\((.*)\)[^)]+$/;f(k,"description",{configurable:!0,get:function(){var symbol=d(this)?this.valueOf():this,t=_.call(symbol);if(c(v,symbol))return"";var desc=w?t.slice(7,-1):t.replace(y,"$1");return""===desc?void 0:desc}}),n({global:!0,forced:!0},{Symbol:x})}},370:function(t,e,r){"use strict";r.r(e);var n=r(356),o={name:"Social",components:{FigmaIcon:n.i,TwitterIcon:n.s,LinkedinIcon:n.n,GithubIcon:n.j,DribbbleIcon:n.h,CoffeeIcon:n.e},props:{social:{type:Object,default:function(){}}}},l=r(44),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"no-underline",attrs:{href:t.social.href,target:"_blank",rel:"noreferrer"}},[r("button",{staticClass:"flex items-center justify-center p-4 bg-neutral-50 dark:bg-neutral-900 hover:shadow-md rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition ease-in-out duration-300 w-full focus:outline-none focus:ring-2 focus:ring-white"},[t.social.twitter?r("twitter-icon",{staticClass:"text-blue-400",attrs:{size:"1x"}}):t._e(),t._v(" "),t.social.linkedin?r("linkedin-icon",{staticClass:"text-blue-600 dark:text-blue-500",attrs:{size:"1x"}}):t._e(),t._v(" "),t.social.figma?r("figma-icon",{staticClass:"text-green-600 dark:text-green-400",attrs:{size:"1x"}}):t._e(),t._v(" "),t.social.github?r("github-icon",{staticClass:"dark:text-white text-black",attrs:{size:"1x"}}):t._e(),t._v(" "),t.social.dribbble?r("dribbble-icon",{staticClass:"text-pink-400",attrs:{size:"1x"}}):t._e(),t._v(" "),t.social.coffee?r("coffee-icon",{staticClass:"text-red-600",attrs:{size:"1x"}}):t._e(),t._v(" "),r("span",{staticClass:"ml-2 text-md text-neutral-900 dark:text-neutral-50 font-medium text-xs"},[t._v("\n      "+t._s(t.social.title)+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(357).default})},371:function(t,e,r){"use strict";r.r(e);var n=r(44),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"w-full"},[e("h2",{staticClass:"text-3xl text-black dark:text-white"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(355).default})},372:function(t,e,r){"use strict";r.r(e);var n=r(44),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"mt-16 pb-16 border-t-2 border-neutral-200 dark:border-neutral-800"})])}],!1,null,null,null);e.default=component.exports},373:function(t,e,r){"use strict";var n=r(9),o=r(374);n({target:"String",proto:!0,forced:r(375)("link")},{link:function(t){return o(this,"a","href",t)}})},374:function(t,e,r){var n=r(26),o=/"/g;t.exports=function(t,e,r,l){var c=String(n(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(l).replace(o,"&quot;")+'"'),d+">"+c+"</"+e+">"}},375:function(t,e,r){var n=r(12);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},377:function(t,e,r){"use strict";r.r(e);var n=r(44),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"pb-4 max-w-xl mx-auto"},[e("span",{staticClass:"text-2xl leading-snug text-left md:text-center text-black dark:text-white"},[this._t("text")],2),this._v(" "),e("div",{staticClass:"flex flex-col md:flex-row justify-center mt-6"},[this._t("buttons")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(355).default})},378:function(t,e,r){"use strict";r.r(e);r(373);var n={props:["link"],components:{ArrowLeftIcon:r(356).a},computed:{backLink:function(){return{home:"/",about:"/about",thoughts:"/thoughts",bookmarks:"/bookmarks",uses:"/uses",portfolio:"/projects"}[this.link]}}},o=r(44),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("NuxtLink",{staticClass:"z-10 rounded-xl border-2 border-neutral-500 px-4 py-2 text-black no-underline transition duration-200 ease-in-out hover:bg-neutral-50 dark:text-white dark:hover:bg-neutral-900",attrs:{to:this.backLink}},[e("div",{staticClass:"flex items-center justify-between font-medium"},[e("arrow-left-icon",{staticClass:"mr-2 text-neutral-700 dark:text-neutral-300"}),this._v(" "),this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,r){"use strict";r.r(e);var n=r(365),o=r(363),l=r(356),c={name:"Lazy-PDF",components:{DownloadIcon:l.g,ArrowUpRightIcon:l.c},computed:{meta:function(){return Object(o.a)({title:"Lazy PDF | KEJK",description:"Effortless and interfaceless PDF creation.",url:"https://kejk.tech/lazy-pdf",mainImage:"https://imgix.cosmicjs.com/067798c0-9221-11ec-9a4e-05fc85d83574-meta.png"})}},head:function(){return{title:"Lazy PDF | KEJK",meta:Object(n.a)(this.meta),link:[{rel:"canonical",href:"https://kejk.tech/lazy-pdf"}]}},data:function(){return{download:{url:"https://res.cloudinary.com/kejk/raw/upload/v1617095071/Lazy_PDF_v1.1.dmg",text:"Download"},hero:"https://imgix.cosmicjs.com/d2653530-77ca-11ec-bfef-718573fe8f91-mockuuups-black-macbook-mockup-on-a-white-table-with-black-textbooks-at-the-side.jpeg"}}},d=r(44),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative mx-auto"},[r("Nav",[r("NavItem",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("NavItem",{attrs:{to:"/thoughts"}},[t._v("Thoughts")]),t._v(" "),r("NavItem",{attrs:{to:"/creations"}},[t._v("Creations")]),t._v(" "),r("NavItem",{attrs:{to:"/projects"}},[t._v("Projects")]),t._v(" "),r("NavItem",{attrs:{href:"https://bookmarks.kejk.tech",extLink:""}},[r("span",{staticClass:"flex items-center"},[t._v("\n        Bookmarks\n        "),r("arrow-up-right-icon",{staticClass:"ml-2 text-neutral-700 dark:text-neutral-300",attrs:{size:"1x"}})],1)]),t._v(" "),r("NavItem",{attrs:{to:"/uses"}},[t._v("Uses")])],1),t._v(" "),r("div",{staticClass:"mx-auto px-4"},[r("div",{staticClass:"container mx-auto max-w-3xl pt-10 pb-2"},[r("div",{staticClass:"flex flex-row pt-16 pb-8"},[r("BackLink",{attrs:{link:"home"}},[t._v(" Back home ")])],1),t._v(" "),r("Header",{staticClass:"pt-4 text-left md:text-center"},[t._v("/lazy-pdf")]),t._v(" "),r("Subheader",{scopedSlots:t._u([{key:"text",fn:function(){return[t._v("\n          Effortless and interfaceless PDF creation.\n        ")]},proxy:!0}])}),t._v(" "),r("div",[r("img",{staticClass:"mt-10 rounded-2xl",attrs:{src:""+t.hero,alt:"image of Lazy PDF app in use"}})]),t._v(" "),r("div",{staticClass:"py-4"},[r("div",[t._m(0),t._v(" "),r("div",{staticClass:"flex flex-col justify-center md:flex-row md:justify-start"},[r("a",{staticClass:"no-underline",attrs:{href:""+t.download.url}},[r("Button",{attrs:{color:"purple"},scopedSlots:t._u([{key:"icon",fn:function(){return[r("download-icon",{staticClass:"mr-2 inline-block text-purple-100",attrs:{size:"1x"}})]},proxy:!0},{key:"label",fn:function(){return[t._v("\n                  "+t._s(t.download.text)+"\n                ")]},proxy:!0}])})],1)]),t._v(" "),r("Divider"),t._v(" "),t._m(1),t._v(" "),r("Divider"),t._v(" "),t._m(2),t._v(" "),r("Divider"),t._v(" "),t._m(3),t._v(" "),r("Divider"),t._v(" "),t._m(4)],1)]),t._v(" "),r("Divider"),t._v(" "),r("H2Header",{attrs:{id:"GET_IN_TOUCH"}},[t._v("How to reach me")]),t._v(" "),r("GetInTouch")],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-8 mb-8 space-y-4"},[e("h3",{staticClass:"text-2xl font-bold text-neutral-900 dark:text-neutral-50"},[this._v("\n              Simple and invisible\n            ")]),this._v(" "),e("p",{staticClass:"text-neutral-700 dark:text-neutral-400"},[this._v("\n              Effortlessly create a PDF from a set of selected images through\n              an interfaceless system with only the Finder selection UI.\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-8 space-y-4"},[e("h3",{staticClass:"text-2xl font-bold text-neutral-900 dark:text-neutral-50"},[this._v("\n              Grab and go\n            ")]),this._v(" "),e("p",{staticClass:"text-neutral-700 dark:text-neutral-400"},[this._v("\n              Lazy PDF is deliberately designed to be simple and have a low\n              overhead, to make it easier to grab a set of design files and\n              throw them together into a PDF.\n            ")]),this._v(" "),e("img",{staticClass:"rounded-2xl pt-4 dark:ring-2 dark:ring-neutral-800",attrs:{src:"https://res.cloudinary.com/kejk/image/upload/v1585993877/Picking_selection_ckdioy.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-8 space-y-4"},[e("h3",{staticClass:"text-2xl font-bold text-neutral-900 dark:text-neutral-50"},[this._v("\n              On your terms\n            ")]),this._v(" "),e("p",{staticClass:"text-neutral-700 dark:text-neutral-400"},[this._v("\n              Your logical file order is always respected, so number your\n              files if you want to order in sequence, otherwise, move them\n              around afterwards in any PDF viewer.\n            ")]),this._v(" "),e("img",{staticClass:"rounded-2xl pt-4 dark:ring-2 dark:ring-neutral-800",attrs:{src:"https://res.cloudinary.com/kejk/image/upload/v1587570775/Frame_10_zub1ud.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-8 space-y-4"},[e("h3",{staticClass:"text-2xl font-bold text-neutral-900 dark:text-neutral-50"},[this._v("\n              Lossless\n            ")]),this._v(" "),e("p",{staticClass:"text-neutral-700 dark:text-neutral-400"},[this._v("\n              Respecting your image sizes, Lazy PDF doesn't try to compress\n              everything to printable sizes, ideal for sharing work with\n              teammates and management.\n            ")]),this._v(" "),e("img",{staticClass:"rounded-2xl pt-4 dark:ring-2 dark:ring-neutral-800",attrs:{src:"https://res.cloudinary.com/kejk/image/upload/v1585993878/Rendered_PDF_zpdrza.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-8 space-y-4"},[e("h3",{staticClass:"text-2xl font-bold text-neutral-900 dark:text-neutral-50"},[this._v("\n              Better than native\n            ")]),this._v(" "),e("p",{staticClass:"text-neutral-700 dark:text-neutral-400"},[this._v("\n              macOS' native 1-click PDF creation (left) pushes all files into\n              a printable page collection, Lazy PDF (right) leaves your images\n              alone. Perfect for long design files such as mobile layouts, or\n              ultrawide files when visualising a 21:9 video concept.\n            ")]),this._v(" "),e("img",{staticClass:"rounded-2xl pt-4 dark:ring-2 dark:ring-neutral-800",attrs:{src:"https://res.cloudinary.com/kejk/image/upload/v1586353512/Apple_versus_Lazy_mhp5ey.png"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavItem:r(360).default,Nav:r(358).default,BackLink:r(378).default,Header:r(355).default,Subheader:r(377).default,Button:r(357).default,Divider:r(372).default,H2Header:r(371).default,GetInTouch:r(364).default})}}]);