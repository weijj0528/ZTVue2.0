<!-- 登录页面 -->
<template>
    <div id="web">
        <div style="height:180px"></div>
        <p align="center"></p>
        <div class="login">
            <div class="banner">
                <el-carousel height="238px">
                    <el-carousel-item>
                        <!-- <img style="height:238px;width:358px" src=""/> -->
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="logmain">
                <el-row>
                    <el-col :span="24" >
                        <p align="center" style="margin:0;">管理员登录</p>
                    </el-col>
                    <el-col :span="24" class="col-margin">
                        <el-input placeholder="账号名……" v-model="param.userName" size="large">
                            <template slot="prepend">账 号：</template>
                        </el-input>
                    </el-col>
                    <el-col :span="24" class="col-margin">
                        <el-input type="password" placeholder="密码……" v-model="param.password" size="large">
                            <template slot="prepend">密 码：</template>
                        </el-input>
                    </el-col>
                    <el-col :span="20" class="col-margin">
                        <el-checkbox v-model="rememberPwd" >记住密码</el-checkbox>
                    </el-col>
                    <el-col :span="4" class="col-margin">
                       <el-button type="text">忘记密码</el-button>
                    </el-col>
                    <el-col :span="24" class="col-margin">
                        <el-button type="primary" :loading="loading" @click="submit" style="width:100%" size="large">
                            提交
                        </el-button>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- <p align="center">XXX公司版权所有@****提供技术支持</p> -->
        <canvas id="Mycanvas" class="my-canvas"></canvas>
    </div>
</template>
<script>
import http from "@libs/httpService";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      loading: false,
      rememberPwd: false,
      param: {
        userName: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["layout"])
  },
  components: {},
  methods: {
    ...mapActions(["userLogin"]),
    submit: function() {
      let _self = this;
      console.log(_self.param);
      _self.loading = true;
      _self.userLogin(_self.param).then(
        resp => {
          console.log(resp);
          _self.loading = false;
          _self.$router.push("/main/home");
        },
        err => {
          _self.loading = false;
          // _self.$router.push('/main');
        }
      );
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      // 背景动画
      //定义画布宽高和生成点的个数
      var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight,
        POINT = 35;
      var canvas = document.getElementById("Mycanvas");
      (canvas.width = WIDTH), (canvas.height = HEIGHT);
      var context = canvas.getContext("2d");
      (context.strokeStyle = "rgba(0,0,0,0.02)"),
        (context.strokeWidth = 1),
        (context.fillStyle = "rgba(0,0,0,0.05)");
      var circleArr = [];

      //线条：开始xy坐标，结束xy坐标，线条透明度
      function Line(x, y, _x, _y, o) {
        (this.beginX = x),
          (this.beginY = y),
          (this.closeX = _x),
          (this.closeY = _y),
          (this.o = o);
      }
      //点：圆心xy坐标，半径，每帧移动xy的距离
      function Circle(x, y, r, moveX, moveY) {
        (this.x = x),
          (this.y = y),
          (this.r = r),
          (this.moveX = moveX),
          (this.moveY = moveY);
      }
      //生成max和min之间的随机数
      function num(max, _min) {
        var min = arguments[1] || 0;
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      // 绘制原点
      function drawCricle(cxt, x, y, r, moveX, moveY) {
        var circle = new Circle(x, y, r, moveX, moveY);
        cxt.beginPath();
        cxt.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI);
        cxt.closePath();
        cxt.fill();
        return circle;
      }
      //绘制线条
      function drawLine(cxt, x, y, _x, _y, o) {
        var line = new Line(x, y, _x, _y, o);
        cxt.beginPath();
        cxt.strokeStyle = "rgba(0,0,0," + o + ")";
        cxt.moveTo(line.beginX, line.beginY);
        cxt.lineTo(line.closeX, line.closeY);
        cxt.closePath();
        cxt.stroke();
      }
      //初始化生成原点
      function init() {
        circleArr = [];
        for (var i = 0; i < POINT; i++) {
          circleArr.push(
            drawCricle(
              context,
              num(WIDTH),
              num(HEIGHT),
              num(15, 2),
              num(10, -10) / 40,
              num(10, -10) / 40
            )
          );
        }
        draw();
      }

      //每帧绘制
      function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < POINT; i++) {
          drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
        }
        for (var i = 0; i < POINT; i++) {
          for (var j = 0; j < POINT; j++) {
            if (i + j < POINT) {
              var A = Math.abs(circleArr[i + j].x - circleArr[i].x),
                B = Math.abs(circleArr[i + j].y - circleArr[i].y);
              var lineLength = Math.sqrt(A * A + B * B);
              var C = 1 / lineLength * 7 - 0.009;
              var lineOpacity = C > 0.03 ? 0.03 : C;
              if (lineOpacity > 0) {
                drawLine(
                  context,
                  circleArr[i].x,
                  circleArr[i].y,
                  circleArr[i + j].x,
                  circleArr[i + j].y,
                  lineOpacity
                );
              }
            }
          }
        }
      }
      //调用执行
      init();
      setInterval(function() {
        for (var i = 0; i < POINT; i++) {
          var cir = circleArr[i];
          cir.x += cir.moveX;
          cir.y += cir.moveY;
          if (cir.x > WIDTH) cir.x = 0;
          else if (cir.x < 0) cir.x = WIDTH;
          if (cir.y > HEIGHT) cir.y = 0;
          else if (cir.y < 0) cir.y = HEIGHT;
        }
        draw();
      }, 16);
    });
  },
  created() {}
};
</script>
<style scoped >
#web {
  width: 100%;
  height: 100%;
  /* background: cadetblue; */
  margin: 0 auto;
  /* background-image: url("/static/image/bg_login.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%; */
}

#web .login {
  width: 700px;
  height: 240px;
  margin: 0 auto;
  background: #f7f7f9;
  border: 1px solid #ddd;
}

#web .login .banner {
  width: 358px;
  height: 238px;
  padding: 1px;
  float: left;
}

#web .login .logmain {
  width: 320px;
  height: 218px;
  padding: 10px;
  float: right;
}

.col-margin {
  margin-top: 10px;
}

.my-canvas{
  position: fixed;
  float:left;
  top: 0;
  z-index: -1;
}
</style>
