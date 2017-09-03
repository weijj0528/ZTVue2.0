<!-- Created by Weiun on 2017/1/17. 页面内容区组件，负责内容区布局-->
<template>
    <div class="centerContent" >
        <Row>
          <Col :span="sidebar.leftSpan" v-show="leftOnOff">
            <slot name="left"></slot>
          </Col>
          <Col :span="sidebar.centerSpan">
              <Row type="flex" justify="start" v-show="searchShow">
                <Col span="24" v-show="searchShow">
                  <slot name="search"></slot>
                </Col>
              </Row><br>
              <Row type="flex" justify="start" v-show="functionShow">
                <Col span="24" v-show="functionShow">
                  <slot name="function"></slot>
                </Col>
              </Row><br> 
              <Row v-bind:style = "{height:(layout.contentHeight-210)+'px'}">
                <Col span="24" >
                    <slot name="content"></slot>
                    <Spin size="large" fix v-if="loading" v-bind:style = "{height:(layout.contentHeight-210)+'px'}"></Spin>
                </Col>
              </Row>
              <Row>
                <Col span="24" style="height: 30px;margin-top: 5px" >
                    <slot name="bottom"></slot>
                </Col>
              </Row>
          </Col>
          <Col :span="sidebar.rightSpan" v-show="rightOnOff">
            <slot name="right"></slot>
          </Col>
        </Row>
        
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
        margin: 5px;
        height: 100%;
    }
</style>