let log = '';
function print(data) {
    console.log(data);
    // alert(data);
}

//Sorts the values ​in the array ​from largest to smallest, save in log
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    log += `${arr} \n`;
}

//Flips the array, save in log
function flipArray(arr) {
    const temp = [...arr];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[arr.length - i - 1]
    }
    log += `${arr} \n`;
}

//Check the repeated values in the array
function checkRepeats(arr) {
    let counted = []
    for (let i of arr) {
        if (counted.includes(i)) break;
        let count = 0;
        for (let j of arr) {
            if (i == j) count++;
        }
        if (count > 1)
            log += `${i} repeats ${count} times\n`;
        counted.push(i);
    }
}

//Get the data, check valid values, sort values, check repeated values
function run() {

    log = '';
    let arr = [];
    //Get all values from class input_data
    document.querySelectorAll('.input_data').forEach(
        (e, index, array) => {
            // alert(e.value == '');
            let value = parseInt(e.value) //cast string to number Number('') return 0, parseInt('') return NaN

            //Check values
            if (isNaN(value)) { //if isnt a number parseInt() return NaN
                //Save error value
                log += `'${e.value}' isnt a number \n`;
            }
            //Save number values in array
            arr.push(value);
        }
    )

    //If no errors sort and flip the array
    if (!log) {
        sortArray(arr);
        flipArray(arr);
    }

    //Check repeat numbers
    checkRepeats(arr);

    //Show the log
    document.getElementById('output').value = log;

    // console.log(log);
    // alert(log);
}

// run();