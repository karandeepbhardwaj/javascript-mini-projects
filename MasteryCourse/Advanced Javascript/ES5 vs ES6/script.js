const name = 'Karandeep';
let age = 24;

function whatWouldYouDo() {
    let age = 50;
    console.log("If " + name + " is of age " + age + ", then all he would do is chill in his mansion.");
}
whatWouldYouDo();

console.log("If " + name + " is of age " + age + ", then he would learn new things to get better.");

//const is to keep values constant and wont change
//let is value that can be changed, but the scope of the value is only limited to the curly brackets enclosing it.

const userObject = {
    userName: 'Karandeep',
    age: 24,
    married: false
}

console.log(userObject.age);

//changing the const object's propertty is allowed.

userObject.age = 50;

console.log(userObject.age);

///////////////////////////////////////////////////////////////////////////

const userName = userObject.userName;
const age = userObject.age;
let married = userObject.married;

//This above can be written as below

const { userName, age } = obj;
let { married } = obj;


//------------------------------------------------------------------------------

const name = "Karandeep";

const obj = {
    [name]: "hello",
    [1 + 2]: 'hihi'
}

const a = "simon";
const b = true;
const c = {};

const obj2 = {
    a: a,
    b: b,
    c: c
}

//------------------------------------------------------------------------------

//Template strings
const greeting = "hello" + name + "I heard you have been doing " + greeting + "?\ after all";

const age = 34;
const pet = 'dog';
const greetingBest = `Hello ${name}. You seem to be ${age-10}, what a lovely ${pet} you have`

//------------------------------------------------------------------------------
//Arrown Functions : 

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;