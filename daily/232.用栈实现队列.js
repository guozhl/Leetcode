/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
  this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  let len = this.queue.length
  this.queue[len] = x
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.queue.splice(0,1)
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.queue[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.queue.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

