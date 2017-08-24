import httpService from '../../common/httpService'


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
    return new Promise((resolve, reject) => {
      httpService.commonPost(param.path, param.body)
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error);
        });
    })
  },
  getUserInfor({commit, state}, param) {
    return new Promise((resolve, reject) => {
      httpService.commonPost(param.path, param.body)
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
  setUserInfo(state, res){
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
