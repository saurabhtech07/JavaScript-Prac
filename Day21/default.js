// function sum(a, b=3){
//     return a+b;
// }

// SPREADE
// Expand an iterable into multiple vlaue 
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];

// let chars = [..."hello"];

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...odd, ...even];



// const data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };
// const dataCopy = {...data };
// const dataCopy = {...data , id: 123, country: "india"};

const data = {
   email: "saurbahpandey98bh@gmqial.com",
   password: "saurabh",
};
const dataCopy = {...data, id: 123};




// REST

function sum(...args){
   for(let i=0; i<args.length; i++){
      console.log("you gave us: ", args[i]);
   }
}
// sum find

function sum(...args){
   return args.reduce((sum, el) => sum + el);
} 


// DESTRUCTING
// let names = ["saurbh", "bruch", "asabdu", "kfg", "duhgf", "dfh"];
// let [winner, runnerup, ...others] = names;

// DESTRUCTING IN OBJECT
 const student = {
    name: "saurabh",
    age: 12,
    class: 4, 
    subject: ["hindi", "english","math", "science"],
    username: "karan@123",
    password:"1234",
 };
 let {username: user, password: secret ,city="mumbai"} = student;