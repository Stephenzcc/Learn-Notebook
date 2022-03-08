/**
 * 创建vue实例
 */
let data = { a: 1 };
var vm = new Vue({
  data: data,
});
console.log(vm.a == data.a);
// 设置 property 也会影响到原始数据
vm.a = 2;
data.a; // => 2
// ……反之亦然
data.a = 3;
vm.a; // => 3
/**
 * 只有当实例被创建时就已经存在于 data 中的 property 才是响应式的。
 */
/**
 * 除了数据 property，Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 $，以便与用户定义的 property 区分开来。
 */
vm.$data === data; // => true
vm.$el === document.getElementById("example"); // => true
// $watch 是一个实例方法
vm.$watch("a", function (newValue, oldValue) {
  // 这个回调将在 `vm.a` 改变后调用
});
