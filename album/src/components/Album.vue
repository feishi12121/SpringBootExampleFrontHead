<template>
  <div>
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
                    <p class="card-text">{{album.albumTitle}}</p >
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <router-link :to="{path:'/photos',query:{arry:album.photos}}"><button type="button" class="btn btn-sm btn-outline-secondary">查看</button></router-link>
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
.maintain {
  color: white;
}
</style>
