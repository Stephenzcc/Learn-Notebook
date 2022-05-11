/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let n = nums.length - 1;
  for (let i = 0; i < n + 1; i++) {
    if (nums[i] === val) {
      nums[i--] = nums[n--];
    }
  }
  return n + 1;
};
// @lc code=end
