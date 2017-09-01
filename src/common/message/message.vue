<style lang="less" scoped>
  .message {
    position: fixed;
    z-index: 20170721;
    top: 120px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    min-width: 240px;
    box-sizing: border-box;
    border-radius: 2px;
    overflow: hidden;
    background-color: #fff;
    img {
      flex: 0 0 auto;
    }
    .content {
      flex: 1;
      font-size: 12px;
      background-color: #fff;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
    }
  }

  .message-enter-active, .message-leave-active {
    transition: opacity .3s .2s, top .4s .2s;
  }

  .message-enter, .message-leave-to {
    opacity: 0;
    top: 60px;
  }
</style>
<template>
  <!--组件动效-->
  <transition name="message">
    <div class="message" v-show="visible">
      <img :src="typeImg" alt="">
      <div class="content">
        {{message}}
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data(){
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        onClose: null,
        closed: false,
        timer: null
      }
    },
    computed: {
      typeImg() {
        return require(`./image/${ this.type }.svg`);
      }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false;
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
    },
    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },
      clearTimer() {
        clearTimeout(this.timer);
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      }
    },
    mounted() {
      this.startTimer();
    }
  }
</script>
