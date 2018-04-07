<template>
  <div class="hello">
    <mt-button type="primary" size="large" @click="showToast">asdasd</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showToast () {
      Toast({
        message: 'fuck',
        iconClass: 'nbs-spin nbsicon nbs-loading',
        duration: -1,
        className: 'nbs-toast'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
  }
}
a {
  color: #42b983;
}
</style>
