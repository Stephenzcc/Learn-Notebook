/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let t = 0;
  let max = nums[nums.length - 1];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      nums[t++] = nums[i];
    }
    if (nums[t - 1] === max) {
      nums.splice(t, nums.length - t);
      return;
    }
  }
};
// @lc code=end
