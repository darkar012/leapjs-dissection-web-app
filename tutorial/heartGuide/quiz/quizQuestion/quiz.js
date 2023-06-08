import "../../../../node_modules/leapjs/leap-1.1.1.js";
let indexFingerX = 0;
let indexFingerY = 0;
var contador = 0;
let counterSwipe = 0;
let palmPositionOrigin = 0;
let swipe = false;

let score = 0;

let answerFinal = 0;
let YArray = [];
let yNArray = [];
let menuBtn = document.querySelector(".mainMenu");
let labBtn = document.querySelector(".labBtn");
let atlasBtn = document.querySelector(".atlasBtn");
let tutorialBtn = document.querySelector(".tutorial");
let gesture = document.querySelector(".gestures");

let answerSelected = false
let answerCorrected = false


let optionA = document.querySelector(".optionA");
let optionB = document.querySelector(".optionB");
let optionC = document.querySelector(".optionC");
let optionD = document.querySelector(".optionD");
let confirmarBtn = document.querySelector(".confirmarBtn");
let salirBtn = document.querySelector(".salirBtn");

let popUpCases = 0;
let help = document.querySelector(".help");
let overlayTutorial = document.querySelector(".overlayTutorial");
let tutorialPopUp = document.querySelector(".tutorialPopUp");

for (let i = 0; i < 300; i++) {
  YArray.push(300 - i);
}

