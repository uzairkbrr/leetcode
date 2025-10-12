var MyQueue = function() {
    this.mainStack = [];
    this.helperStack = [];
};

MyQueue.prototype.push = function(x) {
    this.mainStack.push(x);
};

MyQueue.prototype.pop = function() {
    if (this.helperStack.length === 0) {
        while (this.mainStack.length > 0) {
            this.helperStack.push(this.mainStack.pop());
        }
    }
    return this.helperStack.pop();
};

MyQueue.prototype.peek = function() {
    if (this.helperStack.length === 0) {
        while (this.mainStack.length > 0) {
            this.helperStack.push(this.mainStack.pop());
        }
    }
    return this.helperStack[this.helperStack.length - 1];
};

MyQueue.prototype.empty = function() {
    return this.mainStack.length === 0 && this.helperStack.length === 0;
};
