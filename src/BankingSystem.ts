// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.

enum TransactionType {
  Deposit = 'Deposit',
  Withdraw = 'Withdraw'
}

type Transaction = {
  accountNo: number;
  amount: number;
  type: TransactionType;
};

type BankAccount = {
  accountNo: number;
  firstname: string;
  lastname: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[]
}

let accounts: BankAccount[] = [];

function createAccount(accountNo: number, firstname: string, lastname: string, initialDeposit: number, isActive = true, transactions: Transaction[] = []): BankAccount {
  let balance = initialDeposit
  let newAccount: BankAccount = { accountNo, firstname, lastname, balance, isActive, transactions }
  accounts.push(newAccount)
  return newAccount
}

function processTransaction(accountNo: number, amount: number, transactionType: TransactionType): string {
  let thisAccount: BankAccount | undefined  
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].accountNo === accountNo) {
        thisAccount = accounts[i]
        break;
      }
    }
    if (!thisAccount) {
      return 'Account not found.'
    }

  if (transactionType === TransactionType.Deposit) {
    thisAccount.balance += amount
    let newTransaction = { accountNo: thisAccount.accountNo, amount, type: TransactionType.Deposit}
    thisAccount.transactions.push(newTransaction)
    return `${amount} deposited into account number ${accountNo}.`

  } else if (transactionType === TransactionType.Withdraw) {
    if (thisAccount.balance > amount && amount !== 0) {
      thisAccount.balance -= amount
      let newTransaction = { accountNo: thisAccount.accountNo, amount, type: TransactionType.Withdraw}
      thisAccount.transactions.push(newTransaction)
      return `${amount} withdrawn from account number ${accountNo}.`
    } else {
      return 'Insufficient funds for withdrawal'
    }
  } else {
    return 'Invalid transaction type'
  }
}

function getBalance(accountNo: number): number | string {
  let thisAccount: BankAccount | undefined
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNo === accountNo) {
      thisAccount = accounts[i]
    }
  }
  
  if (!thisAccount) {
    return 'Account not found'
  }
  return thisAccount.balance
}

function getTransactionHistory(accountNo: number): Transaction[] | string {
  let thisAccount: BankAccount | undefined
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNo === accountNo) {
      thisAccount = accounts[i]
    }
  }

  if (!thisAccount) {
    return 'Account not found.'
  }

  return thisAccount.transactions
}

function checkActiveStatus(accountNo: number) {
  let thisAccount: BankAccount | undefined
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNo === accountNo) {
      thisAccount = accounts[i]
    }
  }
  
  if (!thisAccount) {
    return 'Account not found'
  }

  return thisAccount.isActive
}

function closeAccount(accountNo: number): string {
  let thisAccount: BankAccount | undefined
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].accountNo === accountNo) {
      thisAccount = accounts[i]
    }
  }
  
  if (!thisAccount) {
    return 'Account not found'
  }

  accounts.filter(account => account.accountNo !== accountNo)
  return `Account number ${accountNo} closed.`
}

// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)) // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)) // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)) // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)) // "Insufficient funds for withdrawal"
console.log(getBalance(1)) // 130
console.log(getTransactionHistory(1)) // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)) // true
console.log(closeAccount(1)) // "Account number 1 closed"