for (let i = 0; i < 300; i++) {
  yNArray.push(i + 300);
}
var controller = new Leap.Controller();
controller.connect();

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
        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
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
        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
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
        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
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
        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
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
        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {
          console.log("hola");
        }
      } else if (
        parseInt(cursor.style.top.split("px")) >
          tutorialPopUp.offsetTop + tutorialPopUp.offsetHeight * 0.55 &&
        parseInt(cursor.style.top.split("px")) <
          tutorialPopUp.offsetTop + tutorialPopUp.offsetHeight &&
        parseInt(cursor.style.left.split("px")) >
          tutorialPopUp.offsetLeft + tutorialPopUp.offsetWidth * 0.52 &&
        parseInt(cursor.style.left.split("px")) <
          tutorialPopUp.offsetLeft + tutorialPopUp.offsetWidth &&
        popUpCases == 0
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {
          popUpCases = 2;
          changePopUp(popUpCases);
        }
      } else if (
        parseInt(cursor.style.top.split("px")) >
          tutorialPopUp.offsetTop + tutorialPopUp.offsetHeight * 0.55 &&
        parseInt(cursor.style.top.split("px")) <
          tutorialPopUp.offsetTop + tutorialPopUp.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > tutorialPopUp.offsetLeft &&
        parseInt(cursor.style.left.split("px")) <
          tutorialPopUp.offsetLeft + tutorialPopUp.offsetWidth * 0.52 &&
        popUpCases == 0
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {
          popUpCases = 1;
          changePopUp(popUpCases);
        }
      } else if (
        parseInt(cursor.style.top.split("px")) > tutorialPopUp.offsetTop &&
        parseInt(cursor.style.top.split("px")) <
          tutorialPopUp.offsetTop + tutorialPopUp.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > tutorialPopUp.offsetLeft &&
        parseInt(cursor.style.left.split("px")) <
          tutorialPopUp.offsetLeft + tutorialPopUp.offsetWidth &&
        popUpCases >= 2
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {
          popUpCases += 1;
          changePopUp(popUpCases);
          if (popUpCases == 7) {
            overlayTutorial.style.display = "none";
            changePopUp(0);
          }
        }
      } else if (
        parseInt(cursor.style.top.split("px")) >
          tutorialPopUp.offsetTop + tutorialPopUp.offsetHeight * 0.55 &&
        parseInt(cursor.style.top.split("px")) <
          tutorialPopUp.offsetTop + tutorialPopUp.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > tutorialPopUp.offsetLeft &&
        parseInt(cursor.style.left.split("px")) <
          tutorialPopUp.offsetLeft + tutorialPopUp.offsetWidth &&
        popUpCases == 1
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {
          overlayTutorial.style.display = "none";
          changePopUp(0);
        }
      } else if (
        parseInt(cursor.style.top.split("px")) > help.offsetTop &&
        parseInt(cursor.style.top.split("px")) <
          help.offsetTop + help.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > help.offsetLeft &&
        parseInt(cursor.style.left.split("px")) <
          help.offsetLeft + help.offsetWidth
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {
          overlayTutorial.style.display = "flex";
          popUpCases = 0;
          changePopUp(0);
        }
      }else if (
        parseInt(cursor.style.top.split("px")) > optionA.offsetTop &&
        parseInt(cursor.style.top.split("px")) <
          optionA.offsetTop + optionA.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > optionA.offsetLeft &&
        parseInt(cursor.style.left.split("px")) <
          optionA.offsetLeft + optionA.offsetWidth
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {

          correctAnswer(1);
        }
      }  else if (
        parseInt(cursor.style.top.split("px")) > optionB.offsetTop &&
        parseInt(cursor.style.top.split("px")) <
          optionB.offsetTop + optionB.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > optionB.offsetLeft &&
        parseInt(cursor.style.left.split("px")) <
          optionB.offsetLeft + optionB.offsetWidth
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {

          correctAnswer(2);
        }
      } else if (
        parseInt(cursor.style.top.split("px")) > optionC.offsetTop &&
        parseInt(cursor.style.top.split("px")) <
          optionC.offsetTop + optionC.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > optionC.offsetLeft &&
        parseInt(cursor.style.left.split("px")) <
          optionC.offsetLeft + optionC.offsetWidth
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {

          correctAnswer(3);
        }
      }else if (
        parseInt(cursor.style.top.split("px")) > optionD.offsetTop &&
        parseInt(cursor.style.top.split("px")) <
          optionD.offsetTop + optionD.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > optionD.offsetLeft &&
        parseInt(cursor.style.left.split("px")) <
          optionD.offsetLeft + optionD.offsetWidth
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {

          correctAnswer(4);
        }
      }else if (
        parseInt(cursor.style.top.split("px")) > confirmarBtn.offsetTop &&
        parseInt(cursor.style.top.split("px")) <
          confirmarBtn.offsetTop + confirmarBtn.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > confirmarBtn.offsetLeft &&
        parseInt(cursor.style.left.split("px")) <
          confirmarBtn.offsetLeft + confirmarBtn.offsetWidth && answerSelected
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {
          showAnswer(answerFinal)
          //correctAnswer(4);
        }
      }else if (
        parseInt(cursor.style.top.split("px")) > confirmarBtn.offsetTop &&
        parseInt(cursor.style.top.split("px")) <
          confirmarBtn.offsetTop + confirmarBtn.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > confirmarBtn.offsetLeft &&
        parseInt(cursor.style.left.split("px")) <
          confirmarBtn.offsetLeft + confirmarBtn.offsetWidth && answerCorrected
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;
console.log("hola");
        contador += 20;

        if (contador == 2000) {
          verifyAnswer()
        }
      } else if (
        parseInt(cursor.style.top.split("px")) > salirBtn.offsetTop &&
        parseInt(cursor.style.top.split("px")) <
          salirBtn.offsetTop + salirBtn.offsetHeight &&
        parseInt(cursor.style.left.split("px")) > salirBtn.offsetLeft &&
        parseInt(cursor.style.left.split("px")) <
          salirBtn.offsetLeft + salirBtn.offsetWidth
      ) {
        loader.style.display = "block";

        loader.style.top = parseInt(cursor.style.top.split("px")) - 12.5 + "px";
        loader.style.left =
          parseInt(cursor.style.left.split("px")) - 12.5 + "px";
        loader.style.zIndex = 12;

        contador += 20;

        if (contador == 2000) {

          window.location.href = "../../final/final.html";
        }
      }else {
        loader.style.display = "none";
        contador = 0;
      }
    });
  }
});

