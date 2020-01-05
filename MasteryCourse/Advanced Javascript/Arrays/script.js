const array = [2, 6, 8, 23];
const double = [];

const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log(double);

//map, filter, reduce

const mapArray = array.map((num) => {
    return num * 2;
});

//this can be written as

const mapArray = array.map(num => num * 2)

//filter

const filterArray = array.filter(num => num > 5);

//reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);