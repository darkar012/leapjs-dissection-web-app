import "../../node_modules/leapjs/leap-1.1.1.js";
let indexFingerX = 0;
let indexFingerY = 0;
var contador = 0;
let counterSwipe = 0;
let palmPositionOrigin = 0;
let swipe = false;
let YArray = [];
let yNArray = [];
let casesTest = 6;
let actionsArr = [];

let setOneOptions = [
  {
    description: "Reconocer las partes de mi mano",
    value: 3,
  },
  {
    description: "Detectar la posición de mi mano con el sensor",
    value: 1,
  },
  {
    description: "Detectar el movimiento de mi mano",
    value: 2,
  },
];
let setTwoOptions = [
  {
    description: "Agregar elementos interactivos al código",
    value: 2,
  },
  {
    description: "Crear un método para reconocer el movimiento de mi mano",
    value: 3,
  },
  {
    description: "Hacer un swipe de prueba",
    value: 1,
  },
];
let setThreeOptions = [
  {
    description: "Crear un método para saber donde esta mi mano en la página",
    value: 2,
  },
  {
    description: "Agregar elementos interactivos al código",
    value: 3,
  },
  {
    description: "Crear un metodo para comparar la posicion de mis manos",
    value: 1,
  },
];
let setFourOptions = [
  {
    description: "Hacer un swipe, ya deberia funcionar",
    value: 1,
  },
  {
    description: "Verificar que ya tengo todo llamado en mi código",
    value: 2,
  },
  {
    description:
      "Crear un metodo para comparar la posicion de mis manos con los objetos",
    value: 3,
  },
];
let setFiveOptions = [
  {
    description: "Hacer un swipe, ya deberia funcionar",
    value: 1,
  },
  {
    description: "Detectar el movimiento de mi palma",
    value: 2,
  },
  {
    description: "Crear un metodo para modificar mis objetos con mi mano",
    value: 3,
  },
];
let exampleOptions = [
  {
    description: "Te mostraremos opciones de pasos a seguir",
    value: 3,
  },
  {
    description: "Escoge la mejor combinación de pasos y agregar el gesto",
    value: 1,
  },
  {
    description: "Tendrás retroalimentación paso a paso",
    value: 2,
  },
];
let exampleResponse = [
  {
    description: "Aqui van tus respuestas",
    value: 3,
  },
  {
    description: "Tendrán un color segun la calidad de tus pasos",
    value: 3,
  },
  {
    description: "Rojo es un error",
    value: 1,
  },
  {
    description: "Amarillo puede mejorar",
    value: 2,
  },
  {
    description: "Verde esta genial",
    value: 3,
  },
];

for (let i = 0; i < 300; i++) {
  YArray.push(300 - i);
}

for (let i = 0; i < 300; i++) {
  yNArray.push(i + 300);
}

