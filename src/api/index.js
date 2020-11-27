import {post} from './http'

// 登录接口
export const getLoginStatus = (params) => post(`admin/login/status`, params)