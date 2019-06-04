
import { CoreRequest } from './fetch'

//登陆
export function login(options) {
  options['url']='/api/user/login'
  options['method']='post'
  CoreRequest(options)
}
