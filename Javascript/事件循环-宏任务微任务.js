/**
 * 事件循环
 * 同步和异步任务分别进入不同的执行环境，同步的进入主线程，即主执行栈，异步的进入任务队列。
 * 主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。
 * 上述过程的不断重复就是我们说的 Event Loop (事件循环)。
 */
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("script end");
/**
 * 输出
 * script start
 * script end
 * promise1
 * promise2
 * setTimeout
 */

/**
 * 宏任务
 * (macro)task，可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）
 * 包含：
 * script(整体代码)
 * setTimeout
 * setInterval
 * I/O
 * UI交互事件
 * postMessage
 * MessageChannel
 * setImmediate(Node.js 环境)
 */
/**
 * 微任务
 * microtask,可以理解是在当前 task 执行结束后立即执行的任务。也就是说，在当前task任务后，下一个task之前，在渲染之前。
 * 包含：
 * Promise.then
 * Object.observe
 * MutationObserver
 * process.nextTick(Node.js 环境)
 */
