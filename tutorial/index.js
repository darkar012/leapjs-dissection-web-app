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
let palmPositionOrigin = 0;
let countMsgLeap = 0;
var counter = 0;
let swipe =false;

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
                cases = 3;
                pintar();
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
              cursorMini.style.transform =
                "scale(3) translateX(-10%) translateY(-10%)";

              cursorMini.style.transition =
                "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

              contador += 20;
              console.log(contador);

              if (contador == 4000) {
                cases = 4;
                pintar();
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
        case 4:
          let y4 = btn.getBoundingClientRect().top;
          let x4 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y4 &&
            parseInt(cursor.style.top.split("px")) < y4 + 80
          ) {
            if (
              parseInt(cursor.style.left.split("px")) > x4 &&
              parseInt(cursor.style.left.split("px")) < x4 + 200
            ) {
              cursorMini.style.transform =
                "scale(3) translateX(-10%) translateY(-10%)";

              cursorMini.style.transition =
                "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

              contador += 20;
              console.log(contador);

              if (contador == 4000) {
                cases = 5;
                pintar();
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
              cursorMini.style.transform =
                "scale(3) translateX(-10%) translateY(-10%)";

              cursorMini.style.transition =
                "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

              contador += 20;
              console.log(contador);

              if (contador == 4000) {
                cases = 6;
                pintar();
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
              cursorMini.style.transform =
                "scale(3) translateX(-10%) translateY(-10%)";

              cursorMini.style.transition =
                "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

              contador += 20;
              console.log(contador);

              if (contador == 4000) {
                if (countMsgLeap == 1) {
                  cases = 7;
                  pintar();
                } else {
                  let msg = document.getElementById("msg");
                  msg.style.opacity = 0;
                  msg.src = "../imgs/messageTut2.png";
                  msg.style.opacity = 1;
                  countMsgLeap = 1;
                }
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
              cursorMini.style.transform =
                "scale(3) translateX(-10%) translateY(-10%)";

              cursorMini.style.transition =
                "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

              contador += 20;
              console.log(contador);

              if (contador == 4000) {
                cases = 8;
                pintar();
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
          case 8:
          let y8 = btn.getBoundingClientRect().top;
          let x8 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y8 &&
            parseInt(cursor.style.top.split("px")) < y8 + 80
          ) {
            if (
              parseInt(cursor.style.left.split("px")) > x8 &&
              parseInt(cursor.style.left.split("px")) < x8 + 200
            ) {
              cursorMini.style.transform =
                "scale(3) translateX(-10%) translateY(-10%)";

              cursorMini.style.transition =
                "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

              contador += 20;
              console.log(contador);

              if (contador == 4000) {
                cases = 9;
                pintar();
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
          case 9:
          let y9 = btn.getBoundingClientRect().top;
          let x9 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y9 &&
            parseInt(cursor.style.top.split("px")) < y9 + 80
          ) {
            if (
              parseInt(cursor.style.left.split("px")) > x9 &&
              parseInt(cursor.style.left.split("px")) < x9 + 200
            ) {
              cursorMini.style.transform =
                "scale(3) translateX(-10%) translateY(-10%)";

              cursorMini.style.transition =
                "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

              contador += 20;
              console.log(contador);

              if (contador == 4000) {
                cases = 10;
                pintar();
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
          case 11:
          let y11 = btn.getBoundingClientRect().top;
          let x11 = btn.getBoundingClientRect().left;

          if (
            parseInt(cursor.style.top.split("px")) > y11 &&
            parseInt(cursor.style.top.split("px")) < y11 + 80
          ) {
            if (
              parseInt(cursor.style.left.split("px")) > x11 &&
              parseInt(cursor.style.left.split("px")) < x11 + 300
            ) {
              cursorMini.style.transform =
                "scale(3) translateX(-10%) translateY(-10%)";

              cursorMini.style.transition =
                "transform 4s ease-out, top 300ms ease-out, left 300ms ease-out";

              contador += 20;
              console.log(contador);

              if (contador == 4000) {
                cases = 12;
                pintar();
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
          case 12:

          for (var i = 0; i < frame.hands.length; i++) {
            var hand = frame.hands[i];
            var palmPosition = hand.palmPosition[0];
            var velocity = hand.palmVelocity[0];
    
            if (i === 5) {
              palmPositionOrigin = palmPosition;
            }
            let difPosition = palmPosition - palmPositionOrigin;
            if (difPosition <= -30 && velocity < -1000) {
                while (counter < 4) {
                    counter++
    
                } if (counter == 4 && !swipe ) {
                    
                    btn.innerHTML = 'DERECHA'
                    
    counter = 0;
    console.log('se cumple');
                    swipe = true;
                    setTimeout(function(){
    swipe=false;
    console.log(swipe);
                    }, 1000)
                }
                console.log(counter);
            } else if (difPosition > 30 && velocity > 1000) {
                while (counter > -4) {
                    counter--
    
                } if (counter == -4 && !swipe ) {
                  btn.innerHTML = 'IZQUIERDA'
                  setTimeout(function() {
                    window.location.href = './mainpage/mainpage.html'
                  },5000)
                     
    counter = 0;
    console.log('se cumple');
                    swipe = true;
                    setTimeout(function(){
    swipe=false;
    console.log(swipe);
                    }, 1000)
                }
                console.log(counter);
            }
            console.log(counter);
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
      btn2.addEventListener("click", (e) => {
        cases = 2;
        pintar();
      });
      break;
    case 2:
      container.innerHTML = `

      <div class="tutorial1">
      
            <img class="texto"  src="../imgs/tutorialIntro.png">
            <img class="grid"  src="../imgs/grid.png">
            <figure class='frame'>
            <iframe loading="eager" src='https://my.spline.design/leapmotion2-6d6e197856539a5365752a5a1ed63168/' frameborder='0' width='100%' height='100%' class="animation1"></iframe>
            </figure>
            
            </div>

            <div class='overlay' id='overlay'></div>

            <button class="continuarTutorial1" id='tut1Btn'>Continuar</button>

          `;
      btn = document.getElementById("tut1Btn");
      btn.style.zIndex = 7;
      btn.addEventListener("click", (e) => {
        cases = 3;
        pintar();
      });

      setTimeout(function () {
        let overlay = document.getElementById("overlay");
        overlay.style.opacity = 1;
        container.innerHTML += `
        <img class="sign1" src="../imgs/sign1.png">
        `;
        container.appendChild(btn);
      }, 4000);

      break;
    case 3:
      container.innerHTML = `

        <div class="tutorial1">
              <img class="texto"  src="../imgs/tutorialIntro2.png">
              <img class="grid"  src="../imgs/grid.png">
              <figure class='frame marginFrame'>
              <iframe loading="eager" src='https://my.spline.design/leapmotion2copy-9f293461c2ea6d75dbb25e4d8b4ce333/' frameborder='0' width='100%' height='100%' class="animation2"></iframe>
              </figure>
              
              </div>
  
          
              <button class="continuarTutorial1" id='tut1Btn'>Continuar</button>
  
            `;
      btn = document.getElementById("tut1Btn");
      btn.style.zIndex = 7;
      btn.addEventListener("click", (e) => {
        cases = 4;
        pintar();
      });

      break;
    case 4:
      container.innerHTML = `

        <div class="tutorial1">
              <img class="texto"  src="../imgs/tutorialIntro3.png">
              <img class="grid"  src="../imgs/grid.png">
              <figure class='frame'>
              <iframe loading="eager" src='https://my.spline.design/leapmotion2-6d6e197856539a5365752a5a1ed63168/' frameborder='0' width='100%' height='100%' class="animation1"></iframe>
              </figure>
              
              </div>
  
          
              <button class="continuarTutorial1" id='tut1Btn'>Continuar</button>
  
            `;
      btn = document.getElementById("tut1Btn");
      btn.style.zIndex = 7;
      btn.addEventListener("click", (e) => {
        cases = 5;
        pintar();
      });

      break;
    case 5:
      container.innerHTML = `

        <div class="tutorial1">
              <img class="texto"  src="../imgs/tutorialIntro4.png">
              <img class="grid"  src="../imgs/grid.png">
              <figure class='frame'>
              <iframe loading="eager" src='https://my.spline.design/p4copy-352fac6d4c52790efa7351d2a2dc324e/' frameborder='0' width='100%' height='100%' class="animation2"></iframe>
              </figure>
              
              </div>
  
          
              <button class="continuarTutorial1" id='tut1Btn'>Continuar</button>
  
            `;
      btn = document.getElementById("tut1Btn");
      btn.style.zIndex = 7;
      btn.addEventListener("click", (e) => {
        cases = 6;
        pintar();
      });

      break;
    case 6:
      container.innerHTML = `

        <div class="tutorial1">
              <img class="texto"  src="../imgs/tutorialBg.png">
              <img class="grid"  src="../imgs/grid.png">
              
              </div>
  
              <div class='case6'>
              <img class="message" id="msg" src="../imgs/messageTut.png">
              <button class="continuarTutorial1 nextBtn" id='tut1Btn'>Continuar</button>

              </div>
          
  
            `;
      btn = document.getElementById("tut1Btn");
      btn.style.zIndex = 7;
      let countMsg = 0;
      btn.addEventListener("click", (e) => {
        if (countMsg == 1) {
          cases = 7;
          pintar();
        } else {
          let msg = document.getElementById("msg");
          msg.style.opacity = 0;
          msg.src = "../imgs/messageTut2.png";
          msg.style.opacity = 1;
          countMsg = 1;
          countMsgLeap = 1;
        }
      });

      break;
    case 7:
      container.innerHTML = `
  
          <div class="tutorial1">
                <img class="texto"  src="../imgs/tutorialBg.png">
                <img class="grid"  src="../imgs/grid.png">
                
                </div>
    
                <div class='case7'>
                <img class="message" id="msg" src="../imgs/topMsgSelect.png">
                <iframe src='https://my.spline.design/untitled-33e000334ee4d4e51e6cf9690be391a1/' frameborder='0' width='100%' height='100%'></iframe>
                <button class="continuarTutorial1 nextBtn" id='tut1Btn'>Continuar</button>
  
                </div>
            
    
              `;
      btn = document.getElementById("tut1Btn");
      btn.style.zIndex = 7;
      btn.addEventListener("click", (e) => {
        cases = 8;
        pintar();
      });

      break;
    case 8:
      container.innerHTML = `
  
  <div class="tutorial1 case8">
              <img class="texto" id='texto'  src="../imgs/selectText.png">
              <img class="grid"  src="../imgs/grid.png">
              <figure class='frame'>
              <iframe src='https://my.spline.design/p5-7f3bfe23ff862a08a5234d00bd92a8b0/' frameborder='0' width='100%' height='100%'></iframe>              </figure>
              
              </div>
  
          
  
            
    
              `;
      
      setTimeout(function(){
container.innerHTML +=  `
            <div class='overlay' id='overlay'>
              
            </div>
            <img class="videonext" id="videoTutorial" src="../imgs/videoNext.png">

`
btn = document.getElementById('videoTutorial')
btn.addEventListener("click", (e) => {
  cases = 9;
  pintar();
});
let over = document.getElementById('overlay')
over.style.opacity = 1
let text = document.getElementById('texto')
text.src = "../imgs/textSelect.png"
text.style.zIndex = '6'
text.classList.add('textVideo')
      },6000)

      break;
      case 9:
        container.innerHTML = `
  
        <div class="tutorial1">
              <img class="texto"  src="../imgs/tutorialBg.png">
              <img class="grid"  src="../imgs/grid.png">
              
              </div>
  
              <div class='case9'>
              <img class="message" id="msg" src="../imgs/swipeTut.png">
              <iframe src='https://my.spline.design/p7-ef38efd0ca55743fde5e29da3938a462/' frameborder='0' width='100%' height='100%'></iframe>
              <button class="continuarTutorial1 nextBtn" id='tut1Btn'>Continuar</button>

              </div>
          
  
            `;
    btn = document.getElementById("tut1Btn");
    btn.style.zIndex = 7;
    btn.addEventListener("click", (e) => {
      cases = 10;
      pintar();
    });
      break;
      case 10:
      container.innerHTML = `
  
  <div class="tutorial1 case8">
              <img class="texto" id='texto'  src="../imgs/textSwipe.png">
              <img class="grid"  src="../imgs/grid.png">
              <figure class='frame'>
              <iframe src='https://my.spline.design/p8-55b36cd0662c3c007d45b5d5f9bff765/' frameborder='0' width='100%' height='100%'></iframe>
              
              </div>
  
              `;
      
      setTimeout(function(){

  cases = 11;
  pintar();

      },6000)

      break;
      case 11:
        container.innerHTML = `

        <div class="tutorial1">
              <img class="texto"  src="../imgs/tutorialBg.png">
              <img class="grid"  src="../imgs/grid.png">
              
              </div>
  
              <div class='case11'>
              <img class="message" id="msg" src="../imgs/msgproves.png">
              <button class="continuarTutorial1 nextBtn" id='tut1Btn'>Continuar</button>
              </div>
          
  
            `;
      btn = document.getElementById("tut1Btn");
      btn.style.display = 'none';
      setTimeout(function (){
        
          let msg = document.getElementById("msg");
          msg.style.opacity = 0;
          msg.src = "../imgs/selectTutTest.png";
          msg.style.opacity = 1;
          msg.classList.add("tutTest");
          btn.style.display = 'block';
          btn.addEventListener("click", function(){
            
            cases = 12
            pintar()
          })
        
      },4000)
        
      

      break;
      case 12:
        container.innerHTML = `

        <div class="tutorial1">
              <img class="texto"  src="../imgs/tutorialBg.png">
              <img class="grid"  src="../imgs/grid.png">
              
              </div>
  
              <div class='case12'>
              <img class="message" id="msg" src="../imgs/swipetTutTest.png">
              <p class="swipe" id='tut1Btn'>HAZ SWIPE</p>
              </div>
          
  
            `;
      btn = document.getElementById("tut1Btn");

      
      
        
      

      break;
    default:
      break;
  }
}