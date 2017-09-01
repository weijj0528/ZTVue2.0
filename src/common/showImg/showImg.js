import Vue from 'vue'
let ShowImgConstructor = Vue.extend(require('./showImg.vue'))

let instance;

var ShowImg = function (options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      imgList: [options],
      activeIndex: 0
    };
  }
  //创建一个 vue 的实例对象
  instance = new ShowImgConstructor({
    data: options
  });
  //1通过 instance.$mount() 手动地挂载一个未挂载的实例
  //并赋值到instance.vm
  instance.vm = instance.$mount();

  //把该元素加入到body标签中 访问该实例的dom 元素通过 .$el;
  instance.dom = instance.vm.$el;
  document.body.appendChild(instance.dom);
  //返回这个实例 实现链式编程 为后面关闭loading做准备
  return instance.vm;
};

export default ShowImg;
