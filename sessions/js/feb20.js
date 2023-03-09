// const arr = ['a', 'b', 'c', 'd'];

// const loop1 = (arr) => {

//     for (let cont = 0; cont <= 10; cont++) {
//         console.log(cont);
//     }
// }

// loop1(arr);

const arr = [1, 2, 3, 4, 5];
const arr2 = [1, -563, 999, 0, -1, -999];

const print = (data) => {
    console.log(data);
}

// In array, find the largest number
const bigNumber = (arr) => {
    let number = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > number) {
            number = arr[i];
        }
    }
    return number;
}

// In array, find the smallest number
const smallNumber = (arr) => {
    let number = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < number) {
            number = arr[i];
        }
    }
    return number;
}

// In array, find the largest and smallest number
const smallAndBigNumber = (arr) => {
    let smallAndBig = [arr[0], arr[0]];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallAndBig[0]) {
            smallAndBig[0] = arr[i];
        }
        if (arr[i] > smallAndBig[1]) {
            smallAndBig[1] = arr[i];
        }
    }
    return smallAndBig;
}

// In array, find the sum of all resistors connected in series
const sumSeriesRes = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`${sum} ohms in series`);
}

// In array, find the sum of all resistors connected in parallel
const sumParallelRes = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += 1 / arr[i];
    }
    console.log(`${Number(sum).toFixed(2)} ohms in parallel`);
}

// In int number, return array of the same number dividide
const numDiv = (num) => {
    let divider = 2;
    let arr = [];
    for (let i = 0; i < divider; i++) {
        arr[i] = num / divider;
    }
    return arr;
}

// console.log(bigNumber(arr));
// console.log(smallNumber(arr));
// console.log(smallAndBigNumber(arr));
// sumSeriesRes(arr);
// sumParallelRes(arr);
// console.log(numDiv(100));


const names = ['Zabdiel', 'Griselo', 'Felipe', 'Fer', 'Magali', 'Leslie'];
console.log(names);

// print(names.indexOf('Griselo'));

print(names.pop());
console.log(names);


console.log(names.push('Sergio'));
console.log(names);

console.log(names.shift());
console.log(names);

console.log(names.unshift('Hugo'));
console.log(names);

// Unshift
// names.unshift('Hugo');
// console.log(names);

// delete

// delete names[0];
// console.log(names);

// Splice elimina elementos y si es necesario podemos ingresar nuevos en el arreglo
// console.log(names);
// names.splice(1, 0, 'Hugo', 'Carlos');
// console.log(names);

// Slice corta el array de (index inicial, index final) y crea uno nuevo con ese rango
// console.log(names);
// const arr2 = names.slice(2, 4);
// console.log(arr2);

// investigar
// sort()
// reverse()

// forEach
// por Cada elemento de un array/objeto/matriz realizar el bloque de codigo
// Comunmente utiliza funciones anonimas para su ejecucion


names.forEach((elemento, index, arr) => {
    console.log(elemento);
    console.log(index);
    console.log(arr);
});

/*
names.forEach(function (elemento, index, arr) {
    console.log(elemento);
    console.log(index);
    console.log(arr);
});
*/

// names.forEach( e => console.log(e));

// arr.forEach(valor, index, arr);

// map
// Conserva la integridad del array/objeto original y crea uno nuevo a partir de instrucciones que le demos

const newNames = names.map(elemento => {
    return elemento.toUpperCase();
});

console.log(newNames);


// Slice corta el array de (index inicial, index final) y crea uno nuevo con ese rango
// console.log(names);
// const arr2 = names.slice(2, 4);
// console.log(arr2);

// filter
// Mantiene la integridad del array/objeto original y crea uno nuevo a partir del filtro que le indiquemos
const carrito = [2000, 50, 500, 1500, 999.99];

const carritoFiltrado = carrito.filter(elemento => {
    return elemento <= 1500;
});

console.log(carritoFiltrado);

//reduce investigar

