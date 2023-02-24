console.log('Operadores y Expresiones');

/*


Los operadores son signos que nos permiten realizar operaciones especificas entre uno o mas elementos


Tenemos distintos tipos de operadores:

    - Operadores de asignacion (=)
    - Operadores aritmeticos (+, -, /, *, %)
    - Operadores de comparacion (<, >, >=, <=,)
    - Operadores de igualdad e igualdad estricta (==, ===)
    - Operadores logicos (&&, ||, !)
    - Operadores de incremento y decremento (++, --)
    - Operadores de asignacion compuesta (+=, -=, *=, etc). 
    - Operador de concatenación (+)

*/

//Operadores de asignacion
let edad = 30;

//Operadores de asignacion compuesta (+=, -=, *=, /=, %=)
let edadFelipe = 30;
//edadFelipe = edadFelipe + 1; //31
edadFelipe += 1; //Es lo mismo que edadFelipe = edadFelipe + 1;
console.log("La nueva edad de Felipe sera:" , edadFelipe);



/*Operadores aritmeticos (+, -, *, /, %)


Precedencia o jerarquia de operadores

    - Parentesis ()
    - Operadores de incremento y decremento
    - Operadores unarios de negacion y de signo + (investigar)
    - Exponentes **
    - Multiplicaciones, divisiones, modulos
    - Sumas y restas

*/

//Suma (+)
let a = 12;
let b = 8;
let suma = a + b;
console.log("El resultado de sumar 12 + 8 es:", suma)


//Resta y multiplicacion (-)
let x = 12;
let y = 23;
let z = 3;
let resultado = x - y * z;
console.log("El resultado de la resta y multiplicacion es: ", resultado);


//Modulo y division
let dividendo = 17;
let divisor = 4;
let cociente = Math.floor(dividendo/divisor);
let resto = dividendo % divisor;
console.log(cociente); //4
console.log(resto); //1


//Exponenciacion (**)
let base = 8;
let exponente = 3;
let resultadoExp = base ** exponente; //24


Math.exp(3,8);


//Calcular un exponente usando for
let baseFor = 5;
    let exponenteFor = 2;
    let result=1;
    for(let i=1; i<=exponenteFor; i++ ){
        result *= baseFor;
    }

    console.log(result);


//Ejercicio formula general

/*Levanto requerimientos

    - Debo de introducir 3 tipos de datos (A, B, C)
    - Debo calcular operaciones matematicas
        - Raiz cuadrada
        - Division
        - Multiplicacion
        - Signo negativo
        - Dos signos (+, -) tengo que crear esto 2 veces
    - El resultado se asigna en x
    - Muestro en pantalla los dos resultados (negativo, positivo)
*/


// let A;
// let B;
// let C;


// B = 5;
// //const constante = 4;
// //const constante2 = 2;
// let exponenteB = B ** 2;

// let raiz = exponenteB - 4 * (A * C);
// let resultadoRaiz = Math.sqrt(raiz);
// //let division = resultadoRaiz / 2 (A);

// let BNegativa = -(B);

// let resultadoFinalPositivo = (BNegativa + resultadoRaiz) / (2*A);
// let resultadoFinalNegativo = (BNegativa - resultadoRaiz) / (2*A);


// //Version de Alexis
// x = (-(b) + Math.sqrt(Math.pow(2,b)-(4*(a * c)))) / (2 * a);


/*Operadores de comparacion

Los operadores de comparacion son:

- Mayor que (>)
- Menor que (<)
- Mayor o igual que (>=)
- Menor o igual que (<=)
- Igual que (==)
- Igual que estricto (===)

//Casos especiales
- Diferente que (!=)
- Diferente que estricto (!==)
*/   

console.log( 5 > 3); //true
console.log( 3 < 6); //true
console.log( 5 > 15); //false
console.log( 5 >= 5); //true
console.log( 5 <= 3); //false


//Operadores de igualdad
console.log( 5 == 5); //true
console.log( 5 == '5'); //true, porque compara el valor


//Operadores de igualdad estricta (pregunta de entrevisa)
console.log( 5 === '5'); //false
console.log(true == 'true'); //false
console.log(typeof('true'));


//Igual compara el valor, igual estrictor compara valor y tipo de dato


/*Operadores logicos

Se usa para validar dos o mas valores booleanos

    - AND &&
    - OR ||
    - NOT !

*/

//AND (&&) evalua dos operandos, esperando que ambos valores sean true 

//Si presento proyecto integrador && participe en al menos un tallere de entrevista = graduacion
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false


//OR (||) evalua dos operandos, pero alguno de ellos tiene que ser verdadero

