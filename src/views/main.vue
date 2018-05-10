<!-- 主页面 -->
<template>
    <div>
        <el-row>
            <el-col :span="24" class='top_calss' v-bind:style="{ height: layout.topHeight + 'px'}">
                <top></top>
            </el-col>
        </el-row>
        <el-row>
            <el-col :lg='3' :md="4" :sm="5" :xs='6' v-bind:style="{ height: layout.contentHeight + 'px' }">
                <left v-bind:style="{ height: layout.contentHeight + 'px'}" :menus='menus' @menu-select='menuSelect'></left>
            </el-col>
            <el-col :lg='21' :md="20" :sm="19" :xs='18'>
                <tab-nav class="nav" :tabs='tabs'></tab-nav>
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Top from './main/top.vue'
import Left from './main/left.vue'
import TabNav from './main/nav.vue'
import Bottom from './main/bottom.vue'
import util from '../libs/util'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['activeName','menus', 'tabs', 'layout']),
    },
    components: {
        top: Top,
        left: Left,
        tabNav: TabNav,
        bottom: Bottom,
    },
    mounted() {
        this.resize();
        this.initLayout();
        this.initRouter();
    },
    methods: {
        ...mapActions(['comTabsAdd']),
        ...mapMutations(['windowsHeightChange', 'windowsWidthChange','activeNameSet']),
        menuSelect: function(menu) {
            // 存在则激活，否则添加
            let b = false;
            for (let i = 0; i < this.tabs.length; i++) {
                let tab = this.tabs[i];
                if (tab.id === menu.id) {
                    b = true;
                    break;
                }
            }
            if (!b) {
                this.comTabsAdd(menu);
            }
            this.activeNameSet(menu.id);
            this.navRouter(menu.id);
            console.log(this.tabs);
        },
        navRouter: function(id) {
            console.log('navRouter:' + id);
            let _self = this;
            let tab = _self.tabs[0];
            for (let i = 0; i < _self.tabs.length; i++) {
                tab = _self.tabs[i];
                if (tab.id == id) {
                    break;
                }
            }
            console.log('navRouter:' + tab.path);
            this.$router.push(tab.path);
        },
        initRouter: function() {
            let u = window.location.hash;
            u = u.substring(1);
            if (u != '/main/home') {
                for (let i = 0; i < this.menus.length; i++) {
                    let subMenus = this.menus[i].subMenus;
                    for (let j = 0; j < subMenus.length; j++) {
                        if (subMenus[j].path == u) {
                            console.log(subMenus[j]);
                            this.comTabsAdd(subMenus[j]);
                            let active_id = subMenus[j].id;
                            this.activeNameSet(active_id);
                            return;
                        }
                    }
                }
            } else {
                this.navRouter(0);
            }
        },
        initLayout: function() {
            let _self = this;
            window.onresize = function() {
                _self.resize();
            }
        },
        resize: function() {
            // 浏览器宽高发生变化时
            let _self = this;
            var bodyWidth = document.body.clientWidth;
            var bodyHeight = document.documentElement.clientHeight;
            _self.windowsWidthChange(bodyWidth);
            _self.windowsHeightChange(bodyHeight);
        }
    }
}
</script>
<style scoped lang="less">
.top_calss {
    background: #495060;
    border-bottom: 1px solid #dddee1;
}
</style>
