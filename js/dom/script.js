/*

Dentro del DOM (Document Object Model o Modelado de Objetos del Documento) encontraremos unidades basicas llamadas NODOS. Pueden ser de los siguientes tipos:

    - Documento: Nodo raiz o nodo a partir del cual se derivan todos los demas. Este nodo permite acceder o entrar a todos los elementos del dom. 

    - Elemento: Definidos por las etiquetas dentro del html. (<div>, <h1>, <p>, <ul>, <li>, <tr>
    
    - Texto: Elemento del tipo texto que generalmente esta dentro de otro nodo del tipo elemento.

    - Atributos: Nodos del tipo atributo que nos dan mas informacion asociada a una etiqueta

    - Comentarios: Los comentarios y otros elementos como declaraciones del doctype en la cabecera se consideran nodos.


*/


let titulo = document.getElementById('titulo');
console.log(titulo);

let input = document.getElementById('input');
console.log(input);

let parrafos = document.getElementById('p');
console.log(parrafos);

let parrafos2 = document.getElementsByClassName('parrafo');
console.log(parrafos2);

/*

Metodos mas recientes para acceder a elementos de HTML

        - document.querySelector (primer elemento)
        - document.querySelectorAll (todos los elementos)

*/


let parrafo1 = document.querySelector("#parrafo1")
console.log(parrafo1);

let collection = document.querySelectorAll(".parrafo")

/*
Crear y agregar elementos en el DOM

Crear nodos
        - document.createElement (nodo del tipo etiqueta)
        - document.createTextNode (nodo del tipo texto)
*/

// let h1 = document.createElement("h1")
let div = document.createElement("div")
let texto = document.createTextNode("Hola")
let comentario = document.createComment("Este es un comentario en JS")

/*
Agregar nodos a mi documento HTML
        parentElement.apped

*/

//Orden para agregar elementos

//Primero definirmos el lugar donde voy a poner mi nuevo elemento
//Crear el elemento que voy a insert
//Insertar el texto al nodo (el hijo al padre)
//Insertar el elementom a mi documento

let lugarAInsertar = document.getElementById("contenedor"); //1
let h1 = document.createElement("h1"); //2
h1.appendChild(texto); //3
lugarAInsertar.append(h1); //4


let posicion = document.getElementById("container")
let foto = document.createElement("img");
foto.src = "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg"
foto.alt = "Foto"
foto.style.width = "150px"

posicion.append(foto);
