/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let mapNum2 = new Map()
  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i]
    let x = mapNum2.get(num)
    mapNum2.get(num) ? mapNum2.set(num, ++x) : mapNum2.set(num, 1)
  }

  let resArr = []
  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i]
    let x = mapNum2.get(num)
    if(x) {
      resArr.push(num)
      mapNum2.set(num, --x)
    }
  }

  return resArr
};
// @lc code=end
