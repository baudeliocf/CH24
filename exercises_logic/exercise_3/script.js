let log = '';
function print(data) {
    console.log(data);
    // alert(data);
}

const getFactorial = (value) => {
    let output = 1;
    for (let i = value; i > 0; i--) {
        output *= i;
    }
    return output;

}
//Get the data, check valid value
function run() {
    log = '';
    //Get value from class input_data
    let data = document.querySelector('.input_data').value;
    let number = parseFloat(data);
    if (isNaN(number)) { //if isnt a number parseFloat() return NaN
        log += `'${data}' isnt a valid input \n`; //ok
    } else {
        if (!Number.isInteger(number)) {
            log += `'${number}' isnt a integer \n`;
        } else {
            if (number <= 0) {
                log += `'${number}' isnt greater than 0 \n`;
            } else {
                log += `${getFactorial(number)}`
            }
        }
    }
    document.getElementById('output').value = log;

    // console.log(log);
    // alert(log);
}

// run();