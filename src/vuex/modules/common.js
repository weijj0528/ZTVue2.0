import http from '../../libs/httpService'

const state = {
    // 菜单
    menus: [{
        'id': '1',
        'name': '用户管理',
        'subMenus': [{
            'id': '11',
            'path': '/main/userList',
            'name': '用户列表'
        }, {
            'id': '12',
            'path': '/main/moneyRecordList',
            'name': '充值记录'
        }, {
            'id': '13',
            'path': '/main/shareRecordList',
            'name': '分享记录'
        }, {
            'id': '14',
            'path': '/main/freeSmsList',
            'name': '免费赠送记录'
        }]
    }, {
        'id': '2',
        'name': '短信管理',
        'subMenus': [{
            'id': '21',
            'path': '/main/smsSessionList',
            'name': '会话记录'
        }, {
            'id': '22',
            'path': '/main/smsRecordList',
            'name': '短信记录'
        }]
    }],
    // 当前活动菜单
    activeMenuName: '',
    // 导航栏
    tabs: [{
        'id': '0',
        'path': '/main/home',
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
    comTabsAdd({commit, state}, tab) {
        commit("comTabsAdd", tab);
    },
    comTabsRemove({commit, state}, id) {
        commit("comTabsRemove", id);
    }
}

// mutations
const mutations = {
    comTabsAdd(state, tab) {
        console.log('mutations-tabsAdd:' + tab);
        state.tabs.push(tab);
    },
    comTabsRemove(state, id) {
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
