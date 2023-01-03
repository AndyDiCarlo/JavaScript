var i = "data1";

// function will print local variable in the function
function f2() {
    var i = 'data2';
    console.log(i);
};

// log call will print data1 since function var isnt global
f2();
console.log(i);

//print out global variables 
console.log("My file is: " + __filename);
console.log("My dir is: " + __dirname);

//will wait 5 seconds before executing function
setTimeout(f2, 5000);

