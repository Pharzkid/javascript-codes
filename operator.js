// operators in js are simple symbols that performs operation on one or more
// files in our js files system

// 1. Arrithmetic operations
// addition
let sum = 5 + 3;
console.log(sum)

// subtractions
let difference = 10 - sum;
console.log(difference)

// multiplication
let product = sum * difference
console.log(product)

// division
let quotient = product / 4;
console.log(quotient)

// modulus
let remainder = quotient % 3;
console.log(remainder)

// 2.Assignment Operations
// These operators assign values to variables

// assignment
let x = 5;
console.log(x)

// addition assignment
let y = 5;
y += 1;
console.log(y)

//subtraction assignment
let z = 10;
z -= y;
console.log(z)

// 3.Comparison Operations
// These operators compare values and return a boolean value

// Equal
console.log(5 == "5");

// strict Equal
console.log(5 === "5");

// Not Equal
console.log(5 != "5");
let n = 3
let f = 2
console.log(n != f);

// Strict Not Equal
console.log(5 !== "5");
let u = "fawaz"
let p = 10
console.log(u !== z);

//greater than
console.log(10 > 5)
let g = 12
let k = 10
let s = g + k
console.log(k > g)

// less than
console.log(3 < 2)
let l = 12
let i = 10
let w = l - i
console.log(s < w)

//gtreater than and equal
console.log(4 >= 5);
let o = 6
let v = 6
let b = o * 2
console.log(o >= v)

let j = v - 3

console.log( b >= j)

// using logical operators declare four variables that logs boolean value on console.
// using comments on the vs code editor explain the meaning how it functions

const hasDriverLicense = true;
const hasInsurance = true;

const cardrive = hasDriverLicense && hasInsurance;
console.log(cardrive);

const isAdult = true;
const isHungry = false;

const canEnter = isAdult && isHungry;
console.log(canEnter);

const knowsHTML = false;
const knowsCSS = true;
const canDesignWebsite = knowsHTML || knowsCSS;
console.log(canDesignWebsite);

const isAdmin = false;
const isSuperUser = false;

const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage)