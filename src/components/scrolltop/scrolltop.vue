<template>
  <div class="controller" id="controller" style="display: none;">
    <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: 'scrolltop'
}
$(function () {
  $(document).scroll(function () {
    if ($(document).scrollTop() >= 128) {
      $('#controller').css('display', 'block')
    } else {
      $('#controller').css('display', 'none')
    }
  })
  $('#controller').click(function () {
    $(document).scrollTop(0)
  })
})
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
