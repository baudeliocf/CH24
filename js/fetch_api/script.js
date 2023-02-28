// alert("Hola, estoy vivo");

//################################################################################################
// Sincronismo vs Asincronismo

//  - Carnita asada (asincronico)
//  - Torteria (sincronico)

//  Conceptos de asincronismo o sincronismo

//  Hilos o threads: pista de aterrizaje
//  Input o entrada: avion llegando
//  Output o salida: avion despega
//  Manejador de eventos: torre de control

//################################################################################################
//JavaScript sincrono
// console.log("Inicio Sincronia"); //bienvenida

// function dosSync (){
//     console.log("Dos");
// }

// function unoSync(){
//     console.log("Uno");
//     dosSync();
//     console.log("Tres")
// }

// unoSync();

// console.log("Fin Sincronia"); //salida

//################################################################################################
// Hay diversas formas de trabajar con el asincronismo en JS (brujeria avanzada)

//     - Por medio de funciones (setTimeOut) forma basica
//     - Por callbacks ()
//     - Promesas
//     - Async/Await

//################################################################################################
//Ejemplo de Callback (funcion como parametro de otra funcion)
// function suma (a, b, callback){ //dos valores numericos, un callback
//     const resultado = a + b; //suma
//     callback(resultado); //asigno el resultado al callback para que al invocar se pase ese resultado como argumento
// }

// function mostrarResultado(resultado){
//     console.log("El resultado es " + resultado);
// }

// suma (5, 10, mostrarResultado);

//################################################################################################
//Ejemplo de callback
// function obtenerDatos(callback) {
//   //setTimeOut para emular la conexion al servidor
//   setTimeout(() => {
//     const datos = { nombre: "Felipe", edad: "30" }; //datos de Felipe
//     callback(datos);
//   }, 2000); //se resuleve en 2 segundos
// }

// function mostrarNombre(datos) {
//   //usamos ese callback con los datos
//   console.log("Nombre: " + datos.nombre); //mostra informacion
// }

// function mostrarEdad(datos) {
//   console.log("Edad: " + datos.edad);
// }

// obtenerDatos(mostrarNombre);
// obtenerDatos(mostrarEdad);

//################################################################################################
// Promesas
// Son un objeto que nos ayuda a representar si algo esta disponible ahora, en un futuro o nunca.

// Dentro de las promesas, tenemos 3 estados posibles:

//     - pending: saber cuando se crea la promesa (estaremos juntos toda la vida)
//     - fullfilled: la promesa se resuelve (ya paso toda la vida)
//     - rejected: cuando la promesa no se resuelve (dejamos de estar juntos)

//     Tambien tenemos dos argumentos:

//     - resolve
//     - reject

//################################################################################################
//Ejemplo de promesas

// const miPromesa = new Promise((resolve, reject) => {
//   const num = Math.random();
//   if (num < 0.5) {
//     resolve("La promesa se resuelve con exito");
//   } else {
//     reject(new Error("La promesa se rechazo"));
//   }
// });

// let nombre = "Fernando";

// const promesaNombre = new Promise((resolve, reject) => {
//   if (nombre !== "Felipe") reject("Error!!");
//   resolve(nombre);
// });

//################################################################################################
//Ejemplo de promesa (Te prometo que en 5 segundos te amare)

// var promesaDeAmor = new Promise(function (resolve, reject) {
//   //creo mi promesa
//   setTimeout(function () {
//     //le doy un tiempo a mi promesa
//     resolve("Te amo"); //cuando se cumple, muestra "te amo"
//   }, 5000); //tiempo en el que se resulve la promesa (5 segundo)
// });

// promesaDeAmor.then(function (valor) {
//   //tomo el valor del "Te amo", lo asingamos a la variable valor
//   console.log(valor); //imprimimos el valor
// });

// console.log(promesaDeAmor);

//################################################################################################
// Fetch API

