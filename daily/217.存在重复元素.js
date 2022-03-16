/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let arrMap = new Map()
  for (let i = 0; i < nums.length; i++) {
      if(arrMap.get(nums[i])) return true
      arrMap.set(nums[i], true)    
  }
  return false
};
// @lc code=end
// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
