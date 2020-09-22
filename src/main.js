import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env.js'

// mock 开关
const mock = true
if(mock) {
  require('./mock/api')
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use((response) => {
  let res = response.data
  if(res.status == 0) {  // 这里是与后台协商好的 状态码 0 表示成功
    return res.data
  }
  else if(res.status == 10) { // 状态码 10 是与后台协商好的表示 用户未登录
    window.location.href = '/#/login'
  }
  else {
    alert(res.msg)
  }
})
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
