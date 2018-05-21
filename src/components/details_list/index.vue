<template>
  <div class="header_font">
    <div class="book_name head_font">{{ book_name }}</div>
    <div class="book_deadline head_font">{{ book_deadline }}</div>
    <div class="renewal_number head_font">{{ renewal_number }}</div>
    <div class="operate head_font">
      <div class="operate_container" :style="{ background: color }">{{ operate }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name :'details_list',
    props: {
      book_name: {
        type: String,
        default: null
      },
      book_deadline: {
        type: String,
        default: null
      },
      renewal_number: {
        type: String,
        default: null
      },
      operate: {
        type: String,
        default: null
      },
      color: {
        type: String,
        default: null
      }
    }
  }
</script>
<style lang="less" scoped>
  .header_font {
    width: 100%;
    height: 25px;
    .head_font {
      font-size: 14px;
      float: left;
      width: 25%;
      text-align: center;
      line-height: 25px;
    }
    .operate {
      .operate_container {
        width: 69px ;
        height: 25px;
        border-radius: 12.5px 12.5px 12.5px 12.5px;
        margin: 0 auto;
      }
    }
  }
</style>
