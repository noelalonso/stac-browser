"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[3135],{53135:function(e,r,a){a.r(r),a.d(r,{default:function(){return b}});var t=function(){var e=this,r=e._self._c;return r("b-card",{staticClass:"provider expandable-card",attrs:{"no-body":""}},[r("b-card-header",{attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.id,expression:"id"}],attrs:{block:"",variant:"provider",squared:""}},[r("span",{staticClass:"chevron",attrs:{"aria-hidden":"true"}},[e.expanded?r("b-icon-chevron-down"):r("b-icon-chevron-right")],1),r("span",{staticClass:"title"},[e._v(e._s(e.provider.name))]),r("ProviderRoles",{attrs:{roles:e.provider.roles}})],1)],1),r("b-collapse",{attrs:{id:e.id,accordion:"providers",role:"tabpanel"},model:{value:e.expanded,callback:function(r){e.expanded=r},expression:"expanded"}},[r("b-card-body",[e.provider.url||e.provider.email||e.provider.mail?r("b-button-group",[r("b-button",{attrs:{href:e.provider.url,target:"_blank",variant:"primary"}},[e._v(" "+e._s(e.$t("providers.homepage"))+" ")]),e.provider.email||e.provider.mail?r("b-button",{attrs:{href:`mailto:${e.provider.email||e.provider.mail}`,target:"_blank",variant:"primary"}},[e._v(" "+e._s(e.$t("providers.email"))+" ")]):e._e()],1):e._e(),e.provider.description?r("b-card-text",{staticClass:"mt-4"},[r("Description",{attrs:{description:e.provider.description,compact:""}})],1):e._e(),r("Metadata",{staticClass:"mt-4",attrs:{data:e.provider,ignoreFields:e.ignore,title:"",type:"Provider"}})],1)],1)],1)},i=[],o=a(11688),d=a(38019),n=a(2778),s=a(2902),l={name:"Provider",components:{BCollapse:o.k,BIconChevronDown:d.VIw,BIconChevronRight:d.xkg,Description:n["default"],Metadata:()=>Promise.all([a.e(9539),a.e(2407),a.e(4622)]).then(a.bind(a,24622)),ProviderRoles:s.Z},props:{provider:{type:Object,required:!0},id:{type:String,required:!0}},data(){return{expanded:!1,ignore:["url","name","description","roles"]}}},p=l,c=a(1001),v=(0,c.Z)(p,t,i,!1,null,null,null),b=v.exports}}]);
//# sourceMappingURL=3135.dd79de31.js.map