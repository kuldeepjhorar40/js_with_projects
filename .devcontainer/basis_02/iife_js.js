//immediatrly invvvoked function expressions (IIFE)

(function a_func() {
    console.log('Database connection established immediately');

    // This is an IIFE (Immediately Invoked Function Expression)
    // Syntax: (function definition)();
    // The function executes immediately after creation
    // Used to avoid global variable pollution
    // Commonly used for initialization tasks like database connection
})();


//2.IIFE WITH ARROW FUNCTION
(() => {
    console.log("Connected using arrow IIFE");
})();//---> HERE ';' USED TO END A IIFE FUNCTION ,, IF WE DONT USE ';' IT NOT END AND CAUSE ERROR

//3.
(function (db) {//--->parameter paasinng in iife
    let dbPassword = "secret123";
    console.log(`Connected ${db}`);
})("database temprary");//--->argument passing in iife

// console.log(dbPassword); // ❌ Error: not defined
