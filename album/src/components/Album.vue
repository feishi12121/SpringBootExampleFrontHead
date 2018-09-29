<template>
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
            <strong>相册</strong>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"
                  aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
    </div>
  </header>
      <main role="main">
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">我的相册</h1>
            <p class="lead text-muted">因为还要走很长的路，所以要心无旁骛地望着远方</p >
            <p>
              <a href=" " class="btn btn-primary my-2">查看更多</a>
            </p>
          </div>
        </section>
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-4" v-for="album in albums" :key="album.id">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" :src="album.albumCover" style="height: 200px"/>
                  <div class="card-body">
                    <p class="card-text">{{album.albumDescription}}</p >
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">查看</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">关注</button>
                      </div>
                      <small class="text-muted">{{album.likes}}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <!--<div v-for="album in albums" :key="album.id">-->
        <!--<li>{{album.albumTitle}}</li>-->
        <!--&lt;!&ndash;<img ;src="album.albumCover"/>&ndash;&gt;-->
      <!--</div>-->
    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'
    export default {
        name: "Album",
        data:function () {
        return {
          albums:[]
        }
      },
      created(){
          var _this = this
        this.$http
          .get('http://localhost:8080/album/all')
          .then(function (response) {
            _this.albums = response.data
          })
      }
    }
</script>

<style scoped>

</style>
