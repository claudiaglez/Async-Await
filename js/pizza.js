

// Importamos las variables del documento "imagenes.js"
import { amasarPizzaTexto, amasarPizza, tomarAlgo, tomarAlgoTexto, verTvTexto, verTv, preCalentar, preCalentarTexto} from "../js/imagenes.js";

async function hornoListo() {
  return new Promise(function(resolve) {
    setTimeout(function(){
      document.getElementById("preCalentar").appendChild(preCalentarTexto);
      document.getElementById("preCalentar").appendChild(preCalentar);
      resolve();
    },7000);
  });
}

async function preCalentarHorno() {
  try {
    const respuesta = await hornoListo();
  }
  catch (error) {
    console.error(error);
  }
}

function hacerPizza(){
  document.getElementById("hacerPizza").appendChild(amasarPizzaTexto);
  document.getElementById("hacerPizza").appendChild(amasarPizza);
}

function tomarRefresco(){
  document.getElementById("tomarRefresco").appendChild(tomarAlgoTexto);
  document.getElementById("tomarRefresco").appendChild(tomarAlgo);
}

function mirarTV(){
  document.getElementById("verTv").appendChild(verTvTexto);
  document.getElementById("verTv").appendChild(verTv);
}
 
preCalentarHorno();
hacerPizza();
tomarRefresco();
mirarTV();


 