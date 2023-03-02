// Conviertan un Array de caracteres  -> 'Zabdiel'
const arrayName = ['b','a','u','d','e','l','i','o'];

const arrayToString = (arrayName) => {
    let string = ''
    for (let i = 0; i < arrayName.length; i++){
        string += arrayName[i];
    }
    return string;
}

const circleSquare = (r, a) => {
    const circ = 2 * Math.PI * r;
    const per = Math.sqrt(a) * 4;
    
   return (circ > per)  ? true : false;
}

// Calculate Kinetic Energy
// KE = (1/2) mv^2
const calcKineticE = (m , v) => {
    return (1/2) * m * (v ** 2);
}

const parImpar = (n) => {
    return (n % 2 == 0 && n != 0) ? true : false;
}

const evenOdd = (n) => {
    if (n % 2 == 0 && n != 0) {
        return true
    } else {
        return false
    }
}

const evenOdd2 = n => {
    let res = false;

    if (n % 2 == 0 && n != 0) {
        res = true;
    }

    return res;
}

console.log(arrayToString(arrayName));

const products = ['Awa', 'Maruchan', 'Pizza Valentina', 'Coquita Rosalia', 'Taquitos', 'Gorditas'];

const findPrice = item => {
    let res = 'No ai sistema';

    switch(item) {
        case 0:
            res = `El producto es ${products[item]} y cuesta: $${20}`;
            break;
        case 1 :
            res = `El producto es ${products[item]} y cuesta: $${16}`;
            break;
        case 2 :
            res = `El producto es ${products[item]} y cuesta: $${150}`;
            break;
        case 3 :
            res = `El producto es ${products[item]} y cuesta: $${29.99}`;
            break;
        case 4 :
            res = `El producto es ${products[item]} y cuesta: $${60}`;
            break;
        case 5 :
            res = `El producto es ${products[item]} y cuesta: $${70}`;
            break;
        default:
            res = `No ai sistema`;
            break;
    }
    return res;
}