//Puedo presentar una ecommerce || una red social
console.log(true || true); //true
console.log(false || false); //false
console.log(true || false); //true


//NOT (!) invierte o niega el resultado. 
// !Nos quedamos hasta las 10pm 

console.log(!true); //false
console.log(!false); //true



//Definir la salida correcta (true o false)

let num1 = 12; 
let num2 = 24; 
let num3 = 25; 
let num4 = 92; 
let num5 = 91; 

let operacion = (num5 > num2 && num4 < num3) || num1 > num5 && (num1 === num3 || num2 == num5);


//(num5 > num2 && num4 < num3) || num1 > num5 && (num1 === num3 || num2 == num5);

console.log(operacion);




//Operadores diferente (!=) los operadores a evaluar tienen que ser distintos
console.log(5 !== '5'); //true

//console.log(contraseniaGuardada != contraseniaIngresada); //alerta

//Desigualdad estricta (!==)



//Operadores de incremento o decremento (contadores)

//incremento (++)

let valor1 = 5;

let resta = (valor1 - 7) * ++valor1 + valor1 / 2; //10.5, 9, -17

console.log(resta);

let nuevoValor = valor1 += 5;
console.log(nuevoValor); // 11


//decremento (--)



/////////////////////////////////////////////////////////////////////////////

/*
Operadores o metodos de cadena de texto (strings)

- Concatenar textos
- Conocer longitud
- Comparar cadenas de texto
- Buscar elementos dentro de la cadena
- Modificar cadenas
- Dividir cadenas de texto

*/

//length: Para devolver la longitud de una cadena de texto
let texto1 = "Hola, mi nombre es Felipe";
console.log("Esta es la longitud de mi texto ", texto1.length); //25 caracteres


//charAt(): Devolver el caracter de una cadena en la posicion indicada (index)
let texto2 = "Hola mundo";
console.log(texto2.charAt(0)); //H
console.log(texto2.charAt(5)) //m


//substring: Devolver una parte de la cadena de texto, a partir de una posicion indicada
console.log(texto2.substring(0,4)); //Hol
//substring(indexStart, indexEnd


//toLowerCase y toUpperCase: Converit una cadena de texto a minusculas o mayusculas. No se cambia la cadena original.
console.log(texto1.toLowerCase());
console.log(texto1.toUpperCase());
console.log(texto1);
console.log(String);


//Felipe.comer
//Felipe.dormir
//Felipe.programar


//trim: Eliminar los espacios en blanco al principio y al final de una cadena de texto. Si cambia a la cadena original
let texto3 = "     Hola Generation     ";
console.log(texto3.length); //25
let texto3Nuevo = (texto3.trim()); //
console.log(texto3Nuevo.length); //15


//replace: reemplazar una subcadena de texto por otra subcadena de texto
let texto4 = " Hola Felipe";
console.log(texto4.replace("Felipe", "Fernando"));


//indexOf() y lastIndexOf() : Estos metodos devuelven la posicion de la primera o la ultima aparicion de un caracter o una subcadenas de texto

let texto5 = "Hola Caracola Caracola";
console.log(texto5.indexOf("Caracola")); //primera aparicion(index)
console.log(texto5.lastIndexOf("Caracola")); // ultima aparicion(index)


//charCodeAt(index) : Encontrar el valor ASCII del elemento pasado en el index
let texto6 = "Hola";
console.log(texto6.charCodeAt(3));


//split: divide una cadena en un array de subcadenas, utilizando un separador especifico. No modifica la cadena original (porque debemos asignar a una nueva variable)

let listaSuper = "manzana,peras,chocolates,galletas,sopas,mayonesa";
let listaSuperSeparada = listaSuper.split(",");//pasamos como parametro el elemento que determine la separacion entre elementos (, -, ., etc.)

console.log(listaSuperSeparada);
console.log(listaSuper);



//match: buscar coincidencia dentro de nuestra cadena de texto, si coincide arroja el resultado dentro de un array, si no, muestra null
let contraseniaAntigua = "Me gusta el chocolate";
let contraseniaNueva = "Me gusta el chocolate";

const resultado1 = contraseniaAntigua.match(contraseniaNueva);
console.log(resultado1);


//reverse: Invertir nuestra cadena de texto
//join: unir nuestros elementos como cadena de texto
let palabraIngresada = "chicharron";

let palabraInvertida = palabraIngresada.split("").reverse();
console.log(palabraInvertida);

//primero leo la palabra
//la convierto en arreglo (split)
//invierto el arreglo (reverse)
//paso ese array a una cadena con join