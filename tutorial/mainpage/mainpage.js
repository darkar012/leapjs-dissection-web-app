import "../../node_modules/leapjs/leap-1.1.1.js";
let indexFingerX = 0;
let indexFingerY = 0;
var contador = 0;
let YArray = [];
let yNArray = [];
let gesturesBtn = document.getElementById("gestures");
let bookBtn = document.getElementById("books");
let tutorialBtn = document.getElementById("tutorialBtn");
let gestureGrayBtn = document.getElementById("handsAccess");
let seeMoreBtn = document.getElementById("vermasBtn");
let heartAcces = document.getElementById("disection");

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

      let x = gesturesBtn.getBoundingClientRect().left;
      let y = gesturesBtn.getBoundingClientRect().top;
      let x2 = heartAcces.getBoundingClientRect().left;
      let y2 = heartAcces.getBoundingClientRect().top;
      let x3 = gestureGrayBtn.getBoundingClientRect().left;
      let y3 = gestureGrayBtn.getBoundingClientRect().top;
      let x4 = tutorialBtn.getBoundingClientRect().left;
      let y4 = tutorialBtn.getBoundingClientRect().top;
      let x5 = seeMoreBtn.getBoundingClientRect().left;
      let y5 = seeMoreBtn.getBoundingClientRect().top;

      if (
        parseInt(cursor.style.top.split("px")) > y &&
        parseInt(cursor.style.top.split("px")) < y + 80 &&
        parseInt(cursor.style.left.split("px")) > x &&
        parseInt(cursor.style.left.split("px")) < x + 80
      ) {
        cursorMini.style.transform =
          "scale(3) translateX(-10%) translateY(-10%)";

        cursorMini.style.transition =
          "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

        contador += 20;
        console.log(contador);

        if (contador == 4000) {
          console.log("gestures");
          //window.location.href = "./mainpage/mainpage.html";
        }
      } else if (
        parseInt(cursor.style.top.split("px")) > y2 &&
        parseInt(cursor.style.top.split("px")) < y2 + 240 &&
        parseInt(cursor.style.left.split("px")) > x2 &&
        parseInt(cursor.style.left.split("px")) < x2 + 140
      ) {
        cursorMini.style.transform =
          "scale(3) translateX(-10%) translateY(-10%)";

        cursorMini.style.transition =
          "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

        contador += 20;
        console.log(contador);

        if (contador == 4000) {
          console.log("heart");

          window.location.href = "../heartGuide/guide.html";
        }
      } else if (
        parseInt(cursor.style.top.split("px")) > 76 &&
        parseInt(cursor.style.top.split("px")) < 76 + 30 &&
        parseInt(cursor.style.left.split("px")) > 278 &&
        parseInt(cursor.style.left.split("px")) < 278 + 27
      ) {
        cursorMini.style.transform =
          "scale(3) translateX(-10%) translateY(-10%)";

        cursorMini.style.transition =
          "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

        contador += 20;
        console.log(contador);

        if (contador == 4000) {
          console.log("book");

          //window.location.href = "./mainpage/mainpage.html";
        }

      } else if (
        parseInt(cursor.style.top.split("px")) > y3 &&
        parseInt(cursor.style.top.split("px")) < y3 + 30 &&
        parseInt(cursor.style.left.split("px")) > x3 &&
        parseInt(cursor.style.left.split("px")) < x3 + 27
      ) {
        console.log("dentro");
        cursorMini.style.transform =
          "scale(3) translateX(-10%) translateY(-10%)";

        cursorMini.style.transition =
          "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

        contador += 20;
        console.log(contador);

        if (contador == 4000) {
          console.log("hand");

          //window.location.href = "./mainpage/mainpage.html";
        }

      } else if (
        parseInt(cursor.style.top.split("px")) > y4 &&
        parseInt(cursor.style.top.split("px")) < y4 + 50 &&
        parseInt(cursor.style.left.split("px")) > x4 &&
        parseInt(cursor.style.left.split("px")) < x4 + 144
      ) {
        cursorMini.style.transform =
          "scale(3) translateX(-10%) translateY(-10%)";

        cursorMini.style.transition =
          "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

        contador += 20;
        console.log(contador);

        if (contador == 4000) {
          console.log("tutorial");

          //window.location.href = "./mainpage/mainpage.html";
        }

       
      } else if (
        parseInt(cursor.style.top.split("px")) > y5 &&
        parseInt(cursor.style.top.split("px")) < y5 + 50 &&
        parseInt(cursor.style.left.split("px")) > x5 &&
        parseInt(cursor.style.left.split("px")) < x5 + 144
      ) {
        cursorMini.style.transform =
          "scale(3) translateX(-10%) translateY(-10%)";

        cursorMini.style.transition =
          "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

        contador += 20;
        console.log(contador);

        if (contador == 4000) {
          console.log("more");

          //window.location.href = "./mainpage/mainpage.html";
        }

       
      } else {
        cursorMini.style.transform =
          "scale(1) translateX(-50%) translateY(-50%)";
        cursorMini.style.transition = "top 300ms ease-out, left 300ms ease-out";
        contador = 0;
      }
      
    });
  }
});
