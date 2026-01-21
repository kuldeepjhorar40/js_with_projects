
const obj2 = {
    id2 : 2,
    roll2 : 4565,
    "name2": "xzw",
    pass2 : true,
}  

const {id2} = obj2;//destructing of object ---> 
console.log(id2); // now use as it and varible no need to re-getting by refernce pointer

const {roll2 : Roll_number}  = obj2;//destructing of object ---> and aso renaming(outside only) it 
console.log(Roll_number);


