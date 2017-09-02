<!-- Created by Weiun on 2017/1/17.-->
<template>
    <centerContent :leftOnOff='false' :rightOnOff='true' >
        <Card slot="right">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                经典电影
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>
                换一换
            </a>
        </Card>
        <Card slot="left">
            <p slot="title">
                <Icon type="ios-film-outline"></Icon>
                经典电影
            </p>
            <a href="#" slot="extra" @click.prevent="changeLimit">
                <Icon type="ios-loop-strong"></Icon>
                换一换
            </a>
        </Card>
        <Row slot="search" type="flex" justify="space-around">
            <Col span="3"><Input size="small" placeholder="small size"><span slot="prepend">名称</span></Input></Col>
            <Col span="3"><Input size="small" placeholder="small size"></Input></Col>
            <Col span="3"><Input size="small" placeholder="small size"></Input></Col>
            <Col span="3"><Input size="small" placeholder="small size"></Input></Col>
            <Col span="3"><Input size="small" placeholder="small size"></Input></Col>
            <Col span="3"><Input size="small" placeholder="small size"></Input></Col>
            <Col span="5">
                <Button type="primary" size="small" shape="circle" icon="ios-search"></Button>
                <Button type="info" size="small">清空</Button>
                <Button type="info" size="small">更多</Button>
            </Input></Col>
        </Row>
        </Card>
        <Row slot="function" justify="space-between">
            <Col span="24">
                <Button type="info" size="small">信息按钮</Button>
                <Button type="success" size="small">成功按钮</Button>
                <Button type="warning" size="small">警告按钮</Button>
                <Button type="error" size="small">错误按钮</Button>
            </Col>
        </Row>
    </centerContent>
</template>
<script>
    import centerContent from './../../components/centerContent.vue';
    export default {
        data () {
            return {
                
            }
        },
        components:{
            centerContent: centerContent
        },
        mounted: function () {
            this.$nextTick(function () {
                // 代码保证 this. 在 document 中
            })
        },
        beforeDestroy () {

        },
        methods: {}
    }
</script>
<style scoped>
    /*@import '../styles/common.css';*/
</style>