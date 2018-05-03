<template>
  <div class="book-item">
    <div v-if="!image" class="preview nopreview" :style="{backgroundColor: color}">
      <span>{{ bookname }}</span>
    </div>
    <div v-else class="preview">
      <img :src="image" alt="lorem" width="100%" height="100%">
    </div>
    <div class="info">
      <span class="title">作者</span>
      <span class="content">{{ author }}</span>
      <span class="title">类型</span>
      <span class="content">{{ category }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'book-item',
  props: {
    image: {
      type: [String, Array, Boolean],
      default: null
    },
    author: {
      type: String,
      default: '默认作者'
    },
    category: {
      type: String,
      default: '默认类型'
    },
    bookname: {
      type: String,
      default: '书籍名称'
    }
  },
  data () {
    return {
      color: '#d9d9d9'
    }
  },
  mounted () {
    var rawColor = ''
    for (let i = 0; i < 3; i++) {
      var colorFactor =  Math.floor(Math.random() * 256).toString(16)
      rawColor += colorFactor.length < 2 ? `0${colorFactor}` : colorFactor
    }
    this.color = `#${rawColor}`
  }
}
</script>

<style lang="less" scoped>
.book-item {
  width: 168.5px;
  height: 115px;
  overflow: hidden;
  margin-right: 7px;
  margin-bottom: 24px;
  display: flex;
  .preview {
    height: 100%;
    width: 90px;
    flex-grow: 0;
    &.nopreview {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        display: inline-block;
        text-align: center;
        color: #fff;
        line-height: 1.4;
      }
    }
  }
  .info {
    width: 78px;
    display: flex;
    padding: 0 0 0 5px;
    flex-direction: column;
    justify-content: center;
    span {
      display: inline-block;
      text-align: left;
      margin: 0;
      &.title {
        font-size: 10px;
        color: #9b9b9b;
        margin-bottom: 6px;
      }
      &.content {
        font-size: 11px;
        color: #000;
        margin-bottom: 11px;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
