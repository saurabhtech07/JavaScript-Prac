//  function hello(){
//     console.log("inside hello fnx");
//     console.log("hello");
//  }

//  function demo(){
//     console.log("calling hello fnx");
//     hello();
//  }

//  console.log("calling demo fux");
//  demo();


// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

setTimeout (() => {
    console.log("hello");
}, 2000);



// CALLBACK HELL

h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}
changeColor("red",1000, () => {
    changeColor("orange",1000, () =>{
        changeColor("yellow",1000,);
    });
});



// h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);
 
// setTimeout(() => {
//     h1.style.color = "orange"
// },2000);


