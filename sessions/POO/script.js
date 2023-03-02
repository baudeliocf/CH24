/* 

POO (programacion orientada a objetos)

paradigma de programación = la forma en como se programa o se crean soluciones de software

Se llama "Orientad a Objetos" porque usa los objetos del mundo real para comprender y crear soluciones:

Ejemplos
    -casa
    -gatitos
    -panques

Elementos de la POO:
    -Clases o Plantillas: Atributos o características (como se ve), metodos o funciones (lo que puede hacer).



    -Objetos: Instancias o materializacion de una clase

*/

const gatito = {
    nombre: 'Nenito',
    edad: 7,
    actitud: 'Salvaje y Travieso',
    pelaje: 'Naranja',
    colorOjos: 'Verdes',
    raza: 'Egipcio',
    tamanio: '60 cm',
}

console.log(gatito)

//Creacion de una clase coomo una plantilla para poder realizar muchos objetos a partir de ella 

class gato{
    //defeinimos propiedades como variables, se declaran pero no se inicializan
    nombre = '';
    edad = 0;
    size = 0;
    raza = "";

    // constructor
    constructor(nombre,edad,size,raza){
        //pasamos los parametros para poder construir mi gatito
        //usamos la palabra reservada this. para agregar datos a cada campo del objeto, y que sean tratados unica y exclusivamente bajo este contexto

        this.nombre = nombre;
        this.edad = edad;
        this.size = size;
        this.raza = raza;
    }

    // adentro de la clase se pueden definir los métodos (funciones)

    maullar(){
        console.log("Miauuu");
    }

    ronronear(){
        console.log("Rrrrrrr");
    }
}

// instanciacion de nuestros gatos

let felix = new gato ("felix",30,"small","maltez");

