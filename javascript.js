let user = 0;
let comp = 0; 
const choices = document.querySelectorAll(".choice");
const para = document.querySelector("#us");
const cara = document.querySelector("#cus");
const gtt = document.querySelector("#display");
const genCompChoice = () =>{
    const cho = ["rock", "paper", "scissor"];
const ranInd =  Math.floor( Math.random() *3);
    return cho[ranInd];
}

const playgame = (choiceId) =>{
    let para = document.querySelector("#us");
    let cara = document.querySelector("#cus");
    let gtt = document.querySelector("#display");
    console.log("user = ", choiceId);
    const computerchoice = genCompChoice();
    console.log("computer = ",computerchoice);
 if(choiceId === computerchoice){
    console.log("draw");
    gtt.innerText = "Draw";
    
 }
 if(choiceId === "rock" && computerchoice==="paper"){
  console.log("Comp");
  gtt.innerText = "You lose! Computer : paper";
  comp = comp+1;
  cara.innerText = comp;
  
 }
 if(choiceId === "scissor" && computerchoice==="rock"){
    console.log("comp");
    gtt.innerText = "You lose! Computer : rock";
    comp = comp+1;
    cara.innerText = comp;
    

   }
   if(choiceId === "paper" && computerchoice==="scissor"){
    console.log("comp");
    gtt.innerText ="You lose! Computer : Scissor";
    comp = comp+1;
    cara.innerText = comp;
    

   }
 if(choiceId === "rock" && computerchoice==="scissor"){
      console.log("user");
    gtt.innerText = "You win! computer : scissor";
    user = user+1;
    para.innerText = user;
       
   }
   if(choiceId === "paper" && computerchoice==="rock"){
    console.log("user");
    gtt.innerText = "You win! computer : rock";
    user = user+1;
    para.innerText = user;
    

   }
   if(choiceId === "scissor" && computerchoice==="paper"){
    console.log("user");
    gtt.innerText = "You win! computer : paper";
    user = user+1;
    para.innerText = user;
    

   }
  
}


choices.forEach((choice) =>{
choice.addEventListener("click",() =>{
    const choiceId = choice.getAttribute("id");
    playgame(choiceId);
    genCompChoice();
});
});