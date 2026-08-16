const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try{
        const config = {headers: { 
            Accept: "application/json"
        }};
        let res = await axios.get(url, config);
        console.log(res.data);  
    }catch(err){
        console.log(err); 
    }
}

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country); 

//     let colArr = await getCollege(country);
//     show(colArr);
// }); 

// function show(colArr){
//     let list = document.querySelector("#list");
//     for(col of colArr){
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText= col.name;
//         list.appendChild(li); 
//     }
// }

// async function getCollege(country) {
//     try{
//         let res = await axios.get(url + country);
//         return res.data;
//     }catch{
//         console.log("error : ",e);
//     }
    
// }
