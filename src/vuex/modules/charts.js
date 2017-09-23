import http from '../../libs/httpService'

const state = {
}

// getters
const getters = {

}

// actions
const actions = {
    queryUserAddStatistics({commit, state}, param) {
        let body = {
            module:'statisticsService',
            method:'queryEverydayUserAdd',
            param:param
        };
        let url = http.urlCommon + http.apiUrl.most;
        return new Promise((resolve, reject) => {
            http.commonPost(url, body).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        })
    },
    queryUserSmsStatistics({commit, state}, param) {
        let body = {
            module:'statisticsService',
            method:'queryEverydayUserSms',
            param:param
        };
        let url = http.urlCommon + http.apiUrl.most;
        return new Promise((resolve, reject) => {
            http.commonPost(url, body).then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        })
    },
}

// mutations
const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}
