import http from '../../libs/httpService'

const state = {
    // 布局
    layout: {
        topHeight: 80,
        contentHeight: 600,
        menuWidth: 240,
        contentWidth: 800,
    },
    // 菜单
    menus: [
        {
            'id': '1',
            'name': '用户管理',
            'subMenus': [{
                'id': '11',
                'path': '/main/userList',
                'name': '用户列表'
            },
            {
                'id': '12',
                'path': '/main/moneyRecordList',
                'name': '充值记录'
            },]
        },
        {
            'id': '2',
            'name': '短信管理',
            'subMenus': [{
                'id': '21',
                'path': '/main/smsSessionList',
                'name': '会话记录'
            },]
        },
        {
            'id': '3',
            'name': '活动管理',
            'subMenus': [{
                'id': '31',
                'path': '/main/activityList',
                'name': '活动列表'
            },]
        },
    ],
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
    tabs: state => state.tabs,
    layout: state => state.layout,
}

// actions
const actions = {
    comTabsAdd({ commit, state }, tab) {
        commit("comTabsAdd", tab);
    },
    comTabsRemove({ commit, state }, id) {
        commit("comTabsRemove", id);
    }
}

// mutations
const mutations = {
    windowsHeightChange(state, bodyHeigh) {
        console.log('windowsHeightChange:' + bodyHeigh);
        state.layout.contentHeight = bodyHeigh - state.layout.topHeight;
    },
    windowsWidthChange(state, bodyWidth) {
        console.log('windowsWidthChange' + bodyWidth);
        state.layout.contentWidth = bodyWidth - state.layout.menuWidth - 3;
    },
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
