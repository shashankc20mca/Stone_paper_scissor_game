function movein(){
  let r=document.querySelector("#outer .rules");
  let s=document.querySelector("#outer .del");
  r.classList.add("move");
  s.classList.add("move1");
}
function moveout()  {
  let r=document.querySelector("#outer .rules");
  let s=document.querySelector("#outer .del");
  r.classList.remove("move");
  s.classList.remove("move1");
}






function decide(n){

  // let user_score=document.querySelectorAll("#outer #title .score .num")[1];
  // let computer_score=document.querySelectorAll("#outer #title .score .num")[0];
  // user_score.textContent=localStorage.getItem("user_score");
  // computer_score.textContent=localStorage.getItem("computer_score");


localStorage.setItem("user_score",0);
localStorage.setItem("computer_score",0);





  console.log("called");
  let computer=Math.floor(Math.random()*3);
  let player=n;
  let arr=["rock","paper","scissors"]
  console.log(arr[computer]);
  console.log(player);

  
  if((player=="rock"&&arr[computer]=="scissors")||(player=="paper"&&arr[computer]=="rock")||(player=="scissors"&&arr[computer]=="paper")){
    //win
    localStorage.setItem("user_score",parseInt(localStorage.getItem("user_score"))+1);

  

if(player=="rock"&&arr=="scissors"){
 

    localStorage.setItem("user_choice","assests/Rock.png");
    localStorage.setItem("computer_choice","assests/scissor.png")


}
else if (player=="paper"&&arr=="rock"){

    localStorage.setItem("user_choice","assests/paper.png");
    localStorage.setItem("computer_choice","assests/Rock.png")
}
else{
 

    localStorage.setItem("user_choice","assests/scissor.png");
    localStorage.setItem("computer_choice","assests/paper.png")
}




change_page(player,"YouWin.html");

  }


  else if((player=="rock"&&arr[computer]=="paper")||(player=="paper"&&arr[computer]=="scissors")||(player=="scissors"&&arr[computer]=="rock")){
    //lose
    localStorage.setItem("computer_score",parseInt(localStorage.getItem("computer_score"))+1);
   

if (player=="rock"&&arr[computer]=="paper"){


    localStorage.setItem("user_choice","assests/Rock.png");
  localStorage.setItem("computer_choice","assests/paper.png")


}
else if (player=="paper"&&arr[computer]=="scissors") {
 

    localStorage.setItem("user_choice","assests/paper.png");
  localStorage.setItem("computer_choice","assests/scissor.png")



}
else{
 

    localStorage.setItem("user_choice","assests/scissor.png");
  localStorage.setItem("computer_choice","assests/Rock.png")



}



change_page(player,"YouLost.html");

  
  }

  else{
   // tie
    
    

if (player=="rock"&&arr[computer]=="rock"){
  

    
    localStorage.setItem("user_choice","assests/Rock.png");
  localStorage.setItem("computer_choice","assests/Rock.png")


}
else if (player=="paper"&&arr[computer]=="paper") {

    
    localStorage.setItem("user_choice","assests/paper.png");
  localStorage.setItem("computer_choice","assests/paper.png")


}
else{

    
    localStorage.setItem("user_choice","assests/scissor.png");
  localStorage.setItem("computer_choice","assests/scissor.png")



}


change_page(player,"TieUp.html");





    
  }


  
}

function change_page(player,s){
  if(player=="rock"){

    let r=document.querySelectorAll("#outer #selection a")[0];
    r.setAttribute("href",s);
  }
  else if(player=="scissors"){
  
    let r=document.querySelectorAll("#outer #selection a")[1];
    r.setAttribute("href",s);
  }
  else{
  
    let r=document.querySelectorAll("#outer #selection a")[2];
    r.setAttribute("href",s);
  }
}


// function update_score(){

// }
// update_score();