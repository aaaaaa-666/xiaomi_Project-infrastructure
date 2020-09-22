<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  name: 'app',
  components: {},
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    // 本地集成 mockjs实现数据 mock
    this.axios.get('/user/login').then((res) => {
      this.res = res

    })

  }

}
</script>
