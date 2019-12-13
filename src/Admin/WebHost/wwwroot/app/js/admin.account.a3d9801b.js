(window.webpackJsonp=window.webpackJsonp||[]).push([["admin.account"],{"4d8f":function(e,t,o){"use strict";o.r(t);var l=o("2f62"),r=o("dee4"),a=[{name:"id",label:"编号",width:240,show:!1},{name:"typeName",label:"类型"},{name:"name",label:"名称"},{name:"userName",label:"用户名",width:150},{name:"roles",label:"角色",width:300},{name:"phone",label:"手机号"},{name:"email",label:"邮箱",width:150},{name:"status",label:"状态",width:150},{name:"loginTime",label:"最后登录时间",width:150},{name:"loginIP",label:"最后登录IP",width:150}],n=o("68f2"),s=o("4606"),i=$api.admin.account,m={mixins:[n.b.dialog],components:{RoleSelect:s.a},data:function(){return{form:{title:"添加账户",icon:"add",width:"500px",action:i.add,model:{name:"",roles:[],userName:"",password:"",phone:"",email:""},rules:{name:[{required:!0,message:"请输入名称"}],userName:[{required:!0,message:"请输入用户名"}],password:[{min:6,message:"密码长度不能小于6位"}],phone:[{len:11,message:"请输入正确的手机号"}],email:[{type:"email",message:"请输入正确的邮箱地址"}]}},on:{success:this.onSuccess,open:this.onOpen}}},methods:{onSuccess:function(){this.$emit("success")},onOpen:function(){var e=this;this.$nextTick((function(){e.$refs.roles.refresh(),e.$refs.form.reset()}))}}},d=o("2877"),c=Object(d.a)(m,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nm-form-dialog",e._g(e._b({ref:"form",attrs:{visible:e.visible_},on:{"update:visible":function(t){e.visible_=t}}},"nm-form-dialog",e.form,!1),e.on),[o("el-row",[o("el-col",{attrs:{span:20,offset:1}},[o("el-form-item",{attrs:{label:"用户名：",prop:"userName"}},[o("el-input",{model:{value:e.form.model.userName,callback:function(t){e.$set(e.form.model,"userName",t)},expression:"form.model.userName"}})],1),o("el-form-item",{attrs:{label:"角色：",prop:"roles"}},[o("role-select",{ref:"roles",attrs:{multiple:"",clearable:!1},model:{value:e.form.model.roles,callback:function(t){e.$set(e.form.model,"roles",t)},expression:"form.model.roles"}})],1),o("el-form-item",{attrs:{label:"名称：",prop:"name"}},[o("el-input",{model:{value:e.form.model.name,callback:function(t){e.$set(e.form.model,"name",t)},expression:"form.model.name"}})],1),o("el-form-item",{attrs:{label:"密码：",prop:"password"}},[o("el-input",{attrs:{placeholder:"默认密码123456",clearable:""},model:{value:e.form.model.password,callback:function(t){e.$set(e.form.model,"password",t)},expression:"form.model.password"}})],1),o("el-form-item",{attrs:{label:"手机：",prop:"phone"}},[o("el-input",{attrs:{type:"number",clearable:""},model:{value:e.form.model.phone,callback:function(t){e.$set(e.form.model,"phone",t)},expression:"form.model.phone"}})],1),o("el-form-item",{attrs:{label:"邮箱：",prop:"email"}},[o("el-input",{attrs:{type:"email",clearable:""},model:{value:e.form.model.email,callback:function(t){e.$set(e.form.model,"email",t)},expression:"form.model.email"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports,u=$api.admin.account,p={components:{RoleSelect:s.a},mixins:[n.b.formDialogEdit],data:function(){return{api:u,form:{title:"编辑账户",width:"500px",action:u.update,model:{id:"",name:"",roles:[],userName:"",phone:"",email:""},rules:{name:[{required:!0,message:"请输入名称"}],userName:[{required:!0,message:"请输入用户名"}],password:[{min:6,message:"密码长度不能小于6位"}],phone:[{len:11,message:"请输入正确的手机号"}],email:[{type:"email",message:"请输入正确的邮箱地址"}]}}}}},f=Object(d.a)(p,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nm-form-dialog",e._g(e._b({ref:"form",attrs:{visible:e.visible_},on:{"update:visible":function(t){e.visible_=t}}},"nm-form-dialog",e.form,!1),e.on),[o("el-row",[o("el-col",{attrs:{span:20,offset:1}},[o("el-form-item",{attrs:{label:"用户名：",prop:"userName"}},[o("el-input",{model:{value:e.form.model.userName,callback:function(t){e.$set(e.form.model,"userName",t)},expression:"form.model.userName"}})],1),o("el-form-item",{attrs:{label:"角色：",prop:"roles"}},[o("role-select",{ref:"roles",attrs:{multiple:""},model:{value:e.form.model.roles,callback:function(t){e.$set(e.form.model,"roles",t)},expression:"form.model.roles"}})],1),o("el-form-item",{attrs:{label:"名称：",prop:"name"}},[o("el-input",{model:{value:e.form.model.name,callback:function(t){e.$set(e.form.model,"name",t)},expression:"form.model.name"}})],1),o("el-form-item",{attrs:{label:"密码：",prop:"password"}},[o("el-input",{attrs:{placeholder:"默认密码123456",clearable:""},model:{value:e.form.model.password,callback:function(t){e.$set(e.form.model,"password",t)},expression:"form.model.password"}})],1),o("el-form-item",{attrs:{label:"手机：",prop:"phone"}},[o("el-input",{attrs:{type:"number",clearable:""},model:{value:e.form.model.phone,callback:function(t){e.$set(e.form.model,"phone",t)},expression:"form.model.phone"}})],1),o("el-form-item",{attrs:{label:"邮箱：",prop:"email"}},[o("el-input",{attrs:{type:"email",clearable:""},model:{value:e.form.model.email,callback:function(t){e.$set(e.form.model,"email",t)},expression:"form.model.email"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports;function b(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function v(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var h=$api.admin.account,g={name:r.default.name,components:{AddPage:c,EditPage:f},data:function(){return{list:{title:r.default.title,cols:a,action:h.query,advanced:{enabled:!0,width:"400px"},model:{userName:"",name:"",phone:"",email:""}},addPage:{visible:!1,sort:0},editPage:{visible:!1,id:""},removeAction:h.remove,buttons:r.default.buttons}},computed:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?b(Object(o),!0).forEach((function(t){v(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):b(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},Object(l.c)("app/account",{accountId:"id"})),methods:{refresh:function(){this.$refs.list.refresh()},add:function(e){this.addPage.sort=e,this.addPage.visible=!0},edit:function(e){this.editPage={id:e.id,visible:!0}},resetPassword:function(e){var t=this;this._confirm("您确定要重置账户(".concat(e.name,")的密码吗？")).then((function(){h.resetPassword(e.id).then((function(){t._success("已重置")}))}))}}},w=Object(d.a)(g,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nm-container",[o("nm-list",e._b({ref:"list",scopedSlots:e._u([{key:"querybar",fn:function(){return[o("el-form-item",{attrs:{label:"用户名：",prop:"userName"}},[o("el-input",{attrs:{clearable:""},model:{value:e.list.model.userName,callback:function(t){e.$set(e.list.model,"userName",t)},expression:"list.model.userName"}})],1),o("el-form-item",{attrs:{label:"名称：",prop:"name"}},[o("el-input",{attrs:{clearable:""},model:{value:e.list.model.name,callback:function(t){e.$set(e.list.model,"name",t)},expression:"list.model.name"}})],1)]},proxy:!0},{key:"querybar-advanced",fn:function(){return[o("el-row",[o("el-col",{attrs:{span:20,offset:1}},[o("el-form-item",{attrs:{label:"手机号：",prop:"phone"}},[o("el-input",{attrs:{clearable:""},model:{value:e.list.model.phone,callback:function(t){e.$set(e.list.model,"phone",t)},expression:"list.model.phone"}})],1),o("el-form-item",{attrs:{label:"邮箱：",prop:"email"}},[o("el-input",{attrs:{clearable:""},model:{value:e.list.model.name,callback:function(t){e.$set(e.list.model,"name",t)},expression:"list.model.name"}})],1)],1)],1)]},proxy:!0},{key:"querybar-buttons",fn:function(t){var l=t.total;return[o("nm-button",e._b({on:{click:function(t){return e.add(l)}}},"nm-button",e.buttons.add,!1))]}},{key:"col-roles",fn:function(t){var l=t.row;return[l.roles&&l.roles.length>0?[e._l(l.roles,(function(t,r){return[o("el-tag",{key:t.value,attrs:{text:t.label}},[e._v(e._s(t.label))]),r<l.roles.length-1?[e._v("、")]:e._e()]}))]:o("span",[e._v("未绑定")])]}},{key:"col-status",fn:function(t){var l=t.row;return[0===l.status?o("el-tag",{attrs:{type:"info"}},[e._v("未激活")]):1===l.status?o("el-tag",{attrs:{type:"success"}},[e._v("正常")]):2===l.status?o("el-tag",{attrs:{type:"warning"}},[e._v("禁用")]):3===l.status?o("el-tag",{attrs:{type:"danger"}},[e._v("注销")]):e._e()]}},{key:"col-loginTime",fn:function(t){var o=t.row;return[e._v(e._s(0===o.status?"未登录":o.loginTime))]}},{key:"col-loginIP",fn:function(t){var o=t.row;return[e._v(e._s(0===o.status?"未登录":o.loginIP))]}},{key:"col-operation",fn:function(t){var l=t.row;return[l.isLock?o("nm-button",{attrs:{type:"text",text:"锁定",disabled:!0}}):o("el-dropdown",{attrs:{trigger:"click"}},[o("span",{staticClass:"el-dropdown-link"},[e._v(" 操作 "),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),o("el-dropdown-menu",{staticClass:"nm-list-operation-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",[o("nm-button",e._b({on:{click:function(t){return e.edit(l)}}},"nm-button",e.buttons.edit,!1))],1),o("el-dropdown-item",[o("nm-button",e._b({on:{click:function(t){return e.resetPassword(l)}}},"nm-button",e.buttons.resetPassword,!1))],1),o("el-dropdown-item",[o("nm-button-delete",e._b({attrs:{disabled:l.id===e.accountId,action:e.removeAction,id:l.id},on:{success:e.refresh}},"nm-button-delete",e.buttons.del,!1))],1)],1)],1)]}}])},"nm-list",e.list,!1)),o("add-page",{attrs:{visible:e.addPage.visible,sort:e.addPage.sort},on:{"update:visible":function(t){return e.$set(e.addPage,"visible",t)},success:e.refresh}}),o("edit-page",{attrs:{visible:e.editPage.visible,id:e.editPage.id},on:{"update:visible":function(t){return e.$set(e.editPage,"visible",t)},success:e.refresh}})],1)}),[],!1,null,null,null);t.default=w.exports}}]);