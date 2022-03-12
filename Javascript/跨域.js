/**
 * 什么是跨域？
 * 所有的浏览器都遵守同源策略，这个策略能够保证一个源的动态脚本不能读取或操作其他源的http响应和cookie，
 * 这就使浏览器隔离了来自不同源的内容，防止它们互相操作。
 * 所谓同源是指协议、域名和端口都一致的情况。
 * 简单的来说，出于安全方面的考虑，页面中的JavaScript无法访问其他服务器上的数据，即“同源策略”。
 * 而跨域就是通过某些手段来绕过同源策略限制，实现不同服务器之间通信的效果。
 */
/**
 * 同源策略限制内容有：
 * 1、Cookie、LocalStorage、IndexedDB等存储性内容
 * 2、不允许进行DOM节点的操作
 * 3、不能进行AJAX请求
 */
/**
 * 方法一：JSONP
 * 利用<script  src="xxx">元素的这个天然支持跨域的策略，网页可以得到从其他来源动态产生的 JSON 数据。
 */
/**
 * 方法二：CORS
 * 整个CORS通信过程，都是浏览器自动完成，不需要用户参与。
 * 优点在于功能更加强大支持各种HTTP Method，缺点是兼容性不如JSONP。
 * 只需要在服务器端做一些小小的改造即可，只要浏览器检测到响应头带上了CORS，并且允许的源包括了本网站，那么就不会拦截请求响应。
 */
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:POST,GET");
/**
 * 方法三：WebSocket
 * Websocket是HTML5的一个持久化的协议，它实现了浏览器与服务器的全双工通信。
 * WebSocket 是一种双向通信协议，在建立连接之后，WebSocket 的 server 与 client 都能主动向对方发送或接收数据。
 * 同时，WebSocket 在建立连接时需要借助 HTTP 协议，连接建立好了之后 client 与 server 之间的双向通信就与 HTTP 无关了。
 */
/**
 * 方法四：postMessage
 * 如果两个网页不同源，就无法拿到对方的DOM。典型的例子是iframe窗口和 window.open方法打开的窗口，它们与父窗口无法通信。
 * 跨文档通信 API（Cross-document messaging）。这个API为window对象新增了一个 window.postMessage 方法，允许跨窗口通信，不论这两个窗口是否同源。
 */
/**
 * 方法四：document.domain
 * 将 document.domain 设置为主域名，来实现相同子域名的跨域操作，这个时候主域名下的 cookie 就能够被子域名所访问。
 * 同时如果文档中含有主域名相同，子域名不同的 iframe 的话，我们也可以对这个 iframe 进行操作。
 * 如果是想要解决不同跨域窗口间的通信问题，比如说一个页面想要和页面的中的不同源的 iframe 进行通信的问题，
 * 我们可以使用 location.hash 或者 window.name 或者 postMessage 来解决。
 */
