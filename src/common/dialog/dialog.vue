<style lang="less" scoped>
</style>
<template>
  <!--组件动效-->
  <mu-dialog :open="dialog" :title="title" @close="close">
    {{message}}
    <mu-flat-button slot="actions" @click="click(false)" primary :label="cancel" v-if="type !== 'alert'"/>
    <mu-flat-button slot="actions" primary @click="click(true)" :label="confirm"/>
  </mu-dialog>
</template>
<script>
  export default {
    data () {
      return {
        type: 'cofirm',
        message: '',
        title: '',
        dialog: true,
        selected: '',
        cancel: '',
        confirm: '',
      }
    },
    watch: {
      dialog(newVal){
        if (!newVal) {
          this.$el.parentNode.removeChild(this.$el)
        }
      }
    },
    methods: {
      open () {
        this.dialog = true
      },
      click (val) {
        this.selected = val;
        this.dialog = false
      },
      close(){
        if (this.type !== 'alert') {
          this.dialog = false
        }
      }
    }
  }
</script>
