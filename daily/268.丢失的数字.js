/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length
  const all = (n+1)/2 * n 

  let cur = 0
  for (let i = 0; i < nums.length; i++) {
    cur = cur + nums[i];
  }

  return all - cur

};