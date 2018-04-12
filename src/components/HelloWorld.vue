<template>
  <div class="hello">
    <h2>Lorem ipsum</h2>
    <mt-button type="primary" size="large" @click="showToast">mmp</mt-button>
    <mt-button type="primary" size="large" @click="$http.get('/api/fuck')">mmp</mt-button>
    <mt-button type="danger" size="large" @click="$indicator.open()">mmp</mt-button>
    <button class="fuck" @click="testOnly">asdasd</button>
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
    },
    testOnly () {
      this.$http({
        method: 'post',
        url: '/api/test',
        data: {
          username: 1053464288,
          password: 'foo bar'
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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
