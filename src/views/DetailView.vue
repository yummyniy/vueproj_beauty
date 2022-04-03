<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-7">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <template v-for="(image, key) in product.imagesUrl" :key="key">
            <div v-if="key < 1" class="carousel-item active" :style="{ backgroundImage: `url(${image})` }" style="height: 600px; background-size: cover; background-position: center;"></div>
            <div v-else class="carousel-item" :style="{ backgroundImage: `url(${image})`}" style="height: 600px; background-size: cover; background-position: center;"></div>
          </template>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-md-5">
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end"><del>NT${{ product.origin_price }}</del></p>
        <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <input
                type="number"
                class="
                  form-control
                  border-0
                  text-center
                  my-auto
                  shadow-none
                  bg-light
                "
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                min="1"
                v-model.number="qty"
              />
            </div>
          </div>
          <div class="col-6">
            <button type="button" class=" btn btn-dark w-100 py-2" @click="addToCart(qty)">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-4">
        <p> {{ product.description }} </p>
      </div>
      <div class="col-md-3">
        <p class="text-muted"> {{ product.content }} </p>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from '@/utils/emitter'
export default {
  data () {
    return {
      products: [],
      product: {},
      id: '',
      qty: 1
    }
  },
  methods: {
    getProduct () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`)
        .then((res) => {
          console.dir(res.data)
          this.product = res.data.product
        })
    },
    addToCart (qty = 1) {
      const data = {
        product_id: this.id,
        qty
      }
      this.$http.post(process.env.VUE_APP_API + '/api/' + process.env.VUE_APP_PATH + '/cart', { data })
        .then((res) => {
          // this.getCarts()
          alert(res.data.message)
          emitter.emit('get-cart')
        })
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    this.id = this.$route.params.id
    this.getProduct()
  }
}
</script>
