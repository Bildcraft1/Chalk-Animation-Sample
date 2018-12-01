const chalkAnimation = require('chalk-animation');
const rainbow = chalkAnimation.rainbow('Chalk Animation Time Test'); // Animation starts
 
setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 3000);
 
setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 2000);