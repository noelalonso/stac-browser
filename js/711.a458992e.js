"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[711],{5810:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth"},[e("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.submit.apply(null,arguments)},reset:t.reset}},[e("b-card",{attrs:{"no-body":"",header:"Authentication"}},[e("b-card-body",[e("p",[t._v(" The requested page requires authentication. Please provide your authentication details in the text field below. ")]),t.authConfig.description?e("Description",{attrs:{description:t.authConfig.description}}):t._e(),e("b-form-input",{staticClass:"mb-2 mt-2",attrs:{type:"password",autofocus:"",required:t.required},model:{value:t.token,callback:function(e){t.token="string"===typeof e?e.trim():e},expression:"token"}})],1),e("b-card-footer",[e("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),e("b-button",{staticClass:"ml-3",attrs:{type:"reset",variant:"danger"}},[t._v("Cancel")])],1)],1)],1)],1)},r=[],n=a(6220),s=a(4909),o=a(7353),u=a(629),d={name:"Authentication",components:{BForm:s.e,BFormInput:o.e,Description:n.Z},data(){return{token:"",required:!0}},computed:{...(0,u.rn)(["authConfig","authData"])},created(){this.authData&&(this.token=this.authData,this.required=!1)},methods:{reset(){this.$store.commit("requestAuth",null)},async submit(){await this.$store.dispatch("setAuth",this.token),await this.$store.dispatch("retryAfterAuth"),this.$store.commit("requestAuth",null)}}},c=d,l=a(1001),h=(0,l.Z)(c,i,r,!1,null,null,null),p=h.exports},4909:function(t,e,a){a.d(e,{e:function(){return d}});var i=a(1915),r=a(9558),n=a(4689),s=a(2299),o=a(451),u=(0,o.y2)({id:(0,o.pi)(s.N0),inline:(0,o.pi)(s.U5,!1),novalidate:(0,o.pi)(s.U5,!1),validated:(0,o.pi)(s.U5,!1)},n.eh),d=(0,i.l7)({name:n.eh,functional:!0,props:u,render:function(t,e){var a=e.props,i=e.data,n=e.children;return t("form",(0,r.b)(i,{class:{"form-inline":a.inline,"was-validated":a.validated},attrs:{id:a.id,novalidate:a.novalidate}}),n)}})}}]);
//# sourceMappingURL=711.a458992e.js.map