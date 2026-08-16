let url = "https://catfact.ninja/fact";

fetch(url)
 .then((res) => {
    return res.json();
 })
 .then((data1) => {
    console.log("Data1 = ", data1.fact); 
    // return fetch(url);
 })
//  .then((res) =>{
//     return res.json();
//  })
//  .then((data2) =>{
//     console.log("Data2 = ", data2.fact);
//     return fetch(url);
//  })
 .catch((err) => {
    console.log("ERROR - ", err);
 });


// async function getNum() {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// }



async function getNum() {
    try {
          let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
    } catch (e){
        console.log("error -",e);
    }

    console.log("bye");
 }
  

