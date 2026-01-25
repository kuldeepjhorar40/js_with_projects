const arr = [12,3,4,5,5];
// we can't return in forEach loop so 

const new_arr = arr.filter((item) => {
    return item>4;
})//we use return keyword if we use {}
const new_arr2 = arr.filter((item) => item>4);
console.log((new_arr));


// by for each we returning value
const new_num3 = [];
arr.forEach((item)=>{
    if(item>4){new_num3.push(item)}
});

const arr4 = [12,2,3,4,3,2]
const new_nums3 = arr4.map((item)=> item+10);
console.log(new_nums3);//[ 22, 12, 13, 14, 13, 12 ]

const temp_arr = arr4.map((item)=>item+4).map((item)=>item+100).filter((item)=>item>105);

console.log(temp_arr);//[ 116, 106, 107, 108, 107, 106 ]


// ---------REDUCE FUNCTION--------

const sum = arr4.reduce((acc,num) => num+acc , 0);//here in start acc = 0  than we update acc  = acc+num

const sum2 = arr4.reduce(function total(acc,num) {return  num+acc} , 0);
console.log(sum2);

const db_file = [
    {
        file_name : 'hello.java',
        file_type : 'java',
        price  : 100
    },
    {
        file_name : 'hello.js',
        file_type : 'js',
        price  : 100
    },
    {
        file_name : 'hello.python',
        file_type : 'py',
        price  : 100
    }
]


const total_price = db_file.reduce((acc,item)=>item.price+acc,0);
console.log(total_price);



























































