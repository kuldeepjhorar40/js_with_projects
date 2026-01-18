// date

let date1  = new Date();
console.log(typeof date1); //object

console.log(date1);//2026-01-17T05:20:39.348Z
console.log(date1.toString());//Sat Jan 17 2026 10:50:39 GMT+0530 (India Standard Time)
console.log(date1.toDateString());//Sat Jan 17 2026
console.log(date1.toISOString());//2026-01-17T08:10:00.002Z
console.log(date1.toLocaleDateString());//17/1/2026
console.log(date1.toLocaleString());//17/1/2026, 1:40:00 pm
console.log(date1.toJSON());//2026-01-17T08:10:00.002Z
let date2  = new Date(2023,0,23)   // 0 means janurary but in string janurary start from 1
console.log(date2.toLocaleDateString());//23/1/2023
date2  = new Date(2023,0,23,4,5)
console.log(date2.toString());//Mon Jan 23 2023 04:05:00 GMT+0530 (India Standard Time)
date2  = new Date("2023-01-12")
console.log(date2.toString());//Thu Jan 12 2023 05:30:00 GMT+0530 (India Standard Time)
date2  = new Date("01-12-2023")
console.log(date2.toString());//Thu Jan 12 2023 05:30:00 GMT+0530 (India Standard Time)

// --------------Timestamp --------------

let myTimestamp = Date.now();

console.log(myTimestamp); // 1768723009304_milisecond it is total millisecond valur from Jan 1970 till now
console.log(date2.getTime());//1673461800000
console.log(Math.floor(Date.now()/1000))//millisecond to second -->1768723211

console.log(date1.getDay());//0
console.log(date1.getDate());//18
console.log(date1.getUTCMonth());//0


// Main method

console.log(date1.toLocaleString('default' , {
    weekday:"long"
}))// ---->console.log(date1.getDay());








































