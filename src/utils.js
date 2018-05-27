// 这是造的轮子集中的地方
// 全部使用ES6语法，编写及注释规范请参考showToast()

// 在这里引入需要的依赖
import { Toast } from 'mint-ui'
import axios from 'axios'
import Miracle from 'incu-webview'

/**
 *
 * @param message
 * @param position
 */
const showToast = (message, position = 'middle') => {
  let iconClass = ['nbsicon']
  // 根据message类型处理iconCLass
  let msg= ''
  typeof message !== 'undefined' ? '' : iconClass.push('nbs-error-s')
  if (typeof message === 'undefined') {
    iconClass.push('nbs-error-s')
  } else if (typeof message === 'object') {
    msg = message.message
    if (message.status === 1) {
      iconClass.push('nbs-success-s')
    } else {
      iconClass.push('nbs-error-s')
    }
  } else if (typeof message === 'string') {
    msg = message
    if (message.match(/[Ss]ucce/g) || message.match(/[Ss]ucce/g) || message.match(/成功/g)) {
      iconClass.push('nbs-success-s')
    } else {
      iconClass.push('nbs-error-s')
    }
  } else {
    iconClass.push('nbs-error-s')
  }
  if (msg !== '获取成功') {
    Toast({
      message: msg,
      className: 'nbs-toast',
      iconClass: iconClass.join(' '),
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
