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
    <button @click="showModal = true">Modal Testing</button>
    <hr>
    <button @click="getData">iNCU User Data</button>
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
    <modal title="示例标题" v-if="showModal" @cancel="showModal = false" @confirm="showModal = false">
      <template slot="body">
        <p>示例内容十五字</p>
        <p>示例内容十五字</p>
        <p>示例内容十五字</p>
      </template>
    </modal>
  </div>
</template>

<script>
import utils from '../utils'
export default {
  name: 'Test',
  data () {
    return {
      showModal: false,
      test: '',
      mock: ''
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
    },
    // 这里调用utils中的getUserData函数，需要提供token，token从utils中的getAppData中获取
    async getData (token) {
      const userData = await utils.getUserData(token)
      utils.ajax({method: 'post', url: '/api/books', data: {xh: userData.base_info.xh}}).then(res => {
        console.log(res)
      })
    }
  },
  mounted () {
    utils.getAppData().then(result => {
      if (result.isApp) {
        this.getData(result.data.user.token)
      } else {
        console.log(1)
        this.getData(`passport ${localStorage.token}`)
      }
    })
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
