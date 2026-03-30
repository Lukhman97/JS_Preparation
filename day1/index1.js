// 8:Write a function that takes a number N and prints the factorial of N using a loop.

// function factorial(num){
//     fact=1
//     for(let i=1;i<=num;i++){
//         fact*=i
//     }
//     console.log(`factorial of a ${num} is ${fact}`)
// }
// factorial(5)
// let score=48
// switch(true){
//     case (score >=90 & score <=100):
//         console.log("You got A+ grade")
//         break
//     case (score >=80 & score <=90):
//         console.log("You got B+ grade")
//         break
//     case (score >=70 & score <=80):
//         console.log("You got c+ grade")
//         break
//     case (score >=60 & score <=70):
//         console.log("You got D+ grade")
//         break
//     case (score >=50 & score <=60):
//         console.log("You got E+ grade")
//         break
//     case (score <=49):
//         console.log("You are Failed...")
//         break
// }


// i=1
// while (i<=10){
//     console.log(i)
//     i++
// }

// let x=1
// do{
//     console.log("The code was executed ")
//     x++
// }
// while(x<=10)

// let arr=[10,20,30]
// for(let value of arr){
//     console.log(value)
// }


// let string="Lukhmanshaik"
// for(let i of string){
//     console.log(i)
// }


// for of is used for looping values in strings or arrays

// for in is used for objects

// let person={
//     name:"lukhman",
//     age:24,
//     city:"Hyderabad"
// }

// for(let key in person){
//     console.log(key,person[key])
// }



let arr=[10,20,30,40,50,60,70,80,90,100]
// arr.push(40)
// arr.pop()
// arr.unshift(99)
// arr.shift()
// a=arr.indexOf(20)
// console.log(a)
// a=arr.includes(40)
// a=arr.slice(1,8)
// a=arr.splice(1,2)
// a=arr.join("--")

// console.log(a)

let nums=[1,2,3,4,5,6,7,8,9]
// a=nums.sort()
// console.log(a.reverse())

let nums2=nums.map((num1)=>num1*2)
console.log(nums2)

let numfil=nums.filter((fill)=>fill%2==0)
console.log(numfil)