(function(t){function e(e){for(var a,n,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);h&&h(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,o=1;o<r.length;o++){var l=r[o];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=n(n.s=r[0]))}return t}var a={},i={app:0},s=[];function n(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=a,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var h=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"108a":function(t,e,r){"use strict";r("c31e")},"37af":function(t,e,r){},"55dd":function(t,e,r){"use strict";r("37af")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("5319"),r("ac1f"),r("d3b7");var a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("transition",[r("router-view")],1),r("div",{staticClass:"virBak-lb"}),r("div",{staticClass:"virBak-rb"})],1)},s=[],n={name:"App",components:{}},o=n,l=(r("034f"),r("2877")),c=Object(l["a"])(o,i,s,!1,null,null,null),h=c.exports,u=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"text-align":"center"}},[r("carrier-nav"),r("div",{staticClass:"svg-container"},[r("div",{staticClass:"search-container"},[r("input",{staticClass:"search-input",attrs:{placeholder:"e.g. 74218, Cas9, transformation protocol"}}),r("Button",{staticClass:"search-btn",attrs:{type:"warning"}},[t._v("Search")])],1),r("div",{staticStyle:{width:"100%","margin-top":"5vh",padding:"10px 5%"}},[r("carriers-list")],1)])],1)},p=[],f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Table",{attrs:{stripe:"",border:"",columns:t.cols,data:t.carriers},scopedSlots:t._u([{key:"operator",fn:function(e){var a=e.row;return[r("Button",{attrs:{type:"success"},on:{click:function(e){return t.showDetail(a.ID)}}},[t._v("detail")])]}}])}),r("v-loading",{attrs:{show:t.loading}})],1)},g=[],b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isShow?r("div",{staticClass:"loading"},[r("div",{staticStyle:{display:"inline-block",width:"20%","margin-top":"20px"}},[r("Alert",[t._v("加载中....")])],1),r("svg",{staticClass:"svg-container"},[r("path",{attrs:{id:"pulsar",stroke:"rgba(0,155,155,1)",fill:"none","stroke-width":"3","stroke-linejoin":"round",d:"M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"}})])]):t._e()},v=[],w={name:"v-loading",props:{show:Boolean},beforeMount:function(){this.isShow=this.show},data:function(){return{isShow:!1}},watch:{show:function(t){console.log(t),this.isShow=t}}},y=w,m=(r("108a"),Object(l["a"])(y,b,v,!1,null,"41f2f373",null)),x=m.exports,S={name:"carriersList",components:{VLoading:x},data:function(){return{loading:!1,carriers:[],cols:[],currentPage:0,pageSize:0,total:0}},beforeMount:function(){this.initPage()},methods:{showDetail:function(t){this.$router.push({name:"carrier",query:{id:t}})},initPage:function(){this.initCols();var t={currentPage:this.currentPage,pageSize:this.pageSize},e=this;this.loading=!0,this.$axios.post("/home/initPage",t).then((function(t){e.loading=!1,e.carriers=t.data.retMap.carriers,e.total=t.data.retMap.total})).catch((function(t){e.loading=!1,console.log(t)}))},initCols:function(){var t=new Array;t.push({title:this.$t("CAT"),key:"CAT"}),t.push({title:this.$t("NAME"),key:"NAME"}),t.push({title:this.$t("BACKBONE载体骨架"),key:"BACKBONE载体骨架"}),t.push({title:this.$t("PROMOTER"),key:"PROMOTER"}),t.push({title:this.$t("EXPRESSIONCASSETTE表达框"),key:"EXPRESSIONCASSETTE表达框"}),t.push({title:this.$t("operator"),slot:"operator"}),this.cols=t}}},k=S,T=Object(l["a"])(k,f,g,!1,null,"0c941891",null),_=T.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-dark",staticStyle:{"background-color":"#0483c8"}},[a("a",{staticClass:"navbar-brand",staticStyle:{display:"inline-block"},on:{click:t.goHome}},[a("img",{staticStyle:{height:"50px"},attrs:{src:r("a5b6"),alt:""}})]),a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("Button",{attrs:{type:"success",size:"large"},on:{click:t.gotologin}},[t._v("login")])],1)])},C=[],A=(r("2b3d"),r("3ca3"),r("ddb0"),r("bc3a")),O=r.n(A),j={loginUrl:"http://cibr.server.com:8080/login?service=",downLoad:function(t,e,r){O()({url:e,data:t,method:"post",responseType:"blob"}).then((function(t){var e=t.data;if(e){var a=window.URL.createObjectURL(new Blob([e])),i=document.createElement("a");i.style.display="none",i.href=a,i.setAttribute("download",r),document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(i.href),document.body.removeChild(i)}}))}},M=j,L={name:"carrierNav",methods:{goHome:function(){this.$router.push("/home")},gotologin:function(){var t=window.location.href;console.log(t),t=t.replaceAll(":","%3A").replaceAll("/","%2f"),console.log(t),window.location.href=M.loginUrl+t}}},P=L,F=Object(l["a"])(P,E,C,!1,null,"7fd03da1",null),D=F.exports,$={name:"home",components:{CarrierNav:D,CarriersList:_}},I=$,N=(r("55dd"),Object(l["a"])(I,d,p,!1,null,"28682886",null)),q=N.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"100%"}},[r("carrier-nav"),r("div",{staticStyle:{width:"90%",height:"650px","margin-left":"5%","margin-top":"3vh"}},[r("carrier-map",{attrs:{"gb-object":t.feature,"show-config-map":t.showConfigMap,carrier:t.carrier}})],1),r("v-loading",{attrs:{show:t.loading}})],1)},B=[],R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"100%",height:"90vh","min-height":"650px"}},[r("div",{staticClass:"svg-container",staticStyle:{display:"inline-block",width:"70%",height:"100%"}},[r("svg",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"carrierSvg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"}},[r("defs",{attrs:{id:"textLine"}},[t._l(t.rulerPaths,(function(t){return r("path",{key:t.id,attrs:{d:t.d,id:t.id}})})),t._l(t.defsList,(function(t){return r("path",{key:t,attrs:{d:t.d,id:t.id}})}))],2),r("text",{attrs:{id:"trackName",transform:t.trackNameTrans,"font-size":t.titleFontSize}},[t._v(t._s(t.trackName))]),r("text",{attrs:{id:"titleDesc",transform:t.titleDescTrans,"font-size":t.titleFontSize}},[t._v(t._s(t.titleDesc))]),r("g",{attrs:{id:"mainContainer",transform:t.cTrans}},[r("path",{attrs:{d:t.circle,stroke:"black",fill:"transparent","stroke-linecap":"butt","stroke-width":"3"}}),t._l(t.rulerItems,(function(t){return r("path",{key:t.d,attrs:{d:t.d,stroke:"black",fill:"transparent","stroke-width":"2"}})})),t._l(t.rulerTexts,(function(e){return r("text",{key:e.id,attrs:{"font-size":"10px"}},[r("textPath",{attrs:{"xlink:href":e.href}},[t._v(t._s(e.text))])])})),t._l(t.featureList,(function(e){return r("path",{key:e,staticClass:"show-detail",staticStyle:{cursor:"pointer"},attrs:{id:e.id,label:e.label,d:e.d,fill:e.fill,stroke:"black","stroke-width":"1"},on:{click:function(r){return t.showDetail(e.feature)}}})})),t._l(t.featureTitleList,(function(e){return r("text",{key:e,attrs:{"font-size":"12px"}},[r("textPath",{attrs:{id:e.id,"xlink:href":e.href}},[t._v(t._s(e.realText))])])}))],2)])]),r("div",{staticClass:"right-detail"},[r("Card",{staticStyle:{width:"100%"},attrs:{title:"detail",icon:"ios-options",padding:0}},[r("Button",{attrs:{slot:"extra",type:"primary"},on:{click:t.downlondPDF},slot:"extra"},[t._v("export")]),t._l(t.carrierDetailList,(function(t){return r("Cell",{key:t.field,attrs:{title:t.field}},[r("input",{attrs:{slot:"extra"},domProps:{value:t.val},slot:"extra"})])}))],2),r("card",{staticStyle:{width:"100%"},attrs:{title:"sequence"}},[r("Button",{attrs:{slot:"extra",type:"primary"},on:{click:t.downloadDna},slot:"extra"},[t._v("download .dna")]),r("div",{staticStyle:{width:"100%","word-break":"break-all"}},[t._v(" "+t._s(t.gbObject.seq)+" ")])],1)],1),r("Drawer",{attrs:{title:"Detail",width:"500",closable:!1},model:{value:t.showFeature,callback:function(e){t.showFeature=e},expression:"showFeature"}},[t._v(". "),t._l(t.featureDetail,(function(e,a){return r("div",{key:a,staticStyle:{width:"100%","border-bottom":"1px solid darkgray"}},[r("Row",[r("i-col",{staticStyle:{"font-size":"16px"},attrs:{span:"12"}},[t._v(t._s(a))]),r("i-col",{staticStyle:{"font-size":"16px"},attrs:{span:"12"}},[t._v(t._s(e))])],1)],1)}))],2)],1)},H=[],U=(r("b0c0"),r("d81d"),r("a15b"),r("b680"),{name:"carrierMap",props:{gbObject:Object,showConfigMap:Object,carrier:Object},data:function(){return{showFeature:!1,featureDetail:{},cTrans:"",cx:0,cy:0,useH:0,useW:0,r:0,width:10,maxArrow:100,seq:"",title:"",features:[],trackHeight:35,textFontSize:12,map:{},fileMap:{},searchList:{},defsList:[],featureList:[],featureTitleList:[],mainTrans:"",trackName:"",titleDesc:"",trackNameTrans:"",titleDescTrans:"",titleFontSize:"16px",rulerPaths:[],rulerTexts:[],rulerItems:[],circle:"",carrierDetailList:[]}},mounted:function(){this.initPage()},methods:{showDetail:function(t){this.featureDetail=t,this.showFeature=!0},downloadDna:function(){var t={fileId:this.carrier.ID};M.downLoad(t,"/snapGene/downLoad",this.carrier.CAT+"_"+this.carrier.NAME+".dna")},downlondPDF:function(){var t=document.getElementById("carrierSvg"),e=t.outerHTML,r={id:this.carrier.ID,svgBase64:e,svgWidth:this.useW+"",svgHeight:this.useH+""};M.downLoad(r,"/snapGene/exportFile",this.carrier.CAT+"_"+this.carrier.NAME+".pdf")},initPage:function(){console.log(this.$(".svg-container").height()),console.log(this.$(".svg-container").width()),this.useH=parseFloat(this.$(".svg-container").height()),this.useW=parseFloat(this.$(".svg-container").width()),this.r=.49*Math.min(this.useH,this.useW),this.cx=this.useH/2,this.cy=this.useW/2,this.cTrans="translate("+this.useW/2+","+this.useH/2+")",this.circle=this.getTextPath(1,this.gbObject.seq.length,this.gbObject.seq.length,this.r);var t=this.gbObject.features;t.sort((function(t,e){return Math.abs(e.start-e.end)-Math.abs(t.start-t.end)})),this.trackName=this.gbObject.name,this.titleDesc=this.gbObject.seq.length+"碱基对";var e=10*this.gbObject.name.length/2;this.trackNameTrans="translate("+(this.useW/2-e)+","+this.useH/2+")",this.titleDescTrans="translate("+(this.useW/2-50)+","+(this.useH/2+30)+")",console.log(11111),this.drawRuler(),console.log(2222),this.drawFeature(),this.mainTrans="translate("+this.useW+","+this.useH+")",this.initCarrier()},initCarrier:function(){for(var t in void 0!=this.carrier.SEQUENCE&&""!=this.carrier.SEQUENCE||(this.carrier.SEQUENCE=this.gbObject.seq),this.carrierDetailList=new Array,this.carrier)if("_id"!=t&&"ID"!=t.toUpperCase()&&(void 0==this.showConfigMap[t]||this.showConfigMap[t].pageshow)&&"SEQUENCE"!=t){var e={field:t,val:this.carrier[t]};this.carrierDetailList.push(e)}},drawFeature:function(){var t=this,e=new Array,r=this;this.defsList=new Array,this.featureList=new Array,this.featureTitleList=new Array,this.gbObject.features.map((function(a){if("source"!=a.type){a.start=parseInt(a.start),a.end=parseInt(a.end);var i=Math.max(a.start,a.end),s=Math.min(a.start,a.end);a.start=s,a.end=i;var n=0,o=a.label||a.note;t.map[o]=a;var l=o;o.length*t.textFontSize>Math.abs(a.end-a.start)&&(l=o.substring(0,Math.ceil(Math.abs(a.end-a.start)/r.textFontSize))+"...");var c=Math.max(o.length*t.textFontSize+a.start,a.end);e.length>0&&e.map((function(t){t.start<c&&t.end>a.start&&(n=Math.max(n,t.index+1))})),e.push({start:a.start,end:c,index:n});var h=r.gbObject.seq.substring(a.start-1,a.end);a.seq=h;var u=r.r-20-n*r.trackHeight,d=r.getPath(a.start,a.end,r.gbObject.seq.length,u,a.stand),p={id:a.type,d:d,fill:r.randomColor(a.type),label:o,feature:a};r.featureList.push(p);var f=r.getTextPath(a.start,a.start+r.gbObject.seq.length-a.end,r.gbObject.seq.length,u-25),g={id:o.replaceAll(" ",""),d:f};r.defsList.push(g);var b={id:o.replaceAll(" ",""),href:"#"+o.replaceAll(" ",""),realText:l};r.featureTitleList.push(b)}}))},drawRuler:function(){var t=Math.ceil(this.gbObject.seq.length/1e3);this.rulerPaths=new Array,this.rulerTexts=new Array,this.rulerItems=new Array;for(var e=0;e<t;e++){var r=this.transToSE(1e3*e,this.gbObject.seq.length,this.r),a=this.transToSE(1e3*e,this.gbObject.seq.length,this.r-5),i=["M",r.x,r.y,"L",a.x,a.y],s={d:i.join(" ")};this.rulerItems.push(s);var n=this.getTextPath(1e3*e,1e3*(e+1),this.gbObject.seq.length,this.r-15),o={d:n,id:"line"+e};this.rulerPaths.push(o);var l={href:"#line"+e,text:1e3*e+1};this.rulerTexts.push(l)}},getTextPath:function(t,e,r,a){var i=this.transToSE(t,r,a),s=this.transToSE(e,r,a),n=e-t>r/2?1:0,o=["M",i.x,i.y,"A",a,a,0,n,1,s.x,s.y];return o.join(" ")},randomColor:function(t){switch(t){case"misc_feature":return"#696969";case"rep_origin":return"#FFFF00";case"CDS":return"#A52A2A";case"primer_bind":return"#9400D3";case"promoter":return"#F0FFFF";case"polyA_signal":return"#A9A9A9";default:return"#BC8F8F"}},getPath:function(t,e,r,a,i){t=parseInt(t),e=parseInt(e),r=parseInt(r),a=parseInt(a);var s=this.maxArrow/2;if(e-t+1<this.maxArrow&&(s=Math.abs(t-e)/3),"-"==i){var n=this.transToSE(t+s,r,a),o=this.transToSE(e,r,a),l=this.transToSE(t+s,r,a-this.width),c=this.transToSE(e,r,a-this.width),h=this.transToSE(t,r,a-this.width/2),u=this.transToSE(t+s,r,a+5),d=this.transToSE(t+s,r,a-this.width-5),p=e-t>r/2?1:0,f=["M",n.x,n.y,"A",a,a,0,p,1,o.x,o.y],g=["L",c.x,c.y],b=["A",a-this.width,a-this.width,0,p,0,l.x,l.y],v=["L",d.x,d.y,"L",h.x,h.y,"L",u.x,u.y,"L",n.x,n.y],w=new Array;return w.push.apply(w,f),w.push.apply(w,g),w.push.apply(w,b),w.push.apply(w,v),w.join(" ")}var y=this.transToSE(t,r,a),m=this.transToSE(e-s,r,a),x=this.transToSE(t,r,a-this.width),S=this.transToSE(e-s,r,a-this.width),k=this.transToSE(e,r,a-this.width/2),T=this.transToSE(e-s,r,a+5),_=this.transToSE(e-s,r,a-this.width-5),E=e-t>r/2?1:0,C=["M",S.x,S.y,"A",a-this.width,a-this.width,0,E,0,x.x,x.y],A=["L",y.x,y.y],O=["A",a,a,0,E,1,m.x,m.y],j=["L",T.x,T.y,"L",k.x,k.y,"L",_.x,_.y,"L",S.x,S.y],M=new Array;return M.push.apply(M,C),M.push.apply(M,A),M.push.apply(M,O),M.push.apply(M,j),M.join(" ")},transToSE:function(t,e,r){t=parseFloat(t),e=parseFloat(e),r=parseFloat(r);var a=t/e,i=360*a,s=i*(Math.PI/180),n=(Math.sin(s)*r).toFixed(2),o=-(Math.cos(s)*r).toFixed(2);return{x:n,y:o}}},watch:{gbObject:function(){this.initPage()}}}),W=U,Q=(r("fe29"),Object(l["a"])(W,R,H,!1,null,"e9a0647a",null)),G=Q.exports,J={name:"carrierDetail",components:{VLoading:x,CarrierMap:G,CarrierNav:D},data:function(){return{loading:!1,feature:{},showConfigMap:{},carrier:{},id:""}},mounted:function(){this.id=this.$route.query.id,console.log(this.id),this.initPage()},methods:{initPage:function(){this.loading=!0;var t=this;this.$axios.post("/snapGene/initPage",{id:this.id}).then((function(e){console.log(e,"========= detail ======"),t.loading=!1,t.feature=e.data.feature,t.showConfigMap=e.data.showConfigMap,t.carrier=e.data.carrier})).catch((function(e){t.loading=!1,console.log(e)}))}},watch:{getId:function(t){this.id=t,this.initPage()}},computed:{getId:function(){return this.$route.query.id}}},K=J,V=Object(l["a"])(K,z,B,!1,null,"7b1b9676",null),X=V.exports;a["default"].use(u["a"]);var Y=[{path:"",redirect:"/home"},{path:"/",redirect:"/home"},{path:"/home",component:q,meta:{index:0}},{path:"/carrier",name:"carrier",component:X,meta:{index:1}}],Z=new u["a"]({routes:Y}),tt=Z,et=r("1157"),rt=r.n(et),at=r("a925"),it={},st=it,nt={},ot=nt;a["default"].use(at["a"]);var lt=new at["a"]({locale:localStorage.getItem("local")||"zh",messages:{zh:st,en:ot}}),ct=lt,ht=r("e069"),ut=r.n(ht);r("dcad"),r("ab8b"),r("3e48");a["default"].use(ut.a),a["default"].prototype.$axios=O.a,a["default"].prototype.$=rt.a,O.a.defaults.withCredentials=!0,O.a.defaults.baseURL="",O.a.interceptors.response.use((function(t){return t}),(function(t){if(console.log(t),t.response)switch(t.response.status){case 403:return tt.replace({path:"/login",query:{redirect:tt.currentRoute.fullPath}}),Promise.reject("转到登录啦！");case 401:var e=window.location.href.replaceAll("/","%2F").replaceAll(":","%3A");console.log(e),window.location.href=M.loginUrl+e;break;default:break}tt.replace({path:"/error",query:{redirect:tt.currentRoute.fullPath}})})),new a["default"]({router:tt,i18n:ct,render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,r){},a5b6:function(t,e,r){t.exports=r.p+"img/carrier.652e1d56.jpg"},c31e:function(t,e,r){},d2b9:function(t,e,r){},fe29:function(t,e,r){"use strict";r("d2b9")}});
//# sourceMappingURL=app.c8f87f60.js.map