// Fetch es el nombre de una nueva API para JS con la cual podemos realizar peticiones HTTP asincronas utilizando promesas y de forma que el codigo sea un poco mas sencillo y legible. La forma de usar una peticion fetch es sencilla,solo tenemos que llamar a fetch y pasarle por parametro la URL de la peticion a realizar:

//     Realizamos la peticion y guardamos la promesa en una variable
//     const solicitud = fetch('https://jsonplaceholder.typicode.com/users')

//     Si es resuelta, entonces ejecutamos esta funcion
//     solicitud.then(function(respuesta) {....});

//################################################################################################
//usamos la palabra reservada fetch y agreamos como string el link a donde nos conectaremos
// fetch ('https://jsonplaceholder.typicode.com/posts')
// .then(respuesta => respuesta.json()) //prometeme que te conectas al server
// .then(datos => console.log(datos))//promete que cuando te conectes, creas una variable llamda datos con la info de ese servidor
// .then (error => console.log(error.mensaje));//si no te puedes conectar, avisame

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((datos) => {
//     return datos.json();
//   })
//   .then((info) => {
//     console.log("El body dle post es:");
//   });

//################################################################################################
// JSON (JavaScript Object Notation)

// JSON es un objeto que esta escrito en formato JSON (un objeto que se ha convertido en una cadena de texto.). Se usan para la comunicacion entre cliente-servidor y nos permite intercambiar informacino estructura.

// Para utilizan objetos JSON, usamos dos metodos principales

//     - JSON.stringify(): Convertir un objeto JS en una cadena JSON
//     - JSON.parse(): Convertir una cadena JSON en un objeto

//################################################################################################
//Esto es un objeto de JS (nosotros hacer operaciones) cliente al servidor
// const persona = {
//     nombre: "Felipe",
//     edad: "30",
//     estado: "Estado de Mexico"
// };

// console.log(persona);
// console.log(persona.edad);
// console.log(persona.estado);

// const personaJSON = JSON.stringify(persona); //convirtiendo mi objeto a cadena JSON

// console.log(personaJSON);
// console.log(typeof(personaJSON));

//################################################################################################
//Esto es una cadena JSON (donde no podemos hacer operaciones) servidor al cliente

// const objeto = '{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"}';

// console.log(objeto.description);

// const objetoJS = JSON.parse(objeto);
// console.log(objetoJS);
// console.log(objetoJS.description);

//################################################################################################
//Primer paso usar fetch a la ruta especificada
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')

//segundo paso: usar una promesa para resolver la conexion
// .then(respuesta => {
//     return respuesta.json();
// })

// //tercera promesa:
// .then(informacion =>{
//     console.log("El nombre de nuestro pokemon es: ", informacion.name);
//     console.log("El numero de mi pokemon es: ", informacion.id);
//     console.log("La imagen de mi pokemon es: ", informacion.sprites.front_default);
// })

// console.log(informacion.name); //undefined porque la informacion vive dentro de la promesa

let count = 0;
//################################################################################################
fetch(`https://pokeapi.co/api/v2/pokemon/`)
  .then((data) => {
    return data.json();
  })

  .then((data) => {
    count = data.count;
    console.log(count);
    showPokemons(count);
    //   console.log(data.results.length);
  });

//################################################################################################
function showPokemons(count) {
  console.log(count);
  for (let i = 1; i < count; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((data) => {
        return data.json();
      })

      .then((data) => {
        // console.log(data.results[0].url);

        image = `<img src=${data.sprites.front_shiny} alt="">`;

        let div = document.getElementById("div_container");
        div.innerHTML += image;
      });
  }
}
//################################################################################################
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  // fetch ('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')

  .then((data) => {
    return data.json();
  })

  .then((data) => {
    // console.log(data);
    console.log(data.market_data.current_price.usd);

    tag_p = `<p>${data.market_data.current_price.usd}</p>`;

    let div = document.getElementById("div_container");
    div.innerHTML += tag_p;
  });

//################################################################################################
// Try - Catch (manejo de excepciones)

//Intento dividir un numero entre 0
//Error
//Mostrar un mensaje con ese error. Atrapa el error, y lo muestra de otra forma
