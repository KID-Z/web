(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec7979e4"],{"02aa":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-add"},[r("a-steps",{staticClass:"steps",attrs:{current:t.current}},t._l(t.steps,(function(t){return r("a-step",{key:t.title,attrs:{title:t.title}})})),1),r("div",{staticClass:"steps-content"},[0===t.current?r("basicInfo",{attrs:{form:t.form},on:{next:t.next}}):1===t.current?r("saleInfo",{attrs:{form:t.form},on:{prev:t.prev,next:t.next}}):t._e()],1)],1)},o=[],a=r("5530"),i=(r("5319"),r("ac1f"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[r("a-form-model-item",{attrs:{label:"副标题",prop:"title",required:""}},[r("a-input",{attrs:{placeholder:"请输入标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("a-form-model-item",{attrs:{label:"商品描述",prop:"desc"}},[r("a-input",{attrs:{placeholder:"请输入商品描述"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),r("a-form-model-item",{attrs:{label:"商品类目",prop:"category",required:""}},[r("a-select",{attrs:{placeholder:"请选择商品类别"},on:{change:t.changeCategory},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}},t._l(t.categoryList,(function(e){return r("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1),r("a-select",{attrs:{placeholder:"请添加子类目"},model:{value:t.form.c_items,callback:function(e){t.$set(t.form,"c_items",e)},expression:"form.c_items"}},t._l(t.c_itemsList,(function(e){return r("a-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:"商品标签",prop:"tags",required:""}},[r("a-select",{attrs:{mode:"tags",placeholder:"请选择标签"},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}},[r("a-select-option",{attrs:{value:"包邮, 最晚次日达"}},[t._v(" 包邮, 最晚次日达 ")])],1)],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[r("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(" 下一步 ")])],1)],1)}),s=[],c=r("c405"),u={props:["form"],data:function(){return{labelCol:{span:6},wrapperCol:{span:13},categoryList:[],c_itemsList:[],rules:{}}},created:function(){var t=this;c["a"].list().then((function(e){t.categoryList=e.data}))},methods:{onSubmit:function(){var t=this;this.$refs.ruleForm.validate((function(e){return e?(t.$emit("next",t.form),!0):(console.log("error submit!!"),!1)}))},changeCategory:function(t){for(var e=0;e<this.categoryList.length;e+=1)this.categoryList[e].id===t&&(this.c_itemsList=this.categoryList[e].c_items)}}},l=u,f=r("2877"),p=Object(f["a"])(l,i,s,!1,null,null,null),h=p.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[r("a-form-model-item",{attrs:{label:"商品售价",prop:"price",required:""}},[r("a-input",{attrs:{placeholder:"请输入商品售价"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),r("a-form-model-item",{attrs:{label:"商品折扣价",prop:"price_off"}},[r("a-input",{attrs:{placeholder:"请输入商品折扣价"},model:{value:t.form.price_off,callback:function(e){t.$set(t.form,"price_off",e)},expression:"form.price_off"}})],1),r("a-form-model-item",{attrs:{label:"商品库存",prop:"inventory",required:""}},[r("a-input",{attrs:{placeholder:"请输入商品库存"},model:{value:t.form.inventory,callback:function(e){t.$set(t.form,"inventory",e)},expression:"form.inventory"}})],1),r("a-form-model-item",{attrs:{label:"计量单位",prop:"unit",required:""}},[r("a-input",{attrs:{placeholder:"请输入商品计量单位"},model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}})],1),r("a-form-model-item",{attrs:{label:"商品相册"}},[r("a-upload",{attrs:{action:"https://mallapi.duyiedu.com/upload/images?appkey="+t.$store.state.user.appkey,"list-type":"picture-card","file-list":t.fileList,name:"avatar"},on:{preview:t.handlePreview,change:t.handleChange}},[t.fileList.length<8?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[t._v("Upload")])],1):t._e()]),r("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4},prop:"status"}},[r("a-checkbox",{attrs:{checked:t.form.status},on:{change:t.onChange},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[t._v(" 是否上架 ")])],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:4}}},[r("a-button",{on:{click:t.prev}},[t._v("上一步")]),r("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("完 成")])],1)],1)},d=[],v=r("1da1");r("96cf"),r("d3b7"),r("d81d"),r("4de4");function g(t){return new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return r(t)}}))}var y={props:["form"],created:function(){this.form.images.length>0&&(this.isProductImage=!0,this.fileList=this.form.images.map((function(t,e){return{uid:e,name:"image-".concat(e,".png"),status:"deon",url:t}})))},data:function(){return{labelCol:{span:6},wrapperCol:{span:13},rules:{},previewVisible:!1,previewImage:"",fileList:[],previewImageArr:[],isProductImage:!1}},methods:{onSubmit:function(){var t=this;this.$refs.ruleForm.validate((function(e){return e?(t.$emit("next",t.form),!0):(console.log("error submit!!"),!1)}))},changeCategory:function(t){for(var e=0;e<this.categoryList.length;e+=1)this.categoryList[e].id===t&&(this.c_itemsList=this.categoryList[e].c_items)},prev:function(){this.$emit("prev")},handleCancel:function(){this.previewVisible=!1},handlePreview:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=t,t.url||t.preview){r.next=5;break}return r.next=4,g(t.originFileObj);case 4:n.preview=r.sent;case 5:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 7:case"end":return r.stop()}}),r)})))()},handleChange:function(t){var e=t.file,r=t.fileList;"done"===e.status?this.form.images.push(e.response.data.url):"removed"===e.status&&(this.isProductImage?this.form.images=this.form.images.filter((function(t){return t.url!==e.response.data.url})):this.form.images=this.form.images.filter((function(t){return t!==e.response.data.url}))),this.fileList=r},onChange:function(t){console.log("checked = ".concat(t.target.checked))}}},w=y,b=(r("82c6"),Object(f["a"])(w,m,d,!1,null,null,null)),x=b.exports,_=r("4c79"),L={created:function(){var t=this;this.$route.params.id&&_["a"].detail(this.$route.params.id).then((function(e){var r=e;r.status=0!==e.status,t.form=e}))},data:function(){return{current:0,steps:[{title:"填写商品基本信息",icon:""},{title:"填写商品销售信息",icon:""}],form:{title:"",desc:"",category:[],c_items:[],tags:[],price:0,price_off:"",inventory:0,unit:"",status:!0,images:[]}}},methods:{next:function(t){var e=this;this.form=Object(a["a"])(Object(a["a"])({},this.form),t),0===this.current?this.current+=1:1===this.current&&(this.$route.params.id?_["a"].edit(this.form).then((function(){e.$message.success("修改成功"),e.$router.replace({name:"ProductList"})})):_["a"].add(this.form).then((function(){e.$message.success("添加成功"),e.$router.replace({name:"ProductList"})})))},prev:function(){this.current-=1}},components:{basicInfo:h,saleInfo:x}},k=L,$=(r("ef39"),Object(f["a"])(k,n,o,!1,null,"46ad617f",null));e["default"]=$.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}},"4c79":function(t,e,r){"use strict";var n=r("bb36");e["a"]={list:function(t){return n["a"].get("/products/all",{params:t})},remove:function(t){return n["a"].delete("/products/".concat(t))},add:function(t){return n["a"].post("/products/add",t)},detail:function(t){return n["a"].get("/products/".concat(t))},edit:function(t){return n["a"].put("/products/edit",t)}}},"6d8d":function(t,e,r){},"82c6":function(t,e,r){"use strict";r("f776")},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(F){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=$(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",h="executing",m="completed",d={};function v(){}function g(){}function y(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==r&&n.call(x,a)&&(w=x);var _=y.prototype=v.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function $(t,e,r){var n=f;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return I()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=E(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?m:p,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=m,r.method="throw",r.arg=c.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function P(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return g.prototype=_.constructor=y,y.constructor=g,g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[i]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(_),c(_,s,"Generator"),_[a]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},c405:function(t,e,r){"use strict";var n=r("5530"),o=r("bb36");e["a"]={list:function(t){return o["a"].get("/category/all",{params:Object(n["a"])({},t)})}}},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,a=r("1dde"),i=a("map");n({target:"Array",proto:!0,forced:!i},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},ef39:function(t,e,r){"use strict";r("6d8d")},f776:function(t,e,r){}}]);