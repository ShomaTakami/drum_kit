for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonText = this.innerHTML;
    buttonAnimation(buttonText);
    switch (buttonText) {
      case "w":
        var tom1 = new Audio("./sounds/Kit 7 - Electro/CYCdh_ElecK04-Clap.wav");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio(
          "./sounds/Kit 7 - Electro/CYCdh_ElecK04-ClHat01.wav"
        );
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio(
          "./sounds/Kit 7 - Electro/CYCdh_ElecK04-Cymbal01.wav"
        );
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio(
          "./sounds/Kit 7 - Electro/CYCdh_ElecK04-HfHat.wav"
        );
        tom4.play();
        break;
      case "j":
        var snare = new Audio(
          "./sounds/Kit 7 - Electro/CYCdh_ElecK04-Snr01.wav"
        );
        snare.play();
        break;
      case "k":
        var crash = new Audio(
          "./sounds/Kit 7 - Electro/CYCdh_ElecK04-Tom01.wav"
        );
        crash.play();
        break;
      case "l":
        var kick = new Audio(
          "./sounds/Kit 7 - Electro/CYCdh_ElecK04-Kick01.wav"
        );
        kick.play();
        break;

      default:
        break;
    }
  });
}

document.addEventListener("keydown", function(e) {
  var key = e.keyCode;
  switch (key) {
    case 87:
      var tom1 = new Audio("./sounds/Kit 7 - Electro/CYCdh_ElecK04-Clap.wav");
      tom1.play();
      break;
    case 65:
      var tom2 = new Audio(
        "./sounds/Kit 7 - Electro/CYCdh_ElecK04-ClHat01.wav"
      );
      tom2.play();
      break;
    case 83:
      var tom3 = new Audio(
        "./sounds/Kit 7 - Electro/CYCdh_ElecK04-Cymbal01.wav"
      );
      tom3.play();
      break;
    case 68:
      var tom4 = new Audio("./sounds/Kit 7 - Electro/CYCdh_ElecK04-HfHat.wav");
      tom4.play();
      break;
    case 74:
      var snare = new Audio("./sounds/Kit 7 - Electro/CYCdh_ElecK04-Snr01.wav");
      snare.play();
      break;
    case 75:
      var crash = new Audio("./sounds/Kit 7 - Electro/CYCdh_ElecK04-Tom01.wav");
      crash.play();
      break;
    case 76:
      var kick = new Audio("./sounds/Kit 7 - Electro/CYCdh_ElecK04-Kick01.wav");
      kick.play();
      break;

    default:
      break;
  }
  buttonAnimation(e.key);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
