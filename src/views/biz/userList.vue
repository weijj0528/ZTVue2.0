<!-- Created by Weiun on 2017/1/17.-->
<template>
    <centerContent :leftOnOff='leftOnOff' :rightOnOff='rightOnOff' :loading='loading'>
        <userMoreSearch slot="left" @more-search-onoff='moreSearchOnOff'></userMoreSearch>
        <userSearch slot="search" @more-search-onoff='moreSearchOnOff' @query='query'></userSearch>
        <userFunction slot="function" @open-details="openDetails"></userFunction>
        <uList slot="content"></uList>
        <userPage slot="bottom" @page-chang="page"></userPage>
    </centerContent>
</template>
<script>
    import centerContent from './../../components/centerContent.vue';
    import userSearch from './../../components/user/userSearch.vue';
    import userMoreSearch from './../../components/user/userMoreSearch.vue';
    import userPage from './../../components/user/userPage.vue';
    import userFunction from './../../components/user/userFunction.vue';
    import uList from './../../components/user/uList.vue';
    import util from './../../libs/util';
    import {mapActions} from 'vuex';
    export default {
        data () {
            return {
                leftOnOff:false,
                rightOnOff:false,
                loading:false,
                queryParam:{},
                pageParam:{},
            }
        },
        components:{
            centerContent: centerContent,
            userSearch: userSearch,
            userMoreSearch: userMoreSearch,
            userPage: userPage,
            userFunction: userFunction,
            uList: uList
        },
        mounted: function () {
            this.queryUser();
        },
        methods: {
            ...mapActions(['userQueryList']),
            moreSearchOnOff:function(){
                this.leftOnOff = !this.leftOnOff;
            },
            openDetails:function(){
                this.rightOnOff = !this.rightOnOff;
            },
            query:function(param){
                this.queryParam = param;
                this.queryUser();
            },
            page:function(param){
                this.pageParam = param;
                this.queryUser();
            },
            queryUser:function(){
                this.loading = true;
                let param= util.mergeObj(this.queryParam,this.pageParam);
                console.log(param);
                this.userQueryList(param).then((result)=>{
                    this.loading = false;
                },(err)=>{
                    this.loading = false;
                });
            }
        }
    }
</script>
<style scoped>
    /*@import '../styles/common.css';*/
</style>