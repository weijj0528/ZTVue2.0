<!-- -->
<template>
    <div>
        <Row>
            <Col span="24" class = 'top_calss' v-bind:style="{ height: layout.topHeight + 'px'}" >
                <top></top>
            </Col>
        </Row>
        <Row>
            <Col  :lg='3' :md="4" :sm="5" :xs='6' v-bind:style="{ height: layout.contentHeight + 'px' }">
                <left v-bind:style="{ height: layout.contentHeight + 'px'}" :menus='menus' @menu-select='menuSelect'></left> 
            </Col>
            <Col :lg='21' :md="20" :sm="19" :xs='18'>
                <tab-nav class="nav" :tabs='tabs' :active-tab='active_tab' @nav-router="navRouter" @nav-click="navClick" @nav-close='navClose'></tab-nav>
                <router-view></router-view>
            </Col>
        </Row>
    </div>
</template>
<script>
    import Top from './top.vue'
    import Left from './left.vue'
    import TabNav from './nav.vue'
    import Bottom from './bottom.vue'
    import util from '../libs/util'
    import {mapActions,mapGetters,mapMutations} from 'vuex'
    export default {
        data() {
            return {
                active_tab: '0',
            }
        },
        computed: {
            ...mapGetters(['menus','tabs','layout']),
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
            this.navRouter(0);
        },
        methods: {
            ...mapActions(['comTabsAdd','comTabsRemove']),
            ...mapMutations(['windowsHeightChange','windowsWidthChange']),
            menuSelect: function (menu) {
                // 存在则激活，否则添加
                let b = false;
                for (let i = 0; i < this.tabs.length; i++) {
                    let tab = this.tabs[i];
                    if (tab.id === menu.id) {
                        b = true;
                        break;
                    }
                }
                if (b) {
                    if (this.active_tab != menu.id)
                        this.active_tab = menu.id;
                } else {
                    this.comTabsAdd(menu);
                    this.active_tab = menu.id;
                }
                console.log(this.tabs);
            },
            navRouter: function (id) {
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
            navClick: function (tab) {
                console.log('navClick:' + tab.id);
                this.active_tab = tab.id;
            },
            navClose: function (tab,i) {
                console.log('navClose:' + tab.id);
                this.active_tab = this.tabs[i-1].id;
                this.comTabsRemove(tab.id);
            },
            initLayout: function () {
                let _self = this;
                window.onresize = function(){
                    _self.resize();
                }
            },
            resize: function () {
                // 浏览器宽高发生变化时
                let _self = this;
                var bodyWidth = document.body.clientWidth;
                var bodyHeight = document.documentElement.clientHeight;
                _self.windowsWidthChange(bodyWidth);
                _self.windowsHeightChange(bodyHeight);
            }
        },
        watch:{
            active_tab:function(newId){
                this.navRouter(newId);
            }
        }
    }
</script>
<style scoped lang="less">
    .top_calss {
        background: #80848f;
        border-bottom:1px solid #dddee1;
    }

   
</style>
