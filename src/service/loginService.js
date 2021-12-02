import { getRequest } from "../axios/new-axios"

/**
 * 获取登录用户信息
*/
export const getLoginUserInfo = (params) => {
    console.log("loginService-getLoginUserInfo-requestParams:", params);
    return getRequest('/login/check', params)
}