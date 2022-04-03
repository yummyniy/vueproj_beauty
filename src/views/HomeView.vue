<template>
  <div class="position-relative">
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1595051665600-afd01ea7c446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80);
        background-position: center center;
        opacity: 0.8;
      "
    ></div>
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <div class="row justify-content-center my-auto">
        <!-- <div class="col-md-4 text-center">
          <h2>Beauty彩妝</h2>
          <p class="text-muted mb-0">
            閃亮全系列彩妝引領時尚，如同大明星立即探索打造優雅極致
          </p>
          <button class="btn btn-dark rounded-0 mt-6">領取優惠</button>
        </div> -->
      </div>
    </div>
  </div>
  <div class="container my-7" style="padding-top: 20px; padding-bottom: 20px;">
    <div class="row">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1620248452188-2e0c45f8edfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">唇彩唇妝</h4>
        <p class="text-muted">
          唇彩一抹豐盈潤澤雙唇，輕鬆用各式霧面唇膏/亮面唇膏打造完美紅唇，多種唇膏 / 唇釉 / 唇蜜 / 護唇膏，唇妝首選大膽顯色!
        </p>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1526045405698-cf8b8acc4aaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">眼部妝容</h4>
        <p class="text-muted">
          一刷耀眼眼影、放電睫毛膏、勾勒深邃眼線筆、眼線液，立刻擁有搶眼亮麗眼妝，描繪眼部立體輪廓輕鬆描繪
        </p>
      </div>
    </div>
  </div>
  <!-- <div class="bg-light py-4">
    <div class="container">
      <div
        class="
          d-flex
          flex-column flex-md-row
          justify-content-between
          align-items-md-center align-items-start
        "
      >
        <p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <input type="text" class="form-control rounded-0" placeholder="" />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <router-view></router-view>
</template>

<script>
</script>
