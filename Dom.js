// let Z = document.querySelector("#12");
// Z.onclick = () =>{
//   console.log("RESTARTED");
  
// };
// let div =document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("you are on div");
// };
let A = document.querySelector("#MODE");
let curmode = "light";
A.addEventListener("click",()=>{
  if(curmode === "light"){
    curmode = "dark";
    document.querySelector("body").style.backgroundColor="black";
  }
  else{
    curmode = "light";
    document.querySelector("body").style.backgroundColor="white";
  }
  console.log(curmode);
})