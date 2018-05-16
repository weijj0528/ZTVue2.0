<!-- Created by Weiun on 2017/1/17.-->
<!-- 个人信息 -->
<template>
    <centerLayout :searchShow='false' :functionShow='false'>
      <div slot="content">
        <el-form ref="form" :model="userInfo" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="userInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-checkbox-group v-model="userInfo.type">
              <el-checkbox label="男" name="type"></el-checkbox>
              <el-checkbox label="女" name="type"></el-checkbox>
              <el-checkbox label="妖" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="userInfo.tel"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="userInfo.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="userInfo.email"></el-input>
          </el-form-item>
          <el-form-item label="QQ">
            <el-input v-model="userInfo.qq"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="userInfo.weixin"></el-input>
          </el-form-item>
          <el-form-item label="微信绑定">
            <el-switch v-model="userInfo.weixinBind"></el-switch>
          </el-form-item>
          <el-form-item label="生日日期">
            <el-col :span="12">
              <el-date-picker type="date" placeholder="选择生日" v-model="userInfo.date1" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="报价资源">
            <el-radio-group v-model="userInfo.resource">
              <el-radio label="人参"></el-radio>
              <el-radio label="三七"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="userInfo.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="update">立即修改</el-button>
          </el-form-item>
        </el-form>
      </div>
    </centerLayout>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import centerLayout from '@layout/centerLayout.vue';
export default {
  data() {
    return {
      userInfo: {
        name: '系统管理员',
        type: [],
        tel: '05565316',
        phone: '18505565318',
        email: 'we@173.com',
        qq: '393359988',
        weixin: 'wei0528',
        weixinBind: false,
        date1: '',
        resource: '',
        desc: ''
      }
    };
  },
  computed: {
    ...mapGetters([])
  },
  components: {
    centerLayout,
  },
  mounted: function() {
    this.$nextTick(function() {
      // 代码保证 this.$el 在 document 中
    });
  },
  beforeDestroy() {},
  methods: {
    update() {
      console.log("-------------update-----------");
    }
  }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
