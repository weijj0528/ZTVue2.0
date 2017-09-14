<!-- Created by Weiun on 2017/1/17.-->
<style scoped>
    /*@import '../styles/common.css';*/
</style>
<template>
    <centerContent :leftOnOff='leftOnOff' :rightOnOff='rightOnOff' :loading='loading'>
        <moneyList slot="content"></moneyList>
        <moneyPage slot="bottom" @page-chang="page"></moneyPage>
    </centerContent>
</template>
<script>
    import centerContent from './../../components/centerContent.vue';
    import moneyList from './../../components/money/moneyList.vue';
    import moneyPage from './../../components/money/moneyPage.vue';
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
            centerContent,
            moneyList,
            moneyPage,
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