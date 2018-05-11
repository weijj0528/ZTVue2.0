<!--Created by Weiun on 2017/1/17.-->
<template>
    <el-row type="flex" justify="space-between" align="middle">
        <el-col :lg='3' :md="4" :sm="5" :xs='6' style="text-align:center;">
            <p class="userName">XXXXXXXXX系统1.0</p>
        </el-col>
        <el-col :lg='15' :md="12" :sm="9" :xs='6'>
            <el-row type="flex" justify="start" align="middle">
                <el-col :xs="16" :sm="12" :md="10" :lg="6" :xl="4">
                    <iframe allowtransparency="true" frameborder="0" width="180" height="36" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=3&z=2&t=0&v=0&d=1&bd=0&k=000000&f=000000&ltf=009944&htf=cc0000&q=0&e=1&a=1&c=54511&w=180&h=36&align=left"></iframe>
                </el-col>
                <el-col :span="8" >
                    <el-button v-for="item in topMenus" :key='item.id' :icon="item.icon" @click="topMenuSelect(item)" type="text" size="large">{{item.name}}</el-button>
                </el-col>
            </el-row>
        </el-col>
        <el-col :lg='6' :md="8" :sm="10" :xs='12' style="text-align:center;">
            <el-row type="flex" justify="end" align="middle">
                <el-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2" >
                  <el-badge :value="0">
                    <i class="el-icon-menu" style="font-size:24px;color:#fff"></i>
                  </el-badge>
                </el-col>
                <el-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2" >
                  <el-badge :value="0">
                    <i class="el-icon-date" href="" @click="fullcalendar" style="font-size:24px;color:#fff"></i>
                  </el-badge>
                </el-col>
                <el-col :xs="10" :sm="8" :md="6" :lg="4" :xl="2" >
                  <el-badge :value="12">
                    <i class="el-icon-message" href="" @click="message" style="font-size:24px;color:#fff"></i>
                  </el-badge>
                </el-col>
                <el-col :xs="16" :sm="12" :md="10" :lg="8" :xl="5" style="text-align:center;">
                    <el-dropdown trigger="click" @command="handleCommand">
                        <img class="el-dropdown-link image" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2359550423,1794059142&fm=27&gp=0.jpg" />
                        <br><span class="userName">系统管理员</span>
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
          id: "logistics",
          name: "物流快递查询",
          icon: "el-icon-search",
          path: "/main/logistics"
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
    ...mapActions(["userLogout", "comTabsAdd", "openMenu"]),
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
      if (menu.path.indexOf("http") == 0) {
        // 打开新窗口
        window.open(menu.path);
      } else {
        this.openMenu(menu);
        this.$router.push(menu.path);
      }
    },
    message() {
      let message = {
        id: "message",
        path: "/main/message",
        name: "消息中心"
      };
      this.openMenu(message);
      this.$router.push(message.path);
    },
    fullcalendar() {
      let fullcalendar = {
        id: "fullcalendar",
        path: "/main/fullcalendar",
        name: "日程安排"
      };
      this.openMenu(fullcalendar);
      this.$router.push(fullcalendar.path);
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
  margin-top: 5px;
  border-radius: 25px;
}
</style>