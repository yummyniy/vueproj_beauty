<template>
<div class="container">
  <Navbar></Navbar>
  <router-view/>
  <Footer></Footer>
</div>
</template>
<script>
import Navbar from '@/components/FrontNavbar.vue'
import Footer from '@/components/FrontFooter.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
<style lang="scss">
@import "bootstrap/scss/bootstrap";
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
