
var MyStack = function() {
    this.mainQueue = [];
    this.helperQueue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.mainQueue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.mainQueue.length;

    for (let i = 0; i < n-1; i++) {
        // let front = mainQueue.shift();
        // this.helperQueue.push(front);
        this.helperQueue.push(this.mainQueue.shift());
    }

    let answer = this.mainQueue.shift();
    // return this.mainQueue.shift();

    // Exchange mainQueue and helperQueue
    let temp = this.mainQueue;
    this.mainQueue = this.helperQueue;
    this.helperQueue = temp;

    return answer;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.mainQueue.length;
    for (let i=0; i < n-1; i++) {
        this.helperQueue.push(this.mainQueue.shift());
    }

    let answer = this.mainQueue[0];

    this.helperQueue.push(this.mainQueue.shift());

    let temp = this.mainQueue;
    this.mainQueue = this.helperQueue;
    this.helperQueue = temp;

    return answer;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.mainQueue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */