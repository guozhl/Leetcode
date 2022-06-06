/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let min = 0, max = nums.length - 1;

  while (min <= max) {
    let mid = Math.floor((max - min) / 2) + min;
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

  return -1
};
// @lc code=end
