/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let min = 0, max = n - 1;
        while (min <= max) {
            mid = min + Math.floor((max - min) / 2)
            if (isBadVersion(mid)) {
                max = mid - 1
            } else {
                min = mid + 1
            }
        }

        return min
    };
};
// @lc code=end
