import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'
// 引入组件
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

// 引入样式
import 'common/stylus/public.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]

const router = new VueRouter({
  routes, linkActiveClass: 'active'
})

/* eslint-disable no-unused-vars */
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

router.push('/goods')
