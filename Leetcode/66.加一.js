/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      break;
    } else if (i > 0) {
      digits[i] = 0;
    } else {
      digits[i] = 0;
      digits.unshift(1);
      break;
    }
  }
  return digits;
};
// @lc code=end
