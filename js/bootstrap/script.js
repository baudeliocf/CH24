

let boton = document.getElementById("boton");
boton.addEventListener("click", addCard);
let lugar = document.getElementById("contenido");

let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let descripcion = document.getElementById("descripcion");
let email = document.getElementById("email");

function addCard() {
    let tarjeta =
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${nombre.value}</h5>
      <p class="card-text">${descripcion.value}</p>
      <a href="#" class="btn btn-primary">${email.value}</a>
      <a href="#" class="btn btn-primary">${edad.value}</a>
    </div>
  </div>`;

    lugar.innerHTML += tarjeta;
}


console.log("Soy 'Baudelio'");

