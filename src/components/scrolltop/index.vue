<template>
  <div class="controller" @click="slideToTop" v-show="show">
    <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: 'scrolltop',
  data () {
    return {
      show: false
    }
  },
  mounted () {
    const _this = this
    $(document).scroll(function () {
      if ($(document).scrollTop() >= 128) {
        _this.show = true
      } else {
        _this.show = false
      }
    })
  },
  methods: {
    slideToTop () {
      $('html,body').animate({scrollTop: 0}, 512)
    }
  }
}
</script>

<style lang="less" scoped>
.controller {
  position: fixed;
  bottom: 18px;
  right: 18px;
  padding: 2px 5px;
  background-color: rgba(0, 0, 0, .8);
  border-radius: 3px; /*no*/
  font-size: 36px;
  color: #fff;
  cursor: pointer;
  i {
    cursor: pointer;
  }
}
</style>
