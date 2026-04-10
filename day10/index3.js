// async function getData() {
//     try {
//         const response = await fetch("wrong_url");

//         if (!response.ok) {
//             throw new Error("Server Error");
//         }

//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.log("Fetch Error:", error.message);
//     }
// }

// getData();


// // localStorage.setItem("name", "Lukhman");
// const name = localStorage.getItem("name");
// console.log(name);

// const user = {
//     name: "Lukhman",
//     age: 22
// };

// localStorage.setItem("user", JSON.stringify(user));

const data=new Promise((reslove,rejected)=>{
    let age=88
    if(age>18){
        console.log("Yu rae sleetced.......")
    }
    else{
        console.log("You are rejected/.......")
    }
})
data.then(res=>console.log(res)).catch((err)=>console.log("You are right........"))