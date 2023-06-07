import "../../../node_modules/leapjs/leap-1.1.1.js";
let indexFingerX = 0;
let indexFingerY = 0;
var contador = 0;
let counterSwipe = 0;
let palmPositionOrigin = 0;
let swipe = false;
let YArray = [];
let yNArray = [];
let menuBtn = document.querySelector(".mainMenu");
let labBtn = document.querySelector(".labBtn");
let atlasBtn = document.querySelector(".atlasBtn");
let tutorialBtn = document.querySelector(".tutorial");
let atlasAcces = document.querySelector(".atlasAccess");
let gesture = document.querySelector(".gestures");
let visual = document.querySelector(".visual");
let swipeBtn = document.querySelector(".swipeBtn");
let video = document.querySelector(".videoMask");
let videoPaso = document.querySelector(".videoPaso");
let videoBtn = document.querySelector(".videoBtn");
let videoPass = document.querySelector(".videoPassBtn");
let popUp = document.querySelector(".overlayImg");
let overlay = document.querySelector(".overlay");
let popUpBtn = document.querySelector(".popUpBtn");
let visualChange = false;
let videoChange = false;
let play = false;
let imageBtn = document.querySelector(".imageBtn");

for (let i = 0; i < 300; i++) {
  YArray.push(300 - i);
}

for (let i = 0; i < 300; i++) {
  yNArray.push(i + 300);
}
var controller = new Leap.Controller();
controller.connect();

