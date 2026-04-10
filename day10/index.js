// async function getProducts() {
//     const hai = await fetch("https://fakestoreapi.com/products/");
//     const data = await hai.json();

//     const list = document.getElementById("userList");

//     data.forEach(product => {
//         const li = document.createElement("li");
//         li.innerText = product.title;
//         list.appendChild(li);
//     });
// }

// getProducts();



async function getProducts(){
    try {
        const response=await fetch("https://fakestoreapi.com/products/")
        const data=await response.json();
        console.log(data);
    }
    catch(error){
        console.error("Error fetching products:",error);
}}

async function addProduct() {
    const newProduct={
        title:"Lukhman shirt",
        price:499,
        description:"Nice shirt",
        category:"men's clothing"
    };
    try{
        const response=await fetch("https://fakestoreapi.com/products/",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newProduct)
        });
        if(!response.ok){
            throw new Error("Failed to add product");

        }
        const data=await response.json();
        console.log("Product added:",data);
    }catch(error){
        console.error("Error adding product:",error);
    }
    
}
// addProduct()
// getProducts()


async function getAll(){
    try{
        const response=await fetch("https://fakestoreapi.com/products/",{
        method:"POST",
        headers:{
           "content-type":"application/json"
        },
        body:JSON.stringify({ 
        title: "Lukhman Shirt",
        price: 499,
        description: "Nice shirt",
        category: "men's clothing"})
    })
    if (!response.ok){
        throw new Error("Raised an error")
    }
    const data=await response.json()
    console.log("Created : ",data)

    }
catch(error){
    console.log("Error:", error.message);
}
}
getAll()