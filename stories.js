const menu = document.querySelector(".logo-menu");
const bar = document.querySelector(".menu");
const cross = document.querySelector(".close");
const textBar = document.querySelector(".hidden-menu");

let hidden = false;


menu.addEventListener("click" ,() =>{
 if(!hidden){
    hidden=!hidden;
    textBar.style.display = "flex";
    bar.style.display = "none";
    cross.style.display = "flex";
    }else{
        hidden=!hidden;
        textBar.style.display = "none";
        bar.style.display = "flex";
        cross.style.display = "none";
 }
})
  
