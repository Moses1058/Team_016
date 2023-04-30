
let check = document.querySelector(".checkbox").checked = true
let uncheck = document.querySelector(".checkbox").checked = false

let basic = document.querySelector(".base");
let pro = document.querySelector(".pro");
let business = document.querySelector(".business");

function pricing(){
    if(check == true){
        check = uncheck;
        basic.innerText = "$190.00"
        pro.innerText = "$390.00"
        business.innerText = "$990.00"
    }else if(check == uncheck){
        check = true;
        basic.innerText = "$19.00"
        pro.innerText = "$39.00"
        business.innerText = "$90.00"
    }
}
