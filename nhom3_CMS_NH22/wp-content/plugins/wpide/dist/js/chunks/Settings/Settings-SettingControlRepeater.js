(self.webpackChunkwpide=self.webpackChunkwpide||[]).push([[336],{7058:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});n(1539),n(8783),n(3948),n(561),n(9554),n(4747),n(9720);const l={name:"SettingControlRepeater",components:{SettingControl:function(){return n.e(265).then(n.bind(n,9873))}},props:["field","model"],methods:{remove:function(e){this.model.splice(e,1)},add:function(){if("group"===this.field.type){var e=[];Object.entries(this.field.fields).forEach((function(){e.push("")})),this.model.push(e)}else this.model.push("")}}};const i=(0,n(1001).Z)(l,(function(){var e=this,t=e._self._c;return t("div",[e._l(e.model,(function(n,l){return[t("div",{key:l,staticClass:"repeater-row"},[t("SettingControl",{attrs:{module:e.field.module,id:e.field.id,type:e.field.type,label:e.field.label||null,options:e.field.options||null,attr:e.field.attr||null,multiple:e.field.multiple||null,fields:e.field.fields||null,repeater:!1,vindex:l}}),t("a",{staticClass:"repeater-row-remove",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.remove(l)}}},[t("em",{staticClass:"icon ni ni-trash"})])],1)]})),t("a",{staticClass:"repeater-row-add",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.add.apply(null,arguments)}}},[t("em",{staticClass:"icon ni ni-plus-circle"}),e._v(" Add")])],2)}),[],!1,null,"ce430b6a",null).exports},4699:(e,t,n)=>{var l=n(9781),i=n(1702),r=n(1956),s=n(5656),o=i(n(5296).f),a=i([].push),u=function(e){return function(t){for(var n,i=s(t),u=r(i),d=u.length,f=0,c=[];d>f;)n=u[f++],l&&!o(i,n)||a(c,e?[n,i[n]]:i[n]);return c}};e.exports={entries:u(!0),values:u(!1)}},9720:(e,t,n)=>{var l=n(2109),i=n(4699).entries;l({target:"Object",stat:!0},{entries:function(e){return i(e)}})}}]);