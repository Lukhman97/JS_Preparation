// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err=>console.log(err))


// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then(response=>{
//     if(!response.ok){
//         throw new Error("Network was not found")
//     }
//     return response.json()
// }).then(data=>console.log("MAIN data : ",data))
// .catch(err=>console.log("ERROR is" ,err))





// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     title: 'My Title',
//     body: 'This is post content',
//     userId: 1
//   })
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Failed to post data");
//     }
//     return response.json();
//   })
//   .then(data => console.log("POST Response:", data))
//   .catch(error => console.log("Error:", error));

// fetch('https://jsonplaceholder.typicode.com/todos/',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         userId:786,
//         id:786,
//         title:'MY title',
//         title:'excepturi a et neque qui expedita vel voluptate',
//         completed:true
//     })
// }).then(response=>{
//     if(!response.ok){
//         throw new Error("Found a network Error")

//     }
//     return response.json()
// }).then(data=>console.log("My data is : ",data))
// .catch(err=>console.log("Your data has ",err))



// fetch('https://jsonplaceholder.typicode.com/todos/',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         userId:787,
//         id:787,
//         title:'https://jsonplaceholder.typicode.com/todos/',
//         completed:true

//     })

// }).then(response=>{
//     if(!response.ok){
//         throw new Error("The Network was not found!!!!!!!!")
//     }
//     return response.json()
// }).then(data=>console.log(data))
// .catch(err=>console.log(err))

// fetch('https://jsonplaceholder.typicode.com/todos/1',{
//     method:'PUT',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         id:1,
//         userId:1,
//         title:'excepturi a et neque qui expedita vel voluptate',
//         completed:true 
//     })

// })
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))



// fetch('https://jsonplaceholder.typicode.com/todos/1',{
//     method:'PATCH',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         title:'hai hai hai hai hai hai hai hai'
//     })

// })
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))


// fetch('https://jsonplaceholder.typicode.com/todos/1',{
//   method: 'DELETE'
// })
//   .then(res => {
//     console.log("Status:", res.status,res.ok);
//     console.log("Deleted successfully");
//   })
//   .catch(err => console.log(err));


// fetch('https://jsonplaceholder.typicode.com/todos/1',{
//     method:'DELETE',
//     headers:{
//         'Content-Type':'application/json'
//     }
// })
// .then(res=>res.json())
// .then(data=>console.log(data))




// fetch('https://jsonplaceholder.typicode.com/todos/',{
//     method:'GET',
//     headers:{
//         'Content-Type':'application/json'
//     },
// })
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))



// async function getUsers() {
//   try {
//     console.log("Loading...");
    
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!res.ok) {
//       throw new Error("Failed to fetch users");
//     }

//     const data = await res.json();

//     console.log("Users:", data); /*data.map(user => user.username) */

//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }
// getUsers();

// async function createPost() {
//   const newPost = {
//     title: "React Learning",
//     body: "Fetch API is important",
//     userId: 10
//   };

//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(newPost)
//     });

//     const data = await res.json();
//     console.log("Created Post:", data);

//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// createPost();

// async function updateUser() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         id: 1,
//         name: "Lukhman",
//         email: "lukhman@gmail.com"
//       })
//     });

//     const data = await res.json();
//     console.log("Updated User:", data);

//   } catch (err) {
//     console.log(err);
//   }
// }

// updateUser();

async function updateStatus() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        completed: true
      })
    });
    const data = await res.json();
    console.log("Updated Status:", data);
  } catch (err) {
    console.log(err);
  }
}
updateStatus();