function changePopUp(cases) {
  switch (cases) {
    case 0:
      tutorialPopUp.src = "../../../../imgs/heartGuide/tutorial/intro.png";
      tutorialPopUp.style.width = "50%";
      tutorialPopUp.style.marginLeft = "0%";
      tutorialPopUp.style.marginTop = "0%";
      break;
    case 1:
      tutorialPopUp.src = "../../../../imgs/heartGuide/tutorial/reject.png";
      tutorialPopUp.style.width = "42%";
      tutorialPopUp.style.marginLeft = "-52%";
      tutorialPopUp.style.marginTop = "6%";
      break;
    case 2:
      tutorialPopUp.src = "../../../../imgs/heartGuide/tutorial/t1.png";
      tutorialPopUp.style.width = "23%";
      tutorialPopUp.style.marginLeft = "55%";
      tutorialPopUp.style.marginTop = "8%";
      break;
    case 3:
      tutorialPopUp.src = "../../../../imgs/heartGuide/tutorial/t2.png";
      tutorialPopUp.style.width = "23%";
      tutorialPopUp.style.marginLeft = "42%";
      tutorialPopUp.style.marginTop = "-2%";
      break;
    case 4:
      tutorialPopUp.src = "../../../../imgs/heartGuide/tutorial/t3.png";
      tutorialPopUp.style.width = "23%";
      tutorialPopUp.style.marginLeft = "44%";
      tutorialPopUp.style.marginTop = "3%";
      break;
    case 5:
      tutorialPopUp.src = "../../../../imgs/heartGuide/tutorial/t4.png";
      tutorialPopUp.style.width = "23%";
      tutorialPopUp.style.marginLeft = "18%";
      tutorialPopUp.style.marginTop = "5%";
      break;
    case 6:
      tutorialPopUp.src = "../../../../imgs/heartGuide/tutorial/t5.png";
      tutorialPopUp.style.width = "23%";
      tutorialPopUp.style.marginLeft = "19%";
      tutorialPopUp.style.marginTop = "-2%";
      break;

    default:
      break;
  }
}

function correctAnswer(answer) {
answerSelected = true
confirmarBtn.src = "../../../../imgs/heartGuide/quiz/question1/confirmarBtnAlt.png"
answerFinal = answer

  switch (answer) {
    case 1:
      optionA.style.filter = ("brightness(0.5)")
      optionB.style.filter = ("brightness(1)")
      optionC.style.filter = ("brightness(1)")
      optionD.style.filter = ("brightness(1)")
      
      break;
    case 2:
      optionA.style.filter = ("brightness(1)")
      optionB.style.filter = ("brightness(0.5)")
      optionC.style.filter = ("brightness(1)")
      optionD.style.filter = ("brightness(1)")
    
      break;
    case 3:
      optionA.style.filter = ("brightness(1)")
      optionB.style.filter = ("brightness(1)")
      optionC.style.filter = ("brightness(0.5)")
      optionD.style.filter = ("brightness(1)")
      break;
    case 4:
      optionA.style.filter = ("brightness(1)")
      optionB.style.filter = ("brightness(1)")
      optionC.style.filter = ("brightness(1)")
      optionD.style.filter = ("brightness(0.5)")
      break;
    default:
      break;
  }
}

function showAnswer(answer) {
  answerSelected = false
  answerCorrected = true
    switch (answer) {
      case 1:
        optionA.style.filter = ("hue-rotate(120deg) saturate(4)")
        optionB.style.filter = ("hue-rotate(250deg) saturate(6)")
        
        break;
      case 2:
        optionB.style.filter = ("hue-rotate(250deg) saturate(6)")
      
        break;
      case 3:
        optionC.style.filter = ("hue-rotate(120deg) saturate(4)")
        optionB.style.filter = ("hue-rotate(250deg) saturate(6)")
        break;
      case 4:
        optionD.style.filter = ("hue-rotate(120deg) saturate(4)")
        optionB.style.filter = ("hue-rotate(250deg) saturate(6)")
        break;
      default:
        break;
    }
  }

function verifyAnswer ( ){
  if (answerFinal == 2){
    score += 1.66
  }else{
    score = score
  }
  window.localStorage.setItem("score", score);
  window.location.href = "../quizQuestion2/quiz.html";
}
