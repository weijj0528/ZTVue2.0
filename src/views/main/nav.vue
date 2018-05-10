<!-- Created by Weiun on 2017/1/17.-->
<!-- 导航组件，选项卡组件 -->
<template>
    <el-row>
        <el-col :xs="18" :sm="20" :md="21" :lg="22" :xl="23">
            <el-tabs :value='activeName' type="card" closable @tab-remove="handleRemove" @tab-click="handleClick">
            <el-tab-pane
                :key="tab.id"
                v-for='tab in tabs'
                :closable="tab.id != 0"
                :label="tab.name"
                :name="tab.id">
            </el-tab-pane>
            </el-tabs>
        </el-col>
        <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1"  style="text-align:center;">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link" >
                    <i class="el-icon-menu el-icon--center" style="font-size:30px"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="returnHome">返回首页</el-dropdown-item>
                    <el-dropdown-item command="closeAll">关闭全部</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
    
</template>
<script>
    import {mapActions, mapGetters, mapMutations } from 'vuex'
    export default {
        data() {
            return {
               activeTab:'0' 
            }
        },
        computed: {
            ...mapGetters(['activeName','tabs', 'layout']),
        },
        mounted: function () {
            this.$nextTick(function () {
                // 代码保证 this.$el 在 document 中
                //                oc
            })
        },
        beforeDestroy() {

        },
        methods: {
            ...mapActions(['comTabsRemove','comTabsSet']),
            ...mapMutations(["activeNameSet"]),
            handleClick: function (nav) {
                // tab 点击 返回当前tab
                console.log('当前打开页面标签：' + nav.name)
                for (let i = 0; i < this.tabs.length; i++) {
                    let tab = this.tabs[i];
                    if (tab.id == nav.name) {
                        console.log("Tab打开" + tab.path);
                        this.activeNameSet(tab.id);
                        this.$router.push(tab.path);
                        break;
                    }
                }
            },
            handleRemove: function (name) {
                // tab 移除 返回移除tab
                console.log(this.tabs);
                let index = -1;
                for (let i = 0; i < this.tabs.length; i++) {
                    let tab = this.tabs[i];
                    if (tab.id === name) {
                        console.log(tab);
                        this.comTabsRemove(tab.id);
                        console.log(this.tabs);
                        let l = this.tabs.length - 1 ;
                        this.$router.push(this.tabs[l].path);
                        break;
                    }
                }
            },
            handleCommand(key){
                switch(key){
                    case 'returnHome':
                        console.log("-----------returnHome-----------------");
                        this.handleClick({name:'0'})
                        break;
                    case "closeAll":
                        let tabs = [{
                            'id': '0',
                            'path': '/main/home',
                            'name': '主页'
                        }]
                        this.comTabsSet(tabs);
                        this.$router.push(tabs[0].path);
                        break;
                        default:
                }
            }
        }
    }
</script>
<style scoped>
    /*@import '../styles/common.css';*/
</style>
