import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';
export default class Axios {
    // 链式调用jsonp封装
    static jsonp (options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url,{
                param: 'callback'
            },function(err, response){
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options){
        let loading;
        if (options.data && options.data.isShowLoading !== false) {
            loading = document.getElementById('ajaxLoading')
            loading.style.display = 'block'
        }
        const baseURL = 'https://www.easy-mock.com/mock/5caffee40ee3ff114ba3e62b/yxjapi'
        return new Promise((resolve,reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseURL,
                timeout: 7000,
                params: (options.data.params && options.data) || ''
            }).then((response) => {
                if (options.data && options.data.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display = 'none'
                }
                if (response.status == '200') {// http请求自带status
                    let res = response.data
                    if (res.code == '0') { // 项目服务器后台接口业务层面的判断
                        resolve(res)
                    }else {
                        Modal.info({
                            title: '提示',
                            content: res.data.messsage
                        })
                    }
                }else {
                    reject(response.data)
                }
            })
        })
    }
}