/**
 * 实现Promise.retry，重试异步函数
 * 异步函数执行成功后resolve结果
 * 失败之后重试，超过一定次数才真正reject
 */
function fn() {
  const n = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 0.7) {
        resolve(n);
      } else {
        reject(n);
      }
    }, 1000);
  });
}
Promise.retry = (fn, times) => {
  new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        const res = await fn();
        console.log("执行成功，得到结果：", res);
        resolve(res);
        break;
      } catch (error) {
        console.log("执行失败一次，得到结果：", error);
        if (!times) {
          reject(error);
        }
      }
    }
  }).catch(() => {
    console.log("尝试结束，仍然失败");
  });
};
Promise.retry(fn, 3);
