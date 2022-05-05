/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
var isCouple = function (a, b) {
  if (
    (a === "(" && b === ")") ||
    (a === "[" && b === "]") ||
    (a === "{" && b === "}")
  ) {
    return true;
  } else {
    return false;
  }
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const res = [];
  arr = s.split("");
  arr.forEach((element) => {
    if (element === "(" || element === "[" || element === "{") {
      res.push(element);
    } else if (isCouple(res[res.length - 1], element)) {
      res.pop();
    } else {
      res.push(element);
    }
  });
  if (res.length == 0) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
