var database = [{
    userName: "Karandeep",
    password: "Dontask"
}];

var newsFeed = [{

        userName: "Jaya",
        timeLine: "I am so happy I am going home"
    },
    {
        userName: "Megha",
        timeLine: "I am getting alot of work"
    }
];

var userNamePrompt = prompt("Type in your username please");
var passwordPrompt = prompt("Whats your password");

function singIn(user, pwd) {

    if (user === database[0].userName && pwd === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry wrong username and password");
    }
}

singIn(userNamePrompt, passwordPrompt);