/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let min = 0, max = nums.length - 1
  while (min <= max) {
    mid = min + Math.floor((max - min) / 2)
    if (target > nums[mid]) {
      min = mid + 1
    }
    if (target < nums[mid]) {
      max = mid - 1
    }

    if (target === nums[mid]) {
      return mid
    }
  }
  return min
};
// @lc code=end