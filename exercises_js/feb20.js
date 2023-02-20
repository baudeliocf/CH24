const print = (data) => {
    console.log(data);
}

//#############################################################################################
// EXERCISE 01

// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR
const secretName = (arr) => {
    let name = ''

    //protection
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) != 'string') {
            arr[i] = arr[i].toString();
        }
    }

    //sort
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    //fist letter
    arr.forEach(e => {
        name += e[0];
    });
    return name;
}

// print(secretName(["Felipe", "Fer", "Zabdiel", 55])); // FFZ
// print(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica'])) // CJMPRR
// print(secretName(['Harry', 'Ron', 'Hermione'])) // HHR

//#############################################################################################
// EXERCISE 02

// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
const arrayMul = (number, size) => {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(number * (i + 1))
    }
    return (arr);
}

// print(arrayMul(2, 10)) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// print(arrayMul(17, 6)) // [17, 34, 51, 68, 85, 102]

//#############################################################################################
// EXERCISE 03

// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
const positiveDom = (arr) => {
    let numPos = 0;
    let numNeg = 0;
    arr.forEach(e => {
        if (e > 0) {
            numPos++;
        }
        if (e < 0) {
            numNeg++;
        }
    })
    return numPos > numNeg;
}

// print(positiveDom([-1, -3, -5, 4, 6767])) // false

//#############################################################################################
// EXERCISE 04

// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]

const average = (arr) => {

    let size = 0;
    let arr1 = [];
    let arr2 = [];

    // divide array
    if (arr.length % 2 == 1) {
        size = (arr.length - 1) / 2;
        arr1 = arr.splice(0, size);
        arr2 = arr.splice(1, size);
    } else {
        size = arr.length / 2;
        arr1 = arr.splice(0, size);
        arr2 = arr.splice(0, size);
    }

    // invert sum
    arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(arr1[i] + arr2[size - i - 1])
    }
    
    // divide
    for (let i = 0; i < size; i++) {
        arr[i] = arr[i] / 2;
    }

    return arr;
}

// print(average([1, 2, 3, 7, 5, 22, 6]));
// print(average([1, 2, 3, 5, 22, 6]));
// print(average([1, 2, 3, 5, 22]));
