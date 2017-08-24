import httpService from '../../common/httpService'

const state = {
  scrollTop: 0,
}

// getters
const getters = {
  // scrollTop: state => state.scrollTop,

}

// actions
const actions = {
  setScrollTop({commit, state}, param) {
    return new Promise((resolve, reject) => {
      commit('setScrollTop', param);
      resolve();
    })
  }
}

// mutations
const mutations = {
  setScrollTop(state, res){
    state.scrollTop = res;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
