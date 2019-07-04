
import { CoreRequest } from './fetch'

//登陆
export function login(options) {
  options['url']='/api/user/login'
  options['method']='post'
  CoreRequest(options)
}


//用户信息查询
export function manageadd_query(options) {
  options['url']='/api/public/manageadd_query'
  options['method']='get'
  CoreRequest(options)
}
