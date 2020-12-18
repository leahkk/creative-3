import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock_data.js'

Vue.config.productionTip = false

let data = {
  sales: mock
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
