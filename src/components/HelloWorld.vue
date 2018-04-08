<template>
  <div class="hello">
    <mt-button type="primary" size="large" @click="$toast('fuck')">asdasd</mt-button>
    <mt-button type="danger" size="large" @click="$indicator.open()">mmp</mt-button>
    <mt-button type="default" size="large" @click="$indicator.close()"></mt-button>
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
        message: 'permission denied'
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
