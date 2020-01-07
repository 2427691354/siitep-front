import axios from 'axios'
import Router from '../router'

axios.defaults.baseURL = "/api";
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;

// 获取所有线路信息
export const findLineByExample = (params) => {
   return axios({
        method: 'get',
        url: 'line/findByExample',
        params: params
    })
}

// 获取所有线路信息-Json
export const findLineByLine = (params) => {
   return axios({
        method: 'post',
        url: 'line/findByLine',
        headers:{'Content-Type':'application/json'},
        data: JSON.stringify(params)
    })
}
