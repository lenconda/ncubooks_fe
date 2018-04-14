// 这是造的轮子集中的地方
// 全部使用ES6语法，编写及注释规范请参考showToast()

// 在这里引入需要的依赖
import { Toast } from 'mint-ui'
import axios from 'axios'
import router from './router'

/**
 *
 * @param message
 * @param position
 */
const showToast = (message, position) => {
  position = position || 'middle'
  let iconClass = typeof message !== 'undefined' ? '' : 'nbsicon nbs-error-s'
  try {
    if (message.indexOf('permission') >= 0 || message.indexOf('Unauthorized') >=0 || message.indexOf('重新登录') >= 0) {
      iconClass = 'nbsicon nbs-warn-o'
      router.push('/login')
    }
  } catch (e) {
    console.error(e)
  }
  try {
    if (message.indexOf('成功') >= 0) {
      iconClass = 'nbsicon nbs-success-s'
    } else {
      iconClass = 'nbsicon nbs-error-s'
    }
  } catch (e) {
    iconClass = 'nbsicon nbs-error-s'
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

/**
 *
 * @param params
 * @returns {Promise<any>}
 */
const ajax = async function (params) {
  let result = new Promise((resolve, reject) => {
    axios(params).then(res => {
      showToast(res.data.message)
    }).catch(error => {
      console.log(error.response)
      switch (error.response.status) {
        case 401:
          showToast('请重新登录');
          break;
        case 403:
          showToast('权限不足');
          break;
        case 500:
          showToast('服务器错误');
          break;
        default:
          showToast(error.response.data.error);
          break;
      }
      reject(error)
    })
  })
  return result
}

export default {
  showToast,
  ajax
}
