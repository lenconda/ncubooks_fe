<template>
  <div class="container">
    <section class = 'navbar'>
      <img src="../../assets/img/return.png" class="return_icon">
      <h1 class="top_title">图书馆</h1>
    </section>
    <section class="general_information_area">
      <div class="head_portrait_container">
        <img class="head_portrait_area" src="../../assets/img/test_headphoto.jpg">
      </div>
      <section class="name_area">彭大佬</section>
      <section class="general_information">
        <general_information sub="倒计时" number="46天" color="rgb(239,241,244)"></general_information>
        <general_information sub="倒计时" number="46天" color="rgb(239,241,244)"></general_information>
        <general_information sub="倒计时" number="46天" color="rgb(239,241,244)"></general_information>
        <general_information sub="倒计时" number="46天" color="rgb(239,241,244)"></general_information>
        <general_information sub="倒计时" number="46天" color="white"></general_information>
      </section>
    </section>
    <section class="shadow_area1 shadow_area"></section>
    <section class="full_details">
      <details_list book_name="书名" book_deadline="最晚还书期限" renewal_number="续借量" operate="操作"  class="head_font"></details_list>
      <details_list book_name="包" book_deadline="2018-3-23" renewal_number="5" operate="续借" color="linear-gradient(to left, #50b2ff ,#4bc2ff)" class="follow_list"></details_list>
      <details_list book_name="包" book_deadline="2018-3-23" renewal_number="5" operate="已续借" color="linear-gradient(to left, #fc6161 ,#fe9b9b)" class="follow_list"></details_list>
      <details_list book_name="包" book_deadline="2018-3-23" renewal_number="5" operate="续借" color="linear-gradient(to left, #50b2ff ,#4bc2ff)" class="follow_list"></details_list>
      <details_list book_name="包" book_deadline="2018-3-23" renewal_number="5" operate="续借" color="linear-gradient(to left, #50b2ff ,#4bc2ff)" class="follow_list"></details_list>
    </section>
    <section class="shadow_area2 shadow_area"></section>
  </div>
</template>
<script>
  import OperateList from '../../components/details_list/index'
  import general_information from '../../components/general_information/index'
  export default {
    name: 'mine',
    components: {
      'details_list': OperateList,
      'general_information': general_information
    }
  }
</script>
<style lang="less" scoped>
  .container {
    height: 100%;
    .navbar {
      height: 44px;
      width: 100%;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .09);
      .return_icon {
        width: 12px;
        height: 13px;
        position: fixed;
        left: 8.5px;
        top: 14.5px;
      }
      .top_title {
        font-size: 16px;
        color: rgb(51, 51, 51);
        text-align: center;
        line-height: 37px;
      }
    }
    .general_information_area {
      width: 100%;
      height: 115px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .09);
      .head_portrait_container {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 9px;
        margin-top: 9px;
        .head_portrait_area {
          width: 45px;
          height: 45px;
        }
      }
      .name_area {
        position: relative;
        bottom: 31px;
        display: inline-block;
        font-size: 17px;
        color: rgb(0,0,0);
        margin-left: 73px;
        font-weight: bold;
      }
      .general_information {
        height: 25px;
        width: 100%;
        display: inline-block;
        margin-top: 4px;
      }
    }
    .shadow_area {
      width: 100%;
      background-color: #f6f6f6;
    }
    .shadow_area1 {
      height: 26.5px;
    }
    .full_details {
      width: 100%;
      height: 187.5px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .09);
      .head_font {
        margin-top: 6px;
        font-weight: bold;
      }
      .follow_list {
        margin-top: 12px;
      }
    }
    .shadow_area2 {
      height: 227.5px;
    }
  }
</style>
