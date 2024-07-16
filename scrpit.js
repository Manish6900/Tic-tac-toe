let boxs = document.querySelectorAll(".box"); 
let turnO = true;
let wintext = document.querySelector(".winner");
let hidetext = document.querySelector(".hide");
let restart =document.querySelector(".Restart")


let winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]];

const reset =()=>{
    turnO = true;
    enableboxBtn();
    hidetext.classList.add("hide");};

boxs.forEach((box)=>{
box.addEventListener("click",() =>{

if(turnO){
    box.innerText= 'O'
    turnO = false;}
else {
   box.innerText= 'X'
    turnO = true;
    boxs.disabled= true;}
   checkWinner();
})});


const boxBtn =()=>{
 for(const buttenbox of boxs){
  buttenbox.disabled = true;
 };
}
const enableboxBtn =()=>{
  for(const buttenbox of boxs){
   buttenbox.disabled= false;
   buttenbox.innerText= "";}

  };
 
const checkWinner =() => {
for(const pattern of winPatterns) {
let posiVal1 = boxs[pattern[0]].innerText;
let posiVal2 = boxs[pattern[1]].innerText;
let posiVal3 = boxs[pattern[2]].innerText;

if (posiVal1!="" && posiVal2!="" && posiVal3 !=""){
if (posiVal1 === posiVal2 && posiVal2 === posiVal3);

boxBtn();
hidetext.innerText= `${posiVal1} Is The Winner !`;
hidetext.classList.remove("hide");
}}};

restart.addEventListener("click", reset); 