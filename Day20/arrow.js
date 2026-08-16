// ARROW FUNCTION
const sum = (a, b)=> {
    console.log(a+b);
};

const cube = (n) => {
    return n*n*n;
};   
const pow = (a,b) => {
    return a**b;
}




// IMPLICITE FUNCTION
// const mul = (a,b) => a*b;
// const cube = (n) => n*n*n;


// SET TIME OUT FUNC
// console.log("Hi there!");

// setTimeout( () => {
//     console.log("saurabh");
// }, 4000);

// console.log("Welcome to");



// console.log("hii");
// setTimeout(() => {
//    console.log("saurabh");
// }, 2000);
// console.log("welcom");



// SET INTERVAL
// console.log("hi there!");

// let id = setInterval( () => {
//     console.log("Apna college");
// } , 2000);
// console.log(id);

// let id2 = setInterval(() => {
//     console.log("Hello");
// }, 3000);
// console.log(id2);



// console.log("hii");

// let id = setInterval(() => {
//    console.log("saurabh");
// },2000);

// console.log(id);
 





// PRACTICE
//  const square = (n) => n*n;
//  console.log(square(4));



const square = (n) => n*n;
console.log (square(3));
   

// let id = setInterval(() => {
//     console.log("hello");
//  },2000);

//  setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval");
//  }, 10000);


let id = setInterval(() => {
   console.log("hello");
}, 2000);
setTimeout(() => {
   clearInterval(id);
   console.log("clear interval");
}, 10000);