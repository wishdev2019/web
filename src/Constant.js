// 静态值定义： 【应用配置】

/**
 * [api 后端接口相关，自动根据打包命令加载对应环境接口地址]
 * @type {Object}
 */
export const env = {
  BASE_URL: process.env.BASE_URL, //资源BASE_URL
  RELA_URL: window.location.origin || (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '')),
  API_PREFIX: process.env.API_PREFIX, //API前缀
  ENV_MODE: process.env.NODE_ENV, //环境模式
  STORE_LOG_SWITCH: true, //打印VUEX日志 (仅限开发环境有效)  
  PRINT_DEBUG_URL: true, //打印HTTP请求URL (仅限开发环境有效) 
  API_DYNAMIC_SWITCH: true, //开启动态系统API                         
};

export const wx = {
  APP_ID: 'wxdda65f1e9b60136a',
  QR_CODE: require('./common/imgs/qrcode.png'),
  TEST_MEMID: '1501323291630881',
  TEST_OPENID: '012A46EF8DEA4AD19841EE500CB765692243209E5DA86D41B019C5052C5C3741'
};

export default {
  env: env,
  apiBaseUrl: env.API_DYNAMIC_SWITCH ? (env.RELA_URL + "/" + env.API_PREFIX) : env.BASE_URL,
  wx: wx,
  defaultVal: {
    avatar: require('./common/imgs/avatar.png'),
    avatarBg: require('./common/imgs/avatar-bg.jpg'),
    qrcode: wx.QR_CODE
  },
  errorMsg: {
    "AccessPermissionDeny": '服务请求被拒绝，检查是否未登陆！',
    "InvalidSign": '鉴权失败，服务请求被拒绝！',
    "java.lang.IllegalStateException": '服务请求失败，请稍后再试！',
    "RuntimeException": '服务请求失败，请稍后再试！',
    "IllegalStateException": '服务请求失败，请稍后再试！',
    "InvalidService": '服务请求失败，请稍后再试！',
    "NoExporterException": '服务请求失败，请稍后再试！',
  },
}
