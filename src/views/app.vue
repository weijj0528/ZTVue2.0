<!-- -->
<template>
<div class="index">
  <router-view></router-view>
</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  components: {}
}
</script>
<style scoped lang="less">
address,blockquote,body,button,caption,dd,div,dl,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,iframe,input,legend,li,ol,p,p,pre,select,table,td,textarea,th,
ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-style: normal;
    font-size: 100%;
    font-family: inherit;
}
body {
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    background: #CCCCCC;
    color: #555555;
}
.index {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
}
</style>
