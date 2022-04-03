"use strict";(self["webpackChunkvueproj_beauty"]=self["webpackChunkvueproj_beauty"]||[]).push([[970],{3970:function(t,e,o){o.r(e),o.d(e,{default:function(){return jt}});var l=o(3396),d=o(7139);const a={class:"container"},s=(0,l._)("h2",null,"後台產品列表",-1),r={class:"text-end mt-4"},c={class:"table mt-4"},i=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{width:"120"},"分類"),(0,l._)("th",null,"產品名稱"),(0,l._)("th",{width:"120"},"原價"),(0,l._)("th",{width:"120"},"售價"),(0,l._)("th",{width:"100"},"是否啟用"),(0,l._)("th",{width:"120"},"編輯")])],-1),n={width:"120"},u={width:"120"},p={width:"120"},m={width:"100"},b={key:0,class:"text-success"},h={key:1},_={width:"120"},P={class:"btn-group"},g=["onClick"],w=["onClick"];function y(t,e,o,y,f,v){const k=(0,l.up)("PaginationComp"),M=(0,l.up)("AddProductModal"),U=(0,l.up)("DelProductModal");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",a,[s,(0,l._)("div",r,[(0,l._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=t=>v.showModal("new"))}," 建立新的產品 ")]),(0,l._)("table",c,[i,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(f.products,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id},[(0,l._)("td",n,(0,d.zw)(t.category),1),(0,l._)("td",null,(0,d.zw)(t.title),1),(0,l._)("td",u,(0,d.zw)(t.origin_price),1),(0,l._)("td",p,(0,d.zw)(t.price),1),(0,l._)("td",m,[t.is_enabled?((0,l.wg)(),(0,l.iD)("span",b,"啟用")):((0,l.wg)(),(0,l.iD)("span",h,"未啟用"))]),(0,l._)("td",_,[(0,l._)("div",P,[(0,l._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:e=>v.showModal("edit",t)},"編輯",8,g),(0,l._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>v.showModal("delete",t)},"刪除",8,w)])])])))),128))])]),(0,l.Wm)(k,{pages:f.pagination,onGetProducts:v.getProducts},null,8,["pages","onGetProducts"])]),(0,l.Wm)(M,{ref:"addProductModal",product:f.tempProduct,"is-new":f.isNew,onGetProducts:v.getProducts},null,8,["product","is-new","onGetProducts"]),(0,l.Wm)(U,{ref:"delProductModal",product:f.tempProduct,onGetProducts:v.getProducts},null,8,["product","onGetProducts"])],64)}var f=o(9242);const v={id:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref:"modal"},k={class:"modal-dialog modal-xl"},M={class:"modal-content border-0"},U={class:"modal-header bg-dark text-white"},x={id:"productModalLabel",class:"modal-title"},D={key:0},C={key:1},V=(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),$={class:"modal-body"},N={class:"row"},G={class:"col-sm-4"},z={class:"mb-2"},A={class:"mb-3"},L=(0,l._)("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),Z=["src"],j={key:0},H=(0,l._)("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),I=["onUpdate:modelValue"],W=["src"],Y={key:0},q={key:1},K={key:1},B={class:"col-sm-8"},O={class:"mb-3"},E=(0,l._)("label",{for:"title",class:"form-label"},"標題",-1),F={class:"row"},J={class:"mb-3 col-md-6"},Q=(0,l._)("label",{for:"category",class:"form-label"},"分類",-1),R={class:"mb-3 col-md-6"},S=(0,l._)("label",{for:"price",class:"form-label"},"單位",-1),T={class:"row"},X={class:"mb-3 col-md-6"},tt=(0,l._)("label",{for:"origin_price",class:"form-label"},"原價",-1),et={class:"mb-3 col-md-6"},ot=(0,l._)("label",{for:"price",class:"form-label"},"售價",-1),lt=(0,l._)("hr",null,null,-1),dt={class:"mb-3"},at=(0,l._)("label",{for:"description",class:"form-label"},"產品描述",-1),st={class:"mb-3"},rt=(0,l._)("label",{for:"content",class:"form-label"},"說明內容",-1),ct={class:"mb-3"},it={class:"form-check"},nt=(0,l._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),ut={class:"modal-footer"},pt=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function mt(t,e,o,d,a,s){return(0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("div",k,[(0,l._)("div",M,[(0,l._)("div",U,[(0,l._)("h5",x,[o.isNew?((0,l.wg)(),(0,l.iD)("span",D,"新增產品")):((0,l.wg)(),(0,l.iD)("span",C,"編輯產品"))]),V]),(0,l._)("div",$,[(0,l._)("div",N,[(0,l._)("div",G,[(0,l._)("div",z,[(0,l._)("div",A,[L,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>a.tempProduct.imageUrl=t)},null,512),[[f.nr,a.tempProduct.imageUrl]]),(0,l._)("img",{class:"img-fluid",src:a.tempProduct.imageUrl},null,8,Z)]),Array.isArray(a.tempProduct.imagesUrl)?((0,l.wg)(),(0,l.iD)("div",j,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.tempProduct.imagesUrl,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"mb-3",key:e},[H,(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t=>a.tempProduct.imagesUrl[e]=t},null,8,I),[[f.nr,a.tempProduct.imagesUrl[e]]]),(0,l._)("img",{class:"img-fluid",src:t},null,8,W)])))),128)),!a.tempProduct.imagesUrl.length||a.tempProduct.imagesUrl[a.tempProduct.imagesUrl.length-1]?((0,l.wg)(),(0,l.iD)("div",Y,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[1]||(e[1]=t=>a.tempProduct.imagesUrl.push(""))},"新增圖片")])):((0,l.wg)(),(0,l.iD)("div",q,[(0,l._)("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>a.tempProduct.imagesUrl.pop())},"刪除圖片")]))])):((0,l.wg)(),(0,l.iD)("div",K,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[3]||(e[3]=(...t)=>s.addImage&&s.addImage(...t))},"新增圖片")]))])]),(0,l._)("div",B,[(0,l._)("div",O,[E,(0,l.wy)((0,l._)("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=t=>a.tempProduct.title=t)},null,512),[[f.nr,a.tempProduct.title]])]),(0,l._)("div",F,[(0,l._)("div",J,[Q,(0,l.wy)((0,l._)("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=t=>a.tempProduct.category=t)},null,512),[[f.nr,a.tempProduct.category]])]),(0,l._)("div",R,[S,(0,l.wy)((0,l._)("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=t=>a.tempProduct.unit=t)},null,512),[[f.nr,a.tempProduct.unit]])])]),(0,l._)("div",T,[(0,l._)("div",X,[tt,(0,l.wy)((0,l._)("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[7]||(e[7]=t=>a.tempProduct.origin_price=t)},null,512),[[f.nr,a.tempProduct.origin_price,void 0,{number:!0}]])]),(0,l._)("div",et,[ot,(0,l.wy)((0,l._)("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[8]||(e[8]=t=>a.tempProduct.price=t)},null,512),[[f.nr,a.tempProduct.price,void 0,{number:!0}]])])]),lt,(0,l._)("div",dt,[at,(0,l.wy)((0,l._)("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[9]||(e[9]=t=>a.tempProduct.description=t)},null,512),[[f.nr,a.tempProduct.description]])]),(0,l._)("div",st,[rt,(0,l.wy)((0,l._)("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[10]||(e[10]=t=>a.tempProduct.content=t)},null,512),[[f.nr,a.tempProduct.content]])]),(0,l._)("div",ct,[(0,l._)("div",it,[(0,l.wy)((0,l._)("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[11]||(e[11]=t=>a.tempProduct.is_enabled=t)},null,512),[[f.e8,a.tempProduct.is_enabled]]),nt])])])])]),(0,l._)("div",ut,[pt,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[12]||(e[12]=(...t)=>s.updateProduct&&s.updateProduct(...t))},"確認")])])])],512)}var bt=o(7972),ht=o.n(bt),_t={props:{product:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1}},data(){return{tempProduct:{},addProductModal:{},qty:1}},watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{updateProduct(){let t="",e="post";this.isNew||(e="put",t="/"+this.tempProduct.id),this.$http[e]("https://vue3-course-api.hexschool.io/v2/api/testpp/admin/product"+t,{data:this.tempProduct}).then((t=>{this.closeModal(),alert(t.data.message),this.$emit("get-products")})).catch((t=>{console.dir(t)}))},addImage(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")},openModal(){this.addProductModal.show()},closeModal(){this.addProductModal.hide()}},mounted(){this.addProductModal=new(ht())(this.$refs.modal,{keyboard:!1,backdrop:"static"})}},Pt=o(89);const gt=(0,Pt.Z)(_t,[["render",mt]]);var wt=gt;const yt={id:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true",ref:"modal"},ft={class:"modal-dialog"},vt={class:"modal-content border-0"},kt=(0,l._)("div",{class:"modal-header bg-danger text-white"},[(0,l._)("h5",{id:"delProductModalLabel",class:"modal-title"},[(0,l._)("span",null,"刪除產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Mt={class:"modal-body"},Ut=(0,l.Uk)("是否刪除"),xt={class:"text-danger"},Dt=(0,l.Uk)(" 商品(刪除後將無法恢復)。"),Ct={class:"modal-footer"},Vt=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function $t(t,e,o,a,s,r){return(0,l.wg)(),(0,l.iD)("div",yt,[(0,l._)("div",ft,[(0,l._)("div",vt,[kt,(0,l._)("div",Mt,[Ut,(0,l._)("strong",xt,(0,d.zw)(s.tempProduct.title),1),Dt]),(0,l._)("div",Ct,[Vt,(0,l._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...t)=>r.delProduct&&r.delProduct(...t))},"確認刪除")])])])],512)}var Nt={props:{product:{}},data(){return{tempProduct:{},delProductModal:{},qty:1}},watch:{product(){this.tempProduct=this.product}},methods:{delProduct(){this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/testpp/admin/product/"+this.tempProduct.id).then((t=>{this.closeModal(),alert(t.data.message),this.$emit("get-products")})).catch((t=>{console.dir(t)}))},openModal(){this.delProductModal.show()},closeModal(){this.delProductModal.hide()}},mounted(){this.delProductModal=new(ht())(this.$refs.modal,{keyboard:!1})}};const Gt=(0,Pt.Z)(Nt,[["render",$t]]);var zt=Gt,At=o(3098),Lt={data(){return{products:[],tempProduct:{imagesUrl:[]},isNew:!1,pagination:{}}},components:{AddProductModal:wt,DelProductModal:zt,PaginationComp:At.Z},methods:{getProducts(t=1){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/testpp/admin/products/?page="+t).then((t=>{this.products=t.data.products,this.pagination=t.data.pagination})).catch((t=>{console.dir(t)}))},showModal(t,e){"new"===t?(this.isNew=!0,this.tempProduct={imagesUrl:[]},this.$refs.addProductModal.openModal()):"edit"===t?(this.isNew=!1,this.tempProduct={...e},this.$refs.addProductModal.openModal()):"delete"===t&&(this.tempProduct={...e},this.$refs.delProductModal.openModal())}},mounted(){this.getProducts()}};const Zt=(0,Pt.Z)(Lt,[["render",y]]);var jt=Zt}}]);
//# sourceMappingURL=970.eda29afe.js.map