//  async function greet(){
//     // throw  "week connection";
//     return "hello";
//  }

//  greet()
//  .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
//  })
//  .catch((err) => {
//     console.log("promise was rejected with err: ",err);
//  })

//  AWAIT KEYWORD---(Pauses the execution of its surrounding asyan function until the promise is settled (resolve or rejected))
// function getNum(){
//    return new Promise((resolve, reject) => {
//       setTimeout(() => {
//          let num = Math.floor(Math.random() * 10)+ 1;
//          console.log(num);
//          resolve();
//       }, 1000);
//    });
// }

// async function demo() {
//    await getNum();
//    await getNum();
//    getNum();

// }


h1 = document.querySelector("h1");
function changeColor(color, delay){
   return new Promise((resolove, reject) => {
      setTimeout(() =>{
         h1.style.color = color;
         console.log(`color changed to ${color}`);
         resolove("color change!");
      }, delay);
;   })
}

async function demo() {
  await changeColor("red", 1000);
  await  changeColor("green", 1000);
   changeColor("blue", 1000);
}

// HEADING REJECTIONS
  