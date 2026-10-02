console.log("Ajax Concepts");

fetchBtn.addEventListener('click', buttonClickHandler)

 function buttonClickHandler() {
    console.log("You have clicked the fetchBtn");

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'saurabh.txt', true);


    //what to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }

    //what to do when response is ready
    xhr.onload = function (){
        if(this.status === 200){
            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    //send the request
    xhr.send();
}
;