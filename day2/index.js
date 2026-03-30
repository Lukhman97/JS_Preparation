// 1 Print numbers from 1 to 10 using a for loop
for(let i=1;i<=10;i++){
    console.log(i)
}
// 2 Print numbers from 10 to 1 (reverse order)
for(let i=10;i>=1;i--){
    console.log(i)
}
// 3 Print all even numbers from 1 to 20
console.log(`The even numbners are :`)
for(let i=1;i<=21;i++){
    if(i%2==0){
        console.log(i)
    }
}

// 4 Print all odd numbers from 1 to 20
console.log(`The odd numbners are :`)
for(let i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i)
    }
}
// 5 Print the multiplication table of 5
let num=5
for(let i=1;i<=20;i++){
    console.log(`${i} * ${num} = ${num*i}`)
}

// 6 Print numbers from 1 to N (take N as input)
// n=Number(prompt("Enter the number : "))
n=10
for(let i=1;i<=n;i++){
    console.log(i)
}

// 7 Print the sum of numbers from 1 to 10
let sum=0
for(let i=1;i<=10;i++){
    sum+=i

}
console.log(sum)


// 8 Print the sum of even numbers from 1 to 20
let sumeven=0
for(let i=1;i<=20;i++){
    if(i%2==0){
        sumeven+=i
    }
}
console.log(`The sum of even numbers is ${sumeven}`)

// 9 Print numbers divisible by 3 between 1 and 30
for(let i=1;i<=30;i++){
    if(i%3==0){
        console.log(i)
    }
}
// 10 Count how many numbers are divisible by 5 between 1 and 50

count=0
for(let i=1;i<=50;i++){
    if(i%5==0){
        count+=1
    }
}
console.log("The count of numbers that are divisible by 5 is ",count)

// 1 Find the sum of first N natural numbers
n=30
sum_natural=(n*(n+1))/2
console.log("The sum of natural number is ",sum_natural)
// 2 Find the factorial of a number
n=5
fact=1
for(let i=1;i<=n;i++){
    fact*=i
}
console.log(`The factorial of given number is ${n} is ${fact}`)

// 3 Reverse a number (e.g., 123 → 321)
value = 0;
number1 = 289;
num1 = number1;

while(num1>0){
    num=num1%10
    value=value*10+num
    num1=Math.floor(num1/10)
}
console.log(value)

// 4 Count digits in a number
count=0
number2=14350
num1=number2
while (num1>0){
    num=num1%10
    count+=1
    num1=Math.floor(num1/10)
}
console.log(count)
// 5 Find the largest digit in a number
largestNumber=0
number3=15678
num1=number3
while(num1>0){
    num=num1%10
    if (largestNumber<num){
        largestNumber=num
    }
    num1=Math.floor(num1/10)
}
console.log(largestNumber)

// 6 Check if a number is a palindrome
value = 0;
number1 = 121;
num1 = number1;
originalValue=number1

while (num1 > 0) {
    let num = num1 % 10;
    value = value * 10 + num;
    num1 = Math.floor(num1 / 10);
}
if (value===originalValue){
    console.log("It is an palindrom")
}
else{
    console.log("It is not a palindrom")
}

// 7 Print Fibonacci series up to N terms
n=10
a=0
b=1
for(let i=0;i<=n;i++){
    console.log(a)
    temp=a+b
    a=b
    b=temp
}


// 8 Find the sum of digits of a number
sum=0
number4=1234
num1=number4
while(num1>0){
    num=num1%10
    sum=sum+num
    num1=Math.floor(num1/10)
}
console.log(`The sum of  digits of numbers is ${sum}`)
// 9 Print squares of numbers from 1 to 10

i=1
while(i<=10){
    console.log(`${i} * ${i} = ${i*i}`)
    i++
}
// 10 Print cubes of numbers from 1 to 10

i=1
while(i<=10){
    console.log(`${i} * ${i} * ${i} = ${i*i*i}`)
    i++
}



// =========================================
// Level 3: Beginner+
// 1 Print star increasing pattern

n=5
row=""
for(let i=0;i<=5;i++){
    row+="*"
    for(let j=0;j<=5;j++){
    }
    console.log(row)
    
}

// 2 Print star decreasing pattern
n = 5;

