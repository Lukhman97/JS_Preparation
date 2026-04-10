
// // 1.normalized ananomous funtion 
// var res=function(){
//     document.write("security:::::why are you here? where are you from!!!!!!!!!!!!!!! <br>")

// }
// res()

// // 2.paramterized anamous funtion 

// var say=function(purpose,city){
//     document.write("Me:::::i am here for an ",purpose,"i am from ",city,"<br>")
// }

// say("Intreview","Andra pradesh")


// // 3.paramertized return funtion 
// var ask=function(venue,floor){
//     return "Where should i go which " +venue + "which floor " +floor
// }
// document.write(ask("Department ","3Rd floor isn't it!!!!!"))
// // console.log(ask("Department","3Rd floor isn't it!!!!!"))

// // 4.ananomous arrow function
// var sky=(()=>{
//     document.write("<br>I am selected for an interview with the package of 77lpa")
// })

// sky()

// // 5.paramertized ananomous arrow function

// var snow=((name,id,Department)=>{
//     document.write("<br>i am "+name + "my ID is " +id + "my department is "+Department)
// })

// snow("Lukhman shaik",786,"UNI73")


// {/* <br> */}

function print(){
    document.write("<br>","Printing NUMBERs and aggrigation funtions------------","<br>")

}
function add(a,b){
    c=a+b
    document.write(c,"<br>")
}
function sub(a,b){
    c=a-b
    document.write(c,"<br>")
}
function fun(){
    console.log("I am lukhmans haik")

}
fun(print(),add(10,12),sub(110,100))


function fun_name(f,name){
    console.log(name)
    f();
}
fun_name(()=>{
    console.log("I am about to loose my last change these year")
},"Lukhman")

fun_name()


// function and_or(add,delete1,name){
//     add(10,20)

//     console.log(delete1,name)
// }

// and_or((a,b)=>{
//     c=a+b
//     console.log(c)
// },"LLLLLLLLLL","lukhman shaik")

// (()=>{
//     document.write("I am lukhmanshaik11111")
// })()

// (function(){
//     document.write("i am avadapaduu")
// })()


async function fetchData() {

    var responce=await fetch('https://fakestoreapi.com/products')
    var result= await responce.json()
    console.log(result)
}
fetchData()