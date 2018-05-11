<!-- Created by Weiun on 2017/1/17. 页面内容区组件，负责内容区布局-->
<template>
    <div class="centerContent" v-bind:style="{width:(layout.contentWidth-10)+'px'}" v-loading="loading" element-loading-text="……加载中……">
        <el-row>
          <el-col :span="sidebar.leftSpan" v-show="leftOnOff">
            <slot name="left"></slot>
          </el-col>
          <el-col :span="sidebar.centerSpan">
              <el-row type="flex" justify="start" v-show="searchShow">
                <el-col :span="24" v-show="searchShow">
                  <slot name="search"></slot>
                </el-col>
              </el-row><br>
              <el-row type="flex" justify="start" v-show="functionShow">
                <el-col :span="24" v-show="functionShow">
                  <slot name="function"></slot>
                </el-col>
              </el-row><br> 
              <el-row >
                <el-col :span="24" >
                    <slot name="content"></slot>
                    <slot name="bottom"></slot>
                </el-col>
              </el-row>
          </el-col>
          <el-col :span="sidebar.rightSpan" v-show="rightOnOff">
            <slot name="right"></slot>
          </el-col>
        </el-row>
        
    </div>
</template>
<script>
  import{mapGetters} from 'vuex';
  export default {
    data() {
      return {
        sidebar:{
          leftSpan:0,
          centerSpan:24,
          rightSpan:0,
        }
      }
    },
    props:{
      leftOnOff:{
        type: Boolean,
        default: false
      },
      rightOnOff:{
        type: Boolean,
        default: false
      },
      searchShow:{
        type: Boolean,
        default: true
      },
      functionShow:{
        type: Boolean,
        default: true
      },
      loading:false
    },
    computed:{
      ...mapGetters(['layout'])
    },
    mounted(){
      this.init(); // 初始化
    },
    methods:{
      init:function(){
        if(this.leftOnOff){
          this.sidebar.leftSpan = 5;
          this.sidebar.centerSpan = this.sidebar.centerSpan-5;
        }
        if(this.rightOnOff){
          this.sidebar.rightSpan = 5;
          this.sidebar.centerSpan = this.sidebar.centerSpan-5;
        }
      }
    },
    watch:{
      leftOnOff:function(newVal){
        if(newVal){
          this.sidebar.leftSpan = 5;
          this.sidebar.centerSpan = this.sidebar.centerSpan-5;
        }else{
          this.sidebar.leftSpan = 0;
          this.sidebar.centerSpan = this.sidebar.centerSpan+5;
        }
      },
      rightOnOff:function(newVal){
        if(newVal){
          this.sidebar.rightSpan = 5;
          this.sidebar.centerSpan = this.sidebar.centerSpan-5;
        }else{
          this.sidebar.rightSpan = 0;
          this.sidebar.centerSpan = this.sidebar.centerSpan+5;
        }
      }
    }
  }
</script>
<style scoped>
/*@import '../styles/common.css';*/
    .centerContent{
        padding: 5px;
    }
</style>