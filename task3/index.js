
let bulb = document.getElementById("bulbImage");
let cat = document.getElementById("catImage");

let isOn = true;  // current state

bulb.addEventListener("click", toggleSwitch);
cat.addEventListener("click", toggleSwitch);

function toggleSwitch() {
  if (isOn) {
    // turn OFF
    bulb.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    cat.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    console.log("OFF");
  } else {
    // turn ON
    bulb.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    cat.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    console.log("ON");
  }

  isOn = !isOn; // toggle state
}
