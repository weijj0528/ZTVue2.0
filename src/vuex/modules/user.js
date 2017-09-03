import http from '../../libs/httpService'

const state = {
    user: {
        name: "", no: ""
    },
    userList: [{
        name:'示例数据',
        address:'示例地址数据',
    }],
    userQueryParam:{},
    userPageParam:{
        page:1,
        pageSize:20,
        total:0
    },
}

// getters
const getters = {
    user: state => state.user,
    userList: state => state.userList,
    userQueryParam: state => state.userQueryParam,
    userPageParam: state => state.userPageParam,
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
                commit("pageChange",res.result.pageNum);
                commit("pageSizeChange",res.result.pageSize);
                commit("totalChange",res.result.total);
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
    },
    totalChange(state, total) {
        state.userPageParam.total = total;
    },
    pageChange(state, page) {
        state.userPageParam.page = page;
    },
    pageSizeChange(state, pageSize) {
        state.userPageParam.pageSize = pageSize;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
