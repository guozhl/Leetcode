/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
          let temp = nums[j];
          nums[j] = nums[i];
          nums[i] = temp;
          j++;
      }
  }
};
// @lc code=end