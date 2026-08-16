let btn = document.querySelector("button");
let p = document.querySelector("p");
let h3 = document.querySelector("h3");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function(){
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
});