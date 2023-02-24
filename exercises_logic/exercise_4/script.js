let log = '';
function print(data) {
    console.log(data);
    // alert(data);
}

const getFibonacci = (value) => {
    let num1 = 0;
    let num2 = 1;

    log += `${num1}`
    if (value == 1) return;

    for (let i = 0; i < value - 1; i++) {
        let num = num1 + num2;
        if (num1 > num2) num2 = num;
        else num1 = num;
        log += `, ${num}`
    }
}
//Get the data, check valid value
function run() {
    log = '';
    //Get value from class input_data
    let data = document.querySelector('.input_data').value;
    let number = parseFloat(data);
    if (isNaN(number)) { //if isnt a number parseFloat() return NaN
        log += `'${data}' isnt a valid input \n`;
    } else {
        if (!Number.isInteger(number)) {
            log += `'${number}' isnt a integer \n`;
        } else {
            if (number <= 0) {
                log += `'${number}' isnt greater than 0 \n`;
            } else {
                getFibonacci(number);
            }
        }
    }
    document.getElementById('output').value = log;

    // console.log(log);
    // alert(log);
}

// run();