import "../../node_modules/leapjs/leap-1.1.1.js";
let indexFingerX = 0;
let indexFingerY = 0;
var contador = 0;
let palmPositionOrigin = 0;
let YArray = [];
let yNArray = [];
let guideBtn = document.querySelector(".mainMenu");
let labBtn = document.querySelector(".labBtn");
let atlasBtn = document.querySelector(".guiasBtn");
let tutorialBtn = document.querySelector(".tutorial");





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
      var iframe = document.querySelector(".model");
      var cursorDrag = document.querySelector(".cursorDrag");
      

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



if (extendedFingers >= 4){
    
    for (var i = 0; i < frame.hands.length; i++) {
        var hand = frame.hands[i];
        var palmPosition = hand.palmPosition[0];
        var velocity = hand.palmVelocity[0];

        if (i === 5) {
          palmPositionOrigin = palmPosition;
        }
        let difPosition = palmPosition - palmPositionOrigin;
        if (difPosition <= -30 && velocity < -200) {
                    

        } else if (difPosition > 30 && velocity > 200) {
          
        }
      }


} else{
    let yGuide = guideBtn.getBoundingClientRect().top;
      let xGuide = guideBtn.getBoundingClientRect().left;
      let yLab = labBtn.getBoundingClientRect().top;
      let xLab = labBtn.getBoundingClientRect().left;
      let yAtlas = atlasBtn.getBoundingClientRect().top;
      let xAtlas = atlasBtn.getBoundingClientRect().left;
      let yTutorial = tutorialBtn.getBoundingClientRect().top;
      let xTutorial = tutorialBtn.getBoundingClientRect().left;
let nextAnnotation = document.querySelector(".nextAnnotation");

      if (
        parseInt(cursor.style.top.split("px")) > yGuide &&
        parseInt(cursor.style.top.split("px")) < yGuide + 80 &&
        parseInt(cursor.style.left.split("px")) > xGuide &&
        parseInt(cursor.style.left.split("px")) < xGuide + 200
      ) {
        loader.style.display = "block";
        console.log(cursor.style.width);
        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 3000) {
          window.location.href = "../mainpage/mainpage.html";
        }
      } else if (
        parseInt(cursor.style.top.split("px")) > yLab &&
        parseInt(cursor.style.top.split("px")) < yLab + 80 &&
        parseInt(cursor.style.left.split("px")) > xLab &&
        parseInt(cursor.style.left.split("px")) < xLab + 200
      ) {
        loader.style.display = "block";
        console.log(cursor.style.width);
        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 3000) {
          console.log("hola");
        }
      } else if (
        parseInt(cursor.style.top.split("px")) > yAtlas &&
        parseInt(cursor.style.top.split("px")) < yAtlas + 80 &&
        parseInt(cursor.style.left.split("px")) > xAtlas &&
        parseInt(cursor.style.left.split("px")) < xAtlas + 200
      ) {
        loader.style.display = "block";
        console.log(cursor.style.width);
        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 3000) {
          window.location.href = "../guides/guides.html";
        }
      } else if (
        parseInt(cursor.style.top.split("px")) > yTutorial &&
        parseInt(cursor.style.top.split("px")) < yTutorial + 80 &&
        parseInt(cursor.style.left.split("px")) > xTutorial &&
        parseInt(cursor.style.left.split("px")) < xTutorial + 200
      ) {
        loader.style.display = "block";
        console.log(cursor.style.width);
        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 3000) {
          window.location.href = "../index.html";
        }
      } else if (
        parseInt(cursor.style.top.split("px")) > cursorDrag.offsetTop &&
        parseInt(cursor.style.top.split("px")) < cursorDrag.offsetTop + cursorDrag.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > cursorDrag.offsetLeft &&
        parseInt(cursor.style.left.split("px")) < cursorDrag.offsetLeft + cursorDrag.offsetWidth
      ) {
        // Trigger a click event on the iframe element
        console.log("hola");
        triggerMouseEvent(iframe, 'click');
      
        // Alternatively, you can trigger a drag event on the iframe element
        // triggerMouseEvent(iframe, 'dragstart');
      } 
      
      else {
        loader.style.display = "none";
        contador = 0;
      }
}


      
    });
  }
});

function triggerMouseEvent(element, eventType) {
    var event = document.createEvent('MouseEvent');
    event.initEvent(eventType, true, true);
    element.dispatchEvent(event);
  }