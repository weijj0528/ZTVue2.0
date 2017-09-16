<!-- Created by Weiun on 2017/1/17.-->
<style scoped>
    /*@import '../styles/common.css';*/
</style>
<template>
    <centerContent :loading='loading'>
        <moneyMoreSearch slot="left" ></moneyMoreSearch>
        <moneySearch slot="search" :leftOnOff='leftOnOff' @more-search-onoff="moreSearchOnOff" @query="query"></moneySearch>
        <moneyFunction slot="function" @open-details="openDetails"></moneyFunction>
        <moneyList slot="content" :dataList='dataList'></moneyList>
        <moneyPage slot="bottom"  :pageParam='pageArgs' @page-chang="page"></moneyPage>
    </centerContent>
</template>
<script>
    import centerContent from './../../components/centerContent.vue';
    import moneySearch from './../../components/money/moneySearch.vue';
    import moneyMoreSearch from './../../components/money/moneyMoreSearch.vue';
    import moneyFunction from './../../components/money/moneyFunction.vue';
    import moneyList from './../../components/money/moneyList.vue';
    import moneyPage from './../../components/money/moneyPage.vue';
    import util from './../../libs/util';
    import {mapGetters,mapActions} from 'vuex';
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
            centerContent,
            moneySearch,
            moneyMoreSearch,
            moneyFunction,
            moneyList,
            moneyPage,
        },
        computed:{
            ...mapGetters(['moneyResult']),
            dataList:function(){
                return this.moneyResult.list;
            },
            pageArgs:function(){
                let p = {
                    pageNum:this.moneyResult.pageNum,
                    pageSize:this.moneyResult.pageSize,
                    total:this.moneyResult.total
                };
                return p;
            }
        },
        mounted: function () {
            this.queryList();
        },
        methods: {
            ...mapActions(['moneyQueryList']),
            moreSearchOnOff:function(){
                this.leftOnOff = !this.leftOnOff;
            },
            openDetails:function(){
                this.rightOnOff = !this.rightOnOff;
            },
            query:function(param){
                this.queryParam = param;
                this.queryList();
            },
            page:function(param){
                this.pageParam = param;
                this.queryList();
            },
            queryList:function(){
                this.loading = true;
                let param= util.mergeObj(this.queryParam,this.pageParam);
                console.log(param);
                this.moneyQueryList(param).then((result)=>{
                    this.loading = false;
                },(err)=>{
                    this.loading = false;
                });
            }
        }
    }
</script>