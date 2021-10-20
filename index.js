//The function will get a date (by array) and return the Time from that date to now.
const moment = require("moment")

function timeToNow(date){
    return moment(date).toNow(); 
}
console.log(timeToNow([2021, 10, 8]));