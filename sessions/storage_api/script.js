/*

API almacenamiento WEB

Tenemos dos formas de almacenar datos en nuestro navegador

    - local storage (almacenamiento local)
    - session storage (almacenamiento de sesion)


Almacenamiento local (localStorage)

Esta informacion se almacena en el navegador de forma local (persistencia alta), y se guardara hasta que nosotros decidamos borrarla con codigo o borrando el historial de nuestro navegador.

Amazon en carrito de compras, datos de usuario, preferencias, etc.

*/

//Para guardar informacion en el almacenamiento, debemos tomar en cuenta los terminos "llave y valor" - "key and value"


//Metodos para guardar datos setItem (localStorage.setItem(key, value))
localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("CarritoCompras", "5 elementos");
localStorage.setItem("Edad", 30);
localStorage.setItem("Ciudad", "Estado de Mexico");

console.log(localStorage);

/*Metodo para recuperar datos getItem (localStorage.getItem(key))
Usar una variable para almacenar el dato recuperado del localStorage*/
let carritoRecuperado = localStorage.getItem("CarritoCompras");
console.log(carritoRecuperado);

//Metodo para remover elementos (localStorage.removeItem(key))
localStorage.removeItem("Edad");

//Metodo para borrar todos los elementos (localStorage.clear())
localStorage.clear();

//Metodo para obtener la longitud de nuestro localStorage
let longitudLocaStorage = localStorage.length;
console.log(longitudLocaStorage);



//Funciones para guardarDatos y recuperarDatos

function guardarDatos(){
    //metodos para guardar informacion en el localStorage
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;  

    //manipulacion DOM
    document.getElementById("datos").innerHTML = "Datos Guardados Correctamente :D";
}

function recuperarDatos(){
    document.getElementById("datos").innerHTML =
    "Nombre " + localStorage.nombre + " Password: " + localStorage.password;
}



// //traer boton
//  let boton = document.getElementsByClassName("guardar");


// //crear un evento asociado a ese boton
// boton.addEventListener('click',()=> guardarDatos());

