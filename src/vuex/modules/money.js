import http from '../../libs/httpService'

const state = {
    moneyRecordList: [{
    }],
    moneyQueryParam:{},
    moneyPageParam:{
        page:1,
        pageSize:20,
        total:0
    },
}

// getters
const getters = {
    moneyRecordList: state => state.moneyRecordList,
    moneyQueryParam: state => state.moneyQueryParam,
    moneyPageParam: state => state.moneyPageParam,
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
                commit("setMoneyRecordList",res);
                commit("moneyPageChange",res.result.pageNum);
                commit("moneyPageSizeChange",res.result.pageSize);
                commit("moneyTotalChange",res.result.total);
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        })
    }
}

// mutations
const mutations = {
    setMoneyRecordList(state, res) {
        state.moneyRecordList = res.result.list;
    },
    moneyTotalChange(state, total) {
        state.moneyPageParam.total = total;
    },
    moneyPageChange(state, page) {
        state.moneyPageParam.page = page;
    },
    moneyPageSizeChange(state, pageSize) {
        state.moneyPageParam.pageSize = pageSize;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
