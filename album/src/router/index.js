import Vue from 'vue'
import Router from 'vue-router'
import Album from '@/components/Album'
import Photos from '@/components/Photos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Album',
      component: Album
    },
    {
      path:'/photos',
      component: Photos,
      name: 'Photos'
    }
  ]
})
