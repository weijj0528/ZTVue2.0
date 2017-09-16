<!-- 短信会话列表Created by Weiun on 2017/1/17.-->
<template>
    <centerContent :loading='loading'>
        <sessionMoreSearch slot="left"></sessionMoreSearch>
        <sessionSearch slot="search" :leftOnOff='leftOnOff' @more-search-onoff="moreSearchOnOff" @query="query"></sessionSearch>
        <sessionFunction slot="function" @open-details="openDetails"></sessionFunction>
        <sessionList slot="content" :dataList='dataList'></sessionList>
        <comPage slot="bottom" :pageParam='pageArgs' @page-chang="page"></comPage>
    </centerContent>
</template>
<script>
import centerContent from './../../components/centerContent.vue';
import comPage from './../../components/com/comPage.vue';
import sessionSearch from './../../components/session/sessionSearch.vue';
import sessionMoreSearch from './../../components/session/sessionMoreSearch.vue';
import sessionFunction from './../../components/session/sessionFunction.vue';
import sessionList from './../../components/session/sessionList.vue';
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
        sessionSearch,
        sessionMoreSearch,
        sessionFunction,
        sessionList,
    },
    computed: {
        ...mapGetters(['sessionResult']),
        dataList: function() {
            return this.sessionResult.list;
        },
        pageArgs: function() {
            let p = {
                pageNum: this.sessionResult.pageNum,
                pageSize: this.sessionResult.pageSize,
                total: this.sessionResult.total
            };
            return p;
        }
    },
    mounted: function() {
        if (this.dataList.length == 0)
            this.queryList();
    },
    methods: {
        ...mapActions(['sessionQueryList']),
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
            this.sessionQueryList(param).then((result) => {
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