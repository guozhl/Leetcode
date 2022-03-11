/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let numA = 0, numL = 0;
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    // 缺勤
    if (el === 'A' && ++numA > 1) return false
    // 迟到
    if (el === 'L' && ++numL > 2) return false

    if (el !== 'L') numL = 0
  }

  return true;
};
// @lc code=end