function render(caseNumber) {
  const content = document.querySelector(".content");
  let introBtn;
  let continueBtn;

  switch (caseNumber) {
    case 0:
      content.innerHTML = `<img src="../../imgs/interactive/intro.png" alt="" class="intro-image" />
<div class="intro-description">
  <h2>¡Aprende sobre <span>DMI</span> mientras exploras con nosotros!</h2>
  <button id="introBtn">
      Iniciar
  </button>
</div>`;
      introBtn = document.getElementById("introBtn");
      introBtn.addEventListener("click", () => {
        casesTest++;
        render(casesTest);
      });

      break;

    case 1:
      content.innerHTML = `
<div class="intro-description tutorial1">
  <h2>Para eso añadiremos un nuevo gesto al <span>Leap</span></h2>
  <button id="introBtn">
       Continuar
  </button>
</div>      
<img src="../../imgs/leapCase8.png" alt="" class="intro-image" />
`;
      content.style.backgroundColor = "#29292a";

      introBtn = document.getElementById("introBtn");
      introBtn.addEventListener("click", () => {
        casesTest++;
        render(casesTest);
      });
      break;

    case 2:
      content.innerHTML = `
  <div class="intro-description">
    <h2>El gesto que realizaremos será un:</h2>

  </div>     
  <div class='gestures'>
  <div class='swipe-btn'>
  <img class="hand"  src="../../imgs/handSwipe.png">
      <button id="swipeBtn">
         Swipe
    </button>
  </div> 
  </div>

  `;
      content.style.backgroundColor = "#fff";
      content.classList.add("select-gestures");

      let hand = document.querySelector(".hand");

      setTimeout(function () {
        hand.style.transform = "rotate(-8deg) translateX(-200px)";

        setTimeout(function () {
          hand.style.transform = "rotate(25deg) translateX(60px)";
        }, 2000);
      }, 1000);

      let swipeBtn = document.getElementById("swipeBtn");
      swipeBtn.addEventListener("click", () => {
        casesTest = 3;
        render(casesTest);
      });
      break;
    case 3:
      content.classList = ["content"];
      content.innerHTML = `
      <div class='onboardingImg'>
     
      <img class= 'intro-image'src="../../imgs/interactive/programer.webp" alt="" />
      <button id='continueBtn'>continuar</button>
      </div>
      <div class="info-description">
  <h1>Para tener en cuenta:</h1>
  <div class="data-info">
    <h2>Variables</h2>
    <p>
      Son un espacio en la memoria del ordenador que sé
      utiliza para almacenar un valor. 
      Las variables se identifican por un
      nombre.
    </p>
    <div>
      <h3>Ejemplo</h3>
      <p>x = posición de mi dedo</p>
    </div>
  </div>
  <div class="data-info">
    <h2>Métodos</h2>
    <p>
      Son secuencias de instrucciones que se usan para realizar tareas específicas.
    </p>
    <div>
      <h3>Ejemplo</h3>
      <p>Calcular el movimiento de mi mano</p>
    </div>
  </div>
</div>`;
      content.classList.add("onboarding1");
      continueBtn = document.getElementById("continueBtn");
      continueBtn.addEventListener("click", () => {
        casesTest = 4;
        render(casesTest);
      });
      break;

    case 4:
      content.classList = ["content"];
      content.innerHTML = `
      <h2>Así que ten siempre en cuenta esta <span>secuencia<span></h2>
      <div class="equation">
        <h1>Variables</h1>
        <p>&#8674;</p>
        <h1>Métodos</h1>
        <p>&#8674;</p>
        <h1>Códigos</h1>
      </div>
      
    </div>
    <button id='continueBtn'>continuar</button>`;
      content.classList.add("equationContent");
      continueBtn = document.getElementById("continueBtn");
      continueBtn.addEventListener("click", () => {
        casesTest = 5;
        render(casesTest);
      });
      break;

    case 5:
      content.classList = ["content"];
      content.innerHTML = `
        <div class='dummie-dev'>
        <div class="intro-description tutorial1">
    <h2>¿Cómo funciona nuestra actividad?</h2>
    ${optionsByLength()}
  </div>   
        </div>
        <div class='blocks'>
        <h2>Aqui ira tu retroalimentación</h2>
        ${setOptions(exampleResponse, true)}
        ${
          exampleResponse.length > 3
            ? `<button id="introBtn">
       Iniciar la prueba
  </button>`
            : ``
        }
        <div>
  `;
      content.style.backgroundColor = "#29292a";
      content.classList.add("dummie-dev-content");

      continueBtn = document.getElementById("introBtn");
      continueBtn.addEventListener("click", () => {
        casesTest = 6;
        render(casesTest);
      });
      break;
    //inicio de interaccion
    case 6:
      content.classList = ["content"];
      content.innerHTML = `
        <div class='dummie-dev'>
        <div class="intro-description tutorial1">
    <h2>Escoge tus pasos</h2>
    ${optionsByLength()}
  </div>   
        </div>
        <div class='blocks'>
        <h2>Asi va tu código</h2>
        ${setOptions(actionsArr, true)}
        ${
          actionsArr.length > 4
            ? `<button id="introBtn">
       Probar mi código
  </button>`
            : ``
        }
      </div>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">

    
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
  </div>
</div>

  `;
      content.style.backgroundColor = "#29292a";
      content.classList.add("dummie-dev-content");

      let options = document.getElementsByClassName("option");
      for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", () => {
          if (actionsArr.length == 0) {
            let optionSelected = setOneOptions.find(
              (option) => option.description === options[i].innerText
            );
            actionsArr.push(optionSelected);
            render(casesTest);
          } else if (actionsArr.length == 1) {
            let optionSelected = setTwoOptions.find(
              (option) => option.description === options[i].innerText
            );
            actionsArr.push(optionSelected);
            render(casesTest);
          } else if (actionsArr.length == 2) {
            let optionSelected = setThreeOptions.find(
              (option) => option.description === options[i].innerText
            );
            actionsArr.push(optionSelected);
            render(casesTest);
          } else if (actionsArr.length == 3) {
            let optionSelected = setFourOptions.find(
              (option) => option.description === options[i].innerText
            );
            actionsArr.push(optionSelected);
            render(casesTest);
          } else if (actionsArr.length == 4) {
            let optionSelected = setFiveOptions.find(
              (option) => option.description === options[i].innerText
            );
            actionsArr.push(optionSelected);
            render(casesTest);
          } else {
            render(casesTest);
          }
        });
      }
      // Get the modal
      var modal = document.getElementById("myModal");

      if (actionsArr.length > 4) {
        continueBtn = document.getElementById("introBtn");
        console.log(continueBtn);
        continueBtn.addEventListener("click", () => {
          modal.style.display = "block";
        });
      }
      // Get the <span> element that closes the modal
      // var span = document.getElementsByClassName("close")[0];

      // // When the user clicks on <span> (x), close the modal
      // span.onclick = function () {
      //   modal.style.display = "none";
      // };

      // // When the user clicks anywhere outside of the modal, close it
      // window.onclick = function (event) {
      //   if (event.target == modal) {
      //     modal.style.display = "none";
      //   }
      // };
      break;

    default:
      break;
  }
}

