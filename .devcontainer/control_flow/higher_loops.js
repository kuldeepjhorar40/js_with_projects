//for of loop 

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);    
}


//maps

const map = new Map();
map.set('1','2');
map.set('2','2');
map.set('3','2');
map.set('4','2');
map.set('5','2');

for(const [keyy,valuue] of map){
    console.log(keyy , " -> ", valuue);
    
}
/*
1  ->  2
2  ->  2
3  ->  2
4  ->  2
5  ->  2
*/


for(const [keyy] of map){
    console.log(keyy );
    
}
/**
1
2
3
4
5
 */

for(const key of map){
    console.log(key );
    
}
/**
[ '1', '2' ]
[ '2', '2' ]
[ '3', '2' ]
[ '4', '2' ]
[ '5', '2' ]
 */



const obj = {
    id :1,
    name : "xy"
}

// -------(for in) ==> it is used to traverse in obj------

for(const key in obj){
    console.log(key , "=>" , obj[key]);
    
}
/*
 [ '5', '2' ]
id => 1
name => xy
 */


//----------(for each)=> to define function inside loop-----
const arr1  = [1,2,3,5];

//1.

arr1.forEach((item,index,arr1)=>{console.log("val = " , item , " , index = ", index , ", arr = " ,arr1);})
/*
val =  1  , index =  0 , arr =  [ 1, 2, 3, 5 ]    
val =  2  , index =  1 , arr =  [ 1, 2, 3, 5 ]    
val =  3  , index =  2 , arr =  [ 1, 2, 3, 5 ]
val =  5  , index =  3 , arr =  [ 1, 2, 3, 5 ]  
*/
arr1.forEach((item)=>{console.log(item);})
// 2.
arr1.forEach(function (item){
    console.log(item);    
})
// 3.
function print_val(item){
    console.log(item);    
}
arr1.forEach(print_val);//we write like this print_val which will exceute the value we don't like write this print_val() in forEach it cause error


const db_file = [
    {
        file_name : 'hello.java',
        file_type : 'java'
    },
    {
        file_name : 'hello.js',
        file_type : 'js'
    },
    {
        file_name : 'hello.python',
        file_type : 'py'
    }
]

db_file.forEach((item)=>{
    console.log(item.file_name ,"--type-->" , item.file_type);
    
})
/*
hello.java --type--> java
hello.js --type--> js
hello.python --type--> py
*/
