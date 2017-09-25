import http from '../../libs/httpService'

const state = {
    result: {
        page: 1,
        pageSize: 20,
        total: 0,
        list: []
    },
    moneyQueryParam: {},
}

// getters
const getters = {
    activityResult: state => state.result,
    activityQueryParam: state => state.moneyQueryParam,
}

// actions
const actions = {
    activityQueryList({commit, state}, param){
        let body = {
            module:'activityService',
            method:'queryActivity',
            param:param
        };
        let url = http.urlCommon + http.apiUrl.most;
        return new Promise((resolve, reject) => {
            http.commonPost(url, body).then((res) => {
                commit("setActivityResult",res);
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        })
    },
    
}

// mutations
const mutations = {
    setActivityResult(state, res) {
        state.result = res.result;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
