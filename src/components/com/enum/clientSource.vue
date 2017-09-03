
<template>
    <div>{{source | client}}</div>
</template>
<script>

    export default {
        data () {
            return {
            }
        },
        props:{
            source:{
                type:Number,
                default:0
            }
        }
    }
</script>
<style scoped>
    /*@import '../styles/common.css';*/
</style>