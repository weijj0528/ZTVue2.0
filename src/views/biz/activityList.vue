<!-- Created by Weiun on 2017/1/17.-->
<style scoped>
/*@import '../styles/common.css';*/
</style>
<template>
    <centerContent :loading='loading'>
        <activityMoreSearch slot="left"></activityMoreSearch>
        <activitySearch slot="search" :leftOnOff='leftOnOff' @more-search-onoff="moreSearchOnOff" @query="query"></activitySearch>
        <activityFunction slot="function" @open-details="openDetails"></activityFunction>
        <activityList slot="content" :dataList='dataList'></activityList>
        <!-- <comPage slot="bottom" :pageParam='pageArgs' @page-chang="page"></comPage> -->
    </centerContent>
</template>
<script>
import centerContent from './../../components/centerContent.vue';
import comPage from './../../components/com/comPage.vue';
import activitySearch from './../../components/activity/activitySearch.vue';
import activityMoreSearch from './../../components/activity/activityMoreSearch.vue';
import activityFunction from './../../components/activity/activityFunction.vue';
import activityList from './../../components/activity/activityList.vue';
import util from './../../libs/util';
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            leftOnOff: false,
            rightOnOff: false,
            loading: false,
            queryParam: {},
            pageParam: {},
        }
    },
    components: {
        centerContent,
        comPage,
        activitySearch,
        activityMoreSearch,
        activityFunction,
       activityList,
    },
    computed: {
        ...mapGetters(['activityResult']),
        dataList: function() {
            return this.activityResult.list;
        },
        pageArgs: function() {
            let p = {
                pageNum: this.activityResult.pageNum,
                pageSize: this.activityResult.pageSize,
                total: this.activityResult.total
            };
            return p;
        }
    },
    mounted: function() {
        if (this.dataList.length == 0)
            this.queryList();
    },
    methods: {
        ...mapActions(['activityQueryList']),
        moreSearchOnOff: function() {
            this.leftOnOff = !this.leftOnOff;
        },
        openDetails: function() {
            this.rightOnOff = !this.rightOnOff;
        },
        query: function(param) {
            this.queryParam = param;
            this.queryList();
        },
        page: function(param) {
            this.pageParam = param;
            this.queryList();
        },
        queryList: function() {
            this.loading = true;
            let param = util.mergeObj(this.queryParam, this.pageParam);
            console.log(param);
            this.activityQueryList(param).then((result) => {
                this.loading = false;
            }, (err) => {
                this.loading = false;
            });
        }
    }
}
</script>