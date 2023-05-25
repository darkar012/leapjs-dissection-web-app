import "../../node_modules/leapjs/leap-1.1.1.js";
let indexFingerX = 0;
let indexFingerY = 0;
var contador = 0;
let overlayBtn = false
let YArray = [];
let yNArray = [];
let guideBtn = document.querySelector(".guiasBtn");
let labBtn = document.querySelector(".labBtn");
let atlasBtn = document.querySelector(".atlasBtn");
let tutorialBtn = document.querySelector(".tutorial");
let guideDissections = document.querySelector(".heart");
let container = document.querySelector(".container");

let overlay = document.createElement("div");
overlay.classList.add("overlay");

overlay.innerHTML = `
<img src="../../imgs/home/signOverlay.png" class="sign" alt="">
<img src="../../imgs/home/textoOverlay.png" class="texto" alt="">
<img src="../../imgs/home/continuarOverlay.png" class="continuarBtn" alt="">
`
setTimeout(() => {
container.appendChild(overlay);
overlayBtn = true
}, 2000)




for (let i = 0; i < 300; i++) {
  YArray.push(300 - i);
}

for (let i = 0; i < 300; i++) {
  yNArray.push(i + 300);
}

var controller = new Leap.Controller();
controller.connect();

// Add listener for frame events
controller.on("frame", function (frame) {
  var extendedFingers = 0;
  // Iterate through each hand in the frame
  for (var i = 0; i < frame.hands.length; i++) {
    // Iterate through each finger in the hand
    for (var j = 0; j < frame.hands[i].fingers.length; j++) {
      // Check if the finger is extended

      if (frame.hands[i].fingers[j].extended) {
        extendedFingers++;
      }
    }
  }

  if (extendedFingers >= 1 && extendedFingers <= 5) {
    frame.hands.forEach(function (hand) {
      // Iterate through each finger on the hand
      let indexFingerZ = hand.fingers[1].tipPosition[2];
      indexFingerX = hand.fingers[1].tipPosition[0];
      indexFingerY = hand.fingers[1].tipPosition[1];

      let cursoY = function (value) {
        let intFingerY = Math.trunc(value);
        if (intFingerY < 300) {
          return YArray.indexOf(intFingerY);
        } else {
          if (intFingerY > 599) {
            return -300;
          } else {
            return yNArray.indexOf(intFingerY) * -1;
          }
        }
      };
      var cursor = document.getElementById("cursor");
      var cursorMini = document.getElementById("cursorMini");
      var loader = document.querySelector(".loader");

      if (indexFingerX > 0) {
        cursor.style.left = indexFingerX * 4 + window.screen.width / 2 + "px";
        cursorMini.style.left =
          indexFingerX * 4 + window.screen.width / 2 + "px";
      } else {
        cursor.style.left = indexFingerX * 4 + window.screen.width / 2 + "px";
        cursorMini.style.left =
          indexFingerX * 4 + window.screen.width / 2 + "px";
      }

      if (
        window.screen.height / 2 + cursoY(indexFingerY) >
        window.screen.height
      ) {
        cursor.style.top = window.screen.height + "px";
        cursorMini.style.top = window.screen.height + "px";
      } else {
        cursor.style.top =
          window.screen.height / 2 + cursoY(indexFingerY) * 4 + "px";
        cursorMini.style.top =
          window.screen.height / 2 + cursoY(indexFingerY) * 4 + "px";
      }

      if (overlayBtn){
        let continuarBtn = document.querySelector(".continuarBtn")
let yContinuar = continuarBtn.getBoundingClientRect().top;
let xContinuar = continuarBtn.getBoundingClientRect().left;

        if (
          parseInt(cursor.style.top.split("px")) > yContinuar &&
          parseInt(cursor.style.top.split("px")) < yContinuar + 80 &&
          parseInt(cursor.style.left.split("px")) > xContinuar &&
          parseInt(cursor.style.left.split("px")) < xContinuar + 200
        ) {
          loader.style.display = "block";
          console.log(cursor.style.width);
          loader.style.top =
            parseInt(cursor.style.top.split("px")) - 12.5 + "px";
          loader.style.left =
            parseInt(cursor.style.left.split("px")) - 12.5 + "px";
          loader.style.zIndex = 12;
  
          contador += 20;
  
          if (contador == 3000) {
            container.removeChild(overlay);
            overlayBtn = false
          }
        } else {
          loader.style.display = "none";
          contador = 0;
        }
      } else {
        let yGuide = guideBtn.getBoundingClientRect().top;
        let xGuide = guideBtn.getBoundingClientRect().left;
        let yLab = labBtn.getBoundingClientRect().top;
        let xLab = labBtn.getBoundingClientRect().left;
        let yAtlas = atlasBtn.getBoundingClientRect().top;
        let xAtlas = atlasBtn.getBoundingClientRect().left;
        let yTutorial = tutorialBtn.getBoundingClientRect().top;
        let xTutorial = tutorialBtn.getBoundingClientRect().left;
        let yGuidesDis = guideDissections.getBoundingClientRect().top;
        let xGuidesDis = guideDissections.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > yGuide &&
            parseInt(cursor.style.top.split("px")) < yGuide + 80 &&
            parseInt(cursor.style.left.split("px")) > xGuide &&
            parseInt(cursor.style.left.split("px")) < xGuide + 200
          ) {
            loader.style.display = "block";
            console.log(cursor.style.width);
            loader.style.top =
              parseInt(cursor.style.top.split("px")) - 12.5 + "px";
            loader.style.left =
              parseInt(cursor.style.left.split("px")) - 12.5 + "px";
            loader.style.zIndex = 12;
    
            contador += 20;
    
            if (contador == 3000) {
              console.log("hola");
            }
          } else  if (
            parseInt(cursor.style.top.split("px")) > yLab &&
            parseInt(cursor.style.top.split("px")) < yLab + 80 &&
            parseInt(cursor.style.left.split("px")) > xLab &&
            parseInt(cursor.style.left.split("px")) < xLab + 200
          ) {
            loader.style.display = "block";
            console.log(cursor.style.width);
            loader.style.top =
              parseInt(cursor.style.top.split("px")) - 12.5 + "px";
            loader.style.left =
              parseInt(cursor.style.left.split("px")) - 12.5 + "px";
            loader.style.zIndex = 12;
    
            contador += 20;
    
            if (contador == 3000) {
              console.log("hola");
            }
          }else  if (
            parseInt(cursor.style.top.split("px")) > yAtlas &&
            parseInt(cursor.style.top.split("px")) < yAtlas + 80 &&
            parseInt(cursor.style.left.split("px")) > xAtlas &&
            parseInt(cursor.style.left.split("px")) < xAtlas + 200
          ) {
            loader.style.display = "block";
            console.log(cursor.style.width);
            loader.style.top =
              parseInt(cursor.style.top.split("px")) - 12.5 + "px";
            loader.style.left =
              parseInt(cursor.style.left.split("px")) - 12.5 + "px";
            loader.style.zIndex = 12;
    
            contador += 20;
    
            if (contador == 3000) {
              console.log("hola");
            }
          } else  if (
            parseInt(cursor.style.top.split("px")) > yTutorial &&
            parseInt(cursor.style.top.split("px")) < yTutorial + 80 &&
            parseInt(cursor.style.left.split("px")) > xTutorial &&
            parseInt(cursor.style.left.split("px")) < xTutorial + 200
          ) {
            loader.style.display = "block";
            console.log(cursor.style.width);
            loader.style.top =
              parseInt(cursor.style.top.split("px")) - 12.5 + "px";
            loader.style.left =
              parseInt(cursor.style.left.split("px")) - 12.5 + "px";
            loader.style.zIndex = 12;
    
            contador += 20;
    
            if (contador == 3000) {
              window.location.href = "../index.html";
            }
          }else  if (
            parseInt(cursor.style.top.split("px")) > yGuidesDis &&
            parseInt(cursor.style.top.split("px")) < yGuidesDis + 260 &&
            parseInt(cursor.style.left.split("px")) > xGuidesDis &&
            parseInt(cursor.style.left.split("px")) < xGuidesDis + 230
          ) {
            loader.style.display = "block";
            console.log(cursor.style.width);
            loader.style.top =
              parseInt(cursor.style.top.split("px")) - 12.5 + "px";
            loader.style.left =
              parseInt(cursor.style.left.split("px")) - 12.5 + "px";
            loader.style.zIndex = 12;
    
            contador += 20;
    
            if (contador == 3000) {
              window.location.href = "../guides/guides.html";
            }
          } else {
            loader.style.display = "none";
            contador = 0;
          }
      }

      
      
    });
  }
});
