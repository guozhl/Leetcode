/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let scoreCopy = score.concat([]).sort((a, b) => b - a)
  let scoreMap = new Map()
  let indexName = ''
  for (let i = 0; i < scoreCopy.length; i++) {
    indexName = i + 1 + ""
    if (i + 1 === 1) indexName = 'Gold Medal'
    if (i + 1 === 2) indexName = 'Silver Medal'
    if (i + 1 === 3) indexName = 'Bronze Medal'
    scoreMap.set(scoreCopy[i], indexName)
  }
  let arr = []
  for (let j = 0; j < score.length; j++) {
    arr.push(scoreMap.get(score[j]))
  }
  return arr
};
// @lc code=end
