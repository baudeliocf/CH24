const print = (data) => {
    console.log(data);
}

//#############################################################################################
// EXERCISE 03


//#############################################################################################
// EXERCISE 04

// Escribir una funcion que regrese la cantidad de valores true que hay en un array
// Regresar 0 si el array es vacio
// usar recurcion


const countTrue = (arr) => {
    if (arr.length == 0) {
        return 0
    }
    let newArray = arr.slice(1, arr.length);
    let count = countTrue(newArray);

    if (arr[0] == true) {
        return count + 1;

    } else {
        return count;
    }
}

// print(countTrue([true, false, false, true, false]))
print(countTrue([true, false, false, true, false])) //➞ 2
print(countTrue([false, false, false, false])) //➞ 0
print(countTrue([])) //➞ 0


//#############################################################################################
// EXERCISE 05

// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion
function MCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return MCD(b, a % b);
    }
}
// console.log(MCD(35, 80))



//#############################################################################################
// EXERCISE 06

// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion
function fibonacci(n) {
    console.log(n);
    if (n < 2) {
        return (n);
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(5);
// 0, 1, 1, 2, 3, 5, 8, 13, 21


//#############################################################################################
// EXERCISE 07

// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos


//#############################################################################################
// EXERCISE 08

// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%


//#############################################################################################
// EXERCISE 09

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit


//#############################################################################################
// EXERCISE 10

// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

