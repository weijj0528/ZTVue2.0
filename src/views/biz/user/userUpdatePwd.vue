<!-- Created by Weiun on 2017/1/17.-->
<!-- 密码更新 -->
<template>
    <centerLayout :searchShow='false' :functionShow='false'>
      <div slot="content">
        <el-form ref="form" :model="pwd" label-width="80px">
          <el-form-item label="原密码">
            <el-col :span="8">
              <el-input type="password" v-model="pwd.old"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="新的密码">
            <el-col :span="8">
              <el-input type="password" v-model="pwd.new"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="重复密码">
            <el-col :span="8">
              <el-input type="password" v-model="pwd.reNew"></el-input>
            </el-col>
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
      pwd: {
        old: '',
        new: '',
        reNew: '',
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
    ...mapActions([]),
    update() {
      console.log("hellow world");
    }
  }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>
