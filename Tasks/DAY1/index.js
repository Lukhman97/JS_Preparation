// Find the first non-repeated character

function first_non_Repeating_charector(string){
    empty_dici={}
    for(let i=0;i<string.length;i++){
        if (string[i] in empty_dici){
            empty_dici[string[i]]+=1

        }
        else{
            empty_dici[string[i]]=1
        }
    }
    for(let i in empty_dici){
        if(empty_dici[i]==1){
            console.log(i)
            break
        }
    }
}
///////
function firstNonRepeated(str) {
    const map = new Map();

    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let [key, value] of map) {
        if (value === 1) return key;
    }
    return null;
}
console.log(firstNonRepeated("aman"))
/////////
first_non_Repeating_charector("aman")


function reverse_string(string1){
    empty_string=""
    for (i=string1.length-1;i>=0;i--){
        empty_string=empty_string+string1[i]

    }
    console.log(empty_string)
}

reverse_string("Hello World!")


///////////////////
function reverse_string(str){
    console.log(str.split("").reverse().join(""));
}
reverse_string("lukhman shaik786")
////////////////


//  Example: reverseWords("Hello world!") → "olleH !dlrow"
// Q4. Sum digits until single digit
// Question:
//  Write a function digitalRoot(n) that takes a non-negative integer n and repeatedly sums its digits until the result is a single digit, then returns that digit.
//  Example: digitalRoot(49) → 4 + 9 = 13 → 1 + 3 = 4 → returns 4.


function sum_digits(num){
    while(num>=10){
        let sum=0
        for (let digit of num.toString()){
            sum+=Number(digit)
            // console.log(digit)
        }
        num=sum
    }
    return num

}
console.log(sum_digits(49))

function s_digits(num){
    let sum = 0;

    if (num < 10) {
        return num;
    } else {

        while (num > 0) {
            let digit = num % 10;          // last digit
            sum += digit;
            num = Math.floor(num / 10);    // remove last digit
        }

        return s_digits(sum); // recursion
    }
}

///////
function isEmptyObject(obj) {
    return Object.entries(obj).length === 0;
}
console.log(isEmptyObject({}))
console.log(isEmptyObject({"name":"lukhman","age":23}))

//////

function range(start,end,step=1){
    let result=[]

    if(step>0){
        for(let i=start;i<=end;i+=step){
            result.push(i)
        }
    }
    else{
        for(let i=start;i>=end;i+=step){
            result.push(i)
        }

    }
    return result
}

console.log(range(1,5))
console.log(range(5,0,-1))
console.log(range(2,10,2))

/////
function charCount(string2){
    let dicti={}
    for(let i in string2){
        if (string2[i] in dicti){
            dicti[string2[i]]+=1

        }
        else{
            dicti[string2[i]]=1
        }
        
        
    }return dicti
    
}
console.log(charCount("aman"))
//////

function fibba(num1){
    let first_num = 0;
    let second_num = 1;
    let result = [];

    for(let i = 0; i <= num1; i++){
        result.push(first_num);
        [first_num, second_num] = [second_num, first_num + second_num];
    }

    return result;
}

console.log(fibba(3));

///////

function removeFalsyValue(arr){
    let result = [];

    for (let value of arr) {
        if (value) {     
            result.push(value);
        }
    }

    return result;
}

console.log(removeFalsyValue([0, false, "", 5, null, "hello", undefined]));

function removeFalsy(arr) {
    return arr.filter(Boolean);
}

console.log(removeFalsy([0, 1, false, 2, "", 3, null, undefined, NaN]));

//////

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Hello World"));


///////////////////
