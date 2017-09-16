import http from '../../libs/httpService'

const state = {
    result: {
        page:1,
        pageSize:15,
        total:0,
        list:[]
    },
    sessionQueryParam:{},
}

// getters
const getters = {
    sessionResult: state => state.result,
    sessionQueryParam: state => state.sessionQueryParam,
}

// actions
const actions = {
    sessionQueryList({commit, state}, param){
        let body = {
            module:'smsService',
            method:'ztQuerySmsSession',
            param:param
        };
        let url = http.urlCommon + http.apiUrl.most;
        return new Promise((resolve, reject) => {
            http.commonPost(url, body).then((res) => {
                commit("setSessionResult",res);
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        })
    }
}

// mutations
const mutations = {
    setSessionResult(state, res) {
        state.result = res.result;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
