// const arrayAverage = (arr) =>{
//     let total = 0;
//     for (let number of arr){
//         total += number;
//     }
//     return total / arr.length;
// };

// let arr = [1,2,3,4,5,6];
// console.log(arrayAverage(arr));


// WRITE AN ARROW FUNCTION NAMED ARRAYAVERAGE THAT ACCEPTS AN ARRAY OF NUMBER AND RETURN OF THOSE NUMBER.

let num = 4;
const isEven = (num) => num % 2 == 0;            



const object = {
    message: 'hello, world!',
    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);
