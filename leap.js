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
let 
btn = document.getElementById("api-frame");
let overFrame = false;
let swipe = "";
let pinch = "";

var iframe = document.getElementById('api-frame');
    var uid = '259c616fb43a4ea2ae2b55a901e83679';
    var eventCatcher = document.createElement('div');
    eventCatcher.style.width = '100%';
    eventCatcher.style.height = '100%';
    eventCatcher.style.position = 'absolute';
    iframe.parentNode.insertBefore(eventCatcher, iframe);
    var client = new Sketchfab(iframe);

    

for (let i = 0; i < 300; i++) {
  YArray.push(300 - i);
}

for (let i = 0; i < 300; i++) {
  yNArray.push(i + 300);
}

var controller = new Leap.Controller();
controller.connect();


// Add listener for frame events

    
    //////////////////////////////////
    // GUI Code
    //////////////////////////////////
    function initGui() {
      var controls = document.getElementById('controls');
      controls.innerHTML = 'move mouse up and down over this white zone';
    }
    initGui();

    var error = function error() {
      console.error('Sketchfab API error');
    };

    var success = function success(api) {
      api.start(function () {
        //Be carefull, the mouse can't be detected on the iframe
        //If you want to fix this, you have to put an overlay on the iframe
        var box = iframe.getBoundingClientRect();
        var frameX = box.left + box.width / 2;
        var frameY = box.top + box.height / 2;
console.log("hola");
            // Calculate the location of the middle of the frame (Where we want the model to stay)
            
          
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
            
            
                  switch (nameHtml) {
                    case "indes":
            
                    let y2 = btn.getBoundingClientRect().top;
                      let x2 = btn.getBoundingClientRect().left;
            
                      if (
                        parseInt(cursor.style.top.split("px")) > y2 &&
                        parseInt(cursor.style.top.split("px")) < y2 + btn.offsetHeight &&
                        parseInt(cursor.style.left.split("px")) > x2 &&
                        parseInt(cursor.style.left.split("px")) < x2 + btn.offsetWidth
                      ) {
                        
                       
            var x = cursor.offsetLeft - frameX;
            var y = cursor.offsetTop - frameY;
            var z = 2;

            console.log(x);
            console.log(y);
      
            // Calculate the distance, normalize the vecteur by divising by distance and multiplicate by a factor
            var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
            x = x / distance * 6;
            y = y / distance * 6;
            z = z / distance * 6;
      
            // The disposition of x, y and z depend on how the model was made
            api.setCameraLookAt([y, -x, z], [0, 0, 0], 0);
                        
                      } else {
                        overFrame = false;
                      }
            
            
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
      });
    };

    client.init(uid, {
      success: success,
      error: error
    });
    

switch (nameHtml) {
  case "indes":
    //btn = document.getElementById("btn");
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

