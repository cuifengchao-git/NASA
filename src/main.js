// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MainLayout from '@/components/layout/mainlayout/MainLayout.vue'
import Menu from '@/components/layout/otherlayout/menu/Menu.vue'
import Header from '@/components/layout/otherlayout/header/Header.vue'
import Footer from '@/components/layout/otherlayout/footer/Footer.vue'
// import ECharts from 'vue-echarts'
// import * as echarts from 'echarts'
Vue.use(ElementUI)

Vue.component("main-layout", MainLayout);
Vue.component("main-menu", Menu);
Vue.component("main-header", Header);
Vue.component("main-footer", Footer);
// Vue.component('v-chart', ECharts);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
