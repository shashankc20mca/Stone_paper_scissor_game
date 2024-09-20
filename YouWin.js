let x=document.querySelector("#win #outer #selection .user .user_2 div img");
let y=document.querySelector("#win #outer #selection .computer .computer_2 div img");
let user_choice=localStorage.getItem("user_choice");
let computer_choice=localStorage.getItem("computer_choice");
x.setAttribute("src",user_choice);
y.setAttribute("src",computer_choice);