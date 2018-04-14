<template>
  <div class="hello">
    <h1>Lorem ipsum</h1>
    <h2>Lorem ipsum</h2>
    <h3>Lorem ipsum</h3>
    <h4>Lorem ipsum</h4>
    <h5>Lorem ipsum</h5>
    <h6>Lorem ipsum</h6>
    <p><i>Lorem ipsum</i></p>
    <p><strong>Lorem ipsum</strong></p>
    <hr>
    <mt-button type="primary" size="large" @click="showToast">Common Ajax Testing</mt-button>
    <br>
    <mt-button type="primary" size="large" @click="testOnly">Axios Ajax Testing</mt-button>
    <br>
    <mt-button type="danger" size="large" @click="$indicator.open()">Indicator Testing</mt-button>
    <hr>
    <button class="fuck" @click="testOnly">Padding Testing</button>
    <button id="test">jQuery Testing</button>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque enim impedit inventore laborum, obcaecati omnis qui quod sunt unde veritatis! Dolorem eos molestiae nostrum perferendis quam rem rerum?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque enim impedit inventore laborum, obcaecati omnis qui quod sunt unde veritatis! Dolorem eos molestiae nostrum perferendis quam rem rerum?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque enim impedit inventore laborum, obcaecati omnis qui quod sunt unde veritatis! Dolorem eos molestiae nostrum perferendis quam rem rerum?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque enim impedit inventore laborum, obcaecati omnis qui quod sunt unde veritatis! Dolorem eos molestiae nostrum perferendis quam rem rerum?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque enim impedit inventore laborum, obcaecati omnis qui quod sunt unde veritatis! Dolorem eos molestiae nostrum perferendis quam rem rerum?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque enim impedit inventore laborum, obcaecati omnis qui quod sunt unde veritatis! Dolorem eos molestiae nostrum perferendis quam rem rerum?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque enim impedit inventore laborum, obcaecati omnis qui quod sunt unde veritatis! Dolorem eos molestiae nostrum perferendis quam rem rerum?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque enim impedit inventore laborum, obcaecati omnis qui quod sunt unde veritatis! Dolorem eos molestiae nostrum perferendis quam rem rerum?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque enim impedit inventore laborum, obcaecati omnis qui quod sunt unde veritatis! Dolorem eos molestiae nostrum perferendis quam rem rerum?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt doloremque enim impedit inventore laborum, obcaecati omnis qui quod sunt unde veritatis! Dolorem eos molestiae nostrum perferendis quam rem rerum?</p>
    <hr>
    <input type="text" placeholder="Input text testing">
    <scroll></scroll>
  </div>
</template>

<script>
import utils from '../utils'
import ScrollTop from '@/components/scrolltop/scrolltop'
export default {
  name: 'Test',
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
      console.log(await utils.ajax({method: 'get', url: '/api/toast'}))
    },
    async testOnly () {
      await utils.ajax({
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
