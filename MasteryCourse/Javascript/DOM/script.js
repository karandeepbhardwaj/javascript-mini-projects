// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function() {
//     console.log("Click");
// })


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createList();
    }
}

function addListAfterEnter(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createList();
    }
}

function status(event) {
    var li = event.querySelector;
    console.log(li);
}
// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterEnter);
ul.addEventListener("click", status)