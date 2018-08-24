
<template>
    <div style="width: 100%;height:100%">
        <el-table border stripe highlight-current-row :data="dataList" :height="tableHeight" style="width: 100%">
            <el-table-column fixed type="selection" width="55">
            </el-table-column>
            <el-table-column label="头像" width="100">
                <template slot-scope="scope">
                    <imageView v-if="scope.row.avatar" :imgList='userAvatar(scope.row)'></imageView>
                </template>
            </el-table-column>
            <el-table-column label="姓名" prop="name" width="150">
            </el-table-column>
            <el-table-column label="昵称" prop="nickname" width="100">
            </el-table-column>
            <el-table-column label="电话" prop="phone" width="120">
            </el-table-column>
            <el-table-column label="积分" prop="point" width="100">
            </el-table-column>
            <el-table-column label="今日签到" width="100">
                <template slot-scope="scope">
                    <div>{{scope.row.sign == 0 ? "未签到" : "已签到"}}</div>
                </template>
            </el-table-column>
            <el-table-column label="来源" prop="source | client">
                <template slot-scope="scope">
                    <div>{{scope.row.source | client}}</div>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="注册时间" prop="ctime" width="180">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import imageView from "@com/imageView.vue";
export default {
    components: {
        imageView
    },
    data() {
        return {
            tableHeight: 0
        };
    },
    props: {
        dataList: {
            type: Array,
            default: []
        }
    },
    computed: {},
    mounted: function() {
        this.$nextTick(() => {
            this.tableHeight = this.$el.offsetHeight;
            console.log("tableHeight:" + this.tableHeight);
        });
    },
    methods: {
        userAvatar(user) {
            return [
                {
                    src: user.avatar,
                    alt: user.name + "的头像"
                }
            ];
        }
    }
};
</script>
<style scoped>
/*@import '../styles/common.css';*/
.user-icon {
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 50%;
}
</style>