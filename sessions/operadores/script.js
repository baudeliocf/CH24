/*


Los operadores son signos que nos permiten realizar operaciones especificas entre uno o mas elementos


Tenemos distintos tipos de operadores:

    - Operadores de asignacion (=)
    - Operadores aritmeticos (+, -, /, *, %)
    - Operadores de comparacion (<, >, >=, <=,)
    - Operadores de igualdad (==, ===)
    - Operadores logicos (&&, ||, !)
    - Operadores de incremento y decremento (++, --)
    - Operadores de asignacion compuesta (+=, -=, *=, etc). 

*/

let x = 12;
let y = 23;
let z = 3;
let resultado = x - y * z;
// console.log("El resultado de la resta y multiplicacion es:", resultado);

let dividendo = 17;
let divisor = 4;
let cociente = Math.floor(dividendo / divisor);
let resto = dividendo % divisor;
// console.log(cociente);
// console.log(resto);

let base = 8;
let exponente = 3;
let resultadoExp = base ** exponente;
Math.exp(3, 8);

// console.log('hola')


const eq_general = (a, b, c) => {
    let result = [];
    result[0] = (-b + (b**2 - 4 * a * c) ^ 0.5) / (2 * a);
    result[1] = (-b - (b*b - 4 * a * c) ^ 0.5) / (2 * a);
    return result;
}

// console.log(Math.sqrt(4));
// console.log(7^5); //111 XOR 101 = 010 //Bitwise XOR (^)
// console.log(eq_general(1, 6, 9));


const velocity = (distance, time) => {
    return distance / time;
}

// console.log(velocity(50, 10));


/*Operadores de comparacion

Los operadores de comparacion son:

- Mayor que (>)
- Menor que (<)
- Mayor o igual que (>=)
- Menor o igual que (<=)
- Igual que (==)
- Igual que estricto (===)
- Diferente que (!=)
- Diferente que estricto (!==)
*/

//Operadores de igualdad
// console.log( 5 == 5); //true
// console.log( 5 == '5'); //true, porque compara el valor

//Operadores de igualdad estricta
// console.log( 5 === '5'); //false

// console.log(true == 'true'); //false

//Operadores logicos AND &&, OR ||, NOT !

//Definir la salida correcta (true o false)

let num1 = 12;
let num2 = 24;
let num3 = 25;
let num4 = 92;
let num5 = 91;

let operacion = (num1 < num2 || num2 < num3) && (!(num1 == num2) && num5 ==num3);
// operacion(true || true) && (!(false) && false);
// operacion(true) && (true && false);
// operacion(true) && (false);
// operacion(false);

// console.log(operacion);

let operacion2 = (num5 > num2 && num4 < num3) || num1 > num5 && (num1 === num3 || num2 == num5);
// (true && false) || false && (false || false);
// (false) || false && (false);
// (false) || false;
// false;

// console.log(operacion2);

//Operadpres de incremento o decremento (contadores)

//Incremento (++)

let valor1 = 5;

let resta = (valor1 - 7) * ++valor1 + valor1 / 2

// console.log(resta);

// Operadores aritmeticos
//     - Parentesis ()
//     - Operadores de incremento y decremento
//     - OPeradores unsarios de negacion y de signo + (investigar)
//     - Exponentes **
//     - Multiplicaciones, divisiones, modulos
//     - Sumas y restas


// Metodos de cadena

let text = 'Helloa World'
console.log(text.length)
console.log(text.charAt(0))
console.log(text[0])

console.log(text.substring(1, 3));
console.log(text.toLowerCase());
console.log(text.toUpperCase());

console.log(text.trim(2, 5))

console.log(text.indexOf('llo'));
console.log(text.lastIndexOf('orl'));

console.log(text.charCodeAt(4));
console.log(text.split);

//join reverse split
