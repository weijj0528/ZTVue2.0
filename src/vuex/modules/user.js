import http from '../../libs/httpService'

const state = {
    user: {
        name: "", no: ""
    },
    userList: [{
        name:'示例数据',
        address:'示例地址数据',
    }],
}

// getters
const getters = {
    user: state => state.user,
    userList: state => state.userList
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
    userQueryList({commit, state}, param){
        let body = {
            module:'userService',
            method:'queryUserList',
            param:param
        };
        let url = http.urlCommon + http.apiUrl.most;
        return new Promise((resolve, reject) => {
            http.commonPost(url, body).then((res) => {
                commit("setUserList",res);
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
    setUserList(state, res) {
        state.userList = res.result.list;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
