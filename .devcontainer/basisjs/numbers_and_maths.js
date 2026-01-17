const num  = 3434
const score  =new Number(400)

console.log(num);//3434
console.log(score);//[Number: 400]
console.log(typeof score.toString());//string
console.log(score.toString());//400
console.log(score.toString().length);//3
console.log(score.toFixed(2));//400.00 2 decimal precision
const num1 = 1000000000;
console.log(num1.toLocaleString()); //USA standard 1,00,00,00,000
console.log(num1.toLocaleString('en-IN'));//Indian standard 1,00,00,00,000



console.log(Number.MAX_VALUE);//1.7976931348623157e+308
console.log(Number.MIN_VALUE);//5e-324
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.NEGATIVE_INFINITY);//-Infinity



// ---------Maths---------
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//5
console.log(Math.round(4.2));//4
console.log(Math.ceil(4.1));//5 ceil means ceiling/roof value
console.log(Math.floor(5.9));//5 floor means ground/lower value
console.log(Math.min(3,4,5,6));//3
console.log(Math.max(43,43,45,4));//45



// random

console.log(Math.random()); //0.->1.
console.log(Math.floor((Math.random()*10+1)));


// IF I WANT VALUE BETWEEN A(MIN) TO B(MAX) BY RANDOM THAN:-

const min_a = 20
const max_b = 40

console.log(Math.floor((Math.random()*(max_b-min_a+1))+(min_a)))



















































