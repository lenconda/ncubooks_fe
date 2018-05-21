<template>
  <div class="container" :style="{ borderColor: color }">
    <h2 class="subscript_number font">{{ number }}</h2>
    <h1 class="subscript font">{{ sub }}</h1>
  </div>
</template>
<script>
  export default {
    name: "general_information",
    props: {
      number: {
        type: String,
        default: null
      },
      sub: {
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
  .container {
    width: 19%;
    height: 25px;
    text-align: center;
    display: inline-block;
    line-height: 20px ;
    border-right: 1px solid ;
    .subscript {
      font-size: 14px;
      color: rgba(0, 0, 0, .8);
    }
    .subscript_number {
      font-size: 17px;
      font-weight: bold;
    }
    .font {
      position: relative;
      bottom: 8px;
    }
  }
</style>
