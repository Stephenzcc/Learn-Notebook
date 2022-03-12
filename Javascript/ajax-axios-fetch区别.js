/**
 * MVVM(Model-View-ViewModel), 源自于经典的 Model–View–Controller（MVC）模式。
 * MVVM 的出现促进了 GUI 前端开发与后端业务逻辑的分离，极大地提高了前端开发效率。
 * MVVM 的核心是 ViewModel 层，它就像是一个中转站（value converter），
 * 负责转换 Model 中的数据对象来让数据变得更容易管理和使用，该层向上与视图层进行双向数据绑定，
 * 向下与 Model 层通过接口请求进行数据交互，起呈上启下作用。
 * View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，
 * 这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的最重要一环。
 */

/**
 * 传统 Ajax 指的是 XMLHttpRequest（XHR）， 最早出现的发送后端请求技术，
 * 隶属于原始js中，核心使用XMLHttpRequest对象，多个请求之间如果有先后关系的话，就会出现回调地狱。
 * JQuery ajax 是对原生XHR的封装，除此以外还增添了对JSONP的支持。
 * JSONP是一段参数是json格式(大多数情况)的JS代码
 */
$.ajax({
  type: "POST",
  url: url,
  data: data,
  dataType: dataType,
  success: function () {},
  error: function () {},
});

/**
 * fetch
 * fetch是基于promise实现的，也可以结合async/await。
 * fetch请求默认是不带cookie的，需要设置fetch（URL，{credentials:’include’})。
 * Credentials有三种参数：same-origin，include，*
 * 服务器返回400 500 状态码时并不会reject，只有网络出错导致请求不能完成时，fetch才会被reject。
 * 所有版本的 IE 均不支持原生 Fetch。
 * fetch是widow的一个方法；
 */
try {
  let response = await fetch(url);
  let data = response.json();
  console.log(data);
} catch (e) {
  console.log("Oops, error", e);
}

/**
 * 需要import axios from 'axios'
 * axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，
 * 本质上也是对原生XHR的封装，只不过它是Promise的实现版本，符合最新的ES规范。
 */
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
