import "../node_modules/leapjs/leap-1.1.1.js";
// Set up LeapJS controller
let indexFingerX = 0;
let indexFingerY = 0;
var contador = 0;
let YArray = [];
let yNArray = [];
let btn = "";
let btn2 = "";
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
          let ymain = btn.getBoundingClientRect().top;
          let xmain = btn.getBoundingClientRect().left;
          let ytutorial = btn2.getBoundingClientRect().top;
          let xtutorial = btn2.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > ymain &&
            parseInt(cursor.style.top.split("px")) < ymain + 80 &&
            parseInt(cursor.style.left.split("px")) > xmain &&
            parseInt(cursor.style.left.split("px")) < xmain + 200
          ) {
            cursorMini.style.transform =
              "scale(3) translateX(-10%) translateY(-10%)";

            cursorMini.style.transition =
              "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

            contador += 20;

            if (contador == 3000) {
              window.location.href = "./mainpage/mainpage.html";
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > ytutorial &&
            parseInt(cursor.style.top.split("px")) < ytutorial + 80 &&
            parseInt(cursor.style.left.split("px")) > xtutorial &&
            parseInt(cursor.style.left.split("px")) < xtutorial + 200
          ) {
            cursorMini.style.transform =
              "scale(3) translateX(-10%) translateY(-10%)";

            cursorMini.style.transition =
              "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

            contador += 20;
            console.log(contador);

            if (contador == 3000) {
              cases = 2;
              pintar();
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
                window.location.href = "./mainpage/mainpage.html";
              }
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
      
              <img class="logoMain" src="../imgs/logoMain.png">
              <div class="anatomyBtn">
              <button class="mainBtn" id='mainBtn'>Inicio</button>
                  <button class="tutorialBtn" id='tutorialBtn'>Ver Tutorial</button>
              </div>
                  <img class="bg" src="../imgs/bgTutorial.png">
                  
      `;

      btn = document.getElementById("mainBtn");
      btn2 = document.getElementById("tutorialBtn");
      btn2.addEventListener(('click'), (e)=>{
        cases = 2;
        pintar()
      })
      break;
    case 2:
      container.innerHTML = `

      <div class="tutorial1">
            <img class="texto"  src="../imgs/tutorialIntro.png">
            <img class="grid"  src="../imgs/grid.png">
            <iframe src='https://my.spline.design/leapmotion2-6d6e197856539a5365752a5a1ed63168/' frameborder='0' width='100%' height='100%' class="animation1"></iframe>
            <button class="continuarTutorial1" id='mainBtn'>continuar</button>
            <div class='overlay'>overlay</div>
            </div>
          `;
      let image = document.getElementById("bg");
     /* setTimeout(function () {
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
              console.log("hola");
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
              video.style.opacity = 1;
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
      }, 6000);*/

      break;
    default:
      break;
  }
}
