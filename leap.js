import "./node_modules/leapjs/leap-1.1.1.js";
// Set up LeapJS controller
let indexFingerX = 0;
let indexFingerY = 0;
let leapFound = document.getElementById("foundLeap");
let palmPositionOrigin = 0;
let counter = 0;
var contador = 0;
let intervalBool = false;
let YArray = [];
let yNArray = [];

let url = window.location.href.split("/");
let actualPage = url[3];
let page = actualPage.split(".");
let nameHtml = page[0];
let btn = "";
let swipe = "";
let pinch = "";
let cases = 1
switch (nameHtml) {
  case "indes":
    btn = document.getElementById("btn");
    break;
  case "swipe":
    swipe = document.getElementById("swipe");
    break;
  case "pinch":
    pinch = document.getElementById("pinch");
    break;

  default:
    break;
}



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



  // Check if all five fingers are extended
  if (extendedFingers >= 1 && extendedFingers <= 5) {
    leapFound.innerHTML = "hand detected!";

    frame.hands.forEach(function (hand) {
      // Iterate through each finger on the hand
      let indexFingerZ = hand.fingers[1].tipPosition[2];
      indexFingerX = hand.fingers[1].tipPosition[0];
      indexFingerY = hand.fingers[1].tipPosition[1];

      switch (nameHtml) {
        case "indes":
         

          break;
        case "swipe":
          for (var i = 0; i < frame.hands.length; i++) {
            var hand = frame.hands[i];
            var palmPosition = hand.palmPosition[0];
            var velocity = hand.palmVelocity[0];

            if (i === 5) {
              palmPositionOrigin = palmPosition;
            }
            let difPosition = palmPosition - palmPositionOrigin;
            if (difPosition <= -30 && velocity < -1000) {
              swipe.innerHTML = "swipe Right";
              counter++;
              if (counter > 10) {
                window.location.href = "./pinch.html";
              }
            } else if (difPosition > 30 && velocity > 1000) {
              swipe.innerHTML = "swipe Left";
              counter--;
              if (counter < -10) {
                window.location.href = "./indes.html";
              }
            }
            console.log(counter);
          }
          break;

        case "pinch":
          let fatFinger = hand.fingers[0].tipPosition[2];

          let heartFinger = hand.fingers[1].tipPosition[2];

          let dif = fatFinger - heartFinger;

          if (dif > -5 && dif < 5) {
            pinch.style.transform = "scaleX(0.5)";
          } else if (dif > 0) {
            pinch.style.transform = "scaleX(2)";
          }
          console.log(dif);
          break;

        default:
          break;
      }
    });
    // Do something in response to all five fingers being extended
  } else if (extendedFingers === 0) {
    leapFound.innerHTML = "Please extend your hand";
  }
});


