(function(t){function e(e){for(var r,n,o=e[0],l=e[1],c=e[2],u=0,h=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&h.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(r=!1)}r&&(a.splice(e--,1),t=n(n.s=i[0]))}return t}var r={},s={app:0},a=[];function n(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=r,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"108a":function(t,e,i){"use strict";i("c31e")},"25b6":function(t,e,i){},"53fe":function(t,e,i){"use strict";i("c659")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("5319"),i("ac1f"),i("d3b7");var r=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",[i("router-view")],1),i("div",{staticClass:"virBak-lb"}),i("div",{staticClass:"virBak-lt"}),i("div",{staticClass:"virBak-rb"})],1)},a=[],n={name:"App",components:{},beforeMount:function(){this.$store.commit("saveUser",this.$cookies.get("user"))}},o=n,l=(i("034f"),i("2877")),c=Object(l["a"])(o,s,a,!1,null,null,null),d=c.exports,u=i("8c4f"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"text-align":"center"}},[i("carrier-nav"),i("div",{staticClass:"svg-container"},[i("div",{staticStyle:{width:"100%","margin-top":"5vh",padding:"10px 5%"}},[i("carriers-list")],1)]),i("v-loading",{attrs:{show:t.loading}})],1)},p=[],f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search-container"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchVal,expression:"searchVal"}],staticClass:"search-input",attrs:{placeholder:"e.g. pA110, EGFP"},domProps:{value:t.searchVal},on:{input:function(e){e.target.composing||(t.searchVal=e.target.value)}}}),i("Button",{staticClass:"search-btn",attrs:{type:"warning"},on:{click:t.searchAll}},[t._v("Search")])],1),i("Collapse",{staticStyle:{"text-align":"left",display:"block"},attrs:{simple:""}},[i("Panel",{attrs:{name:"1"}},[t._v(" Advanced screening "),i("div",{attrs:{slot:"content"},slot:"content"},[t._l(t.filterGroups,(function(e,r){return i("Card",{key:e.inde,staticStyle:{width:"100%"},attrs:{title:"filter group "+(r+1)}},[i("div",{attrs:{slot:"extra"},slot:"extra"},[r>0?i("Select",{staticStyle:{width:"80px"},attrs:{filterable:"",transfer:!0},model:{value:e.flag,callback:function(i){t.$set(e,"flag",i)},expression:"group.flag"}},[i("Option",{attrs:{value:"and"}},[t._v("and")]),i("Option",{attrs:{value:"or"}},[t._v("or")])],1):t._e(),r===t.filterGroups.length-1?i("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"md-add-circle"},on:{click:t.addNewGroup}},[t._v(t._s("add new group ")+" ")]):t._e(),r>0?i("Button",{staticStyle:{"margin-left":"10px"},attrs:{type:"error",icon:"md-close-circle"},on:{click:function(i){return t.deleteGroup(e.inde)}}},[t._v(t._s("delete group ")+" ")]):t._e()],1),t._l(e.filters,(function(r,s){return i("div",{key:r.ind,staticClass:"row",staticStyle:{"margin-bottom":"10px"}},[i("div",{staticClass:"col-1"},[s>0?i("Select",{attrs:{filterable:"",transfer:!0},model:{value:r.andOror,callback:function(e){t.$set(r,"andOror",e)},expression:"item.andOror"}},[i("Option",{attrs:{value:"and"}},[t._v("and")]),i("Option",{attrs:{value:"or"}},[t._v("or")])],1):t._e()],1),i("div",{staticClass:"col-5"},[i("Select",{attrs:{filterable:"",transfer:!0},model:{value:r.key,callback:function(e){t.$set(r,"key",e)},expression:"item.key"}},t._l(t.searchList,(function(e){return i("Option",{key:e.field,attrs:{value:e.field}},[t._v(t._s(e.field))])})),1)],1),i("div",{staticClass:"col-1"},[i("Select",{attrs:{filterable:"",transfer:!0},model:{value:r.equals,callback:function(e){t.$set(r,"equals",e)},expression:"item.equals"}},[i("Option",{attrs:{value:"equals"}},[t._v("equals")]),i("Option",{attrs:{value:"notEquals"}},[t._v("not equals")])],1)],1),i("div",{staticClass:"col-4"},[i("Select",{attrs:{filterable:"",transfer:!0},model:{value:r.value,callback:function(e){t.$set(r,"value",e)},expression:"item.value"}},t._l(t.getValues(r),(function(e){return i("Option",{key:e,attrs:{value:e}},[t._v(t._s(e))])})),1)],1),i("div",{staticClass:"col-1"},[0!=s?i("Icon",{staticStyle:{cursor:"pointer"},attrs:{type:"md-close-circle",size:30},on:{click:function(i){return t.deleteRow(r.ind,e)}}}):t._e(),t._v(" "),s==e.filters.length-1?i("Icon",{staticStyle:{cursor:"pointer"},attrs:{type:"md-add-circle",size:30},on:{click:function(i){return t.addNewFileter(e)}}}):t._e()],1)])}))],2)})),i("Divider"),i("Row",{staticStyle:{"margin-bottom":"10px","text-align":"right"}},[i("Button",{attrs:{type:"primary"},on:{click:t.filterResult}},[t._v(t._s(t.$t("confirm")))]),t._v(" "),i("Button",{attrs:{type:"warning"},on:{click:t.resetFilter}},[t._v(t._s(t.$t("reset")))])],1)],2)])],1),i("v-table-title",[i("p",{attrs:{slot:"title"},slot:"title"},[t._v("Result List ("+t._s(this.carriers.length)+")")]),i("div",{attrs:{slot:"extra"},slot:"extra"},[t.isVector?i("Poptip",{attrs:{confirm:"",disabled:0===this.selectedCarriers.length,transfer:!0,title:"Are you sure you want to delete this list?"},on:{"on-ok":t.deleteSelect}},[i("Button",{attrs:{type:"error",disabled:0===this.selectedCarriers.length}},[t._v("delete")])],1):t._e()],1)]),i("Table",{staticStyle:{width:"100%"},attrs:{stripe:"",border:"",columns:t.cols,data:t.carriers},on:{"on-selection-change":t.selectItem},scopedSlots:t._u([{key:"operator",fn:function(e){var r=e.row;return[i("Button",{staticClass:"opt-btn",attrs:{type:"success"},on:{click:function(e){return t.showDetail(r.ID)}}},[t._v("detail")]),t.isVector?i("Button",{staticClass:"opt-btn",attrs:{type:"info"},on:{click:function(e){return t.eidtDetail(r)}}},[t._v("edit")]):t._e(),t.isVector?i("Poptip",{attrs:{confirm:"",transfer:!0,title:"Are you sure you want to delete this item?"},on:{"on-ok":function(e){return t.deleteOk(r.ID)}}},[i("Button",{staticClass:"opt-btn",attrs:{type:"error"}},[t._v("delete")])],1):t._e()]}}])}),i("Drawer",{attrs:{title:"edit",width:"600","mask-closable":!1,closable:!0},model:{value:t.editFlag,callback:function(e){t.editFlag=e},expression:"editFlag"}},[i("Form",[i("Row",{attrs:{gutter:32}},t._l(t.editCarr,(function(e,r){return i("i-col",{key:r,attrs:{span:"12"}},[i("FormItem",{attrs:{label:r,"label-position":"top"}},[i("Input",{model:{value:t.editCarr[r],callback:function(e){t.$set(t.editCarr,r,e)},expression:"editCarr[name]"}})],1)],1)})),1)],1),i("Divider"),i("div",{staticStyle:{"margin-bottom":"20px"}},[i("Button",{staticStyle:{"margin-right":"8px"},on:{click:function(e){t.editFlag=!1}}},[t._v("Cancel")]),i("Button",{attrs:{type:"primary"},on:{click:t.submitEdit}},[t._v("Submit")]),i("Upload",{staticStyle:{float:"right"},attrs:{action:t.getReplaceUrl,data:t.uploadData,name:"file",accept:".zip"},on:{"on-success":t.uploadBack}},[i("Tooltip",{attrs:{content:t.$t(".zip文件包含.gb和.dna"),transfer:!0,placement:"top-end"}},[i("Button",{attrs:{icon:"ios-cloud-upload-outline",type:"error"}},[t._v("replace .gb and .dna")])],1)],1)],1)],1),i("v-loading",{attrs:{show:t.loading}})],1)},g=[],v=i("2909"),m=(i("d81d"),i("ddb0"),i("4de4"),i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("div",{staticClass:"loading"},[i("div",{staticStyle:{display:"inline-block",width:"20%","margin-top":"20px"}},[i("Alert",[t._v("加载中....")])],1),i("svg",{staticClass:"svg-container"},[i("path",{attrs:{id:"pulsar",stroke:"rgba(0,155,155,1)",fill:"none","stroke-width":"3","stroke-linejoin":"round",d:"M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"}})])]):t._e()}),y=[],b={name:"v-loading",props:{show:Boolean},beforeMount:function(){this.isShow=this.show},data:function(){return{isShow:!1}},watch:{show:function(t){console.log(t),this.isShow=t}}},w=b,x=(i("108a"),Object(l["a"])(w,m,y,!1,null,"41f2f373",null)),_=x.exports,k=i("ec26"),C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table-title"},[i("div",{staticClass:"title"},[t._t("title")],2),i("div",{staticClass:"extra"},[t._t("extra")],2)])},S=[],O={name:"v-tableTitle"},A=O,L=(i("6c22"),Object(l["a"])(A,C,S,!1,null,"603ea57a",null)),T=L.exports,$={name:"carriersList",components:{VTableTitle:T,VLoading:_},props:{},data:function(){return{searchResult:{},searchVal:"",loading:!1,carriers:[],cols:[],currentPage:0,pageSize:0,total:0,editFlag:!1,editCarr:{},editId:"",searchList:[],carriersOld:[],selectedCarriers:[],filterGroups:[{filters:[{ind:Object(k["a"])(),andOror:"",key:"",equals:"",value:""}],inde:Object(k["a"])(),flag:""}]}},beforeMount:function(){this.initPage()},methods:{uploadBack:function(t,e,i){console.log(t,e,i)},deleteSelect:function(){var t=new Array;this.selectedCarriers.map((function(e){return t.push(e.ID)}));var e={ids:JSON.stringify(t)};this.loading=!0;var i=this;this.$axios.post("/home/deleteList",e).then((function(t){i.loading=!1,i.$Message.success("delete success! count:"+t.data.retMap.count),i.initPage()})).catch((function(t){console.log(t),i.loading=!1,i.$Message.error("system error!")}))},selectItem:function(t){this.selectedCarriers=t},resetFilter:function(){this.filterGroups=[{filters:[{ind:Object(k["a"])(),andOror:"",key:"",equals:"",value:""}],inde:Object(k["a"])(),flag:""}],this.carriers=this.carriersOld},addNewGroup:function(){this.filterGroups.push({filters:[{ind:Object(k["a"])(),andOror:"",key:"",equals:"",value:""}],inde:Object(k["a"])(),flag:"and"})},getValues:function(t){if(""==t.key)return[];for(var e in this.searchList)if(this.searchList[e].field==t.key)return this.searchList[e].values},addNewFileter:function(t){t.filters.push({ind:Object(k["a"])(),andOror:"",key:"",equals:"",value:""})},deleteGroup:function(t){var e=Object(v["a"])(this.filterGroups);this.filterGroups=e.filter((function(e){return e.inde!==t}))},deleteRow:function(t,e){var i=Object(v["a"])(e.filters);e.filters=i.filter((function(e){return e.ind!==t}))},filterResult:function(){for(var t=new Array,e={},i=0;i<this.filterGroups.length;i++){for(var r=this.filterGroups[i],s=Object(v["a"])(this.carriersOld),a={},n=[],o=0;o<r.filters.length;o++){var l=new Array,c=r.filters[o];for(var d in"or"===c.andOror&&(s.length>0&&s.map((function(t){void 0===a[t.ID]&&(a[t.ID]=t,n.push(t))})),s=Object(v["a"])(this.carriersOld)),s){var u=s[d];"equals"===c.equals?u[c.key]===c.value&&l.push(u):u[c.key]!==c.value&&l.push(u)}s=l}if(s.length>0&&s.map((function(t){void 0===a[t.ID]&&(a[t.ID]=t,n.push(t))})),i>0)if("and"===r.flag){var h=new Array,p={};for(var f in a)void 0!==e[f]&&(h.push(e[f]),p[f]=e[f]);t=h,e=p}else{var g=new Array;for(var m in a)void 0===e[m]&&(g.push(e[m]),e[m]=t[m]);t=[].concat(Object(v["a"])(t),g)}else t=n,e=a}this.carriers=t},compare:function(t){var e=!0;for(var i in this.searchResult)for(var r=0;r<this.searchResult[i].length;r++)if(e=!1,t[i]===this.searchResult[i][r])return!0;return!!e},searchAll:function(){this.initPage()},submitEdit:function(){this.editCarr.id=this.editId;var t={carrier:JSON.stringify(this.editCarr)};this.loading=!0;var e=this;this.$axios.post("/snapGene/commitCarrier",t).then((function(t){e.loading=!1,e.editFlag=!1,console.log(t),e.initPage(),e.$Message.success("submit success")})).catch((function(t){e.loading=!1,e.editFlag=!1,e.$Message.error("system error!"),console.log(t)}))},deleteOk:function(t){console.log(t),this.loading=!0;var e={fileId:t},i=this;this.$axios.post("/snapGene/deleteCarrier",e).then((function(t){console.log(t),i.loading=!1,i.$Message.success("delete success"),i.initPage()})).catch((function(t){i.loading=!1,console.log(t)}))},eidtDetail:function(t){for(var e in this.editId=t.ID,t)"_id"!=e&&"ID"!=e&&"_index"!=e&&"_rowKey"!=e&&"id"!=e&&(this.editCarr[e]=t[e]);this.editFlag=!0},showDetail:function(t){this.$router.push({name:"carrier",query:{id:t}})},initPage:function(){this.initCols();var t={currentPage:this.currentPage,pageSize:this.pageSize,searchVal:this.searchVal},e=this;this.loading=!0,this.$axios.post("/home/initPage",t).then((function(t){console.log(t),e.loading=!1,e.carriers=t.data.retMap.carriers,e.carriersOld=t.data.retMap.carriers,e.total=t.data.retMap.total,e.searchList=t.data.retMap.searchList;for(var i=0;i<e.searchList.length;i++){var r=e.searchList[i];e.searchResult[r.field]=new Array}})).catch((function(t){e.loading=!1,console.log(t)}))},initCols:function(){var t=new Array;t.push({type:"selection",width:60,align:"center"}),t.push({type:"index",width:60,align:"center"}),t.push({title:this.$t("CAT"),key:"CAT",width:100,sortable:!0}),t.push({title:this.$t("NAME"),key:"NAME",sortable:!0}),t.push({title:this.$t("ADDGENE"),key:"ADDGENE",width:120,sortable:!0}),t.push({title:this.$t("PROMOTER"),key:"PROMOTER",width:150,sortable:!0}),t.push({title:this.$t("EXPRESSIONCASSETTE表达框"),key:"EXPRESSIONCASSETTE表达框",sortable:!0}),t.push({title:this.$t("operator"),slot:"operator",width:250}),this.cols=t}},computed:{isVector:function(){return void 0!==this.$store.getters.getName&&!(!this.$store.getters.isVector||!this.$store.getters.isReviewer)},getReplaceUrl:function(){return this.$axios.defaults.baseURL+"/snapGene/replaceDna"},uploadData:function(){return{id:this.editId}}}},E=$,F=(i("b36d"),Object(l["a"])(E,f,g,!1,null,"4c945c38",null)),M=F.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-dark",staticStyle:{"background-color":"#0483c8"}},[r("a",{staticClass:"navbar-brand",staticStyle:{display:"inline-block"},on:{click:t.goHome}},[r("img",{staticStyle:{width:"200px"},attrs:{src:i("c676"),alt:""}})]),r("form",{staticClass:"form-inline my-2 my-lg-0"},[r("div",{staticClass:"dropdown"},[r("button",{staticClass:"btn btn-outline-light dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.$t("hello")+"，"+t.user.name)+" ")]),r("div",{staticClass:"dropdown-menu dropdown-menu-right",staticStyle:{"font-size":"14px","line-height":"normal"}},[t.isCarrierUser?r("a",{staticClass:"dropdown-item",on:{click:t.gotoAdmin}},[t._v(t._s(t.$t("configuration")))]):t._e(),r("a",{staticClass:"dropdown-item",on:{click:t.casOut}},[t._v(t._s(t.$t("exit")))])])])])])},j=[],D=(i("b0c0"),i("2b3d"),i("3ca3"),i("bc3a")),B=i.n(D),I={loginUrl:"http://119.90.33.35:8065/login?service=",casOutUrl:"http://119.90.33.35:8065/logout",downLoad:function(t,e,i){B()({url:e,data:t,method:"post",responseType:"blob"}).then((function(t){var e=t.data;if(e){var r=window.URL.createObjectURL(new Blob([e])),s=document.createElement("a");s.style.display="none",s.href=r,s.setAttribute("download",i),document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(s.href),document.body.removeChild(s)}}))}},N=I,R={name:"carrierNav",data:function(){return{user:{}}},mounted:function(){this.initPage()},methods:{initPage:function(){var t=this;this.$axios.get("/home/user").then((function(e){console.log(e),t.$cookies.set("user",e.data.retMap.user),t.$store.commit("saveUser",e.data.retMap.user),t.user=e.data.retMap.user})).catch((function(t){console.log(t)}))},casOut:function(){this.loading=!0,window.open(N.casOutUrl),setTimeout((function(){window.location.reload()}),5e3)},goHome:function(){this.$router.push("/home")},gotologin:function(){var t=window.location.href;t=t.replaceAll(":","%3A").replaceAll("/","%2F"),window.location.href=N.loginUrl+t},gotoAdmin:function(){this.$router.push("/config")}},computed:{hasUser:function(){return console.log(this.user.name),void 0!=this.user.name},isCarrierUser:function(){return this.$store.getters.isVector}}},q=R,U=Object(l["a"])(q,P,j,!1,null,"0fd83aaf",null),G=U.exports,z={name:"home",components:{VLoading:_,CarrierNav:G,CarriersList:M},data:function(){return{loading:!1,searchVal:""}},methods:{searchAll:function(){this.loading=!0;var t=this,e={searchVal:this.searchVal};this.$axios.post("/home/search",e).then((function(t){console.log(t)})).then((function(e){t.loading=!1,t.$Message.error("system error"),console.log(e)}))}}},V=z,H=(i("53fe"),Object(l["a"])(V,h,p,!1,null,"c0f5f7c0",null)),J=H.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%"}},[i("carrier-nav"),i("div",{staticStyle:{width:"90%",height:"650px","margin-left":"5%","margin-top":"3vh"}},[i("carrier-map",{attrs:{"gb-object":t.feature,"show-config-map":t.showConfigMap,carrier:t.carrier}})],1),i("v-loading",{attrs:{show:t.loading}})],1)},Q=[],X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"90vh","min-height":"650px"}},[i("div",{staticClass:"svg-container",staticStyle:{display:"inline-block",width:"70%",height:"100%"}},[i("svg",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"carrierSvg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"}},[i("defs",{attrs:{id:"textLine"}},[t._l(t.rulerPaths,(function(t){return i("path",{key:t.id,attrs:{d:t.d,id:t.id}})})),t._l(t.defsList,(function(t){return i("path",{key:t,attrs:{d:t.d,id:t.id}})}))],2),i("text",{attrs:{id:"trackName",transform:t.trackNameTrans,"font-size":t.titleFontSize}},[t._v(t._s(t.trackName))]),i("text",{attrs:{id:"titleDesc",transform:t.titleDescTrans,"font-size":t.titleFontSize}},[t._v(t._s(t.titleDesc))]),i("g",{attrs:{id:"mainContainer",transform:t.cTrans}},[i("path",{attrs:{d:t.circle,stroke:"black",fill:"transparent","stroke-linecap":"butt","stroke-width":"3"}}),t._l(t.rulerItems,(function(t){return i("path",{key:t.d,attrs:{d:t.d,stroke:"black",fill:"transparent","stroke-width":"2"}})})),t._l(t.rulerTexts,(function(e){return i("text",{key:e.id,attrs:{"font-size":"10px"}},[i("textPath",{attrs:{"xlink:href":e.href}},[t._v(t._s(e.text))])])})),t._l(t.featureList,(function(e){return i("path",{key:e,staticClass:"show-detail",staticStyle:{cursor:"pointer"},attrs:{id:e.id,label:e.label,d:e.d,fill:e.fill,stroke:"black","stroke-width":"1"},on:{click:function(i){return t.showDetail(e.feature)}}})})),t._l(t.featureTitleList,(function(e){return i("text",{key:e,attrs:{"font-size":"12px"}},[i("textPath",{attrs:{id:e.id,"xlink:href":e.href}},[t._v(t._s(e.realText))])])}))],2)])]),i("div",{staticClass:"right-detail"},[i("Card",{staticStyle:{width:"100%"},attrs:{title:"detail",icon:"ios-options",padding:0}},[i("Button",{attrs:{slot:"extra",type:"primary"},on:{click:t.downlondPDF},slot:"extra"},[t._v("export")]),t._l(t.carrierDetailList,(function(t){return i("Cell",{key:t.field,attrs:{title:t.field}},[i("input",{attrs:{slot:"extra"},domProps:{value:t.val},slot:"extra"})])}))],2),i("card",{staticStyle:{width:"100%"},attrs:{title:"sequence"}},[i("Button",{attrs:{slot:"extra",type:"primary"},on:{click:t.downloadDna},slot:"extra"},[t._v("download .dna")]),i("div",{staticStyle:{width:"100%","word-break":"break-all"}},[t._v(" "+t._s(t.gbObject.seq)+" ")])],1)],1),i("Drawer",{attrs:{title:"Detail",width:"500",closable:!1},model:{value:t.showFeature,callback:function(e){t.showFeature=e},expression:"showFeature"}},[t._v(". "),t._l(t.featureDetail,(function(e,r){return i("div",{key:r,staticStyle:{width:"100%","border-bottom":"1px solid darkgray"}},[i("Row",[i("i-col",{staticStyle:{"font-size":"16px"},attrs:{span:"12"}},[t._v(t._s(r))]),i("i-col",{staticStyle:{"font-size":"16px"},attrs:{span:"12"}},[t._v(t._s(e))])],1)],1)}))],2)],1)},K=[],Y=(i("a15b"),i("b680"),{name:"carrierMap",props:{gbObject:Object,showConfigMap:Object,carrier:Object},data:function(){return{showFeature:!1,featureDetail:{},cTrans:"",cx:0,cy:0,useH:0,useW:0,r:0,width:10,maxArrow:100,seq:"",title:"",features:[],trackHeight:35,textFontSize:12,map:{},fileMap:{},searchList:{},defsList:[],featureList:[],featureTitleList:[],mainTrans:"",trackName:"",titleDesc:"",trackNameTrans:"",titleDescTrans:"",titleFontSize:"16px",rulerPaths:[],rulerTexts:[],rulerItems:[],circle:"",carrierDetailList:[]}},mounted:function(){this.initPage()},methods:{showDetail:function(t){this.featureDetail=t,this.showFeature=!0},downloadDna:function(){var t={fileId:this.carrier.ID};N.downLoad(t,"/snapGene/downLoad",this.carrier.CAT+"_"+this.carrier.NAME+".dna")},downlondPDF:function(){var t=document.getElementById("carrierSvg"),e=t.outerHTML,i={id:this.carrier.ID,svgBase64:e,svgWidth:this.useW+"",svgHeight:this.useH+""};N.downLoad(i,"/snapGene/exportFile",this.carrier.CAT+"_"+this.carrier.NAME+".pdf")},initPage:function(){console.log(this.$(".svg-container").height()),console.log(this.$(".svg-container").width()),this.useH=parseFloat(this.$(".svg-container").height()),this.useW=parseFloat(this.$(".svg-container").width()),this.r=.49*Math.min(this.useH,this.useW),this.cx=this.useH/2,this.cy=this.useW/2,this.cTrans="translate("+this.useW/2+","+this.useH/2+")",this.circle=this.getTextPath(1,this.gbObject.seq.length,this.gbObject.seq.length,this.r);var t=this.gbObject.features;t.sort((function(t,e){return Math.abs(e.start-e.end)-Math.abs(t.start-t.end)})),this.trackName=this.gbObject.name,this.titleDesc=this.gbObject.seq.length+"碱基对";var e=10*this.gbObject.name.length/2;this.trackNameTrans="translate("+(this.useW/2-e)+","+this.useH/2+")",this.titleDescTrans="translate("+(this.useW/2-50)+","+(this.useH/2+30)+")",console.log(11111),this.drawRuler(),console.log(2222),this.drawFeature(),this.mainTrans="translate("+this.useW+","+this.useH+")",this.initCarrier()},initCarrier:function(){for(var t in void 0!=this.carrier.SEQUENCE&&""!=this.carrier.SEQUENCE||(this.carrier.SEQUENCE=this.gbObject.seq),this.carrierDetailList=new Array,this.carrier)if("_id"!=t&&"ID"!=t.toUpperCase()&&(void 0==this.showConfigMap[t]||this.showConfigMap[t].pageshow)&&"SEQUENCE"!=t){var e={field:t,val:this.carrier[t]};this.carrierDetailList.push(e)}},drawFeature:function(){var t=this,e=new Array,i=this;this.defsList=new Array,this.featureList=new Array,this.featureTitleList=new Array,this.gbObject.features.map((function(r){if("source"!=r.type){r.start=parseInt(r.start),r.end=parseInt(r.end);var s=Math.max(r.start,r.end),a=Math.min(r.start,r.end);r.start=a,r.end=s;var n=0,o=r.label||r.note;t.map[o]=r;var l=o;o.length*t.textFontSize>Math.abs(r.end-r.start)&&(l=o.substring(0,Math.ceil(Math.abs(r.end-r.start)/i.textFontSize))+"...");var c=Math.max(o.length*t.textFontSize+r.start,r.end);e.length>0&&e.map((function(t){t.start<c&&t.end>r.start&&(n=Math.max(n,t.index+1))})),e.push({start:r.start,end:c,index:n});var d=i.gbObject.seq.substring(r.start-1,r.end);r.seq=d;var u=i.r-20-n*i.trackHeight,h=i.getPath(r.start,r.end,i.gbObject.seq.length,u,r.stand),p={id:r.type,d:h,fill:i.randomColor(r.type),label:o,feature:r};i.featureList.push(p);var f=i.getTextPath(r.start,r.start+i.gbObject.seq.length-r.end,i.gbObject.seq.length,u-25),g={id:o.replaceAll(" ",""),d:f};i.defsList.push(g);var v={id:o.replaceAll(" ",""),href:"#"+o.replaceAll(" ",""),realText:l};i.featureTitleList.push(v)}}))},drawRuler:function(){var t=Math.ceil(this.gbObject.seq.length/1e3);this.rulerPaths=new Array,this.rulerTexts=new Array,this.rulerItems=new Array;for(var e=0;e<t;e++){var i=this.transToSE(1e3*e,this.gbObject.seq.length,this.r),r=this.transToSE(1e3*e,this.gbObject.seq.length,this.r-5),s=["M",i.x,i.y,"L",r.x,r.y],a={d:s.join(" ")};this.rulerItems.push(a);var n=this.getTextPath(1e3*e,1e3*(e+1),this.gbObject.seq.length,this.r-15),o={d:n,id:"line"+e};this.rulerPaths.push(o);var l={href:"#line"+e,text:1e3*e+1};this.rulerTexts.push(l)}},getTextPath:function(t,e,i,r){var s=this.transToSE(t,i,r),a=this.transToSE(e,i,r),n=e-t>i/2?1:0,o=["M",s.x,s.y,"A",r,r,0,n,1,a.x,a.y];return o.join(" ")},randomColor:function(t){switch(t){case"misc_feature":return"#696969";case"rep_origin":return"#FFFF00";case"CDS":return"#A52A2A";case"primer_bind":return"#9400D3";case"promoter":return"#F0FFFF";case"polyA_signal":return"#A9A9A9";default:return"#BC8F8F"}},getPath:function(t,e,i,r,s){t=parseInt(t),e=parseInt(e),i=parseInt(i),r=parseInt(r);var a=this.maxArrow/2;if(e-t+1<this.maxArrow&&(a=Math.abs(t-e)/3),"-"==s){var n=this.transToSE(t+a,i,r),o=this.transToSE(e,i,r),l=this.transToSE(t+a,i,r-this.width),c=this.transToSE(e,i,r-this.width),d=this.transToSE(t,i,r-this.width/2),u=this.transToSE(t+a,i,r+5),h=this.transToSE(t+a,i,r-this.width-5),p=e-t>i/2?1:0,f=["M",n.x,n.y,"A",r,r,0,p,1,o.x,o.y],g=["L",c.x,c.y],v=["A",r-this.width,r-this.width,0,p,0,l.x,l.y],m=["L",h.x,h.y,"L",d.x,d.y,"L",u.x,u.y,"L",n.x,n.y],y=new Array;return y.push.apply(y,f),y.push.apply(y,g),y.push.apply(y,v),y.push.apply(y,m),y.join(" ")}var b=this.transToSE(t,i,r),w=this.transToSE(e-a,i,r),x=this.transToSE(t,i,r-this.width),_=this.transToSE(e-a,i,r-this.width),k=this.transToSE(e,i,r-this.width/2),C=this.transToSE(e-a,i,r+5),S=this.transToSE(e-a,i,r-this.width-5),O=e-t>i/2?1:0,A=["M",_.x,_.y,"A",r-this.width,r-this.width,0,O,0,x.x,x.y],L=["L",b.x,b.y],T=["A",r,r,0,O,1,w.x,w.y],$=["L",C.x,C.y,"L",k.x,k.y,"L",S.x,S.y,"L",_.x,_.y],E=new Array;return E.push.apply(E,A),E.push.apply(E,L),E.push.apply(E,T),E.push.apply(E,$),E.join(" ")},transToSE:function(t,e,i){t=parseFloat(t),e=parseFloat(e),i=parseFloat(i);var r=t/e,s=360*r,a=s*(Math.PI/180),n=(Math.sin(a)*i).toFixed(2),o=-(Math.cos(a)*i).toFixed(2);return{x:n,y:o}}},watch:{gbObject:function(){this.initPage()}}}),Z=Y,tt=(i("fe29"),Object(l["a"])(Z,X,K,!1,null,"e9a0647a",null)),et=tt.exports,it={name:"carrierDetail",components:{VLoading:_,CarrierMap:et,CarrierNav:G},data:function(){return{loading:!1,feature:{},showConfigMap:{},carrier:{},id:""}},mounted:function(){this.id=this.$route.query.id,console.log(this.id),this.initPage()},methods:{initPage:function(){this.loading=!0;var t=this;this.$axios.post("/snapGene/initPage",{id:this.id}).then((function(e){console.log(e,"========= detail ======"),t.loading=!1,t.feature=e.data.feature,t.showConfigMap=e.data.showConfigMap,t.carrier=e.data.carrier})).catch((function(e){t.loading=!1,console.log(e)}))}},watch:{getId:function(t){this.id=t,this.initPage()}},computed:{getId:function(){return this.$route.query.id}}},rt=it,st=Object(l["a"])(rt,W,Q,!1,null,"7b1b9676",null),at=st.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("carrier-nav"),i("div",{staticStyle:{width:"90%","margin-left":"5%","background-color":"white","border-radius":"10px","margin-top":"20px",padding:"10px 10px"}},[i("div",{staticClass:"accordion",attrs:{id:"accordionExample"}},[i("div",{staticClass:"card"},[t._m(0),i("div",{staticClass:"collapse show row",staticStyle:{padding:"10px 10px"},attrs:{id:"collapseOne","aria-labelledby":"headingOne","data-parent":"#accordionExample"}},[i("div",{staticClass:"card-body"},[t._l(t.show,(function(e){return i("div",{key:e.field,staticClass:"form-check form-check-inline col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2",staticStyle:{width:"100%"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.pageshow,expression:"item.pageshow"}],staticClass:"form-check-input",staticStyle:{cursor:"pointer"},attrs:{type:"checkbox",id:e.field},domProps:{checked:Array.isArray(e.pageshow)?t._i(e.pageshow,null)>-1:e.pageshow},on:{click:function(i){return t.showText(e.pageshow)},change:function(i){var r=e.pageshow,s=i.target,a=!!s.checked;if(Array.isArray(r)){var n=null,o=t._i(r,n);s.checked?o<0&&t.$set(e,"pageshow",r.concat([n])):o>-1&&t.$set(e,"pageshow",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(e,"pageshow",a)}}}),i("label",{staticClass:"form-check-label",staticStyle:{cursor:"pointer"},attrs:{for:e.field}},[t._v(t._s(e.field))])])})),i("div",{staticClass:"modal-footer",staticStyle:{"margin-top":"10px"}},[i("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button",disabled:t.pageBtnDisabled},on:{click:t.saveShowList}},[t._v(" "+t._s(t.pageBtnText)+" ")])])],2)])]),i("div",{staticClass:"card"},[t._m(1),i("div",{staticClass:"collapse",attrs:{id:"collapseTwo","aria-labelledby":"headingTwo","data-parent":"#accordionExample"}},[i("div",{staticClass:"card-body"},[i("h3",[t._v("first table")]),t._l(t.pdfFixList,(function(e){return i("div",{key:e.field,staticClass:"form-check form-check-inline col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2",staticStyle:{width:"100%"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.pdfposition,expression:"item.pdfposition"}],staticClass:"form-check-input",staticStyle:{cursor:"pointer"},attrs:{type:"checkbox",id:e.field+"1"},domProps:{checked:Array.isArray(e.pdfposition)?t._i(e.pdfposition,null)>-1:e.pdfposition},on:{click:function(i){return t.selectFix(e)},change:function(i){var r=e.pdfposition,s=i.target,a=!!s.checked;if(Array.isArray(r)){var n=null,o=t._i(r,n);s.checked?o<0&&t.$set(e,"pdfposition",r.concat([n])):o>-1&&t.$set(e,"pdfposition",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(e,"pdfposition",a)}}}),i("label",{staticClass:"form-check-label",staticStyle:{cursor:"pointer"},attrs:{for:e.field+"1"}},[t._v(t._s(e.field))])])})),i("h3",{staticStyle:{"margin-top":"50px"}},[t._v("Basic information 基本信息")]),t._l(t.pdfActivityList,(function(e){return i("div",{key:e.field,staticClass:"form-check form-check-inline col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2",staticStyle:{width:"100%"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.pdfposition,expression:"item.pdfposition"}],staticClass:"form-check-input",staticStyle:{cursor:"pointer"},attrs:{type:"checkbox",id:e.field+"2"},domProps:{checked:Array.isArray(e.pdfposition)?t._i(e.pdfposition,null)>-1:e.pdfposition},on:{click:function(i){return t.selectActivity(e)},change:function(i){var r=e.pdfposition,s=i.target,a=!!s.checked;if(Array.isArray(r)){var n=null,o=t._i(r,n);s.checked?o<0&&t.$set(e,"pdfposition",r.concat([n])):o>-1&&t.$set(e,"pdfposition",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(e,"pdfposition",a)}}}),i("label",{staticClass:"form-check-label",staticStyle:{cursor:"pointer"},attrs:{for:e.field+"2"}},[t._v(t._s(e.field))])])})),i("div",{staticClass:"modal-footer",staticStyle:{"margin-top":"10px"}},[i("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button",disabled:t.pdfBtnDisabled},on:{click:t.saveShowConfig}},[t._v(" "+t._s(t.pdfBtnText)+" ")])])],2)])]),i("div",{staticClass:"card"},[t._m(2),i("div",{staticClass:"collapse",attrs:{id:"collapseThree","aria-labelledby":"headingThree","data-parent":"#accordionExample"}},[i("div",{staticClass:"card-body"},[i("form",{attrs:{id:"fileForm",method:"post",action:t.fileAciton,enctype:"multipart/form-data",target:"ifr"}},[t._m(3),t._m(4),i("button",{staticClass:"btn btn-primary mb-2",on:{click:t.submit}},[t._v("confirm")])]),i("iframe",{staticStyle:{display:"none"},attrs:{name:"ifr",id:"ifr"}})])])])])]),i("v-loading",{attrs:{show:t.loading}})],1)},ot=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[i("h2",{staticClass:"mb-0"},[i("button",{staticClass:"btn btn-link btn-block text-left",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"}},[t._v(" 展示项配置 ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-header",attrs:{id:"headingTwo"}},[i("h2",{staticClass:"mb-0"},[i("button",{staticClass:"btn btn-link btn-block text-left collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"}},[t._v(" 导出配置 ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-header",attrs:{id:"headingThree"}},[i("h2",{staticClass:"mb-0"},[i("button",{staticClass:"btn btn-link btn-block text-left collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}},[t._v(" 上传 ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"gbs"}},[t._v("请选择包含.gb和.dna文件的.zip压缩包")]),i("input",{staticClass:"form-control-file",attrs:{type:"file",accept:".zip",multiple:"false",id:"gbs",name:"all"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"dnas"}},[t._v("请选择描述文件Excel")]),i("input",{staticClass:"form-control-file",attrs:{type:"file",accept:".xlsx",multiple:"true",id:"dnas",name:"excl"}})])}],lt={name:"carrierConfig",components:{VLoading:_,CarrierNav:G},data:function(){return{loading:!1,ddd:"111",show:[],pdfFixList:[],pdfActivityList:[],pageBtnDisabled:!1,pageBtnText:"save changes",pdfBtnDisabled:!1,pdfBtnText:"save changes"}},mounted:function(){this.initPage();var t=document.getElementById("ifr"),e=this;t.onload=function(){e.loading=!1;var t=window.frames["ifr"].document.body.innerText;console.log(t),-1!=t.indexOf("success")?e.$Message.success("上传成功！"):e.$Modal.warning({title:"导入异常",content:t})}},methods:{submit:function(){return this.loading=!0,this.$("#fileForm").submit(),!1},initPage:function(){var t=this;this.$axios.post("/snapGene/adminInit").then((function(e){if(e=e.data,console.log(e),t.show=e.showList,t.pdfFixList=JSON.parse(JSON.stringify(e.showList)),t.pdfActivityList=JSON.parse(JSON.stringify(e.showList)),void 0!=t.pdfFixList&&t.pdfFixList.length>0)for(var i in t.pdfFixList)"fix"==t.pdfFixList[i].pdfposition?t.pdfFixList[i].pdfposition=!0:t.pdfFixList[i].pdfposition=!1;if(void 0!=t.pdfActivityList&&t.pdfActivityList.length>0)for(var r in t.pdfActivityList)"activity"==t.pdfActivityList[r].pdfposition?t.pdfActivityList[r].pdfposition=!0:t.pdfActivityList[r].pdfposition=!1})).catch((function(e){console.log(e),t.$Message.error("system error")}))},selectFix:function(t){if(console.log(t.pdfposition),!t.pdfposition)for(var e=0;e<this.pdfActivityList.length;e++){var i=this.pdfActivityList[e];i.field===t.field&&(i.pdfposition=!1)}},selectActivity:function(t){if(console.log(t.pdfposition),!t.pdfposition)for(var e=0;e<this.pdfFixList.length;e++){var i=this.pdfFixList[e];i.field===t.field&&(i.pdfposition=!1)}},showText:function(t){console.log(t)},saveShowList:function(){var t=this;this.loading=!0,this.$axios.post("/snapGene/saveShowList",{showList:JSON.stringify(t.show)}).then((function(e){console.log(e),t.loading=!1,t.pageBtnDisabled=!1,t.pageBtnText="save changes",t.$Message.success("commit success！"),t.initPage()})).catch((function(e){console.log(e),t.pageBtnDisabled=!1,t.pageBtnText="save changes",t.$Message.error("system error")}))},saveShowConfig:function(){var t={fixList:JSON.stringify(this.pdfFixList),activityList:JSON.stringify(this.pdfActivityList)},e=this;this.pdfBtnDisabled=!0,this.pdfBtnText="submitting....",this.loading=!0,this.$axios.post("/snapGene/savePdfConfig",t).then((function(t){console.log(t),e.loading=!1,e.pdfBtnDisabled=!1,e.pdfBtnText="save changes",e.$Message.success("commit success！"),e.initPage()})).catch((function(t){e.loading=!1,console.log(t),e.pdfBtnDisabled=!1,e.pdfBtnText="save changes",e.$Message.error("system error")}))}},computed:{fileAciton:function(){return this.$axios.defaults.baseURL+"/snapGene/load_gb_data"}}},ct=lt,dt=Object(l["a"])(ct,nt,ot,!1,null,"746f5aea",null),ut=dt.exports;r["default"].use(u["a"]);var ht=[{path:"",redirect:"/home"},{path:"/",redirect:"/home"},{path:"/home",component:J,meta:{index:0}},{path:"/carrier",name:"carrier",component:at,meta:{index:1}},{path:"/config",name:"config",component:ut,meta:{index:2}}],pt=new u["a"]({routes:ht}),ft=pt,gt=i("1157"),vt=i.n(gt),mt=i("a925"),yt={confirm:"确定"},bt=yt,wt={},xt=wt;r["default"].use(mt["a"]);var _t=new mt["a"]({locale:localStorage.getItem("local")||"zh",messages:{zh:bt,en:xt}}),kt=_t,Ct=i("e069"),St=i.n(Ct),Ot=(i("dcad"),i("ab8b"),i("3e48"),i("2f62"));r["default"].use(Ot["a"]);var At=new Ot["a"].Store({state:{user:{}},mutations:{saveUser:function(t,e){t.user=e}},getters:{getUser:function(t){return t.user},getName:function(t){return void 0==t.user&&(t.user={},t.user.roles=[]),"zh"!=localStorage.getItem("local")?t.user.englishname:t.user.name},isResearcher:function(t){for(var e=0;e<t.user.roles.length;e++){var i=t.user.roles[e];if("999999"==i.roletype||"01"==i.roletype)return!0}return!1},isFeeder:function(t){for(var e=0;e<t.user.roles.length;e++){var i=t.user.roles[e];if("999999"==i.roletype||"02"==i.roletype)return!0}return!1},isReviewer:function(t){for(var e=0;e<t.user.roles.length;e++){var i=t.user.roles[e];if("999999"==i.roletype||"40"==i.roletype)return!0}return!1},isAdmin:function(t){for(var e=0;e<t.user.roles.length;e++){var i=t.user.roles[e];if("999999"==i.roletype)return!0}return!1},isBioAna:function(t){for(var e=0;e<t.user.roles.length;e++){var i=t.user.roles[e];if("999999"==i.roletype||"34"==i.roletype)return!0}return!1},isVector:function(t){for(var e=0;e<t.user.roles.length;e++){var i=t.user.roles[e];if("999999"==i.roletype)return!0}return"载体工程中心"==t.user.group.groupname},isGroupAdmin:function(t){if(t.user.group.groupadmin==t.user.id)return!0},isOther:function(t){for(var e=0;e<t.user.roles.length;e++){var i=t.user.roles[e];if("999999"==i.roletype||"09"==i.roletype)return!0}return!1},isCurrentUser:function(t){return function(e){if(t.user.id==e)return!0;for(var i=0;i<t.user.roles.length;i++){var r=t.user.roles[i];if("999999"==r.roletype)return!0}return!1}},isCurrentUserByName:function(t){return function(e){if(t.user.name==e)return!0;for(var i=0;i<t.user.roles.length;i++){var r=t.user.roles[i];if("999999"==r.roletype)return!0}return!1}}}}),Lt=i("2b27"),Tt=i.n(Lt);r["default"].use(St.a),r["default"].prototype.$axios=B.a,r["default"].prototype.$=vt.a,r["default"].prototype.$cookies=Tt.a,B.a.defaults.withCredentials=!0,B.a.defaults.baseURL="",B.a.interceptors.response.use((function(t){return t}),(function(t){if(console.log(t),t.response)switch(t.response.status){case 403:return ft.replace({path:"/login",query:{redirect:ft.currentRoute.fullPath}}),Promise.reject("转到登录啦！");case 401:var e=window.location.href.replaceAll("/","%2F").replaceAll(":","%3A");console.log(e),window.location.href=N.loginUrl+e;break;default:break}ft.replace({path:"/error",query:{redirect:ft.currentRoute.fullPath}})})),new r["default"]({router:ft,store:At,i18n:kt,render:function(t){return t(d)}}).$mount("#app")},"6c22":function(t,e,i){"use strict";i("25b6")},"85ec":function(t,e,i){},"89cc":function(t,e,i){},b36d:function(t,e,i){"use strict";i("89cc")},c31e:function(t,e,i){},c659:function(t,e,i){},c676:function(t,e,i){t.exports=i.p+"img/carrier.a7ddde2c.png"},d2b9:function(t,e,i){},fe29:function(t,e,i){"use strict";i("d2b9")}});
//# sourceMappingURL=app.20d193e4.js.map