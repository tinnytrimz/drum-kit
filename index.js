var listLength = document.querySelectorAll(".drum").length;
for (var i = 0; i < listLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  var activeButton = document.querySelector("." + buttonInnerHTML);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
  switch (buttonInnerHTML) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    default: console.log(buttonInnerHTML);
  }
}


document.addEventListener("keydown", pressed);

function pressed(event) {
  // To get the particular key that was pressed
  var keyPressed = event.key;

  // To add a class pressed to the key that was pressed
  var activeButton = document.querySelector("." + keyPressed);
  activeButton.classList.add("pressed");

  // Set a timeout to remove the class pressed from the key pressed
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

  switch (keyPressed) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    default: console.log(keyPressed);
  }
}