for (let i = n; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
 
// 3 Print number increasing pattern

n=5
row1=""
for(i=1;i<=5;i++){
    row1+=`${i} `
    for(j=0;j<=5;j++){

    }
    console.log(row1)
}
// 4 Print repeated number pattern
n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }
    console.log(row);
}
// 5 Print star pyramid

n = 5;

for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*";
    }
    console.log(row);
}

n=6
for(i=n;i>=1;i--){
    let row4=""
    for(j=i;j>=0;j--){
        row4+=" "
    }
    for(k=1;k<=n-i;k++){
        row4+=" *"
    }
    console.log(row4)
}     

// 6 Print numbers from 1 to 100 skipping multiples of 5
let arr=[]
for(i=1;i<=100;i++){
    if (i%5==0){
        continue
    }
    else{
        arr.push(i)
    }
}
console.log(arr)


// 7 Find the average of N numbers
sum2=0
function sum_of_number(num4){
    for(i=0;i<=num4;i++){
        sum2+=i
    }
    return sum2
    }
// sum_of_number(4)
num4=10
average=(sum_of_number(num4))/num4
console.log(average)

// 8 Count how many even and odd numbers in a range

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

// 9 Print all factors of a number
num6=12
for(i=1;i<=num6;i++){
    if(num6%i==0){
        console.log(i)
    }
}
// 10 Check if a number is prime
isPrime=true
num5=23
for(i=2;i<num5;i++){
    if (num5%i==0){
        isPrime=false
    }
}
if (isPrime){
    console.log("It is a prime number")
}
else{
    console.log("It is not a prime number")
}

//  Level 4: Intermediate
// 1 Print all prime numbers between 1 and 100
function primeNum(num7){
    isPrime=true
    for(i=2;i<num7;i++){
    if (num7%i==0){
       isPrime=false
    }
} 
    return isPrime
}
// console.log(primeNum(7))
list=[]
for(i=1;i<=100;i++){
    if (primeNum(i)){
        list.push(i)
    }
}
console.log(list)
// 2 Find GCD of two numbers using loops
function getHcf(n1,n2){
    let hcf=0
    for(let i=1;i<=n1 && i<=n2;i++){
        if(n1%i==0 && n2%i==0){
            hcf=i
        }
    }
    return hcf
}


let n1=12,n2=36
console.log(`HCF of numbers ${n1} and ${n2} is ${getHcf(n1,n2)}`)

// 3 Find LCM of two numbers
function getLcm(a7, b7) {
    let lcm=a7>b7?a7:b7
    while(lcm%a7==0&& lcm%b7==0){
        lcm++
    }
   return lcm
}

// console.log(getLcm(2, 3)); 
let a7=12,b7=26
console.log(`LCM of numbers ${a7} and ${b7} is ${getLcm(a7,b7)}`)

// 4 Print multiplication tables from 1 to 10

function tables(tab){
    for(i=1;i<=10;i++){
        console.log(`${i} * ${tab} = ${i*tab}`)
    }
}
for(tab=1;tab<=10;tab++){
    tables(tab)
    console.log("Table finished ")
}

// 5 Find sum of factorial series (1! + 2! + ... + N!)

function factorial(num8){
    fact=1
    for(i=1;i<=num8;i++){
        fact*=i
    }
    return fact
}
// factorial(5)
n=4
sum_of_fact=0
for(num8=1;num8<=n;num8++){
    sum_of_fact+=factorial(num8)
}
console.log(sum_of_fact)
// 6 Print Armstrong numbers between 1–1000

function count_digits(num10){
    count=0
    while(num10>0){
        num=num10%10
        count+=1
        num10=Math.floor(num10/10)
    }
    return count
}
function Armstrong_number(num10){
    num11=num10
    sum10=0
    while(num10>0){
        num=num10%10
        sum10+=num**count_digits(num11)
        num10=Math.floor(num10/10)
    }
    console.log(sum10)
}
Armstrong_number(153)

// 7 Check if a number is Armstrong

function Armstrong_num(num12){
    num13=num12
    sum11=0
    while(num12>0){
        num=num12%10
        sum11+=num**count_digits(num13)
        num12=Math.floor(num12/10)
    }
    if (num13==sum11){
        return "It is an amstrong number"
    }
    else{
        return "It is not an amstrong number"
    }
}
console.log(Armstrong_num(153))
// 8 Reverse a string using a loop
string="lukhmanshaik"
reverse=""
for(i in string){
    reverse=string[i]+reverse
}
console.log(reverse)

