/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x >= 0) {
    let _x = x;
    let arr = [];
    while (_x !== 0) {
      arr.unshift(_x % 10);
      _x = parseInt(_x / 10);
    }
    for (let [index, item] of arr.entries()) {
      _x += item * 10 ** index;
    }
    if (x === _x) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
// @lc code=end
