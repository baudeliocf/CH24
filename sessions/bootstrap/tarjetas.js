//Programa para insertar tarjetas de Bootstrap a mi HTML

//Recuperar los nodos del HTML
let nombre = document.getElementById("nombre"); 
let edad = document.getElementById("edad"); 
let descripcion = document.getElementById("descripcion"); 
let email = document.getElementById("email"); 

//obtenemos el boton
let boton = document.getElementById("boton"); //traer el boton

//obtenemos el lugar
let lugar = document.getElementById("contenido");


//Evento para que cuando se de clic al boton "agregar tarjeta" , se agregue la tarjeta
boton.addEventListener("click", agregarTarjeta);


//Funcion para agregar tarjeta
function agregarTarjeta(){

    let valorNombre = nombre.value;
    let valorEdad = edad.value;
    let valorDescripcion = descripcion.value;
    let valorEmail = email.value;

//crear la tarjeta utilizando bootstrap. Esta tarjeta se inserta en el HTML

    let tarjeta = 

`<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${valorNombre}</h5>
  <h6 class="card-subtitle mb-2 text-muted">${valorEdad}</h6> 
  <p class="card-text">${valorDescripcion}</p>
  <a href="#" class="card-link">${valorEmail}</a>
  <a href="#" class="card-link">${valorEmail}</a>
</div>
</div>`;


    lugar.innerHTML += tarjeta;
}