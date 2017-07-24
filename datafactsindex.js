const moment = require('moment');
const chalk = require('chalk');

// console.log(chalk.red('This should be red'));
// console.log(chalk.green('This should be green'));

// Today's Date
let now = moment().format("dddd, MMMM Do YYYY, HH:mm:ss a");
// Number of day in year
let dayofYear = moment().format("DDDD");
// Seconds in day
let secondsinDay = moment().format()
// Daylight Savings
let daylightSavings = moment().format()
// Leap Year
let leapYear = moment

console.log(`It is the ${chalk.blue.bold(now)}`);
console.log(`It is the ${chalk.rgb(239, 64, 207).bold(dayofYear) + chalk.rgb(239, 64, 207).bold('th')} day of the year.`);
