import "../node_modules/leapjs/leap-1.1.1.js";
// Set up LeapJS controller
let indexFingerX = 0;
let indexFingerY = 0;
var contador = 0;
var swipeCounter = 0;
let YArray = [];
let yNArray = [];
let btn = "";
let btn2 = "";
let cases = 2;
let palmPositionOrigin = 0;
let countMsgLeap = 0;
var counter = 0;
let swipe = false;

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
          } else if (
            parseInt(cursor.style.top.split("px")) > ytutorial &&
            parseInt(cursor.style.top.split("px")) < ytutorial + 80 &&
            parseInt(cursor.style.left.split("px")) > xtutorial &&
            parseInt(cursor.style.left.split("px")) < xtutorial + 200
          ) {
            loader.style.display = "block";
            console.log(cursor.style.width);
            loader.style.top =
              parseInt(cursor.style.top.split("px")) - 12.5 + "px";
            loader.style.left =
              parseInt(cursor.style.left.split("px")) - 12.5 + "px";
            loader.style.zIndex = 12;
            contador += 20;
            console.log(contador);

            if (contador == 2000) {
              cases = 2;
              pintar();
            }
          } else {
            loader.style.display = "none";
            contador = 0;
          }

          break;

        case 2:
          let y2 = btn.getBoundingClientRect().top;
          let x2 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y2 &&
            parseInt(cursor.style.top.split("px")) < y2 + 70 &&
            parseInt(cursor.style.left.split("px")) > x2 &&
            parseInt(cursor.style.left.split("px")) < x2 + 230
          ) {
            loader.style.display = "block";
            loader.style.top =
              parseInt(cursor.style.top.split("px")) - 12.5 + "px";
            loader.style.left =
              parseInt(cursor.style.left.split("px")) - 12.5 + "px";
            loader.style.zIndex = 12;

            contador += 20;
            console.log(contador);

            if (contador == 2000) {
              cases = 3;
              pintar();
            }
          } else {
            loader.style.display = "none";
            contador = 0;
          }

          break;
        case 3:
          let y3 = btn.getBoundingClientRect().top;
          let x3 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y3 &&
            parseInt(cursor.style.top.split("px")) < y3 + 80
          ) {
            if (
              parseInt(cursor.style.left.split("px")) > x3 &&
              parseInt(cursor.style.left.split("px")) < x3 + 200
            ) {
              loader.style.display = "block";
              loader.style.top =
                parseInt(cursor.style.top.split("px")) - 12.5 + "px";
              loader.style.left =
                parseInt(cursor.style.left.split("px")) - 12.5 + "px";
              loader.style.zIndex = 6;

              contador += 20;
              console.log(contador);

              if (contador == 2000) {
                cases = 4;
                pintar();
              }
            } else {
              loader.style.display = "none";
              contador = 0;
            }
          } else {
            loader.style.display = "none";
            contador = 0;
          }

          break;
        case 4:
          break;
        case 5:
          let y5 = btn.getBoundingClientRect().top;
          let x5 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y5 &&
            parseInt(cursor.style.top.split("px")) < y5 + 80
          ) {
            if (
              parseInt(cursor.style.left.split("px")) > x5 &&
              parseInt(cursor.style.left.split("px")) < x5 + 200
            ) {
              loader.style.display = "block";
              loader.style.top =
                parseInt(cursor.style.top.split("px")) - 12.5 + "px";
              loader.style.left =
                parseInt(cursor.style.left.split("px")) - 12.5 + "px";
              loader.style.zIndex = 12;

              contador += 20;
              console.log(contador);

              if (contador == 2000) {
                cases = 6;
                pintar();
              }
            } else {
              loader.style.display = "none";
              contador = 0;
            }
          } else {
            loader.style.display = "none";
            contador = 0;
          }

          break;
        case 6:
          let y6 = btn.getBoundingClientRect().top;
          let x6 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y6 &&
            parseInt(cursor.style.top.split("px")) < y6 + 80
          ) {
            if (
              parseInt(cursor.style.left.split("px")) > x6 &&
              parseInt(cursor.style.left.split("px")) < x6 + 200
            ) {
              loader.style.display = "block";
              loader.style.top =
                parseInt(cursor.style.top.split("px")) - 12.5 + "px";
              loader.style.left =
                parseInt(cursor.style.left.split("px")) - 12.5 + "px";
              loader.style.zIndex = 12;

              contador += 20;
              console.log(contador);

              if (contador == 2000) {
                cases = 7;
                pintar();
              }
            } else {
              loader.style.display = "none";
              contador = 0;
            }
          } else {
            loader.style.display = "none";
            contador = 0;
          }

          break;
        case 7:
          let y7 = btn.getBoundingClientRect().top;
          let x7 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y7 &&
            parseInt(cursor.style.top.split("px")) < y7 + 80
          ) {
            if (
              parseInt(cursor.style.left.split("px")) > x7 &&
              parseInt(cursor.style.left.split("px")) < x7 + 200
            ) {
              loader.style.display = "block";
              loader.style.top =
                parseInt(cursor.style.top.split("px")) - 12.5 + "px";
              loader.style.left =
                parseInt(cursor.style.left.split("px")) - 12.5 + "px";
              loader.style.zIndex = 12;

              contador += 20;
              console.log(contador);

              if (contador == 2000) {
                cases = 8;
                pintar();
              }
            } else {
              loader.style.display = "none";
              contador = 0;
            }
          } else {
            loader.style.display = "none";
            contador = 0;
          }

          break;
        case 8:
          let y8 = btn.getBoundingClientRect().top;
          let x8 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y8 &&
            parseInt(cursor.style.top.split("px")) < y8 + 70
          ) {
            if (
              parseInt(cursor.style.left.split("px")) > x8 &&
              parseInt(cursor.style.left.split("px")) < x8 + 230
            ) {
              loader.style.display = "block";
              console.log(cursor.style.width);
              loader.style.top =
                parseInt(cursor.style.top.split("px")) - 12.5 + "px";
              loader.style.left =
                parseInt(cursor.style.left.split("px")) - 12.5 + "px";
              loader.style.zIndex = 12;

              contador += 20;
              console.log(contador);

              if (contador == 2000) {
                cases = 9;
                pintar();
              }
            } else {
              loader.style.display = "none";
              contador = 0;
            }
          } else {
            loader.style.display = "none";
            contador = 0;
          }

          break;
        case 9:
          let dot1 = document.querySelector(".dot1");
          let dot2 = document.querySelector(".dot2");
          let dot3 = document.querySelector(".dot3");
          let dot4 = document.querySelector(".dot4");
          console.log(dot1.offsetLeft);
          if (
            parseInt(cursor.style.top.split("px")) > dot1.offsetTop - 25 &&
            parseInt(cursor.style.top.split("px")) < dot1.offsetTop + 25 &&
            parseInt(cursor.style.left.split("px")) > dot1.offsetLeft - 25 &&
            parseInt(cursor.style.left.split("px")) < dot1.offsetLeft + 25
          ) {
            var imgSrc = dot1.getAttribute("src");
            var imgFileName = imgSrc.substring(imgSrc.lastIndexOf("/") + 1);

            if (imgFileName === "dot.png") {
              contador += 1;
              dot1.src = "../imgs/dotAlt.png";
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > dot2.offsetTop &&
            parseInt(cursor.style.top.split("px")) < dot2.offsetTop + 50 &&
            parseInt(cursor.style.left.split("px")) > dot2.offsetLeft &&
            parseInt(cursor.style.left.split("px")) < dot2.offsetLeft + 50
          ) {
            var imgSrc = dot2.getAttribute("src");
            var imgFileName = imgSrc.substring(imgSrc.lastIndexOf("/") + 1);

            if (imgFileName === "dot.png") {
              contador += 1;
              dot2.src = "../imgs/dotAlt.png";
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > dot3.offsetTop &&
            parseInt(cursor.style.top.split("px")) < dot3.offsetTop + 50 &&
            parseInt(cursor.style.left.split("px")) > dot3.offsetLeft &&
            parseInt(cursor.style.left.split("px")) < dot3.offsetLeft + 50
          ) {
            var imgSrc = dot3.getAttribute("src");
            var imgFileName = imgSrc.substring(imgSrc.lastIndexOf("/") + 1);

            if (imgFileName === "dot.png") {
              contador += 1;
              dot3.src = "../imgs/dotAlt.png";
            }
          } else if (
            parseInt(cursor.style.top.split("px")) > dot4.offsetTop &&
            parseInt(cursor.style.top.split("px")) < dot4.offsetTop + 50 &&
            parseInt(cursor.style.left.split("px")) > dot4.offsetLeft &&
            parseInt(cursor.style.left.split("px")) < dot4.offsetLeft + 50
          ) {
            var imgSrc = dot4.getAttribute("src");
            var imgFileName = imgSrc.substring(imgSrc.lastIndexOf("/") + 1);

            if (imgFileName === "dot.png") {
              contador += 1;
              dot4.src = "../imgs/dotAlt.png";
            }
          }

          if (contador >= 4) {
            cases = 10;
            pintar();
          }
          break;
        case 11:
          let y11 = btn.getBoundingClientRect().top;
          let x11 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y11 &&
            parseInt(cursor.style.top.split("px")) < y11 + 70 &&
            parseInt(cursor.style.left.split("px")) > x11 &&
            parseInt(cursor.style.left.split("px")) < x11 + 230
          ) {
            loader.style.display = "block";
            loader.style.top =
              parseInt(cursor.style.top.split("px")) - 12.5 + "px";
            loader.style.left =
              parseInt(cursor.style.left.split("px")) - 12.5 + "px";
            loader.style.zIndex = 12;

            contador += 20;
            console.log(contador);

            if (contador == 2000) {
              cases = 12;
              pintar();
            }
          } else {
            loader.style.display = "none";
            contador = 0;
          }
          break;
        case 12:
          loader.style.display = "none";

          break;
        case 13:
          let y13 = btn.getBoundingClientRect().top;
          let x13 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y13 &&
            parseInt(cursor.style.top.split("px")) < y13 + 70 &&
            parseInt(cursor.style.left.split("px")) > x13 &&
            parseInt(cursor.style.left.split("px")) < x13 + 230
          ) {
            loader.style.display = "block";
            loader.style.top =
              parseInt(cursor.style.top.split("px")) - 12.5 + "px";
            loader.style.left =
              parseInt(cursor.style.left.split("px")) - 12.5 + "px";
            loader.style.zIndex = 12;

            contador += 20;
            console.log(contador);

            if (contador == 2000) {
              cases = 14;
              pintar();
            }
          } else {
            loader.style.display = "none";
            contador = 0;
          }
          break;
        case 14:
          let y14 = btn.getBoundingClientRect().top;
          let x14 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y14 &&
            parseInt(cursor.style.top.split("px")) < y14 + 70 &&
            parseInt(cursor.style.left.split("px")) > x14 &&
            parseInt(cursor.style.left.split("px")) < x14 + 230
          ) {
            loader.style.display = "block";
            loader.style.top =
              parseInt(cursor.style.top.split("px")) - 12.5 + "px";
            loader.style.left =
              parseInt(cursor.style.left.split("px")) - 12.5 + "px";
            loader.style.zIndex = 12;

            contador += 20;
            console.log(contador);

            if (contador == 2000) {
              cases = 15;
              pintar();
            }
          } else {
            loader.style.display = "none";
            contador = 0;
          }
          break;
        case 15:
          let swipe1 = document.querySelector(".swipe1");
          let arrowR = document.querySelector(".arrowR");
          let arrowL = document.querySelector(".arrowL");
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
                swipe1.style.marginLeft = -375 - 375 + "px";
                var imgSrc = arrowR.getAttribute("src");
                var imgFileName = imgSrc.substring(imgSrc.lastIndexOf("/") + 1);
                if (imgFileName === "arrow.png") {
                  swipeCounter += 1;
                  arrowR.style.transform = "rotateY(0deg)";
                  arrowR.style.marginTop = "-4px";
                  arrowR.style.padding = "10px";
                  arrowR.src = "../imgs/arrowCheck.png";
                }
              } else if (difPosition > 30 && velocity > 200) {
                swipe1.style.marginLeft = 0 + "px";
                var imgSrc = arrowL.getAttribute("src");
                var imgFileName = imgSrc.substring(imgSrc.lastIndexOf("/") + 1);
                if (imgFileName === "arrow.png") {
                  swipeCounter += 1;
                  arrowL.style.transform = "rotateY(0deg)";
                  arrowL.style.marginTop = "-4px";
                  arrowL.style.padding = "10px";
                  arrowL.src = "../imgs/arrowCheck.png";
                }
              }
            }
            if (swipeCounter == 2) {
              btn.src = "../imgs/continueBtnAlt.png";
            }
          } else {
            if (swipeCounter == 2) {
              let y14 = btn.getBoundingClientRect().top;
              let x14 = btn.getBoundingClientRect().left;

              if (
                parseInt(cursor.style.top.split("px")) > y14 &&
                parseInt(cursor.style.top.split("px")) < y14 + 70 &&
                parseInt(cursor.style.left.split("px")) > x14 &&
                parseInt(cursor.style.left.split("px")) < x14 + 230
              ) {
                loader.style.display = "block";
                loader.style.top =
                  parseInt(cursor.style.top.split("px")) - 12.5 + "px";
                loader.style.left =
                  parseInt(cursor.style.left.split("px")) - 12.5 + "px";
                loader.style.zIndex = 12;

                contador += 20;

                console.log(contador == 2000);

                if (contador === 2000) {
                  console.log("hola");
                  cases = 16;
                  pintar();
                }
              } else {
                loader.style.display = "none";
                contador = 0;
              }
            }
          }
          break;
          case 16:
            
                let y15 = btn.getBoundingClientRect().top;
                let x15 = btn.getBoundingClientRect().left;
  
                if (
                  parseInt(cursor.style.top.split("px")) > y15 &&
                  parseInt(cursor.style.top.split("px")) < y15 + 70 &&
                  parseInt(cursor.style.left.split("px")) > x15 &&
                  parseInt(cursor.style.left.split("px")) < x15 + 230
                ) {
                  loader.style.display = "block";
                  loader.style.top =
                    parseInt(cursor.style.top.split("px")) - 12.5 + "px";
                  loader.style.left =
                    parseInt(cursor.style.left.split("px")) - 12.5 + "px";
                  loader.style.zIndex = 12;
  
                  contador += 20;
  
                  console.log(contador == 2000);
  
                  if (contador === 2000) {
                    window.location.href = "./mainpage/mainpage.html";
                  }
                } else {
                  loader.style.display = "none";
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
  container.style.background = "#E2E3EF";
  let grid;
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
      btn2.addEventListener("click", (e) => {
        cases = 2;
        pintar();
      });
      break;
    case 2:
      container.innerHTML = `

      <div class="tutorial1" id="tutorial1">
      
            <img class="texto"  src="../imgs/textoCase1.png">
            <h1 class="addLeapBG">LEAP</h1>
            <figure class='frame'>
              <img class="leapCase" src="../imgs/leapCase1.png">
            </figure>
            
            <h1 class="addLeap">LEAP</h1>
            <img class="getOutBtn" src="../imgs/getOutBtn.png">
            <img class="continuarBtn" src="../imgs/getOutBtn.png">
            <div class='overlay' id='overlay'></div>
            </div>
            

            <!--<button class="continuarTutorial1" id='tut1Btn'>Continuar</button>-->

          `;
      grid = document.querySelector(".tutorial1");
      btn = document.querySelector(".continuarBtn");
      btn.style.opacity = 0;
      grid.style.backgroundImage = "url('../imgs/bgCase1.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "contain";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      setTimeout(function () {
        grid.style.opacity = 0;
        setTimeout(function () {
          let text = document.querySelector(".texto");
          text.src = "../imgs/textoCase2.png";
          let getOut = document.querySelector(".getOutBtn");
          getOut.style.marginTop = "46.5%";
          getOut.style.marginLeft = "15%";
          let addLeapBG = document.querySelector(".addLeapBG");
          addLeapBG.style.display = "none";
          let addLeap = document.querySelector(".addLeap");
          addLeap.style.mixBlendMode = "normal";
          let leapCase = document.querySelector(".leapCase");
          leapCase.src = "../imgs/leapCase1_1.png";
          leapCase.style.width = "auto";
          leapCase.style.height = "13%";
          leapCase.style.marginTop = "50%";
          leapCase.style.marginLeft = "-2%";
          addLeap.style.opacity = 1;
          addLeap.style.zIndex = 1;

          btn.style.opacity = 1;
          btn.src = "../imgs/continueBtn.png";

          let timeline = document.createElement("img");
          timeline.classList.add("timeline");
          timeline.src = "../imgs/timeline1.png";
          grid.appendChild(timeline);
          setTimeout(function () {
            let overlay = document.getElementById("overlay");
            overlay.style.opacity = 1;
            btn.style.zIndex = 6;
            btn.src = "../imgs/continueBtnAlt.png";
          }, 4000);
          grid.style.opacity = 1;
        }, 500);
      }, 4000);

      btn.addEventListener("click", (e) => {
        cases = 3;
        pintar();
      });

      break;
    case 3:
      container.innerHTML = `

<div class="tutorial1 tutorial3" id="tutorial1">
  
  <img class="getOutBtn" src="../imgs/getOutBtn.png">
      <img class="texto"  src="../imgs/tutorialCase3.png">
      <figure class='frame'>
        <img class="leapCase" src="../imgs/leapCase3.png">
      </figure>
      
      <img class="continuarBtn" src="../imgs/continueBtn.png">
      <img class="timeline" src="../imgs/timeline2.png">
      </div>
  
            `;
      grid = document.querySelector(".tutorial1");
      btn = document.querySelector(".continuarBtn");
      grid.style.backgroundImage = "url('../imgs/bgCase3.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";
      btn.addEventListener("click", (e) => {
        cases = 4;
        pintar();
      });

      break;
    case 4:
      container.innerHTML = `

      <div class="tutorial1 tutorial3 tutorial4" id="tutorial1">
        
        <img class="getOutBtn" src="../imgs/getOutBtn.png">
            <img class="texto"  src="../imgs/tutorialCase4.png">
           
            <img class="timeline" src="../imgs/timeline2.png">
            </div>
        
                  `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase4.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      setTimeout(function () {
        container.style.opacity = 0;
        setTimeout(function () {
          cases = 5;
          pintar();
        }, 1000);
      }, 2000);
      break;
    case 5:
      container.style.opacity = 1;
      container.innerHTML = `

      <div class="tutorial1 tutorial5" id="tutorial1">
        <div class= "btnText">
        <img class="getOutBtn" src="../imgs/getOutBtn.png">
            <img class="texto"  src="../imgs/tutorialCase5.png">
            </div>
            <img class="leapCase"  src="../imgs/leapCase5.png">
            <img class="timeline" src="../imgs/timeline2.png">
            <img class="continuarBtn" src="../imgs/continueBtnAlt.png">
  
          </div>
        
                  `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase4.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      btn = document.querySelector(".continuarBtn");
      btn.addEventListener("click", (e) => {
        container.style.opacity = 0;
        setTimeout(function () {
          cases = 6;
          pintar();
        }, 500);
      });

      break;
    case 6:
      container.style.opacity = 1;
      container.innerHTML = `

      <div class="tutorial1 tutorial5" id="tutorial1">
        <div class= "btnText">
        <img class="getOutBtn" src="../imgs/getOutBtn.png">
            <img class="texto"  src="../imgs/tutorialCase6.png">
            </div>
            <img class="leapCase"  src="../imgs/leapCase6.png">
            <img class="timeline" src="../imgs/timeline2.png">
            <img class="continuarBtn" src="../imgs/continueBtnAlt.png">
  
          </div>
        
                  `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase4.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      btn = document.querySelector(".continuarBtn");
      btn.addEventListener("click", (e) => {
        container.style.opacity = 0;
        setTimeout(function () {
          cases = 7;
          pintar();
        }, 500);
      });

      break;
    case 7:
      container.style.opacity = 1;
      container.innerHTML = `

      <div class="tutorial1 tutorial3 tutorial4 tutorial7" id="tutorial1">
        
        <img class="getOutBtn" src="../imgs/getOutBtn.png">
        <img class="yellowsign"  src="../imgs/yellowsign.png">
 
        <img class="texto"  src="../imgs/tutorialCase7.png">
        <img class="continuarBtn" src="../imgs/continueBtnAlt.png">

            <img class="timeline" src="../imgs/timeline2.png">
            </div>
        
                  `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase4.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      btn = document.querySelector(".continuarBtn");
      btn.addEventListener("click", (e) => {
        container.style.opacity = 0;
        setTimeout(function () {
          cases = 8;
          pintar();
        }, 500);
      });

      break;
    case 8:
      container.style.opacity = 1;
      container.innerHTML = `

      <div class="tutorial1 tutorial8" id="tutorial1">
        <div class= "btnText">
        <img class="getOutBtn" src="../imgs/getOutBtn.png">
            <img class="texto"  src="../imgs/tutorialCase8.png">
            </div>
            <img class="leapCase"  src="../imgs/leapCase8.png">
            <img class="timeline" src="../imgs/timeline2.png">
            <img class="continuarBtn" src="../imgs/continueBtn.png">

          </div>
        <img class= "cursorAnimation" src="../imgs/cursorAni.png">
        <div class="lds-ring ">
        </div>

                  `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase6.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      let leadCase = document.querySelector(".leapCase");
      let cursorAnimation = document.querySelector(".cursorAnimation");
      let lsdring = document.querySelector(".lds-ring");
      setTimeout(function () {
        cursorAnimation.style.top = "39%";
        cursorAnimation.style.left = "77%";
        lsdring.style.display = "block";
        cursorAnimation.style.mixBlendMode = "overlay";
        setTimeout(function () {
          lsdring.style.opacity = 1;
          for (let i = 0; i < 8; i++) {
            setTimeout(function () {
              let ring = document.createElement("div");
              lsdring.appendChild(ring);
              setTimeout(function () {
                ring.style.opacity = 1;
              }, 500);
            }, 500);
            if (i == 7) {
              setTimeout(function () {
                lsdring.classList.add("ldsanimation");
              }, 2000);
            }
          }

          setTimeout(function () {
            leadCase.src = "../imgs/leapCase8_1.png";
            cursorAnimation.style.display = "none";
            lsdring.style.display = "none";
            setTimeout(function () {
              //pintar();
            }, 2000);
          }, 6000);
        }, 800);
      }, 1000);

      btn = document.querySelector(".continuarBtn");
      btn.addEventListener("click", (e) => {
        container.style.opacity = 0;
        setTimeout(function () {
          cases = 9;
          pintar();
        }, 500);
      });

      break;
    case 9:
      container.style.opacity = 1;
      container.innerHTML = `

      <div class="tutorial1 tutorial3 tutorial4 tutorial7 tutorial9" id="tutorial1">
        
        <img class="getOutBtn" src="../imgs/getOutBtn.png">
        <img class="yellowsign"  src="../imgs/yellowsign.png">
 
        <img class="texto"  src="../imgs/tutorialCase9.png">

            <img class="timeline" src="../imgs/timeline2.png">
            <img class="dot dot1" id='dot1' src= "../imgs/dot.png">
            <img class="dot dot2" src= "../imgs/dot.png">
            <img class="dot dot3" src= "../imgs/dot.png">
            <img class="dot dot4" src= "../imgs/dot.png">
            </div>
        
                  `;

      let dot1 = document.getElementById("dot1");
      console.log(dot1.offsetTop);

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase9.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";
      break;
    case 10:
      container.style.opacity = 1;
      container.innerHTML = `

      <div class="tutorial1 tutorial3 tutorial4 tutorial7 tutorial10" id="tutorial1">
        
        <img class="getOutBtn" src="../imgs/getOutBtn.png">
        <img class="yellowsign"  src="../imgs/yellowsign.png">
 
        <img class="texto"  src="../imgs/tutorialCase10.png">

            <img class="timeline" src="../imgs/timeline2.png">
            </div>
        
                  `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase4.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      setTimeout(function () {
        container.style.opacity = 0;
        setTimeout(function () {
          cases = 11;
          pintar();
        }, 500);
      }, 4000);

      break;
    case 11:
      container.style.opacity = 1;
      container.innerHTML = `

      <div class="tutorial1 tutorial3 tutorial4 tutorial7 tutorial11" id="tutorial1">
        
        <img class="getOutBtn" src="../imgs/getOutBtn.png">
        <img class="yellowsign"  src="../imgs/yellowsign.png">
 
        <img class="texto"  src="../imgs/tutorialCase11.png">
        <img class="continuarBtn" src="../imgs/continueBtnAlt.png">

            <img class="timeline" src="../imgs/timeline2.png">
            </div>
        
                  `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase9.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      btn = document.querySelector(".continuarBtn");

      break;
    case 12:
      container.style.opacity = 1;
      container.innerHTML = `

      <div class="tutorial1 tutorial3 tutorial4 tutorial7 tutorial10" id="tutorial1">
        
        <img class="getOutBtn" src="../imgs/getOutBtn.png">
        <img class="yellowsign"  src="../imgs/yellowsign.png">
 
        <img class="texto"  src="../imgs/tutorialCase12.png">

            <img class="timeline" src="../imgs/timeline2.png">
            </div>
        
                  `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase4.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      setTimeout(function () {
        container.style.opacity = 0;
        setTimeout(function () {
          cases = 13;
          pintar();
        }, 500);
      }, 4000);

      break;
    case 13:
      container.style.opacity = 1;
      container.innerHTML = `

      <div class="tutorial1 tutorial3 tutorial4 tutorial7 tutorial13" id="tutorial1">
        
        <img class="getOutBtn" src="../imgs/getOutBtn.png">
        <img class="yellowsign"  src="../imgs/yellowsign.png">
 
        <img class="texto"  src="../imgs/tutorialCase13.png">
        <img class="continuarBtn" src="../imgs/continueBtnAlt.png">

            <img class="timeline" src="../imgs/timeline2.png">
            </div>
        
                  `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase4.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      btn = document.querySelector(".continuarBtn");
      btn.addEventListener("click", (e) => {
        container.style.opacity = 0;
        setTimeout(function () {
          cases = 14;
          pintar();
        }, 500);
      });

      break;
    case 14:
      container.style.opacity = 1;
      container.style.opacity = 1;
      container.innerHTML = `
  
        <div class="tutorial1 tutorial8 tutorial14" id="tutorial1">
          <div class= "btnText">
          <img class="getOutBtn" src="../imgs/getOutBtn.png">
              <img class="texto"  src="../imgs/tutorialCase14.png">
              </div>
              <img class="leapCase"  src="../imgs/leapCase14.png">
              <img class="hand"  src="../imgs/handSwipe.png">
<div class="swipeOverflow">
  <img class="swipeA"  src="../imgs/swipeA.png">
  <img class="swipeB"  src="../imgs/swipeB.png">
</div>
              <img class="timeline" src="../imgs/timeline2.png">
              <img class="continuarBtn" src="../imgs/continueBtn.png">
  
            </div>
          
  
                    `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase6.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      let swipeA = document.querySelector(".swipeA");
      let hand = document.querySelector(".hand");

      setTimeout(function () {
        hand.style.transform = "rotate(-8deg) translateX(-200px)";
        setTimeout(function () {
          swipeA.style.marginLeft = -375 + "px";
          setTimeout(function () {
            hand.style.transform = "rotate(25deg) translateX(60px)";
            setTimeout(function () {
              swipeA.style.marginLeft = 0 + "px";
            }, 600);
          }, 2000);
        }, 600);
      }, 1000);

      btn = document.querySelector(".continuarBtn");
      btn.addEventListener("click", (e) => {
        container.style.opacity = 0;
        setTimeout(function () {
          cases = 15;
          pintar();
        }, 500);
      });

      break;
    case 15:
      container.style.opacity = 1;
      container.innerHTML = `
  
        <div class="tutorial1 tutorial3 tutorial4 tutorial7 tutorial9 tutorial15" id="tutorial1">
          
          <img class="getOutBtn" src="../imgs/getOutBtn.png">
          <img class="yellowsign"  src="../imgs/yellowsign.png">
   
          <img class="texto"  src="../imgs/tutorialCase15.png">
  
              <img class="timeline" src="../imgs/timeline2.png">
              
              <div class="swipeOverflow">
  <img class="swipe swipe1"  src="../imgs/swipeTest1.png">
  <img class="swipe swipe2"  src="../imgs/swipeTest2.png">
  <img class="swipe swipe3"  src="../imgs/swipeTest3.png">
</div>
<div class="arrows">
<img class="arrowL"  src="../imgs/arrow.png">
  <img class="arrowR"  src="../imgs/arrow.png">
  </div>
  <img class="continuarBtn" src="../imgs/continueBtnIn.png">

              </div>
          
                    `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase9.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      btn = document.querySelector(".continuarBtn");
      btn.addEventListener("click", (e) => {
        container.style.opacity = 0;
        setTimeout(function () {
          cases = 16;
          pintar();
        }, 500);
      });

      break;
    case 16:
      container.style.opacity = 1;
      container.innerHTML = `
  
        <div class="tutorial1 tutorial3 tutorial4 tutorial7 tutorial16" id="tutorial1">
          
          <img class="getOutBtn" src="../imgs/getOutBtn.png">
          <img class="yellowsign"  src="../imgs/yellowsign.png">
   
          <img class="texto"  src="../imgs/tutorialCase16.png">
          <img class="continuarBtn" src="../imgs/continueBtnAlt.png">
  
              <img class="timeline" src="../imgs/timeline2.png">
              </div>
          
                    `;

      grid = document.querySelector(".tutorial1");
      grid.style.backgroundImage = "url('../imgs/bgCase4.png')";
      grid.style.backgroundPosition = "center";
      grid.style.backgroundSize = "cover";
      grid.style.backgroundRepeat = "no-repeat";
      grid.style.transform = "scale(1.1)";

      btn = document.querySelector(".continuarBtn");
      btn.addEventListener("click", (e) => {
        container.style.opacity = 0;
        setTimeout(function () {
          cases = 8;
          pintar();
        }, 500);
      });

      break;
    default:
      break;
  }
}
