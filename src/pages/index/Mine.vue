<template>
  <div class="container">
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
    <section class="full_details">
      <details_list book_name="书名" book_deadline="最晚还书期限" renewal_number="续借量" operate="操作"  class="head_font"></details_list>
      <details_list book_name="包" book_deadline="2018-3-23" renewal_number="5" operate="续借" color="linear-gradient(to left, #50b2ff ,#4bc2ff)" class="follow_list"></details_list>
      <details_list book_name="包" book_deadline="2018-3-23" renewal_number="5" operate="已续借" color="linear-gradient(to left, #fc6161 ,#fe9b9b)" class="follow_list"></details_list>
      <details_list book_name="包" book_deadline="2018-3-23" renewal_number="5" operate="续借" color="linear-gradient(to left, #50b2ff ,#4bc2ff)" class="follow_list"></details_list>
      <details_list book_name="包" book_deadline="2018-3-23" renewal_number="5" operate="续借" color="linear-gradient(to left, #50b2ff ,#4bc2ff)" class="follow_list"></details_list>
    </section>
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
    background-color: #f6f6f6;
    .general_information_area {
      width: 100%;
      height: 115px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .09);
      background-color: #fff;
      padding-top: 9px;
      .head_portrait_container {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 9px;
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
    .full_details {
      margin-top: 26.5px;
      background-color: #fff;
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
  }
</style>
