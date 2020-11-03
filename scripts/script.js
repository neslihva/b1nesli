// e-mail button // 

  var testButton = document.querySelector("submit");

function sayHi() {
  alert("e-mail has been sent!");
}

try {
  submit.addEventListener("click", sayHi);
} 

catch (error) {
  console.log("Something went wrong!");
}

// menu

var mobileOverlay = document.querySelector('#nav-menu');
var mobileMenuButton = document.querySelector('#mobilenav');

// Mobiele menu functies
function openMobileMenu() {
  mobileOverlay.classList.toggle('nav-menu');
} 

// Event Listeners van mobiele menu
mobileMenuButton.addEventListener('click', openMobileMenu);
