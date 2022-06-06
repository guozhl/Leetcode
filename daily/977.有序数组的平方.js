/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let len = nums.length
  let arr = new Array(len)
  let left = 0, right = len - 1
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      arr[len - 1] = Math.pow(nums[left], 2)
      left++
    } else {
      arr[len - 1] = Math.pow(nums[right], 2)
      right--
    }
    len--
  }

  return arr
};
// @lc code=end
