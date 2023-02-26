'use strict';

let rand = 0;
let concat = '0';
let numbers = [5];
let min = 0;
let max = 0;

function generateYear(min = 1900, max = 2023) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    console.log("Year: " + rand);
    rand = rand.toString().substring(1);
    console.log("Year: " + rand);
    numbers[2] = rand;
    return numbers;
}

function generateMonth(min = 1, max = 12) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;

    if (rand <= 9) {
        concat = "0";
        rand = concat + rand; 
        console.log("Month: " + rand);
        numbers[1] = rand;
        return numbers;
    }
    else {
        numbers[1] = rand;
        console.log("Month: " + rand);
        return numbers;
    }
}

if (rand === 1 || rand === 3 || rand === 5 || 
    rand === 7 || rand === 8 || rand === 10 || rand === 12) {
    generateDay(min = 1, max = 31);
}
else if (rand === 2) {
    generateDay(min = 1, max = 28);
}

function generateDay(min = 1, max = 30) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;

    if (rand <= 9) {
        concat = "0";
        rand = concat + rand;
        console.log("Day: " + rand);
        numbers[0] = rand;
        return numbers;
    }
    else {
        numbers[0] = rand;
        console.log("Day: " + rand);
        return numbers;
    }
}

function generateRegion(min = 0, max = 99) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;

    if (rand <= 9) {
        concat = "0";
        rand = concat + rand;
        console.log("Region: " + rand);
        numbers[3] = rand;
        return numbers;
    }
    else {
        numbers[3] = rand;
        console.log("Region: " + rand);
        return numbers;
    }
}

function generateGender(min = 0, max = 999) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;

    if (rand <= 9) {
        concat = '00';
        rand = concat + rand;
        console.log("Gender: " + rand);
        numbers[4] = rand;
        return numbers;
    }
    else if (rand <= 99) {
        concat = '0';
        rand = concat + rand;
        console.log("Gender: " + rand);
        numbers[4] = rand;
        return numbers;
    }
    else {
        console.log("Gender: " + rand);
        numbers[4] = rand;
        return numbers;
    }
}

function generateControlNumber(min = 1, max = 9) {
    let difference = max - min;
    rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    console.log("Control number: " + rand);
    numbers[5] = rand;
    return numbers;
}

function generateJMBG() {
    generateYear();
    generateMonth();
    generateDay();
    generateRegion();
    generateGender();
    generateControlNumber();
    return numbers;
}

export {generateJMBG, numbers};