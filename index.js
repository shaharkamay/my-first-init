//The function will get a date (by array) and return the Time from that date to now.
const moment = require("moment")

function timeToNow(date){
    return moment(date).toNow(); 
}
console.log(timeToNow([2021, 10, 8]));

function timeFromAToB(date1 , date2) {
    return moment(date1).to(date2);
}
console.log(timeFromAToB([2021, 10, 8], [2021, 10, 20]));

function daysInMonth(date){
    return moment(date).daysInMonth();
}
console.log(daysInMonth("2024-02"));