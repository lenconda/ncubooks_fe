// 这是造的轮子集中的地方
// 全部使用ES6语法，编写及注释规范请参考showToast()

// 在这里引入需要的组件
import { Toast } from 'mint-ui'

/**
 *
 * @param _this
 * @param obj
 * @param position
 * @param jump
 */
const showToast = (_this, obj, position) => {
  position = position || 'middle'
  let message = typeof obj.message !== 'undefined' ? obj.message : '操作失败',
    iconClass = typeof obj.message !== 'undefined' ? '' : 'nbsicon nbs-error-o'
  try {
    if (message.indexOf('permission') >= 0 || message.indexOf('登录') >= 0) {
      iconClass = 'nbsicon nbs-warn-o'
      _this.$router.push('/login')
    }
  } catch (e) {
    console.error(e)
  }
  try {
    if (message.indexOf('成功') >= 0) {
      iconClass = 'nbsicon nbs-success-o'
    } else {
      iconClass = 'nbsicon nbs-error-o'
    }
  } catch (e) {
    iconClass = 'nbsicon nbs-error-o'
    console.log(e)
  }
  if (message !== '获取成功') {
    Toast({
      message: message,
      className: 'nbs-toast',
      iconClass: iconClass,
      position: position,
      duration: 3000
    })
  } else {
    console.log(message)
  }
}

export default {
  showToast
}
