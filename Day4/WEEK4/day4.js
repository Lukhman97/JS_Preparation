// console.log(food)
// var food="biriyani"
// console.log(food)

// 1.variable hosting---
// var food

// console.log(food)


// console.log(name)
// var name="Lukhman"

// Tdz----in let and char hosting happens and it will throw it in tdz untill the value is not assignes to an variable

// let name;
// console.log(name)
// name="Lukhamn"


// console.log(name)
// let name="lukhman"



// console.log(name)
// const name="lukhman"

// 2.---funtion hosting---

// add(10,20)
// function add(a,b){
//     console.log(a+b)
// }


// var say=()=>{
//     console.log("I am hsik lukhman 786")
// }
// say()


// say()
// var say=()=>{
//     console.log("I am hsik lukhman 786")
// }

// funtion expression cant be hosted

// start()
// function start(){
//     console.log("You have been started................")
// }


// forin()

// var person={
//     name:"lukhman",
//     age:23,
//     village:"hyderabad"
// }
// for(var i in person){
//     console.log(`${i},${person[i]}`)
// }

// fav_col=["red","blue","white","yellow","Green","black","Pink","neon","sky blue"]
// for(var col of fav_col){
//     document.write(`The colurs are ${col}<br>`)
// }

// fav_col=["red","blue","white","yellow","Green","black","Pink","neon","sky blue"]
// for(var col in fav_col){
//     document.write(`The colurs are ${col}<br>`)
// }

var person={
    name:"lukhman",
    age:23,
    village:"hyderabad"
}
for(var i of person.keys()){
    console.log(`${i},${person[i]}`)
}