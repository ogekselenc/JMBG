
let rand = 0;
let concat = 0;
let numbers = [5];

function generateYear(min = 1900, max = 2023) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    numbers[2] = rand;
    console.log("Year: ");
    return rand;
}



function generateMonth(min = 1, max = 12) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    numbers[1] = rand;
    console.log("Month: ");
    //if (rand <= 9) {
       // rand = concat + rand; 
        //return rand;
    //}
    //else {
    return rand;
    //}
}



if (rand === 1 || rand === 3 || rand === 5 || 
    rand === 7 || rand === 8 || rand === 10 || rand === 12) {
    console.log(generateDay(min = 1, max = 31));
}
else if (rand === 2) {
    console.log(generateDay(min = 1, max = 28));

}
else if (rand === 4 || rand === 6 || rand === 9 || rand === 11) {
    console.log(generateDay(min = 1, max = 30));
};

function generateDay(min, max) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    numbers[0] = rand;
    console.log("Day: ");
    //if (rand <= 9) {
    //    return '0o' + rand;
    //}
    //else {
    return rand;
    //}
};

function generateRegion(min = 00, max = 99) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    numbers[3] = rand;
    console.log("Region: ");
    return rand;
};

function generateGender(min = 00, max = 999) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    numbers[4] = rand;
    console.log("Gender: ");
    //if (rand <= 9) {
    //    return '00o' + rand;
    //}
    //else if (rand <= 99) {
    //    return '0o' + rand;
    //}
    //else {
    return rand;
   // }
}

function generateControlNumber(min = 1, max = 9) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    numbers[5] = rand;
    console.log("Control number: ");
    return rand;
}

//function generateJMBG() {
    generateYear();
    generateMonth();
    generateDay();
    generateRegion();
    generateGender();
    generateControlNumber();
    //return numbers;
//}
console.log(numbers);

