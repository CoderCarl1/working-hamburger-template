// const menuToggle = document.querySelector('#menu-toggle')
// console.log(menuToggle);

// function menuOpenClose () {
// console.log('menuToggle');
// }

// menuToggle.addEventListener("click", menuOpenClose)


var menuToggle = document.querySelector("#menu-toggle");
var menu = document.querySelector("#menu");
console.log('before');

menuToggle.addEventListener("click", () => {
    console.log('during');
        if (menu.className != "active") {
          menu.className = "active";
        } else {
          menu.className = "";
        }
        console.log('after');
      });