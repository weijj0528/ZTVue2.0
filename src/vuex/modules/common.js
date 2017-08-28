import httpService from '../../libs/httpService'

const state = {
    // 菜单
    menus: [{
        'id': '1',
        'name': '用户管理',
        'subMenus': [{
            'id': '11',
            'name': '用户列表'
        }, {
            'id': '12',
            'name': '充值记录'
        }, {
            'id': '13',
            'name': '分享记录'
        }, {
            'id': '14',
            'name': '免费赠送记录'
        }]
    }, {
        'id': '2',
        'name': '短信管理',
        'subMenus': [{
            'id': '21',
            'name': '会话记录'
        }, {
            'id': '22',
            'name': '短信记录'
        }]
    }],
    // 当前活动菜单
    activeMenuName: '',
    // 导航栏
    tabs: [{
        'id': '0',
        'name': '主页'
    }]
}

// getters
const getters = {
    // scrollTop: state => state.scrollTop,
    menus: state => state.menus,
    tabs: state => state.tabs
}

// actions
const actions = {
    setScrollTop({commit, state}, param) {
        return new Promise((resolve, reject) => {
            commit('setScrollTop', param);
            resolve();
        })
    },
    tabsAdd({commit, state}, tab) {
        commit("tabsAdd", tab);
    },
    tabsRemove({commit, state}, id) {
        commit("tabsRemove", id);
    }
}

// mutations
const mutations = {
    tabsAdd(state, tab) {
        console.log('mutations-tabsAdd:' + tab);
        state.tabs.push(tab);
    },
    tabsRemove(state, id) {
        console.log('mutations-tabsRemove:' + id);
        for (let i = 0; i < state.tabs.length; i++) {
            let tab = state.tabs[i];
            if (tab.id === id) {
                state.tabs.splice(i, 1);
                break;
            }
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
