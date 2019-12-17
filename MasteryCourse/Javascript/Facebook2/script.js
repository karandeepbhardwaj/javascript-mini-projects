var database = [{
        userName: "Karandeep",
        age: 25,
        password: "dontask"
    },
    {
        userName: "Pardeep",
        age: 62,
        password: "pksbi"
    },
    {
        userName: "Devika",
        age: 54,
        password: "devi"
    }
];

var newsFeed = [{
        userName: "Jaya",
        timeLine: "I am so happy I am going home"
    },
    {
        userName: "Megha",
        timeLine: "I am getting a lot of work"
    }
];

var userNamePrompt = prompt("Type in your username please");
var passwordPrompt = prompt("Whats your password");

function isUserValid(user, pwd) {

    for (var i = 0; i < database.length; i++) {
        if (database[i].userName === user &&
            database[i].password === pwd) {
            return true;
        }
    }
    return false;
}

function singIn(user, pwd) {

    if (isUserValid(user, pwd)) {
        console.log(newsFeed);
    } else {
        alert("Sorry wrong username and password");
    }
}

function whichOneAreYou(age) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].age === age) {
            return "You are " + database[i].userName;
        }
    }
    return "You are not in the list.";
}

console.log(whichOneAreYou(45));

singIn(userNamePrompt, passwordPrompt);