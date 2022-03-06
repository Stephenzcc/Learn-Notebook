// 函数防抖： 在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。

// 函数节流： 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

// 函数防抖的实现
// function debounce(fn, wait) {
//   let timer = null;
//   const clearTimer = () => {
//     if (timer) {
//       clearTimeout(timer);
//       timer = null;
//     }
//   };
//   return (...args) => {
//     // 如果此时存在定时器的话，则取消之前的定时器重新记时
//     clearTimer();
//     // 设置定时器，使事件间隔指定事件后执行
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//       clearTimer();
//     }, wait);
//   };
// }

function debounce(fn, wait) {
  let timer = null;
  return (...args) => {
    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
    }
    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(this, args);
      // clearTimeout(timer);
      // timer = null;
    }, wait);
  };
}

// 函数节流的实现
function throttle(fn, delay) {
  let flag = true;
  return (...args) => {
    if (!flag) {
      return;
    }
    flag = false;
    fn.apply(this, args);
    setTimeout(() => {
      flag = true;
    }, delay);
  };
}

/**
 * 需要防抖
 */
function f(a, b, c) {
  console.log(a, b, c);
}

const df = debounce(f, 1000);
df(1, 2, 3);
df(1, 2, 3);

const tf = throttle(f, 3000);
tf(1, 2, 3);
tf(1, 2, 3);
