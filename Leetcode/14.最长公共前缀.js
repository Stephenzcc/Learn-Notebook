/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let qianzhui = new Set();
  let res = "";
  for (let i = 0; i < strs[0].length; i++) {
    strs.forEach((str) => {
      qianzhui.add(str[i]);
    });
    if (qianzhui.size === 1) {
      res += strs[0][i];
    } else {
      break;
    }
    qianzhui.clear();
  }
  return res;
};
// @lc code=end
