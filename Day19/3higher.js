//   function multipleGreet(func, count){
//     for (let i=1; i<=count; i++){
//         func();
//     }

//   }
//   let greet = function(){
//     console.log("hello");
//   }
//   multipleGreet(greet,100);


  function oddEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    } else if(request == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("wrong request");
    }
  }
 
  let request = "odd"; //even



  

// let odd = function(n){
//     console.log(!(n%2==0));
// }


// METHODS

const calculator = {
    num:55,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}

  