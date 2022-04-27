/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashTable = new Map();
  for (let i in nums) {
    let d = target - nums[i];
    if (!hashTable.has(d)) {
      hashTable.set(nums[i], i);
    } else {
      return [i, hashTable.get(d)];
    }
  }
};
// @lc code=end
