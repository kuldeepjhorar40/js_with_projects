const arr = [1,2,10,100,1000];
const arr2 = [2,20,200,2000];



const arr_new = arr.concat(arr2);//concat by spreading element 

const arr_new2 = [...arr , ...arr2];//Speard function

console.log(arr_new);//[1, 2, 10, 100, 1000, 2, 20, 200, 2000]

console.log(arr_new2);//[1, 2, 10, 100, 1000, 2, 20, 200, 2000]

const num = [];
num.push(arr);
num.push(arr2);
console.log(num);//[ [ 1, 2, 10, 100, 100 ], [ 2, 20, 200, 2000 ] ]


const arr_messed = [1,23,[3,43,34,23,[3234,34,34,32,4,3434,[34343]]],3,43,[23,34,[34,34]]];

console.log(arr_messed);

const arr_usable  = arr_messed.flat(Infinity)// flat function flat the array where it take single parameter depth means depth to be that array sorted ;

console.log(arr_usable);

console.log(Array.isArray("feffdfgfg2243")); // false
console.log(Array.form("re4"));//['r','e','4']
// console.log(Array.from({name:"re4"}.keys());//error

console.log(Array.of(1,2,3,4,5,"tr"));












































