// var promise=new Promise((resloved,rejected)=>{
//     let age=2
//     if(age>=18){
//         console.log("yes you are elligible to Vote")
//     }
//     else{
//         console.log("You are not elligible")
//     }
// }).then((resloved)=>{
//     console.log(resloved)
// })
// .catch((rejected)=>{
//     console.log(rejected)
// })



var promise=new Promise((resloved,rejected)=>{
    let age=2
    if(age>=18){
        console.log("yes you are elligible to Vote")
    }
    else{
        console.log("You are not elligible")
    }
}).then((resloved)=>{
    console.log(resloved)
})
.catch((rejected)=>{
    console.log(rejected)
})