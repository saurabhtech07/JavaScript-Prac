function printname(){
    console.log("apna class");
    console.log("saurabh");
}
// printname();



function print1to5(){
    for(let i = 1; i<=5; i++){
        console.log(i);
    }
}

// print1to5();


// practice 

function rollDice(){
    let rand = Math.floor(Math.random()*6) + 1;
    console.log(rand);
}
// rollDice();




// function isAdult(){
//     let age = 13;
//     if(age >= 18){
//         console.log("adult");
//     }else{
//         console.log("not adult");
//     }
// }

// isAdult();





//    ARGUMENTS FUNCTION

function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("saurabh", 23);


// PRACTICE
function sum(a,b){
  console.log(a+b);
};


function calcAvg(a, b, c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
// calcAvg(2,3,4);


function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
// printTable(2);


// RETURN FUNCTION
function sum(a,b){
    return a+b;
}
console.log(sum(3, 4));


function isAdult(age) {
     if(age>=18){
        return"adult";
     }else{
        return"not adult";
      }
}

// PRACTICE
function getSum(n){
    let sum = 0;
    for(i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}


let str = ["hii","hello","bye","!"];

function concat(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result +=str[i];
    }
    return result;
}

 
