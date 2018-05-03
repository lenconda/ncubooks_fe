<template>
  <div class="container">
    <section class="search-wrapper">
      <div class="icon-wrapper">
        <span class="icon"></span>
      </div>
      <input type="text" class="search">
    </section>
    <section class="carousel-wrapper"></section>
    <section class="precept">
      <strong class="content">“一个始终不被人善待的人，最能识得善良，也最能珍视善良。”</strong>
      <section class="sub">—— 《Lorem》</section>
    </section>
    <section class="newbooks">
      <h6 class="title">新书推送</h6>
      <div class="wrapper">
        <router-link class="wrapper-link" :to="{path: '/'}">
          <book-item :image="`https://upload.wikimedia.org/wikipedia/zh/1/10/A_Thousand_Splendid_Suns.gif`" :author="`Lorem`" :category="`Lorem ipsum`" :bookname="`灿烂千阳`"></book-item>
        </router-link>
        <book-item :image="null" :bookname="`灿烂千阳`" :category="`Lorem ipsum`" :author="`Lorem`"></book-item>
        <book-item :image="null" :bookname="`灿烂千阳`" :category="`Lorem ipsum`" :author="`Lorem`"></book-item>
        <book-item :image="null" :bookname="`灿烂千阳`" :category="`Lorem ipsum`" :author="`Lorem`"></book-item>
      </div>
    </section>
  </div>
</template>

<script>
import BookItem from '../../components/bookitem'
export default {
  name: 'explore',
  components: {
    'book-item': BookItem
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  .search-wrapper {
    width: 100%;
    height: 28px;
    padding-right: 8px;
    background-color: #f9f9f9;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .09); /*no*/
    .icon-wrapper {
      width: 28.5px;
      height: 100%;
      flex-grow: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        display: inline-block;
        width: 12.5px;
        height: 12.5px;
        background: url('../../assets/img/search.png') 100% e('/') 100% no-repeat;
      }
    }
    input.search {
      background-color: #f9f9f9;
      font-size: 12.5px;
      width: 100%;
      outline: none;
      caret-color: #5cb8f9;
    }
  }
  .carousel-wrapper {
    width: 100%;
    height: 150px;
    background-color: #cfcfcf;
  }
  .precept {
    height: auto;
    padding: 6px 14.5px;
    padding-top: 23px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .09); /*no*/
    .content {
      font-size: 12px;
      line-height: 16px;
      color: #333;
    }
    .sub {
      display: inline-block;
      width: 100%;
      text-align: right;
      color: rgba(50, 50, 50, .8);
      font-size: 10px;
      margin-top: 6px;
    }
  }
  .newbooks {
    padding-top: 7px;
    .title {
      display: inline-block;
      width: 100%;
      text-align: center;
      font-size: 13px;
      font-weight: bold;
      color: #9b9b9b;
      margin-bottom: 13px;
    }
    .wrapper {
      padding-left: 19.5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
}
</style>
