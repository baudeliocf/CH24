//Manipulacion del DOM


//Vamos a identificar los elementos del HTML y asignarlos a variables
const input = document.getElementById("inputPokemon"); //traigo el input
const button = document.getElementById("buscarPokemon"); //traigo el boton
const pokebola = document.getElementById("pokebola"); //traigo el contenedor


//Creacion de las funciones

//Una funcion para traer la informacion del pokemon
function traerPokemon(pokemon){ //funcion que trae a los pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) //realizamos la peticion a esta URL, agregamos la plantilla literal y esto nos ayudara a ir variando el elemento final de mi ruta (end-point)

    .then(infoPokemon => infoPokemon.json()) //cuando la promesa se resuelva, asignamos la info a la variable infopokemon en un formato json

    .then((data) => { //esta promesa se resuelve con la informacion ya guardada previamente, y esta informacion se pasara como un parametro de una funcion adicional llamada crearPokemon
        crearPokemon(data);
    });
}


//Una funcion para usar la informacion del pokemon, y ponerla en el HTML
function crearPokemon(pokemon){ //porque este parametro es que el controla todo (informacion que se muestra)

    //Aqui usamos la manipulacion del DOM (API DOM) para crear y poner la info del pokemon en el HTML

    //Crear elementos
    const img = document.createElement("img"); //creamos la etiqueta img
    img.src = pokemon.sprites.front_default; //usamos la imagen de mi pokemon para usarla como el atributo src de la etiqueta imagen
    img.alt = "Imagen bonita de un pokemon"; //agregamos el atributo alt

    const h3 = document.createElement("h3"); //creamos un titulo h3
    h3.textContent = pokemon.name; //le ponemos el nombre del pokemon

    const div = document.createElement("div"); //crear un elemento div

    //Insertando elementos

    div.appendChild(img); //insertamos la imagen como un hijo del div
    div.appendChild(h3); //insertamos el titulo como un hijo del div


    pokebola.appendChild(div); //agregamos el div al contenedor de la pokebola

}

traerPokemon("ditto");
traerPokemon("pikachu"); 


//ideas de eventos
// buscar.addEventListener('click',() =>{
//     traerPokemon(input.value);
// });
