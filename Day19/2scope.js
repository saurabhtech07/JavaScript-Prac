//    let age = 24;
//    if(age>=18){
//     let str = "adult";
//     console.log(str);
//    }


// LEXICAL SCOPE
function outerfunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    innerFunc();
}

let greet = "hello";
function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}
console.log(greet);
changeGreet();  


// FUNCTION EXPRESSION
let name = "saurabh";
let sum = function(a,b){
    return a + b;
    
}

