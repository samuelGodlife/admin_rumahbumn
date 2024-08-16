"use strict";(globalThis["webpackChunkweb_admin"]=globalThis["webpackChunkweb_admin"]||[]).push([[27],{5027:(a,e,t)=>{t.r(e),t.d(e,{default:()=>N});var s=t(9835),l=t(1957),o=t(6970);const i=a=>((0,s.dD)("data-v-52f68734"),a=a(),(0,s.Cn)(),a),n={class:"col col-lg-12 col-md-6 col-sm-8 col-xs-10 q-pt-md"},d={class:"row q-mt-lg"},r={class:"row col-12 q-mt-md"},c=i((()=>(0,s._)("div",{class:"col-md-4 col-lg-4 col-xs-12"},[(0,s._)("div",{class:"q-table__title"},"Master Data Tugas Pelatihan"),(0,s._)("p",{class:"text-caption"},"Data Tugas Pelatihan yang di lakukan di dalam sistem")],-1))),m=i((()=>(0,s._)("span",{class:"rowNumber"},null,-1)));function u(a,e,t,i,u,p){const h=(0,s.up)("q-breadcrumbs-el"),g=(0,s.up)("q-breadcrumbs"),w=(0,s.up)("q-card"),f=(0,s.up)("q-space"),b=(0,s.up)("q-btn"),_=(0,s.up)("q-input"),q=(0,s.up)("q-slide-transition"),k=(0,s.up)("q-td"),v=(0,s.up)("q-tr"),y=(0,s.up)("q-table"),W=(0,s.up)("q-card-section"),P=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(P,{class:"q-pr-md q-pl-md q-pa-md"},{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Wm)(w,{class:"my-card q-pa-md",flat:"",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(g,{separator:"---",class:"text-blue-10","active-color":"secondary"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{label:"Main Menu",icon:"widgets"}),(0,s.Wm)(h,{label:"Data Tugas Pelatihan",icon:"person"})])),_:1})])),_:1}),(0,s._)("div",d,[(0,s._)("div",r,[(0,s.Wm)(w,{class:"my-card col",flat:"",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{horizontal:""},{default:(0,s.w5)((()=>[(0,s.Wm)(W,{class:"col-12 q-pa-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(y,{"table-style":"counter-reset: cssRowCounter "+(u.pagination.page-1)*u.pagination.rowsPerPage+";",title:"Master Data Tugas Kelas","aria-label":"Text",class:"text-h5",rows:u.rows,flat:"",columns:u.columns,"row-key":"name",filter:u.filter,pagination:u.pagination},{top:(0,s.w5)((()=>[c,(0,s.Wm)(f),(0,s.Wm)(b,{flat:"",round:"",color:"primary",icon:"search",onClick:e[0]||(e[0]=a=>u.visibles=!u.visibles),size:"md",class:"q-mr-sm"}),(0,s.Wm)(q,null,{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("div",null,[(0,s.Wm)(_,{outlined:"",debounce:"300",placeholder:"Placeholder",style:{width:"300px"},color:"primary",modelValue:u.filter,"onUpdate:modelValue":e[1]||(e[1]=a=>u.filter=a),dense:""},null,8,["modelValue"])],512),[[l.F8,u.visibles]])])),_:1}),(0,s.Wm)(b,{dense:"",icon:"add",class:"q-ml-md q-pr-md",color:"blue-13",label:"Tambah Tugas",to:{name:"add_tugas"},size:"md",outline:""})])),body:(0,s.w5)((a=>[(0,s.Wm)(v,{props:a},{default:(0,s.w5)((()=>[(0,s.Wm)(k,{class:"text-center"},{default:(0,s.w5)((()=>[m])),_:1}),(0,s.Wm)(k,{key:"namaPelatihan",props:a},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(a.row.namaPelatihan),1)])),_:2},1032,["props"]),(0,s.Wm)(k,{key:"soal",props:a},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(a.row.soal),1)])),_:2},1032,["props"]),(0,s.Wm)(k,{key:"aksi",props:a},{default:(0,s.w5)((()=>[(0,s.Wm)(b,{round:"",outline:"",color:"red",size:"sm",icon:"delete",onClick:e=>this.delete(a.row._id),"no-caps":"",class:"q-ml-sm"},null,8,["onClick"]),(0,s.Wm)(b,{round:"",outline:"",color:"green",size:"sm",icon:"edit",to:{name:"edit_tugas",params:{id:a.row._id}},class:"q-ml-sm","no-caps":""},null,8,["to"])])),_:2},1032,["props"])])),_:2},1032,["props"])])),_:1},8,["table-style","rows","columns","filter","pagination"])])),_:1})])),_:1})])),_:1})])])])])),_:1})}var p=t(499);const h={name:"PageIndex",data(){return{card:(0,p.iH)(!1),pagination:{rowsPerPage:10},options:[],namaCustomer:[],fotoDiri:null,visibles:!1,filter:null,totalHutang:0,totalLunas:0,columns:[{name:"no",label:"No",field:"no",align:"center"},{name:"namaPelatihan",required:!0,label:"Nama Pelatihan",align:"left",field:"namaPelatihan",sortable:!0},{name:"soal",required:!0,label:"soal",align:"left",field:"soal",sortable:!0},{name:"aksi",label:"Actions",field:"aksi",align:"center"}],rows:[]}},created(){this.getCustomer()},methods:{downloadPDF(a){try{this.$api.get("tugas/get-id/"+a).then((a=>{if(!0!==a.data.status)this.$showNotif(a.data.message,"negative");else{const e=a.data.data;this.file=e.file,this.url="https://backendrumahbumn-production.up.railway.app/gambar-sertifikat/"+this.file,console.log(this.url);this.downloadFile(this.url,e.jenis_surat)}}))}catch(e){console.log(e.message),this.$showNotif("Terjadi ke !","negative")}},downloadFile(a,e){const t=document.createElement("a");t.href=a,t.setAttribute("download",e),document.body.appendChild(t),t.click(),document.body.removeChild(t)},getCustomer(){try{this.$api.get("tugas/get-all").then((a=>{if(!0!==a.data.status)this.$showNotif(a.data.message,"negative");else{const e=a.data.data;this.rows=e}}))}catch(a){this.$showNotif("Terjadi kesalahan !","negative")}},tampil(a){this.$refs.dialog.show(this.fotoDiri=a)},delete(a){this.$q.dialog({title:"Peringatan",message:"Apakah Anda Yakin ?",cancel:!0,persistent:!0}).onOk((()=>{try{this.$api.delete("/tugas/delete/"+a).then((a=>{!0!==a.data.status?this.$showNotif(a.data.message,"negative"):(this.getCustomer(),this.$showNotif(a.data.message,"positive"))}))}catch(e){console.log(e),this.$showNotif("Terjadi kesalahan !","negative")}}))}}};var g=t(1639),w=t(9885),f=t(4458),b=t(2605),_=t(8052),q=t(3190),k=t(7580),v=t(136),y=t(8879),W=t(9003),P=t(3119),T=t(1233),C=t(7220),Z=t(9984),Q=t.n(Z);const $=(0,g.Z)(h,[["render",u],["__scopeId","data-v-52f68734"]]),N=$;Q()(h,"components",{QPage:w.Z,QCard:f.Z,QBreadcrumbs:b.Z,QBreadcrumbsEl:_.Z,QCardSection:q.Z,QTable:k.Z,QSpace:v.Z,QBtn:y.Z,QSlideTransition:W.Z,QInput:P.Z,QTr:T.Z,QTd:C.Z})}}]);