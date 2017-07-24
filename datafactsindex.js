const moment = require('moment');
const chalk = require('chalk');

// console.log(chalk.red('This should be red'));
// console.log(chalk.green('This should be green'));

define(['moment'], function (moment) {
    console.log(moment().format('LLLL'));  // 'Friday, June 24, 2016 1:42 AM'
});
