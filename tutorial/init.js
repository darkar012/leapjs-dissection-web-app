import "../../node_modules/leapjs/leap-1.1.1.js";
let indexFingerX = 0;
let indexFingerY = 0;
var contador = 0;
let counterSwipe = 0;
let palmPositionOrigin = 0;
let swipe = false;
let YArray = [];
let yNArray = [];
let inicioBtn = document.querySelector(".inicioBtn");
let tutorialBtn = document.querySelector(".tutorialBtn");

for (let i = 0; i < 300; i++) {
  YArray.push(300 - i);
}

for (let i = 0; i < 300; i++) {
  yNArray.push(i + 300);
}
var controller = new Leap.Controller();
controller.connect();
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

  // Check if all five fingers are extended
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
        cursor.style.left =
          indexFingerX * 4 + window.screen.width / 2 + "px";
        cursorMini.style.left =
          indexFingerX * 4 + window.screen.width / 2 + "px";
      } else {
        cursor.style.left =
          indexFingerX * 4 + window.screen.width / 2 + "px";
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

      
        /*let yGuide = guideBtn.getBoundingClientRect().top;
        let xGuide = guideBtn.getBoundingClientRect().left;
        let yLab = labBtn.getBoundingClientRect().top;
        let xLab = labBtn.getBoundingClientRect().left;
        let yAtlas = atlasBtn.getBoundingClientRect().top;
        let xAtlas = atlasBtn.getBoundingClientRect().left;
        let yTutorial = tutorialBtn.getBoundingClientRect().top;
        let xTutorial = tutorialBtn.getBoundingClientRect().left;
        let nextAnnotation = document.querySelector(".nextAnnotation");
*/
        if (
          parseInt(cursor.style.top.split("px")) > inicioBtn.offsetTop &&
          parseInt(cursor.style.top.split("px")) < inicioBtn.offsetTop + inicioBtn.offsetHeight &&
          parseInt(cursor.style.left.split("px")) > inicioBtn.offsetLeft &&
          parseInt(cursor.style.left.split("px")) < inicioBtn.offsetLeft + inicioBtn.offsetWidth
        ) {
          loader.style.display = "block";
          console.log(cursor.style.width);
          loader.style.top =
            parseInt(cursor.style.top.split("px")) - 12.5 + "px";
          loader.style.left =
            parseInt(cursor.style.left.split("px")) - 12.5 + "px";
          loader.style.zIndex = 12;

          contador += 20;

          if (contador == 2000) {
            window.location.href = "./mainpage/mainpage.html";
          }
        }  else if (
          parseInt(cursor.style.top.split("px")) > tutorialBtn.offsetTop &&
          parseInt(cursor.style.top.split("px")) < tutorialBtn.offsetTop + tutorialBtn.offsetHeight &&
          parseInt(cursor.style.left.split("px")) > tutorialBtn.offsetLeft &&
          parseInt(cursor.style.left.split("px")) < tutorialBtn.offsetLeft + tutorialBtn.offsetWidth
        ) {
          loader.style.display = "block";
          console.log(cursor.style.width);
          loader.style.top =
            parseInt(cursor.style.top.split("px")) - 12.5 + "px";
          loader.style.left =
            parseInt(cursor.style.left.split("px")) - 12.5 + "px";
          loader.style.zIndex = 12;

          contador += 20;

          if (contador == 2000) {
            window.location.href = "./index.html";
          }
        }else {
          loader.style.display = "none";
          contador = 0;
        }
    });
  }
});