// 1. let, const, var example
function scopeExample() {
  var x = 10;   // function scope
  let y = 20;   // block scope
  const z = 30; // block scope

  console.log(x, y, z);
}

// 2. fruits array
const fruitList = ["kiwi", "apple", "banana", "pear", "cherry"];

function secondFruit() {
  return fruitList[1];
}

// 3. push & pop
function updateArray(arr) {
  arr.push("extra");
  arr.pop();
  return arr;
}

// 4. square using map
function squareArr(arr) {
  return arr.map(n => n ** 2);
}

// 5. filter odd numbers
function filterOdds(arr) {
  return arr.filter(n => n % 2 === 1);
}

// 6. person object
const user = {
  name: "Rahul",
  age: 21,
  occupation: "Engineer"
};

function sayHello(obj) {
  console.log(`Hi, I am ${obj.name} and I work as ${obj.occupation}`);
}

// 7. rectangle area
function areaRect(rect) {
  return rect.width * rect.height;
}

// 8. object keys
function objectKeys(obj) {
  return Object.keys(obj);
}

// 9. merge objects
function combine(objA, objB) {
  return Object.assign({}, objA, objB);
}

// 10. sum using reduce
function totalSum(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}