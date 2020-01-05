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

//------------------------------------------------------------------------------

//Earlier we used to do:

function first1() {
    var greet = 'hi';

    function second() {
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();

//And now with ES6 we do the following for the above code

const first2 = () => {
    const greet2 = 'hi';
    const second2 = () => {
        alert(greet2);
    }
    return second2;
}
const newFunc2 = first2();
newFunc2();

//Closures
//Webbrowsers remembers the parent functions variable used in child function and the references. 

//Currying
//Prcoess of converting multiple parameters together into taking parameters one at a time.

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);


//avoiding side effects and functional purity.
//Deterministic -- always returning same value