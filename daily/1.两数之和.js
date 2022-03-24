/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let num2 = target - nums[i]
//     let idx = nums.indexOf(num2)
//     if(idx !== -1 && idx !== i) return i > idx ? [idx, i] : [i, idx]
//   }
// };
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i], i)
  }
};
// @lc code=end