// const menuToggle = document.querySelector('#menu-toggle')
// console.log(menuToggle);

// function menuOpenClose () {
// console.log('menuToggle');
// }

// menuToggle.addEventListener("click", menuOpenClose)


var menuToggle = document.querySelector("#menu-toggle");
var topMenu = document.querySelector(".top-menu");

menuToggle.addEventListener("click", () => {
        if (topMenu.className != "active top-menu") {
            topMenu.className = "active top-menu";
        } else {
            topMenu.className = "hidden top-menu";
        }
      });