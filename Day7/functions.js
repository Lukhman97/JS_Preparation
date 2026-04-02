// 1.named function: A function with fucntion keyword and function_name is known as named fucntion
// example:
function function_name(){
    console.log("It is a function......")
}
function_name()

// 2.parametarized function : The function by passing parameters are know as perametarized function

function parameterized_function(a,b){
    console.log(`The values of a and b is ${a},${b} and thei sum is ${a+b}`)
}

parameterized_function(10,20)

function outer() {
    
        return 10;
}

console.log(outer());


var display=()=>{
    console.log("Hello arrow")
}
display()


var add=(a,b)=> a*b
console.log(add(10,20))

var with1=function(){
    console.log(with1)
}
console.log()


function add(a, b) {
    return a + b;
}

const sub = function(a, b) {
    return a - b;
};

const mul = (a, b) => a * b;

function outer1() {
    return function() {
        return "Hello";
    };
}

function outer2() {
    return function(a, b) {
        return a + b;
    };
}

(function() {
    console.log("IIFE");
})();

function greet(name = "User") {
    return "Hello " + name;
}

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

function test(a, b) {
    return arguments[0] + arguments[1];
}

const obj = {
    value: 10,
    getValue: function() {
        return this.value;
    }
};

console.log(add(2, 3));
console.log(sub(5, 2));
console.log(mul(3, 4));
console.log(outer1()());
console.log(outer2()(1, 2));
console.log(greet());
console.log(sum(1, 2, 3));
console.log(test(4, 5));
console.log(obj.getValue());


