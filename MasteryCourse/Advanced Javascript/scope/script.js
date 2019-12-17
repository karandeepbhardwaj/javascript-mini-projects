// function q1() {
//     var a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     console.log(a);
// }

// q1(); // value is 3
//---------------------------------------------------------------------------------
// var a = 0;

// function q2() {
//     a = 5;
// }

// function q22() {
//     console.log(a);
// }
// q2();
// q22(); // value is 5 when q2 is called and 0 if not.

//---------------------------------------------------------------------------------

function q3() {
    window.a = "hello";
}

function q32() {
    console.log(a);
}

q3();
q32();