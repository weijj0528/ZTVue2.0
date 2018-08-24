<!-- Created by Weiun on 2017/1/17. 页面内容区组件，负责内容区布局-->
<template>
    <div style="width:100%;height:100%" v-loading="loading" element-loading-text="……加载中……">
        <el-row>
            <el-col :span="sidebar.leftSpan" v-if="leftOnOff">
                <slot name="left"></slot>
            </el-col>
            <el-col :span="sidebar.centerSpan">
                <el-row type="flex" justify="start" v-if="searchShow">
                    <el-col ref="search" :span="24">
                        <slot name="search"></slot>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="start" v-if="functionShow" :style="{marginTop:searchShow?'10px':'0'}">
                    <el-col ref="function" :span="24">
                        <slot name="function"></slot>
                    </el-col>
                </el-row>
                <el-row v-bind:style="{marginTop: (searchShow || functionShow)?'10px':'0'}">
                    <el-col :span="24" v-bind:style="{height:contentHeight+'px'}">
                        <slot name="content"></slot>
                    </el-col>
                </el-row>
                <el-row v-if="bottomShow" style="margin-top:10px">
                    <el-col ref="bottom" :span="24">
                        <slot name="bottom"></slot>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="sidebar.rightSpan" v-if="rightOnOff">
                <slot name="right"></slot>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    data() {
        return {
            sidebar: {
                leftSpan: 0,
                centerSpan: 24,
                rightSpan: 0
            },
            layoutContentHeight: 800,
            searchHeight: 32,
            functionHeight: 32,
            bottomHeight: 42
        };
    },
    props: {
        leftOnOff: {
            type: Boolean,
            default: false
        },
        rightOnOff: {
            type: Boolean,
            default: false
        },
        searchShow: {
            type: Boolean,
            default: true
        },
        functionShow: {
            type: Boolean,
            default: true
        },
        bottomShow: {
            type: Boolean,
            default: true
        },

        loading: false
    },
    computed: {
        ...mapGetters(["layout"]),
        contentHeight() {
            let h = this.layoutContentHeight;
            console.log("-->H:" + h);
            if (this.searchShow) {
                h = h - this.searchHeight;
            }
            if (this.functionShow) {
                h = h - this.functionHeight - 10;
            }
            // 内容marginTop
            if (this.searchShow || this.functionShow) {
                h = h - 10;
            }
            if (this.bottomShow) {
                h = h - this.bottomHeight - 10;
            }
            console.log("-->contentHeight:" + h);
            return h;
        }
    },
    mounted() {
        this.init(); // 初始化
        this.$nextTick(() => {
            this.layoutContentHeight = this.$el.offsetHeight;
            console.log("-->layoutContentHeight:" + this.layoutContentHeight);
            if (this.searchShow) {
                this.searchHeight = this.$refs.search.$el.offsetHeight;
                console.log("-->searchHeight:" + this.searchHeight);
            }
            if (this.functionShow) {
                this.functionHeight = this.$refs.function.$el.offsetHeight;
                console.log("-->functionHeight:" + this.functionHeight);
            }
            if (this.bottomShow) {
                this.bottomHeight = this.$refs.bottom.$el.offsetHeight;
                console.log("-->bottomHeight:" + this.bottomHeight);
            }
        });
    },
    methods: {
        init: function() {
            if (this.leftOnOff) {
                this.sidebar.leftSpan = 5;
                this.sidebar.centerSpan = this.sidebar.centerSpan - 5;
            }
            if (this.rightOnOff) {
                this.sidebar.rightSpan = 5;
                this.sidebar.centerSpan = this.sidebar.centerSpan - 5;
            }
        }
    },
    watch: {
        leftOnOff: function(newVal) {
            if (newVal) {
                this.sidebar.leftSpan = 5;
                this.sidebar.centerSpan = this.sidebar.centerSpan - 5;
            } else {
                this.sidebar.leftSpan = 0;
                this.sidebar.centerSpan = this.sidebar.centerSpan + 5;
            }
        },
        rightOnOff: function(newVal) {
            if (newVal) {
                this.sidebar.rightSpan = 5;
                this.sidebar.centerSpan = this.sidebar.centerSpan - 5;
            } else {
                this.sidebar.rightSpan = 0;
                this.sidebar.centerSpan = this.sidebar.centerSpan + 5;
            }
        }
    }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>