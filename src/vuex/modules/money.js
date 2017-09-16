import http from '../../libs/httpService'

const state = {
    result: {
        page:1,
        pageSize:20,
        total:0,
        list:[]
    },
    moneyQueryParam:{},
}

// getters
const getters = {
    moneyResult: state => state.result,
    moneyQueryParam: state => state.moneyQueryParam,
}

// actions
const actions = {
    moneyQueryList({commit, state}, param){
        let body = {
            module:'moneyService',
            method:'ztQueryMoneyRecord',
            param:param
        };
        let url = http.urlCommon + http.apiUrl.most;
        return new Promise((resolve, reject) => {
            http.commonPost(url, body).then((res) => {
                commit("setMoneyResult",res);
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        })
    }
}

// mutations
const mutations = {
    setMoneyResult(state, res) {
        state.result = res.result;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
