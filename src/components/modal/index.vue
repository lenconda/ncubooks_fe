<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper" @click.self="$emit('cancel')">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header">
              {{ title }}
            </slot>
          </div>
          <div class="modal__body">
            <slot name="body">
              <p>模态框内容</p>
              <p>模态框内容</p>
              <p>模态框内容</p>
            </slot>
          </div>
          <div class="modal__footer">
            <slot name="footer">
              <mt-button @click="$emit('cancel')">
                取消
              </mt-button>
              <mt-button @click="$emit('confirm')">
                确定
              </mt-button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      title: {
        type: String,
        default: '标题'
      }
    }
  }
</script>

<style lang="less">
.modal__mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  .modal__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .modal__container {
      /*根据设计师的要求修改宽度*/
      width: 350px;
      background-color: #fff;
      border-radius: 5px;/*no*/
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      .modal__header {
        padding: 15px;
        text-align: center;
        font-weight: 700;
      }
      .modal__body {
        padding: 15px;
      }
      .modal__footer {
        display: flex;
        button {
          flex-grow: 1;
          padding: 8px;
          font-size: 13px;
          background-color: #fff;
          &:first-child {
            border-radius: 0;
            border-bottom-left-radius: 5px;/*no*/
          }
          &:last-child {
            border-radius: 0;
            border-bottom-right-radius: 5px;/*no*/
          }
        }
      }
    }
  }
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal__container,
.modal-leave-active .modal__container {
  transform: scale(1.1);
}
</style>
