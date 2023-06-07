import "../../node_modules/leapjs/leap-1.1.1.js";
let indexFingerX = 0;
let indexFingerY = 0;
var contador = 0;
let counterSwipe = 0;
let palmPositionOrigin = 0;
let swipe = false;
let YArray = [];
let yNArray = [];
let guideBtn = document.querySelector(".mainMenu");
let labBtn = document.querySelector(".labBtn");
let atlasBtn = document.querySelector(".guiasBtn");
let tutorialBtn = document.querySelector(".tutorial");

var iframe = document.getElementById("api-frame");
var uid = "259c616fb43a4ea2ae2b55a901e83679";
var eventCatcher = document.createElement("div");
eventCatcher.style.width = "100%";
eventCatcher.style.height = "100%";
eventCatcher.style.position = "absolute";
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

var error = function error() {
  console.error("Sketchfab API error");
};

var success = function success(api) {
  api.start(function () {
    //Be carefull, the mouse can't be detected on the iframe
    //If you want counterSwipe
    // Calculate the location of the middle of the frame (Where we want the model to stay)

    controller.on("frame", function (frame) {
     

      console.log(counterSwipe);
      //right [217.89168938971284, -163.93913312110294, 20.83554270367943]
      //front [199.4854237053254, -216.65696409335774, 34.30155649654449]
      // left [142.30534731533515, -230.4023923695799, 14.653942467343814]
      // behind [117.4828651924686, -147.46855843995084, 13.606529140784527]
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

          if (extendedFingers >= 4) {
            for (var i = 0; i < frame.hands.length; i++) {
              var hand = frame.hands[i];
              var palmPosition = hand.palmPosition[0];
              var velocity = hand.palmVelocity[0];

              if (i === 5) {
                palmPositionOrigin = palmPosition;
              }
              let difPosition = palmPosition - palmPositionOrigin;
              if (difPosition <= -30 && velocity < -200) {
                console.log('right');
                let targetPos;
                api.getCameraLookAt(function (err, camera) {
                  targetPos = camera.target;
                  counterSwipe++;
                  /* /right [217.89168938971284, -163.93913312110294, 20.83554270367943]
//front [199.4854237053254, -216.65696409335774, 34.30155649654449]
// left [142.30534731533515, -230.4023923695799, 14.653942467343814]
// behind [117.4828651924686, -147.46855843995084, 13.606529140784527]*/
                  if (counterSwipe == 1 && !swipe) {
                    var x = 218;
                    var y = -164;
                    var z = 21;

                    api.setCameraLookAt(
                      [x, y, z],
                      [targetPos[0], targetPos[1], targetPos[2]]
                    );
                    swipe = true;
                    setTimeout(() => {
                      swipe = false;
                      counterSwipe = 1;
                    }, 1000);
                    // The disposition of x, y and z depend on how the model was made
                  } else if (counterSwipe == 2 && !swipe) {
                    var x = 117;
                    var y = -147;
                    var z = 14;

                    api.setCameraLookAt(
                      [x, y, z],
                      [targetPos[0], targetPos[1], targetPos[2]]
                    );
                    swipe = true;

                    setTimeout(() => {
                      swipe = false;
                      counterSwipe = 2;
                    }, 1000);
                  } else if (counterSwipe == 3 && !swipe) {
                    var x = 142;
                    var y = -230;
                    var z = 14;

                    api.setCameraLookAt(
                      [x, y, z],
                      [targetPos[0], targetPos[1], targetPos[2]]
                    );
                    swipe = true;
                    setTimeout(() => {
                      swipe = false;
                      counterSwipe = 3;
                    }, 1000);
                  } else if (counterSwipe > 3 && !swipe) {
                    var x = 200;
                    var y = -217;
                    var z = 34;

                    api.setCameraLookAt(
                      [x, y, z],
                      [targetPos[0], targetPos[1], targetPos[2]]
                    );
                    swipe = true;

                    setTimeout(() => {
                      swipe = false;
                      counterSwipe = 0;
                    }, 1000);
                  }
                });
              }
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
            let nextAnnotation = document.querySelector(".nextAnnotation");

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

              if (contador == 2000) {
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

              if (contador == 2000) {
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
              parseInt(cursor.style.top.split("px")) > cursorDrag.offsetTop &&
              parseInt(cursor.style.top.split("px")) <
                cursorDrag.offsetTop + cursorDrag.offsetHeight &&
              parseInt(cursor.style.left.split("px")) > cursorDrag.offsetLeft &&
              parseInt(cursor.style.left.split("px")) <
                cursorDrag.offsetLeft + cursorDrag.offsetWidth
            ) {
              // Trigger a click event on the iframe element
              console.log("hola");

              // Alternatively, you can trigger a drag event on the iframe element
              // triggerMouseEvent(iframe, 'dragstart');
            } else {
              loader.style.display = "none";
              contador = 0;
            }
          }
        });
      }
    });
  });
};

client.init(uid, {
  success: success,
  error: error,
});

// Add listener for frame events
/*
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

      if (extendedFingers >= 4) {
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
      } else {
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

          if (contador == 2000) {
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
          loader.style.top =
            parseInt(cursor.style.top.split("px")) - 12.5 + "px";
          loader.style.left =
            parseInt(cursor.style.left.split("px")) - 12.5 + "px";
          loader.style.zIndex = 12;

          contador += 20;

          if (contador == 2000) {
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
          parseInt(cursor.style.top.split("px")) > cursorDrag.offsetTop &&
          parseInt(cursor.style.top.split("px")) <
            cursorDrag.offsetTop + cursorDrag.offsetHeight &&
          parseInt(cursor.style.left.split("px")) > cursorDrag.offsetLeft &&
          parseInt(cursor.style.left.split("px")) <
            cursorDrag.offsetLeft + cursorDrag.offsetWidth
        ) {
          // Trigger a click event on the iframe element
          console.log("hola");
          triggerMouseEvent(iframe, "click");

          // Alternatively, you can trigger a drag event on the iframe element
          // triggerMouseEvent(iframe, 'dragstart');
        } else {
          loader.style.display = "none";
          contador = 0;
        }
      }
    });
  }
});*/
