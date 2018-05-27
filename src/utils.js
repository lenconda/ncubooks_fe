// 这是造的轮子集中的地方
// 全部使用ES6语法，编写及注释规范请参考showToast()

// 在这里引入需要的依赖
import { Toast } from 'mint-ui'
import axios from 'axios'
import router from './router'
import Miracle from 'incu-webview'

/**
 *
 * @param message
 * @param position
 */
const showToast = (message, position = 'middle') => {
  // position = position || 'middle'
  let iconClass = typeof message !== 'undefined' ? '' : 'nbsicon nbs-error-s'
  if (message.indexOf('permission') >= 0 || message.match(/[Uu]nauthorized/g) || message.indexOf('重新登录') >= 0) {
    iconClass = 'nbsicon nbs-warn-o'
  } else if (message.indexOf('成功') >= 0) {
    iconClass = 'nbsicon nbs-success-s'
  } else {
    iconClass = 'nbsicon nbs-error-s'
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
const ajax = async (params) => {
  params.baseURL = 'https://api.ncuos.com'
  return new Promise(resolve => {
    axios(params).then(res => {
      resolve(res)
    }).catch(error => {
      resolve(`${error.response.status}: ${error.message}`)
    })
  })
}

// iNCU相关
/**
 *
 * @returns {Promise<any>}
 */
const getAppData = () => {
  return new Promise((resolve, reject) => {
    if (Miracle.isApp()) {
      Miracle.onAppReady(() => {
        resolve({
          isApp: true,
          data: Miracle.getData()
        })
      })
    } else {
      resolve({
        isApp: false,
        data: {}
      })
    }
  })
}

/**
 *
 * @param token
 * @returns {Promise<any>}
 */
const getUserData = async (token) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'https://api.ncuos.com/api/user/profile/basic',
      headers: {
        'Authorization': token
      }
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
  showToast,
  ajax,
  getUserData,
  getAppData
}
