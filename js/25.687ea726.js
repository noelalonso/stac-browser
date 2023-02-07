"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[25],{23843:function(t,e,r){r.r(e),r.d(e,{default:function(){return Y}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"share mt-1"},[e("b-button-group",[t.stacUrl?e("b-button",{attrs:{size:"sm",variant:"outline-primary",id:"popover-link",title:t.$t("source.detailsAboutSource")}},[e("b-icon-link"),t._v(" "),e("span",{staticClass:"button-label"},[t._v(t._s(t.$t("source.label")))])],1):t._e(),e("b-button",{attrs:{size:"sm",variant:"outline-primary",id:"popover-share",title:t.$t("source.share.withOthers")}},[e("b-icon-share"),t._v(" "),e("span",{staticClass:"button-label"},[t._v(t._s(t.$t("source.share.label")))])],1),e("b-dropdown",{attrs:{size:"sm",variant:"outline-primary",right:"",title:t.$t("source.language.switch")},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("b-icon-flag"),t._v(" "),e("span",{staticClass:"button-label"},[t._v(t._s(t.$t("source.language.label",{currentLanguage:t.currentLanguage})))])]},proxy:!0}])},t._l(t.languages,(function(r){return e("b-dropdown-item",{key:r.code,staticClass:"lang-item",on:{click:function(e){return t.switchLocale(r.code)}}},[t.locale===r.code?e("b-icon-check"):e("b-icon-blank"),e("span",{staticClass:"title"},[t._v(" "+t._s(r.native)+" "),r.global&&r.global!==r.native?[t._v(" / "+t._s(r.global))]:t._e()],2),!t.supportsLanguageExt||r.ui&&r.data?t._e():e("b-icon-exclamation-triangle",{staticClass:"ml-2",attrs:{title:r.ui?t.$t("source.language.onlyUI"):t.$t("source.language.onlyData")}})],1)})),1)],1),t.stacUrl?e("b-popover",{attrs:{target:"popover-link",triggers:"click blur",placement:"bottom",container:"stac-browser",title:t.$t("source.title")},on:{show:t.validate}},[t.stacVersion?[e("b-row",[e("b-col",{attrs:{cols:"2"}},[t._v(t._s(t.$t("source.stacVersion")))]),e("b-col",[t._v(t._s(t.stacVersion))])],1),t.canValidate?e("b-row",[e("b-col",{attrs:{cols:"2"}},[t._v(t._s(t.$t("source.valid")))]),e("b-col",[null===t.valid?e("b-spinner",{attrs:{label:t.$t("source.validating"),small:""}}):!0===t.valid?[t._v("✔️")]:!1===t.valid?[t._v("❌")]:[t._v("$t('source.validationNA')")]],2)],1):t._e(),e("hr")]:t._e(),e("Url",{attrs:{id:"stacUrl",url:t.stacUrl,label:t.$t("source.locatedAt")}})],2):t._e(),e("b-popover",{attrs:{target:"popover-share",triggers:"click blur",placement:"bottom",container:"stac-browser",title:t.$t("source.share.title")}},[e("Url",{attrs:{id:"browserUrl",url:t.browserUrl(),label:t.$t("source.share.sharePageWithOthers"),open:!1}}),e("hr"),e("b-button",{staticClass:"twitter mr-1",attrs:{href:t.twitterUrl}},[e("b-icon-twitter"),t._v(" "+t._s(t.$t("source.share.twitter")))],1),e("b-button",{attrs:{variant:"dark",href:t.mailTo}},[e("b-icon-envelope"),t._v(" "+t._s(t.$t("source.share.email")))],1)],1)],1)},a=[],o=(r(57658),r(36537)),i=r(87379),s=r(38019),l=r(87450),c=r(20629),u=function(){var t=this,e=t._self._c;return e("b-form-group",{attrs:{label:t.label,"label-for":t.id}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-form-input",{ref:"input",attrs:{id:t.id,value:t.url,readonly:""}}),e("b-input-group-append",[e("CopyButton",{attrs:{copyText:t.url,variant:"primary"}}),t.open?e("b-button",{attrs:{href:t.url,target:"_blank",variant:"primary",title:t.$t("open")}},[e("b-icon-arrow-up-right-square")],1):t._e()],1)],1)],1)},p=[],d=r(54240),b=r(27353),g=r(1915),f=r(69558),h=r(94689),v=r(12299),m=r(90494),y=r(18735),w=r(72345),_=r(20451),O=r(67040),P=(0,_.y2)({tag:(0,_.pi)(v.N0,"div")},h.HQ),j=(0,g.l7)({name:h.HQ,functional:!0,props:P,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.tag,(0,f.b)(n,{staticClass:"input-group-text"}),a)}}),$=(0,_.y2)({append:(0,_.pi)(v.U5,!1),id:(0,_.pi)(v.N0),isText:(0,_.pi)(v.U5,!1),tag:(0,_.pi)(v.N0,"div")},h.gb),B=(0,g.l7)({name:h.gb,functional:!0,props:$,render:function(t,e){var r=e.props,n=e.data,a=e.children,o=r.append;return t(r.tag,(0,f.b)(n,{class:{"input-group-append":o,"input-group-prepend":!o},attrs:{id:r.id}}),r.isText?[t(j,a)]:a)}});function U(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?U(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function C(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var x=(0,_.y2)((0,O.CE)($,["append"]),h.Il),I=(0,g.l7)({name:h.Il,functional:!0,props:x,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(B,(0,f.b)(n,{props:k(k({},r),{},{append:!0})}),a)}});function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function E(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var D=(0,_.y2)((0,O.CE)($,["append"]),h.iG),T=(0,g.l7)({name:h.iG,functional:!0,props:D,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(B,(0,f.b)(n,{props:L(L({},r),{},{append:!1})}),a)}});function N(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var q=(0,_.y2)({append:(0,_.pi)(v.N0),appendHtml:(0,_.pi)(v.N0),id:(0,_.pi)(v.N0),prepend:(0,_.pi)(v.N0),prependHtml:(0,_.pi)(v.N0),size:(0,_.pi)(v.N0),tag:(0,_.pi)(v.N0,"div")},h.aZ),A=(0,g.l7)({name:h.aZ,functional:!0,props:q,render:function(t,e){var r=e.props,n=e.data,a=e.slots,o=e.scopedSlots,i=r.prepend,s=r.prependHtml,l=r.append,c=r.appendHtml,u=r.size,p=o||{},d=a(),b={},g=t(),h=(0,w.Q)(m.kg,p,d);(h||i||s)&&(g=t(T,[h?(0,w.O)(m.kg,b,p,d):t(j,{domProps:(0,y.U)(s,i)})]));var v=t(),_=(0,w.Q)(m.G$,p,d);return(_||l||c)&&(v=t(I,[_?(0,w.O)(m.G$,b,p,d):t(j,{domProps:(0,y.U)(c,l)})])),t(r.tag,(0,f.b)(n,{staticClass:"input-group",class:N({},"input-group-".concat(u),u),attrs:{id:r.id||null,role:"group"}}),[g,(0,w.O)(m.Pq,b,p,d),v])}}),G={name:"Share",components:{BFormGroup:d.x,BFormInput:b.e,BIconArrowUpRightSquare:s.k$g,BInputGroup:A,BInputGroupAppend:I,CopyButton:()=>r.e(8209).then(r.bind(r,28209))},props:{id:{type:String,required:!0},url:{type:String,required:!0},label:{type:String,required:!0},open:{type:Boolean,default:!0}}},z=G,Z=r(1001),M=(0,Z.Z)(z,u,p,!1,null,"433de75e",null),V=M.exports,H=r(54998),Q=r.n(H),R=r(79879),F=r(78625);const W="https://stac-extensions.github.io/language/v1.*/schema.json";var J={name:"Source",components:{BDropdown:o.R,BDropdownItem:i.E,BIconBlank:s.GWp,BIconCheck:s.PaS,BIconEnvelope:s.AzZ,BIconExclamationTriangle:s.Sbj,BIconFlag:s.G49,BIconLink:s.ZV1,BIconShare:s.Rq4,BIconTwitter:s.A82,BPopover:l.x,Url:V},props:{title:{type:String,required:!0},stacUrl:{type:String,default:null},stacVersion:{type:String,default:null}},computed:{...(0,c.rn)(["dataLanguages","locale","privateQueryParameters","supportedLocales","stacLint","stacProxyUrl","uiLanguage","valid"]),...(0,c.Se)(["supportsExtension"]),currentLanguage(){let t=this.languages.find((t=>t.code===this.locale));return t?t.native:"-"},canValidate(){if(!this.stacLint||"string"!==typeof this.stacUrl)return!1;if(R.ZP.size(this.privateQueryParameters)>0)return!1;if(Array.isArray(this.stacProxyUrl))return!1;let t=new(Q())(this.stacUrl),e=t.hostname().toLowerCase();return"localhost"!==e&&!e.startsWith("127.")&&"::1"!==e},message(){return this.$t("source.share.message",{title:this.title,url:this.browserUrl()})},twitterUrl(){let t=encodeURIComponent(this.message);return`https://twitter.com/intent/tweet?text=${t}`},mailTo(){let t=encodeURIComponent(this.title),e=encodeURIComponent(this.message);return`mailto:?subject=${t}&body=${e}`},supportsLanguageExt(){return this.supportsExtension(W)},languages(){let t=[];for(let r of this.supportedLocales)t.push({code:r,native:this.$t(`languages.${r}.native`),global:this.$t(`languages.${r}.global`),ui:!0});let e=this.supportedLocales.map((t=>t.toLowerCase()));for(let r of this.dataLanguages){if(!R.ZP.isObject(r)||!r.code||e.includes(r.code.toLowerCase()))continue;let n={code:r.code};n.native=r.name||r.alternate||r.code,n.global=r.alternate||r.name||r.code,n.data=!0,t.push(n)}if(this.supportsExtension(W)){const e=(0,F.xI)(this.supportedLocales),r=(0,F.xI)(this.dataLanguages.map((t=>t.code)));for(let n of t)n.ui||(n.ui=Boolean((0,F.Si)(e,n.code,null))),n.data||(n.data=Boolean((0,F.Si)(r,n.code,null)))}return t.sort(((t,e)=>t.global.localeCompare(e.global,this.uiLanguage)))}},methods:{...(0,c.nv)(["switchLocale","validate"]),async validate(){await this.validate(this.stacUrl)},browserUrl(){return window.location.toString()}}},K=J,X=(0,Z.Z)(K,n,a,!1,null,"43867118",null),Y=X.exports},37130:function(t,e,r){r.d(e,{n:function(){return s}});var n=r(67040);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var s=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(this,t),!e)throw new TypeError("Failed to construct '".concat(this.constructor.name,"'. 1 argument required, ").concat(arguments.length," given."));(0,n.f0)(this,t.Defaults,this.constructor.Defaults,r,{type:e}),(0,n.hc)(this,{type:(0,n.MB)(),cancelable:(0,n.MB)(),nativeEvent:(0,n.MB)(),target:(0,n.MB)(),relatedTarget:(0,n.MB)(),vueTarget:(0,n.MB)(),componentId:(0,n.MB)()});var o=!1;this.preventDefault=function(){this.cancelable&&(o=!0)},(0,n._x)(this,"defaultPrevented",{enumerable:!0,get:function(){return o}})}return i(t,null,[{key:"Defaults",get:function(){return{type:"",cancelable:!0,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null,componentId:null}}}]),t}()}}]);
//# sourceMappingURL=25.687ea726.js.map