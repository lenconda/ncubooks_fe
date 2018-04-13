<template>
  <div class="controller" @click="backToTop" v-show="show">
    <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: 'scrolltop',
  props: {},
  data () {
    return {
      show: false
    }
  },
  methods: {
    backToTop () {
      $(document).scrollTop(0)
    }
  },
  ready () {
    $(document).scroll(() => {
      console.log('scrolling')
    })
  }
}
// $(function () {
//   $(document).scroll(function () {
//
//   })
// })
</script>

<style lang="less" scoped>
.controller {
  width: 80px;
  height: 80px;
  background-color: rgba(0, 0, 0, .8);
  border-radius: 3px; /*no*/
  font-size: 36px;
  color: #fff;
}
</style>
