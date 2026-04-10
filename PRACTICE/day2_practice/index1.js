// const add = (a,b) => a + b;
// console.log(add(10,20))

// function add(a,b,ab){
//         var c=a+b
//         console.log("The value is "+c)
//         ab("lukhman")
// }
// function print(name){
//     console.log("The name is "+name)
// }

// add(10,20,print)


// function parent(last_name,age,child_name){
//             console.log(`Parent last name is ${last_name} age is ${age}`)
//             child_name("Lukhman")
// }
// function child_name(name){
//     console.log("child name is "+name)
// }
// parent("shaik",23,child_name)

// const add=(a,b)=>a+b;
// console.log(add(12,24))

// imediatley_invoked funtion 

// (function(){
//     console.log("Lukhman")
// })()

// let fun=()=>{
//     console.log("I am lukhman shaik")
// }
// fun()

// var preson={
//     "name":"Lukhman",
//     "age0":23,
//     show(){
//         console.log("My Name is "+this.name +"and my age is "+this.age0)
    
// }
// }

// preson.show()


// function greet(age){
//     console.log("Name: ",this.name,"Age :",age)
// }
// const user={name:"Lukhman"}

// greet.call(user,23)

// function greet(age,state){
//     console.log("Name :",this.name,"Age :",age,"City: ",this.city,"State :",state)
// }
// const user={
//     name:"Lukhman",
//     city:"Hyd",

// }

// // greet.apply(user,[23,"Andra Praedsh"])

// const greetUser=greet.bind(user,23,"Andra Praedsh")
// greetUser()

// let arr=[1,2,3,4]
// let arr={"name":"lukhman","age":23}
// let arr1={"state":"HYd","villege":"avp"}
// // out={...arr,...arr1}
// // console.log(out)

// let e=[1,2,3,4]
// let [a,b,c,d]=e
// console.log(a,b,c,d)
async function test() {
    return 10;
}
test()