/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const dist = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = s.split("");
  arr.forEach((value, index) => {
    arr[index] = dist[value];
  });
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1]) {
      if (arr[i] < arr[i + 1]) {
        num = num - arr[i] + arr[i + 1];
        i++;
      } else {
        num += arr[i];
      }
    } else {
      num += arr[i];
    }
  }
  return num;
};
// @lc code=end
