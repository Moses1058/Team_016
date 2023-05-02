let menuButton = document.querySelector(".menu-button");
let closeButton = document.querySelector(".close-button");
let menuList = document.querySelector("#nav");
let button = document.querySelector("#button");


//add event listener onclick when menu button is clicked nav bar appears button changes with close button and when close button is clicked nav bar dissapears

button.onclick = () => {
    menuList.classList.toggle("active");
    menuButton.classList.toggle("hide");
    closeButton.classList.toggle("active");
}
//when window resizes more than 768px and has dropdown list active with this function it dissapears when window will get back to size less than 768px.
window.onresize = () => {
    if (window.innerWidth > 768) {
        menuList.classList.remove("active");
        menuButton.classList.remove("hide");
        closeButton.classList.remove("active");
    }
}