<template>
  <div id="app">
      <div>
        <header>
          <div class="collapse bg-dark" id="navbarHeader">
            <div class="container">
              <div class="row">
                <div class="col-sm-8 col-md-7 py-4">
                  <h4 class="text-white">说明</h4>
                  <p class="text-muted">这个是个人电子相册这个是个人电子相册这个是个人电子相册这个是个人电子相册这个是个人电子相册这个是个人电子相册</p >
                </div>
                <div class="col-sm-4 offset-md-1 py-4">
                  <h4 class="text-white">联系我</h4>
                  <ul class="list-unstyled">
                    <li><a href=" " class="text-white">简书</a></li>
                    <li><a href="#" class="text-white">github</a></li>
                    <li><a href="#" class="text-white">Gmail</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar navbar-dark bg-dark box-shadow">
            <div class="container d-flex justify-content-between">
              <a href="#" class="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="mr-2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </a>
              <strong class="maintain">相册</strong>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"
                      aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>
      </div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  .maintain {
    color: white;
  }
</style>
