/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let len = 0,
    flag = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      flag = true;
      len += 1;
    }
    if (s[i] === " " && flag) {
      break;
    }
  }
  return len;
};
// @lc code=end
