import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* eslint-disable */

new Vue({
  render: h => h(App),
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')

/* eslint-enable */
