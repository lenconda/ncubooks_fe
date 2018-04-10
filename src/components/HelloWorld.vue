<template>
  <div class="hello">
    <h2>asdasdasd</h2>
    <mt-button type="primary" size="large" @click="showToast">fuck</mt-button>
    <mt-button type="danger" size="large" @click="$indicator.open()">mmp</mt-button>
    <button class="fuck">asdasd</button>
  </div>
</template>

<script>
import utils from '../utils'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showToast () {
      let obj = {
        message: '连接超时，图书馆崩了'
      }
      utils.showToast(this, obj)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
h2 {
  font-size: 22px;
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
.hello {
  .fuck {
    padding: 8px;
  }
}
</style>
