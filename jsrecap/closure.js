// const bank = owner => {
//     balance = 0;
//     return amount => {
//         //balance = balance + amount;
//         balance += amount;
//         return balance;
//     }
// }


const bank = owner => {
    balance = 0;
    return {
        deposit:amount => {
            balance += amount;
            return balance;
        },
        withdraw:amount => {
            balance -= amount;
            return balance;
        }
    }
}





const MofijBank = bank('Mofij');
console.log(MofijBank.deposit(100));
console.log(MofijBank.deposit(300));
console.log(MofijBank.deposit(50));

console.log(MofijBank.balance);

console.log(MofijBank.deposit(200));

console.log(MofijBank.withdraw(200));