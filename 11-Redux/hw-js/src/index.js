const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, impar, async } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
const store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
const valor = document.querySelector("#valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const actual = store.getState().contador;
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerText = actual;
}

// Ejecutamos la funcion 'renderContador':
renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(renderContador);


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
const btnInc = document.getElementById("incremento");
const btnDec = document.getElementById("decremento");
const btnImp = document.getElementById("incrementoImpar");
const btnAsy = document.getElementById("incrementoAsync");

btnInc.addEventListener("click", () => store.dispatch(incremento()));
btnDec.addEventListener("click", () => store.dispatch(decremento()));
btnImp.addEventListener("click", () => store.dispatch(impar()));
btnAsy.addEventListener("click", () => setTimeout(() => store.dispatch(async()), 1000));
