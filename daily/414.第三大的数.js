/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    if (arr.indexOf(nums[i]) !== -1) continue
    arr.push(nums[i])
    arr.sort((a, b) => b - a)
    arr.splice(3, 1)
    console.log(arr.length)
  }
  return arr.length > 2 ? arr[2] : arr[0]
};
// @lc code=end
console.log('777777777', thirdMax([3, 2,2, 1,4,7,2,4,5]))