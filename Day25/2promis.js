// function saveToDb(data ,success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//        success();
//     }else{
//        failure();   
//     }
// } 

// saveToDb(
//     "saurabh",
//     () => {
//         console.log("success: your data was saved");
//         saveToDb("hello world", () => {
//              console.log("success2: data2 saved");
//              saveToDb("saur", () => {
//                 console.log("success3: data3 saved");
//              },
//             () => {
//                 console.log("failure3: week connection");
//             });
//         }, 
//         () => {
//             console.log("failure2: week connection");
//         });
//     },
//     () => {
//          console.log("failure: week connection. data not saved");
//     }
// ); 



// function saveToDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }
// saveToDb("saurabh",() =>{
//     console.log("success: your data was saved");
//     saveToDb("hello world", () => {
//         console.log("success2: data2 saved"); 
//     },
// () =>{
//     console.log("failure2: week conection");
// });
// }, () => {
//     console.log("faliure: week connection. data not saved");
// });

// function saveToDb(data){
//     return new Promise((success, failure) => {
//         let internetSpeed = Math.floor(Math.random()* 10) + 1;
//         if(internetSpeed > 4){
//             success("success: data was saved");
//         } else{
//             failure("failure: week connection");
//         }
//     });
// }





// PROMISES---resolve & reject
// function saveToDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("success: data was saved"); 
//         }else{
//             reject("failure: weak connection");
//         }
//     });
// }

// saveToDb("saurabh");  


// let request = saveToDb("saurabh"); //req = promise object
// request 
// .then(() => {
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(() =>{
//     console.log("promise was rejected");
//     console.log(request);
// });    




// PROMISE CHAINING

// function saveToDb(data){
//     return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//       resolve("success: data was saved");
//     }else{
//       reject("failure: weak connection");
//     }
//        });
// }


// saveToDb("apna college")
// .then((result) => {
//     console.log("data1 saved.");
//     console.log("result of promise: ",result);
//     return saveToDb("helloworld")
//     })

//     .then(() => {
//         console.log("data2 saved");
//     console.log("result of promise: ",result);
//         return saveToDb("mohit");
//     })
//     .then(() => {
//         console.log("data3 saved");
//     console.log("result of promise: ",result);
  
//     })
// .catch((error) =>{ 
//     console.log("promise was rejected");
//     console.log(error);
// });
 



h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
         setTimeout(() => {
        h1.style.color = color;
        resolve("color changed!");
    }, delay); 
    });
  
}

changeColor("red", 1000)
.then(() => {
    console.log("red color was completed");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("oragne color was completd");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color was completed");
});