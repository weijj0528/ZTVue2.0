import http from '../../libs/httpService'
import CryptoJS from "crypto-js"

const state = {
    user: {
        name: "", idnumber: ""
    },

}

// getters
const getters = {
    user: state => state.user,
}

// actions
const actions = {
    login({commit, state}, param) {
        let b = CryptoJS.enc.Base64.stringify("123456");
        console.log(b);
        return new Promise((resolve, reject) => {
            let url = http.urlCommon + http.apiUrl.login;
            console.log(param.password);
            http.commonPost(url, {param: param}).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        })
    },
    getUserInfor({commit, state}, param) {
        return new Promise((resolve, reject) => {
            http.commonPost(param.path, param.body)
                .then(function (response) {
                    commit('setUserInfo', response);
                    resolve(response);
                })
                .catch(function (error) {
                    reject(error);
                });
        })
    }
}

// mutations
const mutations = {
    setUserInfo(state, res) {
        state.user = res.biz_result;
        console.log(state.user);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
