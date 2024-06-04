var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function(){
fans.innerText = "123K";
fish.innerText = "47K";
pets.innerText = "20K";
});

var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");

toggle.addEventListener("click", function(){
if (body.classList.contains("light")){
    body.classList.remove("light");
    ball.classList.add("move-right");
    h1.innerText = "Stealh Quincy";
} else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
}
});