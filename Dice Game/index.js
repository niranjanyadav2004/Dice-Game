const btn = document.getElementById("roll-button");
const diceel = document.getElementById("dice");
const rollHistroyel = document.getElementById("roll-histroy");

let histroy=[];

function rollDice(){
    const rollresult = Math.floor(Math.random()*6)+1;
    const diceFace = getDiceFace(rollresult);
    diceel.innerHTML=diceFace;
    histroy.push(rollresult);
    updateHistroy();
}

function updateHistroy(){
    rollHistroyel.innerHTML="";

    for(let i=0;i<histroy.length;i++){
        const listItem = document.createElement("li");
        listItem.innerHTML=`Roll ${i+1} : <span> ${getDiceFace(histroy[i]) } </span>`;
        rollHistroyel.appendChild(listItem);
    }
}

function getDiceFace(rollresult){
    switch(rollresult){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;"; 
        default: 
            return "";
    }
}

btn.addEventListener("click",()=>{
   diceel.classList.add("roll-animation");
   setTimeout(()=>{
     diceel.classList.remove("roll-animation");
     rollDice();
   },1000);
})