var burger = document.getElementById("burger_menu");
var menu = document.getElementById("menu");

burger.addEventListener("click",function(){
    console.log("burger clicked");
    burger.classList.toggle("active");
    menu.classList.toggle("active");
},false);

console.log('This is header js');