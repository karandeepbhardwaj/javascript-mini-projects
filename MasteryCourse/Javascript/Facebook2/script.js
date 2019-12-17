var database = [{
        userName: "Karandeep",
        password: "dontask"
    },
    {
        userName: "Pardeep",
        password: "pksbi"
    },
    {
        userName: "Devika",
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

singIn(userNamePrompt, passwordPrompt);