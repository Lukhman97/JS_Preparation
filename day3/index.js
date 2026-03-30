let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";
 
let containerElement = document.getElementById("myContainer");
containerElement.appendChild(h1Element);
 
let btnElement = document.createElement("button");
btnElement.textContent = "Change Heading";
 
 
containerElement.appendChild(btnElement);


function btn(){
    let ns=document.getElementById("nap")
        ns.addEventListener("click",()=>{
        ns.innerHTML="<h1>I am the coder</h1>"
        ns.style.color="red"
        ns.style.background="yellow"
        // ns.style.display="none"
    }
    )
   
}
btn()