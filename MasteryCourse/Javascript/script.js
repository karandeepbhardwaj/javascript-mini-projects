var firstName = prompt("Please enter you name:");
var newName;

function myFunc() {

    if (firstName === "Karandeep") {
        alert("Hi Karandeep, Welcome to Javascript");
    } else {
        newName = prompt("I think you are new here, Welcome!!! Please type your name and I will remember you.");
    }
}

myFunc();