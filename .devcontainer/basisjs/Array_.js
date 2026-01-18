// Impp
const arr2  = new Array(100,200,2000);
const arr = [1,arr2,4,3,true ,"kuldeep",null,undefined]//resizable , miz ,shallow copy means all array element share same reference pointer/memory
const arr1  = new Array(1,2,34,4);
console.log(arr);
console.log(arr[0]);
console.log(arr.length);
arr.push(34);
arr.push(arr1);
console.log(" ----- ");
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    process.stdout.write(element + " ; ");    
}

console.log(" ----- ");
arr.pop();
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    process.stdout.write(element + " ; ");  
}
console.log(" ");

arr.unshift(9); // means element add at starting and it cost O(n) which means all other element shifted by 1

arr.shift(); // means starting element removed and all other element to left by one

arr.includes(true);//true
arr.indexOf(false);//-1
arr.lastIndexOf(false);//-1
const Joinarr = arr.join();//convert arr to string o/p= "1 ; 100,200,2000 ; 4 ; 3 ; true ; kuldeep ; null ; undefined ; 34 ;"
console.log(typeof Joinarr);


// slice and splice

const num_arr = [1,2,3,4,5]

console.log("Original_array :- " , num_arr);

const slice_arr = num_arr.slice(2,4); // here in slice last_index(means 4 not included) is exclude and no change in original array

console.log("Slice_array :- " , slice_arr);

console.log("Original_array :- " , num_arr);

const splice_arr = num_arr.splice(2,4); // here in splice last_index(means 4 included) is included and original array change and splice part is removed from original array

console.log("Splice_array :- " , splice_arr);

console.log("Original_array :- " , num_arr);






















































