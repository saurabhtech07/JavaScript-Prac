// let arr = [1,2,4,5,6,7,8,9,10];
// let num = 5;

// function getElemnet(arr,num){
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElemnet(arr,num);


// QUESTION 2
// let str = "abcdabcdefgggh";
// let ans = "";

// function getUnique(str){
//     for (let i = 0; i < str.length; i++){
//         let currChar = str[i];
//         if (ans.indexOf(currChar) == -1){
//             ans += currChar;
//         }
//     }
//     return ans;
// }
// getUnique(str);



// QUESTION 3
// let country = ["australia","germany","united state"];

// function longestName(country){
//     let ansIdx = 0;
//     for (let i=0; i<country.length; i++){
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if(currLen > ansLen){
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// longestName(country);


// QUESTION 4

// let str = "saurabh";
// function countVowles(str){
//     let count = 0;

//     for (let i = 0; i < str.length; i++){
//         if(
//             str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "u" 

//         ){
//             count++;
//         }
//     }
//     return count;
// }

let str = "abhishek";

function countVowels(str){
    let count = 0;

    for(let i = 0; i<str.length; i++){
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u" 

        ) {
            count++;
        }
    }
    return count;
}


// QUESTION 5
let start = 100;
let end = 200;

function generateRandom(start, end){
    
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}