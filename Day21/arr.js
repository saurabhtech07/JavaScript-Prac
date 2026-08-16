// FOR EACH FUNC

// let arr =[1,2,3,4,5];

// arr.forEach(function(el){
//     console.log(el);
// });

// arrow
// arr.forEach( (el) => {
//     console.log(el);
// });


// let print = function(el) {
//     console.log(el);
// };

// arr.forEach(print);


// let arr = [ 
//     {
//         name : "aman",
//         marks : 98,
//     },
//      {
//          name : "anushu",
//         marks : 38,
//      },
//       {
//          name : "aan",
//         marks : 92,
//       },
//     ];
//     arr.forEach((student) => {
//         console.log(student.name);
//     });  





// MAP FUNCTION
// let num = [1,2,3,4];
// let double = num.map((el) => {
//     return el * el;
// });

// let gpa = student.map((el) =>{
//     return el.marks / 10;
// });



// FILTER FUNCTION
// let nums = [1,2,3,4,5,6,7,10,88];
// let ans = nums.filter((el) => {
//     return el % 2 == 0;
// });









// EVERY Function
// [2,4,6,8].every((el) => el%2 == 0);


// MAXIMUM IN ARRAY
// let arr = [1, 4, 5, 6, 3, 9, 2];

// let max = -1;

// for (let i = 0; i < arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max); 


// reduce

// let max = arr.reduce((max, el) => {
//     if (max < el) {
//         return el;
//     }else{
//         return max;
//     }
// }) ;
// console.log(max);



// MAXIMUM FIND IN REDUCE

// let max = arr.reduce((max, el) => {
//     if (max < el){
//         return el;
//     } else{
//         return max;
//     }
// });
// console.log(max);   

 



// PRACTICE
// let nums = [10, 20, 30, 40];

// let ans = nums.every((el) => el % 10 == 0);

// console.log(ans);


// FIND MINIMUM NUMBER

    //  let nums = [10, 20, 30, 40, 5];

    //  let min = nums.reduce((min, el) => {
    //     if(min < el){
    //         return min;
    //     } else{
    //         return el;
    //     }
    //  });
    //  console.log(min);



    function getMin(nums){
     
    let min = nums.reduce((min, el) => {
        if(min < el){
            return min;
        }else{
            return el;
        }
      });
          return min;
      }
    
    let nums = [10, 20, 39, 4];