setTimeout(() => {
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

        if (extendedFingers >= 4) {
          for (var i = 0; i < frame.hands.length; i++) {
            var hand = frame.hands[i];
            var palmPosition = hand.palmPosition[0];
            var velocity = hand.palmVelocity[0];
            var vertical = hand.palmNormal[0];

            if (i === 5) {
              palmPositionOrigin = palmPosition;
            }
            let difPosition = palmPosition - palmPositionOrigin;
            if (difPosition <= -30 && velocity < -200 && vertical < -0.9) {
              console.log("right");
              window.location.href = "../paso7/paso1.html";
            } else if (difPosition > 30 && velocity > 200 && vertical < -0.9) {
              window.location.href = "../paso5/paso1.html";
            }
          }
        } else {
          if (
            parseInt(cursor.style.top.split("px")) > menuBtn.offsetTop &&
            parseInt(cursor.style.top.split("px")) <
              menuBtn.offsetTop + menuBtn.offsetHeight &&
            parseInt(cursor.style.left.split("px")) > menuBtn.offsetLeft &&
            parseInt(cursor.style.left.split("px")) <
              menuBtn.offsetLeft + menuBtn.offsetWidth
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
              window.location.href = "../mainpage/mainpage.html";
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > labBtn.offsetTop &&
            parseInt(cursor.style.top.split("px")) <
              labBtn.offsetTop + labBtn.offsetHeight &&
            parseInt(cursor.style.left.split("px")) > labBtn.offsetLeft &&
            parseInt(cursor.style.left.split("px")) <
              labBtn.offsetLeft + labBtn.offsetWidth
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
              console.log("hola");
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > tutorialBtn.offsetTop &&
            parseInt(cursor.style.top.split("px")) <
              tutorialBtn.offsetTop + tutorialBtn.offsetHeight &&
            parseInt(cursor.style.left.split("px")) > tutorialBtn.offsetLeft &&
            parseInt(cursor.style.left.split("px")) <
              tutorialBtn.offsetLeft + tutorialBtn.offsetWidth
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
              window.location.href = "../index.html";
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > atlasBtn.offsetTop &&
            parseInt(cursor.style.top.split("px")) <
              atlasBtn.offsetTop + atlasBtn.offsetHeight &&
            parseInt(cursor.style.left.split("px")) > atlasBtn.offsetLeft &&
            parseInt(cursor.style.left.split("px")) <
              atlasBtn.offsetLeft + atlasBtn.offsetWidth
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
              window.location.href = "../atlas/atlas.html";
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > gesture.offsetTop &&
            parseInt(cursor.style.top.split("px")) <
              gesture.offsetTop + gesture.offsetHeight &&
            parseInt(cursor.style.left.split("px")) > gesture.offsetLeft &&
            parseInt(cursor.style.left.split("px")) <
              gesture.offsetLeft + gesture.offsetWidth
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
              console.log("hola");
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > atlasAcces.offsetTop &&
            parseInt(cursor.style.top.split("px")) <
              atlasAcces.offsetTop + atlasAcces.offsetHeight &&
            parseInt(cursor.style.left.split("px")) > atlasAcces.offsetLeft &&
            parseInt(cursor.style.left.split("px")) <
              atlasAcces.offsetLeft + atlasAcces.offsetWidth
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
              window.location.href = "../../atlas/atlas.html";
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > imageBtn.offsetTop &&
            parseInt(cursor.style.top.split("px")) <
              imageBtn.offsetTop + imageBtn.offsetHeight &&
            parseInt(cursor.style.left.split("px")) > imageBtn.offsetLeft &&
            parseInt(cursor.style.left.split("px")) <
              imageBtn.offsetLeft + imageBtn.offsetWidth
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
              if (!visualChange) {
                imageBtn.src = "../../../imgs/heartGuide/paso1/imageBtnAlt.png";
                visual.src = "../../../imgs/heartGuide/paso6/visualAlt.png";
                visualChange = true;
              } else {
                imageBtn.src = "../../../imgs/heartGuide/paso1/imageBtn.png";
                visual.src = "../../../imgs/heartGuide/paso6/visual.png";
                visualChange = false;
              }
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > videoBtn.offsetTop &&
            parseInt(cursor.style.top.split("px")) <
              videoBtn.offsetTop + videoBtn.offsetHeight &&
            parseInt(cursor.style.left.split("px")) > videoBtn.offsetLeft &&
            parseInt(cursor.style.left.split("px")) <
              videoBtn.offsetLeft + videoBtn.offsetWidth
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
              if (!videoChange) {
                videoBtn.src = "../../../imgs/heartGuide/paso5/videoBtnAlt.png";
                visual.style.display = "none";
                video.style.display = "flex";
                videoPass.style.display = "flex";
                imageBtn.style.display = "none";
                swipeBtn.style.display = "flex";
                videoChange = true;
              } else {
                videoBtn.src = "../../../imgs/heartGuide/paso5/videoBtn.png";
                visual.style.display = "flex";
                video.style.display = "none";
                videoPass.style.display = "none";
                imageBtn.style.display = "flex";
                swipeBtn.style.display = "none";
                videoChange = false;
              }
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > videoPass.offsetTop &&
            parseInt(cursor.style.top.split("px")) <
              videoPass.offsetTop + videoPass.offsetHeight &&
            parseInt(cursor.style.left.split("px")) >
              videoBtn.offsetLeft + videoBtn.offsetWidth / 2 &&
            parseInt(cursor.style.left.split("px")) <
              videoBtn.offsetLeft + videoBtn.offsetWidth
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
              if (!play) {
                videoPaso.pause();
                play = true;
              } else {
                videoPaso.play();
                play = false;
              }
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > popUp.offsetTop &&
            parseInt(cursor.style.top.split("px")) <
              popUp.offsetTop + popUp.offsetHeight * 0.2 &&
            parseInt(cursor.style.left.split("px")) > popUp.offsetLeft + popUp.offsetWidth*0.8 &&
            parseInt(cursor.style.left.split("px")) <
              popUp.offsetLeft + popUp.offsetWidth
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
              overlay.style.display = "none";
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > popUpBtn.offsetTop &&
            parseInt(cursor.style.top.split("px")) <
              popUpBtn.offsetTop + popUpBtn.offsetHeight &&
            parseInt(cursor.style.left.split("px")) > popUpBtn.offsetLeft &&
            parseInt(cursor.style.left.split("px")) <
              popUpBtn.offsetLeft + popUpBtn.offsetWidth
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
              overlay.style.display = "flex";
            }
          }else {
            loader.style.display = "none";
            contador = 0;
          }
        }
      });
    }
  });
}, 3000);