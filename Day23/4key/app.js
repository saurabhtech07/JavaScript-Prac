 let inp = document.querySelector("input");

 inp.addEventListener("keydown", function(event){
    // console.log("key = ",event.key);
    console.log("code = ",event.code); //Arrowup , ArrowDown, ArrowLeft, Arrowright
    // console.log("key was pressed");
  

    if(event.code == "ArrowUp"){
        console.log("character moves forward");
    }else if(event.code == "ArrowDown"){
        console.log("charcter moves backward");
    }else if(event.code == "ArrowLeft"){
        console.log("charcter moves left");
    }else if(event.code == "ArrowRight"){
        console.log("charcter moves right");
    }

 });

// inp.addEventListener("keyup", function(){
//     console.log("key was relesed");
// });
