<style lang="less" scoped>
    .loading {
        position: fixed;
        z-index: 20170721;
        top: 56px;
        left: 0;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
    }

    @media screen and (min-width: 480px) {
        .loading {
            top: 64px;
        }
    }

    .demo-spin-icon-load {
        animation: ani-demo-spin 1s linear infinite;
    }

    @keyframes ani-demo-spin {
        from {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .demo-spin-col {
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<template>
    <transition>
    <div :style="{'background-color': 'rgba(255, 255, 255,'+ opacity + ')'}" class="loading" v-show="visible">

        <Icon type="load-c" size=18    class="demo-spin-icon-load"></Icon>
        <div>Loading</div>

    </div>
    </transition>
</template>
<script>
    export default {
        data() {
            return {
                visible: false,
                opacity: 0.5
            }
        },
        watch: {
            visible(newVisible) {
                //监听变化 当传入值为false时 删除自己 通过父元素
                if (!newVisible) {
                    this.$el.parentNode.removeChild(this.$el)
                }
            }
        }
    }
</script>
