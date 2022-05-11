/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = 0,
    res = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > sum + nums[i]) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    if (sum > res) {
      res = sum;
    }
  }
  return res;
};
// @lc code=end
