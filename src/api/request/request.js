
import { CoreRequest } from './fetch'

//获取菜单
export function get_menu(options) {
  options['url']='/api/public/get_menu'
  options['method']='get'
  CoreRequest(options)
}
