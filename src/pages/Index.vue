<template>
  <div class="index">
    <div class="container">
      <router-view></router-view>
    </div>
    <footer class="tabbar">
      <router-link class="item" :to="{path: '/index/explore'}">
        <div class="wrapper">
          <span class="icon explore"></span>
          <span class="text actived">发现</span>
        </div>
      </router-link>
      <router-link class="item" :to="{path: '/index/mine'}">
        <div class="wrapper">
          <span class="icon mine"></span>
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

<style lang="less" scoped>
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
    box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, .09); /*no*/
    display: flex;
    align-items: center;
    justify-content: flex-start;
    // 防止调用系统软键盘时Tabbar被顶起
    @media (max-height: 400px) {
      display: none;
    }
    .item {
      display: flex;
      flex-grow: 1;
      height: 100%;
      justify-content: center;
      align-items: center;
      .wrapper {
        width: auto;
        .icon {
          display: block;
          width: 25px;
          height: 25px;
          margin-bottom: 5px;
          &.explore {
            background: url('../assets/img/explore.png') 100% e('/') 100% no-repeat;
          }
          &.mine {
            background: url('../assets/img/mine.png') 100% e('/') 100% no-repeat;
          }
        }
        .text {
          display: block;
          font-size: 10px;
          color: #b1bdc6;
          text-align: center;
        }
      }
      &.router-link-exact-active {
        .icon {
          &.explore {
            background: url('../assets/img/explore_active.png') 100% e('/') 100% no-repeat;
          }
          &.mine {
            background: url('../assets/img/mine_active.png') 100% e('/') 100% no-repeat;
          }
        }
        &:first-child .text {
          color: #fd7e7e;
        }
        &:last-child .text {
          color: #ffd5d7;
        }
      }
    }
  }
}
</style>