// 9 Count vowels in a string
string="lukhmanshaik"
voewls='aeiouAEIOU'
count=0
for(i in string){
    if(voewls.includes(string[i])){
        count+=1
    }
}
console.log(count)
// 10 Find the longest word in a sentence

function countstring(s){
    c=0
    for(i in s){
        c+=1
    }
    return c
}
// console.log(countstring("lukhmans"))

sent="I am lukhman i am from andra pradesh i complted my btech in bvc college Odalarevu111"
sent1=sent.split(" ")
sent2=""
co=0
for(s of sent1){
    
    if (co<countstring(s)){
        co=countstring(s)
        sent2=s
    }  
}
console.log(`The longest string count is ${co} and the string is ${sent2}`)


// Level 5: Advanced
// 1 Remove duplicates from an array (without using Set)
let array=[1,2,3,4,1,2,3,4,5,6,7,9,6,9]
let arr1=[]
for(i in array){
    if (!(arr1.includes(array[i]))){
        arr1.push(array[i])
    }
}
console.log(arr1)
// 2 Find the second largest number in an array
let array1=[12,3,4,56,99,99,999,888,897]
largest=0,second_largest=0

for(i of array1){
    if (i >largest){
        second_largest=largest
        largest=i
    }
    else if (i > second_largest && i !== largest) {
        second_largest = i;
    }
}
console.log(`Second largest number is ${second_largest}`)
// 3 Find missing number in array (1 to N)
function sum_of_N_numbers(num14){
    sum=0
    for(i=1;i<=num14;i++){
        sum+=i
    }
    return sum
}
num14=15
// console.log(sum_of_N_numbers(num14))
array3=[1,2,3,4,5,6,7,8,9,10,11,12,13,15]
sum1=0
for(i of array3){
    sum1+=i
}
console.log(`The missing number is ${sum_of_N_numbers(num14)-sum1}`)
// 4 Sort an array using Bubble Sort 
let arr7=[9,5,4,2,3,6,7]

for(i=0;i<=arr7.length;i++){
    for (j=0;j<=arr7.length-1;j++){
        if(arr7[j]>arr7[j+1]){
            temp=arr7[j]
            arr7[j]=arr7[j+1]
            arr7[j+1]=temp
        }
    }
}
console.log(arr7)

// 5 Find intersection of two arrays
let ar1=[1,2,3,4,5]
let ar2=[6,7,8,9,10]
ar3=[...ar1,...ar2]
console.log(ar3)
// 6 Count frequency of each element in array
ar4=[1,2,3,4,1,2,3,4,5,6,7,8,5,6,7,8,8,5,3,2,1,1,4,1,1,1]
dicti={}
for(i of ar4){
    if( i in dicti){
        dicti[i]+=1
    }
    else{
        dicti[i]=1
    }
}
console.log(dicti)
// 7 Flatten a nested array (1 level)

arr5=[[1,2,3],[4,5,6],[7,8,9,99]]
arr6=[]
for(i of arr5){
    for (j of i){
        arr6.push(j)
    }

}
console.log(arr6)

// 8 Rotate array to right by K steps
let arr8 = [1,2,3,4,5];
k = 2;
for(i=0;i<=k;i++){
    a=arr8.pop()
    arr8.unshift(a)
}
console.log(arr8)

// 9 Find pairs whose sum = target
let arr10 = [6,4,5,7,8,2];
let target = 12;

for (i=0; i < arr10.length;i++) {
    for (j=i+1;j<arr10.length;j++) {
        if(arr10[i]+arr10[j]==target) {
            console.log(arr10[i],arr10[j]);
            break;
        }
    }
}


// 10 Create a simple number guessing game using loop

// let heading = document.querySelector(".hai");

// heading.textContent += " - This is a game to validate a random number";


let randomNumber=Math.floor(Math.random()*100)+1

let guess;
while(true){
    guess=prompt("Guess a random number : ")

    if(guess===randomNumber){
        document.write(`You gussed the correct number `)
        break
    }
    else{
        document.write(`\n You are very close to it and the random number is ${randomNumber}`)
        break

    }

}

