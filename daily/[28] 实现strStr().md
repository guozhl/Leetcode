## 实现strStr()

### 信息卡片
- 题目链接： https://leetcode-cn.com/problems/implement-strstr/description/
- tags: two-pointers | string

### 题目描述
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例1:
```
输入: haystack = "hello", needle = "ll"
输出: 2
```

示例2:
```
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

说明:
当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

### 参考

#### RK算法
```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var hash = function(str) {
    let hashNum = 5381;
    let hashCode = 0;
    for(let i = 0; i < str.length; i++ ) {
        hashCode += (hashNum << 5) + str.charCodeAt(i);
    }
    return hashCode;
}

var nextHash = function(str, hash, index, n) {
    let hashNum = 5381;
    hash -= (hashNum << 5) + str.charCodeAt(index);
    hash += (hashNum << 5) + str.charCodeAt(index + n);
    return hash;
}

var compareString = function(i, str, pattern) {
    let strSub = str.substring(i, i + pattern.length);
    return strSub === pattern;
}

var strStr = function (haystack, needle) {
    let m = haystack.length, n = needle.length;
    let needleCode = hash(needle), haystackCode = hash(haystack.substring(0, n));

    for(let i = 0; i < m - n + 1; i++) {
        if((needleCode === haystackCode) && compareString(i, haystack, needle)) {
            return i;
        }

        if(i < m - n) {
            haystackCode = nextHash(haystack, haystackCode, i, n);
        }
    }
    return -1;
};
```
