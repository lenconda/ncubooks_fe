<template>
  <div class="index">
    <div class="container">
      <router-view></router-view>
    </div>
    <footer class="tabbar">
      <router-link class="item" :to="{path: '/index/explore'}">
        <div class="wrapper">
          <div class="icon">
            <img src="../assets/img/explore_active.png" alt="explore_active" width="100%">
          </div>
          <span class="text">发现</span>
        </div>
      </router-link>
      <router-link class="item" :to="{path: '/index/mine'}">
        <div class="wrapper">
          <div class="icon">
            <img src="../assets/img/mine.png" alt="mine" width="100%">
          </div>
          <span class="text">我的</span>
        </div>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="less">
.index {
  height: 100%;
  padding-bottom: 50px;
  .container {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .tabbar {
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, .09);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .item {
      display: flex;
      flex-grow: 1;
      height: 100%;
      justify-content: center;
      align-items: center;
      .wrapper {
        width: auto;
        .icon {
          width: 25px;
          height: 25px;
          margin-bottom: 2.5px;
        }
        .text {
          font-size: 10px;
          color: #b1bdc6;
        }
      }
    }
  }
}
</style>
