<template>
<div>
  <main role="main">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">我的相册</h1>
        <p class="lead text-muted">因为还要走很长的路，所以要心无旁骛地望着远方</p >
      </div>
    </section>
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="photo in photos" :key="photo.id">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" :src="photo.photoUrl" style="height: 200px"/>
              <div class="card-body">
                <p class="card-text">{{photo.photoName}}</p >
                <div class="d-flex justify-content-between align-items-center">
                  <!--<div class="btn-group">-->
                    <!--<router-link to="/photos"><button type="button" class="btn btn-sm btn-outline-secondary">查看</button></router-link>-->
                    <!--<button type="button" class="btn btn-sm btn-outline-secondary">关注</button>-->
                  <!--</div>-->
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
    name: "Photos",
    data(){
      return {
        photos:[]
      }
    },
    created(){
      this.photos = this.$route.query.arry;
    }
  }
</script>

<style scoped>

</style>
