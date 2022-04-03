<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light justify-content-center border border-start-0 border-end-0 border-top border-bottom">
    <div class="navbar-nav flex-row overflow-auto navbar-custom-scroll">
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsum</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsum</a>
      <a class="nav-item nav-link text-nowrap px-2 active" href="#">Lorem ipsum <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsum</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#">Lorem ipsum</a>
    </div>
  </nav> -->
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card border-0 mb-4 position-relative position-relative">
          <div :style="{ backgroundImage: `url(${product.imageUrl})` }" style="height: 300px; background-size: cover; background-position: center;"></div>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-3"><router-link class="text-dark" :to="`/detail/${product.id}`">{{ product.title }}</router-link></h4>
            <p class="card-text text-muted mb-0" style="height: 3rem; overflow: hidden;">{{ product.description }}</p>
            <p class="text-muted mt-3"><del>原價 {{ product.origin_price }} 元</del>  優惠 {{ product.price }} 元</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 分頁元件 -->
    <PaginationComp :pages="pagination" @get-products="getProducts"></PaginationComp>
  </div>
  <!-- <div class="container">
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td style="width: 200px">
            <div :style="{ backgroundImage: `url(${product.imageUrl})` }" style="height: 100px; background-size: cover; background-position: center;"></div>
          </td>
          <td>{{ product.title }}</td>
          <td>
            <div class="h5" v-if="product.price === product.origin_price">{{ product.price }} 元</div>
            <div v-else>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button type="button" class="btn btn-outline-secondary" @click="openProductModal(product.id)" :disabled="isLoadingID === product.id">
                <i class="fas fa-spinner fa-pulse" v-show="isLoadingID === product.id"></i>查看更多
              </button>
              <button type="button" class="btn btn-outline-danger" @click="addToCart(product.id)" :disabled="isLoadingID === product.id">
                <i class="fas fa-spinner fa-pulse" v-show="isLoadingID === product.id" ></i >加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ProductModal ref="productModal" :product="product" @add-cart="addToCart"></ProductModal>
  </div> -->
</template>
<script>
// import ProductModal from '@/components/ProductModal.vue'
import PaginationComp from '@/components/PaginationComp.vue'
export default {
  data () {
    return {
      products: [],
      product: {},
      pagination: {}
    }
  },
  components: {
    // ProductModal
    PaginationComp
  },
  methods: {
    getProducts (page = 1) {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?page=${page}`
      ).then((res) => {
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
    },
    openProductModal (id) {
      // this.productID = id
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
        .then((res) => {
          // console.dir(res.data);
          this.product = res.data.product
        })
      this.$refs.productModal.openModal()
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingID = id
      this.$http.post(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/cart', { data })
        .then((res) => {
          // this.getCarts()
          this.isLoadingID = ''
          this.$refs.productModal.closeModal()
          alert(res.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