render(casesTest);

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

      if (casesTest === 0) {
        let introBtn = document.getElementById("introBtn");
        if (
          parseInt(cursor.style.top.split("px")) > introBtn.offsetTop &&
          parseInt(cursor.style.top.split("px")) <
            introBtn.offsetTop + introBtn.offsetHeight &&
          parseInt(cursor.style.left.split("px")) > introBtn.offsetLeft &&
          parseInt(cursor.style.left.split("px")) <
            introBtn.offsetLeft + introBtn.offsetWidth
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
            casesTest = 1;
            render(casesTest);
          }
        }
      } else if (casesTest === 1) {
      }
    });
  }
});

function setOptions(array, isActions) {
  let options = ``;

  if (isActions) {
    array.forEach((option) => {
      if (option.value == 1) {
        options =
          options +
          `    <button class='option' style='background-color: #ff3939;'>
          ${option.description}
      </button>`;
      } else if (option.value == 2) {
        options =
          options +
          `    <button class='option' style='background-color: #ffc800;'>
          ${option.description}
      </button>`;
      } else {
        options =
          options +
          `    <button class='option' style='background-color: #00C7AF;'>
          ${option.description}
      </button>`;
      }
    });
  } else {
    array.forEach((option) => {
      options =
        options +
        `    <button class='option'>
        ${option.description}
    </button>`;
    });
  }
  return options;
}

function optionsByLength() {
  if (casesTest == 5) {
    return setOptions(exampleOptions, false);
  } else {
    if (actionsArr.length == 0) {
      return setOptions(setOneOptions, false);
    } else if (actionsArr.length == 1) {
      return setOptions(setTwoOptions, false);
    } else if (actionsArr.length == 2) {
      return setOptions(setThreeOptions, false);
    } else if (actionsArr.length == 3) {
      return setOptions(setFourOptions, false);
    } else if (actionsArr.length >= 4) {
      return setOptions(setFiveOptions, false);
    }
  }
}
