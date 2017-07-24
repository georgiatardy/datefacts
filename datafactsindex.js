const moment = require('moment');
const chalk = require('chalk');

// console.log(chalk.red('This should be red'));
// console.log(chalk.green('This should be green'));

// Today's Date
let now = moment().format("dddd, MMMM Do YYYY, HH:mm:ss a");
// Number of day in year
let dayofYear = moment().format("DDDD");
// Seconds in day
let secondsinDay = moment().format("SSSS")
let current = moment()
let endofDay = moment().startOf("day")
// Daylight Savings
let daylightSavings = moment().isDST()
// Leap Year
let leapYear = moment

console.log(`It is the ${chalk.blue.bold(now)}`);
console.log(`It is the ${chalk.rgb(239, 64, 207).bold(dayofYear) + chalk.rgb(239, 64, 207).bold('th')} day of the year.`);
console.log(`It is ${chalk.rgb(99, 235, 242).bold(parseInt((current - endofDay) / 1000))} seconds into the day`);

// These if/else statements are for daylight saving and leap year

if (daylightSavings === true) {
    console.log(`It ${chalk.rgb(142, 168, 99).bold('is')} during Daylight Savings Time`)
} else {
    console.log(`It ${chalk.rgb(174, 63, 68).bold('is not')} during Daylight Savings Time`)
}
if (leapYear === true) {
    console.log(`It ${chalk.rgb(142, 168, 99).bold('is')} a leap year.`)
} else {
    console.log(`It ${chalk.rgb(174, 63, 68).bold('is not')} a leap year.`)
}
