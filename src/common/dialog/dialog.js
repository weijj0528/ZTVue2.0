import Vue from 'vue'
let DialogConstructor = Vue.extend(require('./dialog.vue'))

let instance;
var Dialog = function (options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options,
      title: this.$t('message.friendly_warning'),
      cancel: this.$t('message.cancel'),
      confirm: this.$t('message.confirm')
    };
  }

  //创建一个 vue 的实例对象
  instance = new DialogConstructor({
    data: options
  });
  //1通过 instance.$mount() 手动地挂载一个未挂载的实例
  //并赋值到instance.vm
  instance.vm = instance.$mount();

  //把该元素加入到body标签中 访问该实例的dom 元素通过 .$el;
  instance.dom = instance.vm.$el;
  document.body.appendChild(instance.dom);
  //监听选中的值 返回对象执行异步操作
  return new Promise((resolve, reject) => {
    instance.vm.$watch('selected', function (newVal) {
      if (newVal) {
        resolve();
        return instance.vm
      } else {
        reject();
        return instance.vm
      }
    });
  })
  // return instance.vm;
};

export default Dialog;
