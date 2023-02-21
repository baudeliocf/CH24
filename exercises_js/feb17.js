const print = (data) => {
    console.log(data);
}

// EXERCISE 03 #############################################################################################
// Crear el sistema de calendario para verificar si el día actual, junto a la
// hora es considerada día y horario laboral estándar
// 9am - 6pm horario laboral
// new Date().getDay() resulta en el dia de la semana del 0-6
// Función businessHours
// Parámetros: hour <- Hora actual
// Return: True/ False si la hora actual es horario laboral
// Función businessDay: Parámetros day
// Return: True / False si el día actual es laboral
// Verificación de la resolución de ambas funciones debe mostrar un mensaje.

var days = { 'sunday': 0, 'monday': 1, 'tuesday ': 2, 'wednesday ': 3, 'thursday': 4, 'friday': 5, 'saturday': 6 };

function businessDay(date) {
    let day = date.getDay();
    return (day >= days.monday && day <= days.friday);
}
function businessHours(hour) {
    return (hour >= 9 && hour <= 18);
}

function timeToWork(date, hour) {
    if (businessDay(date) && businessHours(hour)) {
        return "You should be working";
    } else {
        return "You should be sleeping for work";
    }
}

// print(timeToWork(new Date(), new Date().getHours()));
// print(timeToWork(new Date(2023,02,21), 16)); //true tuesday 16 pm
// print(timeToWork(new Date(2023,02,19), 10)); //false sunday 10 am

// print(businessDay(new Date(2023,02, 20))); //true monday
// print(businessHours(10)); //true 10am
// print(businessHours(3)); //false 3am


// EXERCISE 04 #############################################################################################
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
// print(countTrue([true, false, false, true, false])) //➞ 2
// print(countTrue([false, false, false, false])) //➞ 0
// print(countTrue([])) //➞ 0


// EXERCISE 05 #############################################################################################
// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

//veamos el MCD es el maximo numeros que 2 numeros puede dividirse
//20 y 10 seria 10
//32 y 20 seria 4
//50 y 20 seria 10
//y como se aplica recursion a esto?
//llamo la funcion 50, 20
//el resultado deberia ser 10
// 50 mod 20 daria 10 y esto se repite con 20 mod 10 que da 0
//llamo la funcion 32, 20
//el resultado deberia ser 4
//32 mod 20 daria 12 y esto se repite con 20 mod 12 que da 8 y 12 mod 8 da 4 y 8 mod 4 da 0, entonces fuera 4
//ok me falta algun conocimiento matematicos de porque esto funciona asi, yo lo hacia con tablitas 

function MCD(inside, outside) { //de la casita :)
    if (inside % outside == 0) {
        return outside;
    }
    return MCD(outside, inside % outside)
}
// console.log(MCD(50, 20))


// EXERCISE 06 #############################################################################################
// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion

//veamos que es fibonachi es la sucecion de numeros iniciando en 0, 1 repitiendo la suma de los 2 numeros anteriores
//recurvidad seria llamar a la misma funcion determinando con condicional de final
//si llamo 6 deberia de regresar 0 1 1 2 3 5
//deberia empezar de atras adelante
//f(6) llamaria a f(5) y f(4)
//f(5) llamaria a f(4) y f(3)
//f(4) llamaria a f(3) y f(2)
//f(3) llamaria a f(2) y f(1)
//f(2) regresaria 1
//f(1) regresaria 0

const get_fibonacci = (n) => {
    if (n < 2) {
        return (n);
    }
    return get_fibonacci(n - 1) + get_fibonacci(n - 2);
}

const fibonacci = (size) => {
    for (let i = 0; i < size; i++) {
        print(get_fibonacci(i));
    }
}

// print(fibonacci(10));
//yo creo que se puede hacer con 1 solo bloque



// EXERCISE 07 #############################################################################################
// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos
//ok veamos 1 > 1 (1), 2 > 4 (1, 3), 3 > 10 (1, 3, 6), 4 > 20 (1, 3, 6, 10), 5 > 35 (1, 3, 6, 10, 15)
/*
1 > 1
2 > 4
3 > 10
4 > 20
5 > 35
*/
//ocupo recursion tons 
//ok cada nivel se suma 1 mas tons
//es similar al fibonacci?

const level = (n) => {
    if (n == 1) {
        return 1;
    }
    return level(n - 1) + n
}

const sum = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += level(i + 1);
    }
    return sum;
}

// print(sum(2));
// print(sum(3));
// print(sum(4));
// print(sum(5));
// print(piramide(2));
// ok es similar al fibonacci yo creo que se puede hacer con 1 solo bloque



// EXERCISE 08 #############################################################################################
// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

//quiero pensar que no es necesario recursion
//tengo pereza de usar google asi que el area de la tierra seria el inverso de los ejemplos (1/.1148) * 17098242
const proportion = (country, area) => {
    return `${country} is ${Number((area / 148939390.24) * 100).toFixed(2)}%`
}

// print(proportion('Russia', 17098242))
// print(proportion('USA', 9372610))



// EXERCISE 09 #############################################################################################
// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit
const ok_is_fine = (input) => {
    return (1 - input);
}
//o era para pensar o entendi mal xD

// print(ok_is_fine(1))
// print(ok_is_fine(0))

function chat_gpt_is_smart(input) {
    const lookup = [1, 0];
    return lookup[input];
}



// EXERCISE 10 #############################################################################################
// Messenger bzzz
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"

const messenger = (n) => {
    if (n == 0) {
        return "No hay nadie en linea";
    }
    if (n == 1) {
        return "user1 esta en linea";
    } else {
        let string = '';
        for (let i = 1; i < n; i++) {
            if (i < n - 1) {
                string += `user${i}, `
            }
            else {
                string += `user${i} y user${i + 1} estan en linea `
            }
        }
        return string;
    }
}

// print(messenger(0));
// print(messenger(1));
// print(messenger(6));
// print(messenger(15));

