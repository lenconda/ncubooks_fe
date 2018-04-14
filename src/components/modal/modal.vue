<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper" @click.self="$emit('close')">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header">
              {{ title }}
            </slot>
            <div class="modal__close" @click="$emit('close')">&times;</div>
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
              <button @click="$emit('close')">
                取消
              </button>
              <button @click="$emit('close')">
                确定
              </button>
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

</style>
