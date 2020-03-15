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

let res = strStr('aaaaa', '')
console.log(res)
