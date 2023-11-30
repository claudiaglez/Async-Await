
// Declaramos las variables que luego vamos a utilzar en el documento pizza.js. Consisten en un gif y una frase.


export let amasarPizzaTexto = document.createElement("h1");
amasarPizzaTexto.textContent = "Amasamos la Pizza...";
export let amasarPizza = document.createElement("img");
amasarPizza.src = "/public/img/hacerpizza.gif";
amasarPizza.alt = "Hacer Pizza";

export let tomarAlgoTexto = document.createElement("h1");
tomarAlgoTexto.textContent = "...Nos tomamos algo mientras tanto...";
export let tomarAlgo = document.createElement("img");
tomarAlgo.src = "/public/img/tomaralgo.gif";
tomarAlgo.alt = "Tomar algo";

export let verTvTexto = document.createElement("h1");
verTvTexto.textContent = "...Vemos la televisión...";
export let verTv = document.createElement("img");
verTv.src = "/public/img/vertv.gif";
verTv.alt = "Ver TV";

export let preCalentarTexto = document.createElement("h1");
preCalentarTexto.textContent = "Beeep! ¡Horno listo!";
export let preCalentar = document.createElement("img");
preCalentar.src = "/public/img/hornolisto.gif";
preCalentar.alt = "Tomar algo";
