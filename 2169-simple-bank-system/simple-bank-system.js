/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.balance = balance;
    // Store the total number of accounts for validation.
    this.numAccounts = balance.length;
};

// Helper function to validate if an account number is within the range [1, numAccounts]
Bank.prototype.isValidAccount = function(account) {
    return account >= 1 && account <= this.numAccounts;
};

/**
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    // 1. Validate both account numbers
    if (!this.isValidAccount(account1) || !this.isValidAccount(account2)) {
        return false;
    }

    // Convert 1-indexed account numbers to 0-indexed array indices
    const index1 = account1 - 1;
    const index2 = account2 - 1;

    // 2. Validate sufficient funds in account1
    if (this.balance[index1] < money) {
        return false;
    }

    // 3. Perform the transaction
    this.balance[index1] -= money;
    this.balance[index2] += money;
    
    return true;
};

/**
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    // 1. Validate the account number
    if (!this.isValidAccount(account)) {
        return false;
    }

    // Convert 1-indexed account number to 0-indexed array index
    const index = account - 1;

    // 2. Perform the transaction
    this.balance[index] += money;
    return true;
};

/**
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    // 1. Validate the account number
    if (!this.isValidAccount(account)) {
        return false;
    }

    // Convert 1-indexed account number to 0-indexed array index
    const index = account - 1;

    // 2. Validate sufficient funds
    if (this.balance[index] < money) {
        return false;
    }

    // 3. Perform the transaction
    this.balance[index] -= money;

    return true;
};

/** * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */