
// ONCLICK

// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function (){
//     alert("button was clicked");
// };




// for all button 

// let btns = document.querySelectorAll("button");

// for (btn of btns){
//   btn.onclick = sayHello;
// }

// function sayHello(){
//     alert("Hello!");
// }
// btn.onclick = sayHello;



// ONMOUSEENTERD FUNCTION

// let btns = document.querySelectorAll("button");

// for (btn of btns){
//   btn.onclick = sayHello;
//   btn.onmouseenter = function(){
//     console.log("you entered a button");
//   };
//   console.dir(btn);
// }

// function sayHello(){
//     alert("Hello!");
// }


// EVENTLISTNER FUNCTION
// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function(){
//         console.log("you double clicked");
//     });
// }
// function sayHello(){
//     alert("Hello!");
// }

// function sayName(){
//     alert("saurabh");
// }


// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     alert("button was clicked"); 
// };



// for applied all button
// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = sayHello;
// }

// function sayHello(){
//     alert("HEllo");
// }
// btn.onclick = sayHello;



// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.onclick = sayHello;
//     // btn.onmouseenter = function(){
//     //     console.log("you entered a button");
//     // };

// }

// function sayHello(){
//     alert("HEllo");
// }
// btn.onclick = sayHello;


// EVENT LISTNER
let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("you clicked double");
    });

}
function sayHello(){
    alert("Hwllo");
}
function sayName(){
    alert("saurabh");
}


