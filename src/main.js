//import 'font-awesome/css/font-awesome.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'


import App from './App'

import './config/bootstrap'
import './config/msgs'


import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false
//aula 381 
// token temporario para testes 
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6InJhZmEiLCJlbWFpbCI6InJhZmFlbC5ia2VAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY4MjY5MjQwOCwiZXhwIjoxNjgyOTUxNjA4fQ.OkLEpK3FvHhedsUleK-X3hSUIEI8ghksHnrYH29AwP4' 

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')