'use strict'

export const utilService = {
    makeId,
    getRandomInt,
    getRandPhoneNum
}

function makeId() {
    var pt1 = Date.now().toString(16)
    var pt2 = getRandomInt(1000, 9999).toString(16)
    var pt3 = getRandomInt(1000, 9999).toString(16)
    return `${pt3}-${pt1}-${pt2}`.toUpperCase()
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}



function getRandPhoneNum(ext = '+1') {
    return ext + '' + '(' + getRandomInt(100, 1000) + ')' + '' + getRandomInt(100, 1000) + '-' + getRandomInt(1000, 10000)
}