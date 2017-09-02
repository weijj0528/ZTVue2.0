<!-- Created by Weiun on 2017/1/17.-->
<template>
    <centerContent :leftOnOff='leftOnOff' :rightOnOff='rightOnOff' :loading='loading'>
        <userMoreSearch slot="left" @more-search-onoff='moreSearchOnOff'></userMoreSearch>
        <userSearch slot="search" @more-search-onoff='moreSearchOnOff' @refresh='refresh'></userSearch>
        <userFunction slot="function"></userFunction>
        <uList slot="content"></uList>
    </centerContent>
</template>
<script>
    import centerContent from './../../components/centerContent.vue';
    import userSearch from './../../components/user/userSearch.vue';
    import userMoreSearch from './../../components/user/userMoreSearch.vue';
    import userFunction from './../../components/user/userFunction.vue';
    import uList from './../../components/user/uList.vue';
    import {mapActions} from 'vuex';
    export default {
        data () {
            return {
                leftOnOff:false,
                rightOnOff:false,
                loading:false,
                queryParam:{},
            }
        },
        components:{
            centerContent: centerContent,
            userSearch: userSearch,
            userMoreSearch: userMoreSearch,
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
            refresh:function(){
                this.queryUser();
            },
            queryUser:function(){
                this.loading = true;
                this.userQueryList(this.queryParam).then((result)=>{
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