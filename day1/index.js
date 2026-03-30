// 1:Write a function that takes a number as input and prints whether the number is even or odd using an if-else statement.


let a1=prompt("Enter the Number : ")

if(a1%2==0){
    console.log("It's an Even Number......")
}
else{
    console.log("IT is an Odd Number.....")
}

// 2:Write a function that takes three numbers as input and prints the largest number using if-else.
let FirstNumber=prompt("Enter the FirstNumber Number : ")
let SecondNumber=prompt("Enter the SecondNumber Number : ")
let ThirdNumber=prompt("Enter the ThirdNumber Number : ")
if((FirstNumber>=SecondNumber) && (FirstNumber>=ThirdNumber)){
    console.log(`First Number i.e.${FirstNumber}is the largest`)
}
else if(SecondNumber>=ThirdNumber){
    console.log(`second Number i.e.${SecondNumber}is the largest`)

}
else{
    console.log(`Third Number i.e.${ThirdNumber}is the largest`)
}
// 3:Write a function that takes a number N and prints all numbers from 1 to N using a for loop.
let n = Number(prompt("Enter the Numbner :"))

for (let i=1;i<=n;i++){
    
    console.log(i)
}
// 4:Write a function that takes a number as input and prints its multiplication table (from 1 to 10) using a loop.
function tables(num) {
    for (let i = 1; i <= 20; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

let a = Number(prompt("Enter the required table.."));
tables(a);

// 5:Write a function that takes a number N and prints the sum of the first N natural numbers using a loop.

function sum_add(num1){
    let total=0
    for (let i=1;i<=num1;i++){
        total+=i
        
    }
    console.log(`The total sum is ${total}`)
}
num1=Number(prompt("Enter the number : "))
sum_add(10)


// 6:Write a function that takes a person’s age and prints whether they are eligible to vote (18 or older) using an if-else statement.
function Voting() {
    let age = prompt("Enter the age of a person:");

    if (age >= 18) {
        console.log("You are eligible to vote");
    } else {
        console.log("You are not eligible to vote here");
    }
}

 Voting();



// 7:Write a function that takes an array of numbers and prints how many even and how many odd numbers are in the array using a loop and if-else.

function even_odd(arr){
    even_count=0
    odd_count=0
    for(i in arr){
        if (i%2==0){
            even_count+=1 
        }
        else{
            odd_count+=1
        }
    }

    console.log(`the total number of Even count is ${even_count}`)
    console.log(`The Total number of odd count is ${odd_count}`)
}

even_odd([12,13,122,45,67,55,78,77,99,887,665,443,224,999])


// 8:Write a function that takes a number N and prints the factorial of N using a loop.

function factorial(num){
    fact=1
    for(let i=1;i<=num;i++){
        fact*=i
    }
    console.log(`factorial of a ${num} is ${fact}`)
}
factorial(5)

