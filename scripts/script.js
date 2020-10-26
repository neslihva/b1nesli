window.onload = function() {
    var features = document.getElementById("features-header");
    var dropdown = document.getElementsByClassName("features-dropdown")[0];
    var addMenu = function addDropDownMenu() {
      dropdown.classList.add("on");
    };

    var removeMenu = function removeDropDownMenu() {
      dropdown.classList.remove("on");
    };

    features.addEventListener("mouseover", addMenu);
    features.addEventListener("mouseout", removeMenu);
  };
  
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