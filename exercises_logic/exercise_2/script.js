let log = '';
function print(data) {
    console.log(data);
    // alert(data);
}

function toFarenheit(value) {
    return value * 1.8 + 32;
}

function toKelvin(value) {
    return value + 273.15;
}

//Get the data, check valid value, convert to faranheit
function run() {
    log = '';
    //Get all values from class input_data
    let data = document.querySelector('.input_data').value;
    let celsius = parseInt(data);
    if (isNaN(celsius)) { //if isnt a number parseInt() return NaN
        //Save error value
        log += `'${data}' isnt a valid input \n`;
    } else {
        log += `Fahrenheit degrees: ${toFarenheit(celsius)} \n`;
        log += `Kelvin degrees: ${toKelvin(celsius)} \n`;
    }

    document.getElementById('output').value = log;

    // console.log(log);
    // alert(log);
}

// run();