<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Beauty彩妝</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/product">產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link position-relative" to="/cart">
            <i class="bi bi-cart"></i>
            <span v-if="cartData?.carts?.length > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{ cartData?.carts?.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/admin/product">後台管理</router-link>
        </li> -->
      </div>
    </div>
  </nav>
</template>
<script>
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      cartData: {
        carts: []
      },
      isLoadingID: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCarts () {
      this.$http.get(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/cart')
        .then((res) => {
          this.cartData = res.data.data
        })
    },
    updateCart (item) {
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http.put(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/cart/' + item.id, { data })
        .then((res) => {
          this.getCarts()
          this.isLoadingID = ''
          alert(res.data.message)
        })
    },
    deleteCart (id) {
      this.isLoadingID = id
      this.$http.delete(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/cart/' + id)
        .then((res) => {
          this.getCarts()
          this.isLoadingID = ''
          alert(res.data.message)
        })
    },
    deleteAllCart () {
      this.$http.delete(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/carts')
        .then((res) => {
          this.getCarts()
          this.isLoadingID = ''
          alert(res.data.message)
        })
    },
    createOrder () {
      const order = this.form
      this.$http.post(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/order', { data: order })
        .then((res) => {
          alert(res.data.message)
          this.$refs.form.resetForm()
          // this.deleteAllCart();
          this.getCarts()
          this.isLoadingID = ''
        })
    }
  },
  mounted () {
    this.getCarts()
    emitter.on('get-cart', () => {
      this.getCarts()
    })
  }
}
</script>
