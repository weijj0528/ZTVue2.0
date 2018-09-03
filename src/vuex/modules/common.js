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
    menus: [{
        'id': '1',
        'name': '用户管理',
        'icon': 'iconfont icon-yonghu-xianxing',
        'subMenus': [{
            'id': '11',
            'icon': 'iconfont icon-jiaosequnti',
            'path': '/user/userListPage',
            'name': '用户列表'
        }, {
            'id': '12',
            'icon': 'iconfont icon-jiaosequnti',
            'path': '/user/userListPage',
            'name': '全部用户'
        },]
    },
    {
        'id': '100',
        'name': '组件示例',
        'subMenus': [{
            'id': '101',
            'path': '/demo/imageView',
            'name': '图片预览'
        }, {
            'id': '102',
            'path': '/demo/echartsView',
            'name': '统计图表'
        }, {
            'id': '103',
            'path': '/demo/tinymce',
            'name': '富文本编辑'
        },]
    },
    ],
    // 当前活动菜单
    activeName: '0',
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
    activeName: state => state.activeName,
}

// actions
const actions = {
    comTabsAdd({
        commit,
        state
    }, tab) {
        commit("comTabsAdd", tab);
    },
    comTabsRemove({
        commit,
        state
    }, id) {
        commit("comTabsRemove", id);
    },
    comTabsSet({
        commit,
        state
    }, tabs) {
        commit("comTabsSet", tabs);
    },
    openMenu({
        commit,
        state
    }, menu) {
        //打开菜单
        // 存在则激活，否则添加
        let b = false;
        for (let i = 0; i < state.tabs.length; i++) {
            let tab = state.tabs[i];
            if (tab.id === menu.id) {
                b = true;
                break;
            }
        }
        if (!b) {
            // 添加
            commit("comTabsAdd", menu);
        }
        commit("activeNameSet", menu.id);
    },
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
    },
    comTabsSet(state, tabs) {
        console.log('mutations-comTabsSet:' + tabs);
        state.tabs = tabs;
    },
    activeNameSet(state, id) {
        console.log('mutations-activeNameSet:' + id);
        state.activeName = id;
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}