<!-- Created by Weiun on 2017/1/17.-->
<template>
    <centerLayout :leftOnOff='leftOnOff' :rightOnOff='rightOnOff' :loading='loading'>
        <userMoreSearch slot="left" @more-search-onoff='moreSearchOnOff'></userMoreSearch>
        <userSearch slot="search" @more-search-onoff='moreSearchOnOff' @query='query'></userSearch>
        <userFunction slot="function" @open-details="openDetails"></userFunction>
        <userList slot="content" :dataList='dataList'></userList>
        <comPage slot="bottom" :pageParam='pageArgs' @page-chang="page"></comPage>
    </centerLayout>
</template>
<script>
import centerLayout from './../../layout/centerLayout.vue';
import comPage from './../../com/comPage.vue';
import userSearch from './userSearch.vue';
import userMoreSearch from './userMoreSearch.vue';
import userFunction from './userFunction.vue';
import userList from './userList.vue';
import util from './../../../libs/util';
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
        centerLayout,
        comPage,
        userSearch,
        userMoreSearch,
        userFunction,
        userList
    },
    computed: {
        ...mapGetters(['userResult']),
        dataList: function() {
            return this.userResult.list;
        },
        pageArgs: function() {
            let p = {
                pageNum: this.userResult.pageNum,
                pageSize: this.userResult.pageSize,
                total: this.userResult.total
            };
            return p;
        }
    },
    mounted: function() {
        if (this.dataList.length == 0)
            this.queryUser();
    },
    methods: {
        ...mapActions(['userQueryList']),
        moreSearchOnOff: function() {
            this.leftOnOff = !this.leftOnOff;
        },
        openDetails: function() {
            this.rightOnOff = !this.rightOnOff;
        },
        query: function(param) {
            this.queryParam = param;
            this.queryUser();
        },
        page: function(param) {
            this.pageParam = param;
            this.queryUser();
        },
        queryUser: function() {
            this.loading = true;
            let param = util.mergeObj(this.queryParam, this.pageParam);
            console.log(param);
            this.userQueryList(param).then((result) => {
                this.loading = false;
            }, (err) => {
                this.loading = false;
            });
        }
    }
}
</script>
<style scoped>
/*@import '../styles/common.css';*/
</style>