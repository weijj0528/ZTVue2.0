<!-- Created by Weiun on 2017/1/17. 页面内容区组件，负责内容区布局-->
<template>
  <div class="centerContent" v-bind:style="{width:(layout.contentWidth-10)+'px'}" v-loading="loading" element-loading-text="……加载中……">
    <el-row>
      <el-col :span="sidebar.leftSpan" v-if="leftOnOff">
        <slot name="left"></slot>
      </el-col>
      <el-col :span="sidebar.centerSpan">
        <el-row type="flex" justify="start" v-if="searchShow">
          <el-col :span="24">
            <slot name="search"></slot>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" v-if="functionShow" style="margin-top:10px">
          <el-col :span="24">
            <slot name="function"></slot>
          </el-col>
        </el-row>
        <el-row v-bind:style="{marginTop:'10px',height:contentHeight+'px'}">
          <el-col :span="24">
            <slot name="content"></slot>
          </el-col>
        </el-row>
        <el-row v-if="bottomShow" style="margin-top:10px">
          <el-col :span="24">
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
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            sidebar: {
                leftSpan: 0,
                centerSpan: 24,
                rightSpan: 0
            }
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
        searchHeight: {
            type: Number,
            default: 32
        },
        functionHeight: {
            type: Number,
            default: 32
        },
        bottomHeight: {
            type: Number,
            default: 42
        },
        loading: false
    },
    computed: {
        ...mapGetters(["layout"]),
        contentHeight() {
            // Tabs导航高56
            let h = this.layout.contentHeight - 56;
            if (this.searchShow) {
                h = h - this.searchHeight - 10;
            }
            if (this.functionShow) {
                h = h - this.functionHeight - 10;
            }
            if (this.bottomShow) {
                h = h - this.bottomHeight - 10;
            }
            return h;
        }
    },
    mounted() {
        this.init(); // 初始化
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
.centerContent {
    padding: 5px;
}
</style>