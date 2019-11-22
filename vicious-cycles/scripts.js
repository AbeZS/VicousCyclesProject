/*$('div.burger-icon').hover(
    function(){ $('.hamburger-menu').addClass('show-hamburger-menu') },
    function(){ $('.hamburger-menu').removeClass('show-hamburger-menu') }
 )
 $('div.burger-icon').hover(
    function(){ $('.hamburger-menu').addClass('show-hamburger-menu') },
    function(){ $('.hamburger-menu').removeClass('show-hamburger-menu') }
 )*/
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var showMenu = document.querySelector(".hamburger-menu");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  showMenu.classList.toggle("show-hamburger-menu");
});
