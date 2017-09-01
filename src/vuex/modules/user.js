import http from '../../libs/httpService'

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
    userLogin({commit, state}, param) {
        let body = {
            phone: param.userName,
            password: http.getBase64(param.password)
        };
        return new Promise((resolve, reject) => {
            let url = http.urlCommon + http.apiUrl.login;
            http.commonPost(url, {param: body}).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
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
