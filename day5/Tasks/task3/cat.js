const bulbImage=document.getElementById("bulbImage");
const catImage=document.getElementById("catImage");

const onSwitch=document.getElementById("onSwitch");
const offSwitch=document.getElementById("offSwitch")
const board=document.getElementById("board")




onSwitch.addEventListener("click", ()=>{
    console.log("Swith ON")
    bulbImage.src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    catImage.src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    board.textContent="Switch ON"
})



offSwitch.addEventListener("click", ()=>{
    console.log("Switch off ")
    bulbImage.src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
     catImage.src="https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
     board.textContent="Switch OFF"
})