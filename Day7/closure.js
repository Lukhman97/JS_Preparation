// let count=0

// function counter(){
//     count++
//     console.log(count)
// }
// counter()
// counter()
// counter()

// function outerfunction(){
//     let count=0
//     return function (){
//         count++
//         console.log(count)
//     }
// }

// const count1=outerfunction()
// count1()
// count1()


// function createBankAccount(initialBalance) {
//     let balance = initialBalance; // private variable

//     return {
//         deposit: function(amount) {
//             balance += amount;
//             console.log("Deposited:", amount);
//         },
//         withdraw: function(amount) {
//             if (amount <= balance) {
//                 balance -= amount;
//                 console.log("Withdrawn:", amount);
//             } else {
//                 console.log("Insufficient balance");
//             }
//         },
//         getBalance: function() {
//             console.log("Balance:", balance);
//         }
//     };
// }

// const account = createBankAccount(1000);

// account.deposit(500);   // Deposited: 500
// account.withdraw(200);  // Withdrawn: 200
// account.getBalance();   // Balance: 1300



// function outer(){
//     let x=10
//      return function(){
//         x++;
//         console.log(x)
//     }
   
// }

// const val=outer()
// val()
// val()



