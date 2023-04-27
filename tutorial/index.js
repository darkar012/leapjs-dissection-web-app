import "../node_modules/leapjs/leap-1.1.1.js";
// Set up LeapJS controller
let indexFingerX = 0;
let indexFingerY = 0;
var contador = 0;
let YArray = [];
let yNArray = [];
let btn = "";
let cases = 1;

let container = document.getElementById("container");

for (let i = 0; i < 300; i++) {
  YArray.push(300 - i);
}

for (let i = 0; i < 300; i++) {
  yNArray.push(i + 300);
}

pintar();
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

      switch (cases) {
        case 1:
          let y = btn.getBoundingClientRect().top;
          let x = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y &&
            parseInt(cursor.style.top.split("px")) < y + 80
          ) {
            if (
              parseInt(cursor.style.left.split("px")) > x &&
              parseInt(cursor.style.left.split("px")) < x + 200
            ) {
              cursorMini.style.transform =
                "scale(3) translateX(-10%) translateY(-10%)";

              cursorMini.style.transition =
                "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

              contador += 20;
              console.log(contador);

              if (contador == 4000) {
                cases = 2;
                pintar();
              } 

              /*console.log(new Date().getTime());
                let nTime = new Date().getTime() + 4000;
      
                if (new Date().getTime() >= nTime) {
                  console.log("pass time");
                } if (indexFingerZ < -140) {
                  window.location.href = "./swipe.html";
                }*/
            } else {
              cursorMini.style.transform =
                "scale(1) translateX(-50%) translateY(-50%)";
              cursorMini.style.transition =
                "top 300ms ease-out, left 300ms ease-out";
              contador = 0;
            }
          } else {
            cursorMini.style.transform =
              "scale(1) translateX(-50%) translateY(-50%)";
            cursorMini.style.transition =
              "top 300ms ease-out, left 300ms ease-out";
            contador = 0;
          }

          break;

        case 2:
          

            let y2 = btn.getBoundingClientRect().top;
            let x2 = btn.getBoundingClientRect().left;
  
            if (
              parseInt(cursor.style.top.split("px")) > y2 &&
              parseInt(cursor.style.top.split("px")) < y2 + 80
            ) {
              if (
                parseInt(cursor.style.left.split("px")) > x2 &&
                parseInt(cursor.style.left.split("px")) < x2 + 200
              ) {
                cursorMini.style.transform =
                  "scale(3) translateX(-10%) translateY(-10%)";
  
                cursorMini.style.transition =
                  "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";
  
                contador += 20;
                console.log(contador);
  
                if (contador == 4000) {
                  window.location.href = "./mainpage/mainpage.html"
                } 
  
                /*console.log(new Date().getTime());
                  let nTime = new Date().getTime() + 4000;
        
                  if (new Date().getTime() >= nTime) {
                    console.log("pass time");
                  } if (indexFingerZ < -140) {
                    window.location.href = "./swipe.html";
                  }*/
              } else {
                cursorMini.style.transform =
                  "scale(1) translateX(-50%) translateY(-50%)";
                cursorMini.style.transition =
                  "top 300ms ease-out, left 300ms ease-out";
                contador = 0;
              }
            } else {
              cursorMini.style.transform =
                "scale(1) translateX(-50%) translateY(-50%)";
              cursorMini.style.transition =
                "top 300ms ease-out, left 300ms ease-out";
              contador = 0;
            }

          break;

        default:
          break;
      }
    });
  }
});

function pintar() {
  let count = 0;
  switch (cases) {
    case 1:
      container.innerHTML = `
      <div class="anatomyBtn">
                  <img src="../imgs/signal.png">
                  <button class="leapAnatomyBtn" id='leapAnatomyBtn'>Leap Anatomy </button>
              </div>
                  <img class="bg" src="../imgs/Inicio Tutorial.png">
      `;
      btn = document.getElementById("leapAnatomyBtn");
      break;
    case 2:
      container.innerHTML = `
          
                      <img class="bg" id='bg' src="../imgs/Inicio.png">
          `;
      let image = document.getElementById("bg");
      setTimeout(function () {
        image.style.opacity = 0;
        setTimeout(function () {
          image.src = "../imgs/Inicio2.png";
          image.style.opacity = 1;
        }, 500);
        setTimeout(function () {
          image.style.opacity = 0;
          setTimeout(function () {
            image.src = "../imgs/InicioTutorialmanos.png";
            image.style.opacity = 1;
          }, 500);
          setTimeout(function () {
            image.style.opacity = 0;
            setTimeout(function () {
              image.src = "../imgs/tutorialMove.png";
              image.style.opacity = 1;
              container.innerHTML += `
              <div class="video-player">
              <video width="640" height="360" autoplay loop controls="false">
          <source id="sourceVideo" src="../imgs/videos/moveTutorial.mp4" type="video/mp4">
          Tu navegador no soporta el elemento de video.
      </video></div>
              `;
            }, 500);
            setTimeout(function () {

              container.style.opacity = 0;
     // let image = document.getElementById("bg");
     // let video = document.getElementById("sourceVideo");
              //image.style.opacity = 0;
              //video.style.opacity = 1;
              console.log('hola');
              setTimeout(function () {
                container.innerHTML = `
          
                      <img class="bg" id='bg' src="../imgs/selecTutorial.png">
                      <div class="video-player">
              <video width="640" height="360" autoplay loop controls="false">
          <source id="sourceVideo" src="../imgs/videos/selecTutorial.mp4" type="video/mp4">
          Tu navegador no soporta el elemento de video.
      </video></div>
         `;
         container.style.opacity = 1;
                /*image.src = "../imgs/selecTutorial.png";
                image.style.opacity = 1;
                video.src = "../imgs/videos/selecTutorial.mp4"
              video.style.opacity = 1;*/
              }, 500);
              setTimeout(function () {
                container.style.opacity = 0;
                
                setTimeout(function () {
                  container.innerHTML = `
          
                      <img class="bg" id='bg' src="../imgs/swipeTutorial.png">
                      <div class="video-player">
              <video width="640" height="360" autoplay loop controls="false">
          <source id="sourceVideo" src="../imgs/videos/swipeTutorial.mp4" type="video/mp4">
          Tu navegador no soporta el elemento de video.
      </video></div>
         `;
         container.style.opacity = 1;
                }, 500);
                setTimeout(function () {
                  container.style.opacity = 0;
                  
                  setTimeout(function () {
                    container.innerHTML = `
            <div class="anatomyBtn menuAnatomy">
                  
                  <button class="menu leapAnatomyBtn" id='leapAnatomyBtn'>IR AL MENÚ</button>
              </div>
                        <img class="bg" id='bg' src="../imgs/tutorialCompletado.png">
                        
           `;
           btn = document.getElementById("leapAnatomyBtn");
           container.style.opacity = 1;
                  }, 500);
                }, 8000);
              }, 8000);
            }, 8000);
          }, 6000);
        }, 6000);
      }, 6000);

      break;
    default:
      break;
  }
}
