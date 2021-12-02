import axios from 'axios'
import { getStore } from '../storage/storage';

//创建axios实例
const axiosSpring = axios.create({
    baseURL: 'http://localhost:8081', //基础URL
    timeout: 6000 //请求超时时间(毫秒ms)
})

// 错误处理函数
const err = (error) => {
    if(error.response){
        const data = error.response.data

        if(error.response.status === 403){
            Notify({ type: 'danger', message: data.message||data.msg });
        }
        if (error.response.status === 401) {
            Notify({ type: 'danger', message: '你没有权限。' });
        }
    }
    return Promise.reject(error)
}

// get
export const getRequest = (url, params) => {
    const accessToken = getStore('accessToken')
    return axios({
        method: 'get',
        url: `${url}`,
        params: params,
        headers: {
            'accessToken': accessToken
        }
    })
} 

// post
export const postRequest = (url, params) => {
    const accessToken = getStore('accessToken')
    return axios({
        method: 'post',
        url: `${url}`,
        params: params,
        headers: {
            'Content-Type': 'application/json', 
            'accessToken': accessToken
        }
    })
}

// put
export const putRequest = (url, params) => {
    const accessToken = getStore('accessToken')
    return axios({
        method: 'put',
        url: `${url}`,
        data: params,
        transformRequest: [function(){
            let ret = '';
            for(const it in data){
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/json', 
            'accessToken': accessToken           
        }
    })
}

// delete
export const deleteRequest = (url, params) => {
    const accessToken = getStore('accessToken')
    return axios({
        method: 'delete',
        url: `${url}`,
        data: params,
        headers: {
            'accessToken': accessToken
        }
    })
}

export default {
    axiosSpring
}