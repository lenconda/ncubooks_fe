<template>
  <div class="hello">
    <h2>Lorem ipsum</h2>
    <hr>
    <mt-button type="primary" size="large" @click="showToast">mmp</mt-button>
    <hr>
    <mt-button type="primary" size="large" @click="$http.get('/api/fuck')">mmp</mt-button>
    <hr>
    <mt-button type="danger" size="large" @click="$indicator.open()">mmp</mt-button>
    <hr>
    <button class="fuck" @click="testOnly">asdasd</button>
    <button id="test">fuck</button>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque enim impedit inventore laborum, obcaecati omnis qui quod sunt unde veritatis! Dolorem eos molestiae nostrum perferendis quam rem rerum?</p>
    <input type="text">
    <scroll></scroll>
  </div>
</template>

<script>
import utils from '../utils'
import ScrollTop from './scrolltop/scrolltop'
export default {
  name: 'HelloWorld',
  components: {
    'scroll': ScrollTop
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    async showToast () {
      console.log(await utils.ajax({method: 'get', url: 'https://os.ncuos.com/api/go/events/all?mine=false&page=1'}))
    },
    testOnly () {
      this.$http({
        method: 'post',
        url: '/api/test',
        data: {
          username: 1053464288,
          password: 'foo bar'
        }
      }).catch(error => {
        console.log(error.response)
      })
    }
  }
}
$(function () {
  $('#test').click(() => {
    alert(1)
  })
})
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
