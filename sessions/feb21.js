
const numArr = [1, 2, 3, 4, 5];

const findBiggest = (arr) => {
    let counter = 0;
    let biggest = arr[counter];

    while (counter < arr.length) {

        if (biggest < arr[counter]) {
            biggest = arr[counter];
        }

        counter++;
    }
    return biggest;
}

// console.log(findBiggest(numArr));


const findSmallest = (arr) => {
    let counter = 0;
    let smallest = arr[counter];

    do {
        if (smallest > arr[counter]) {
            smallest = arr[counter];
        }
        counter++;
    } while (counter < arr.length)


    return smallest;
}

// console.log(findSmallest(numArr));


const arrayM = [[2, 0],[-1, 3]]; //js lo considera array

let numberArr = [
    [10, -20, 60],
    [8, 10, 52],
    [15, -5, 24],
    [-26, 28, 43],
    [12, 16, -51]
];  

let sum = 0;

numberArr.forEach(row => {
    row.forEach(element => {
        sum += element;
    })
})

console.log(sum);


var arr = new Array(10);
var arr = new Array("Zab", 25, true);
var arr2 = ["Zab", 25, true]

console.log(arr);
console.log(arr2);
console.log(arr.length);
