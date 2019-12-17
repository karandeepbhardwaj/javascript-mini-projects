var listOfAnimals = ["Tiger", "bear", "cat", "bear"];

var user1 = {

    userName: "Karandeep Bhardwaj",
    passWord: "dontask",
    age: 24,
    technologies: ["Coding", "Basketball", "Music"],
    isMarried: false,
    shout: function() {
        console.log("Do you want me to shout?");
        console.log("Huhuhahahahahhaha");
    }
};

var user2 = {

    userName: "Jaya Sachdeva",
    passWord: "JSnov1995",
    age: 23,
    technologies: ["Vellapanti", "Dance", "Cooking"],
    isMarried: false,
    shout: function() {
        console.log("Do you want me to shout?");
        console.log("hihihihihihihihihihi");
    }
};


var userList = [user1, user2];

console.log(user1.shout());