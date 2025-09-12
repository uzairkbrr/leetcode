function Node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length) return -1;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
        temp = temp.next;
    }
    return temp.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head == null) {
        this.head = new Node(val);
        this.length++;
        return;
    }

    let temp = this.head;
    while (temp.next != null) {
        temp = temp.next;
    }
    temp.next = new Node(val);
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.length) return;

    if (index == 0) { 
        this.addAtHead(val);
        return;
    } 

    if (index === this.length) {
        this.addAtTail(val);
        return;
    }

    let newNode = new Node(val);
    let temp = this.head;

    for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
    }

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) {
        this.head = this.head.next;
        this.length--;
        return;
    }

    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
        temp = temp.next;
    }
    temp.next = temp.next.next;
    this.length--;
};

/** 
 * Usage:
 * var obj = new MyLinkedList()
 * obj.addAtHead(1)
 * obj.addAtTail(3)
 * obj.addAtIndex(1,2) // linked list becomes 1->2->3
 * console.log(obj.get(1)) // returns 2
 * obj.deleteAtIndex(1) // now 1->3
 * console.log(obj.get(1)) // returns 3
 */
