<!--Created by Weiun on 2017/1/17.-->
<template>
    <el-row type="flex" justify="space-between" align="middle">
        <el-col :lg='3' :md="4" :sm="5" :xs='6' style="text-align:center;">
            <p class="userName">XXXXXXXXX系统1.0</p>
        </el-col>
        <el-col :lg='21' :md="20" :sm="19" :xs='18'>
            <el-row type="flex" justify="space-between" align="middle">
                <el-col :xs="8" :sm="6" :md="5" :lg="3" :xl="2">
                    <iframe allowtransparency="true" frameborder="0" width="180" height="36" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=3&z=2&t=0&v=0&d=1&bd=0&k=000000&f=000000&ltf=009944&htf=cc0000&q=0&e=1&a=1&c=54511&w=180&h=36&align=left"></iframe>
                </el-col>
                <el-col :span="8" >
                    <el-button v-for="item in topMenus" :key='item.id' :icon="item.icon" @click="topMenuSelect(item)" type="text" size="large">{{item.name}}</el-button>
                </el-col>
                <el-col :span="1" >
                    <i class="el-icon-bell"  size="large"></i>
                </el-col>
                <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1">
                    <el-dropdown trigger="click" @command="handleCommand">
                        <span class="el-dropdown-link">
                            <img class="image" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2359550423,1794059142&fm=27&gp=0.jpg" />
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
                            <el-dropdown-item command="userUpdatePwd">修改密码</el-dropdown-item>
                            <el-dropdown-item command="logout" divided>系统退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col> 
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      topMenus: [
        {
          id: "api",
          name: "API文档",
          icon: "el-icon-tickets",
          url: "http://lovejiayuan.cn:8080/api"
        },
        {
          id: "service",
          name: "SOA服务治理",
          icon: "el-icon-refresh",
          url: "http://lovejiayuan.cn:8080/dubbo"
        },
        {
          id: "job",
          name: "Job调度中心",
          icon: "el-icon-time",
          url: "http://114.67.135.132:8080/xxljob"
        },
        {
          id: "maven",
          name: "Maven私库",
          icon: "el-icon-menu",
          url: "http://lovejiayuan.cn:8081"
        }
      ]
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      // 代码保证 this. 在 document 中
    });
  },
  beforeDestroy() {},
  methods: {
    ...mapActions(["userLogout", "comTabsAdd","openMenu"]),
    logout: function() {
      let _self = this;
      this.userLogout().then(
        resp => {
          _self.$router.push("/login");
        },
        err => {
          _self.$router.push("/login");
        }
      );
    },
    topMenuSelect: function(menu) {
      console.log(menu);
      if (menu.url.indexOf("http") == 0) {
        // 打开新窗口
        window.open(menu.url);
      } else {
        this.$router.push(menu.url);
      }
    },
    handleCommand(key) {
      switch (key) {
        case "logout":
          console.log("-----------logout-----------------");
          this.logout();
          break;
        case "userInfo":
          console.log("-----------userInfo-----------------");
          let userInfo = {
            id: "userInfo",
            path: "/main/userInfo",
            name: "个人信息"
          };
          this.openMenu(userInfo);
          this.$router.push(userInfo.path);
          break;
        case "userUpdatePwd":
          console.log("-----------updatePwd-----------------");
          let updatePwd = {
            id: "userUpdatePwd",
            path: "/main/userUpdatePwd",
            name: "密码修改"
          };
          this.openMenu(updatePwd);
          this.$router.push(updatePwd.path);
          break;
        default:
      }
    }
  }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/

.userName {
  color: #fff;
}

.image {
  width: 50px;
  height: 50px;
  margin-top: 15px;
  border-radius: 25px;
}
</style>