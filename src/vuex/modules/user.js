import http from '../../libs/httpService'

const state = {
    user: {
        name: "", no: ""
    },
    userResult:{
        page:1,
        pageSize:15,
        total:0,
        list:[]
    },
    userQueryParam:{},
}

// getters
const getters = {
    user: state => state.user,
    userResult: state => state.userResult,
    userQueryParam: state => state.userQueryParam,
}

// actions
const actions = {
    userLogin({commit, state}, param) {
        let body = {
            no: param.userName,
            password: http.getBase64(param.password)
        };
        let url = http.urlCommon + http.apiUrl.login;
        return new Promise((resolve, reject) => {
            http.commonPost(url, {param: body}).then((res) => {
                window.localStorage.KEY = res.result.KEY;
                window.localStorage.SID = res.result.SID;
                commit("setUserInfo",res);
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        })
    },
    userLogout({commit, state}, param) {
        let resp = {
            result:{
                info:{name: "", no: ""}
            }
        };
        let url = http.urlCommon + http.apiUrl.logout;
        return new Promise((resolve, reject) => {
            http.commonPost(url, {param: {}}).then((res) => {
                window.localStorage.KEY = "";
                window.localStorage.SID = "";
                commit("setUserInfo",resp);
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        })
    },
    userQueryList({commit, state}, param){
        let body = {
            module:'userService',
            method:'queryUserList',
            param:param
        };
        let url = http.urlCommon + http.apiUrl.most;
        return new Promise((resolve, reject) => {
            http.commonPost(url, body).then((res) => {
                commit("setUserResult",res);
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
        state.user = res.result.info;
        console.log(state.user);
    },
    setUserResult(state, res) {
        state.userResult = res.result;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
