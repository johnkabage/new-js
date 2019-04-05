/*
var job = "teacher";

job = prompt("what does john do?");

switch (job) {
  case "teacher":
    console.log("john teaches kids");
    break;
  case "driver":
    console.log("john drives a cab in lisbon");
    break;
  case "cop":
    console.log("john helps in fighting crime");
    break;
  default:
    console.log("john does something else");
}
*/
/*
var heightJohn = 175;
var heightMike = 170;
var ageJohn = 25;
var ageMike = 26;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

if (scoreJohn > scoreMike) {
  console.log("John wins the game with " + scoreJohn + " points");
} else if (scoreMike > scoreJohn) {
  console.log("Mike wins the game with" + scoreMike + "points");
} else {
  console.log("there is a draw!");
}

function calculateAge(yearOfBirth) {
  var age = 2016 - yearOfBirth;
  return age;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement >= 0) {
    console.log(name + " retires in" + retirement + " years");
  } else {
    console.log(name + " is already retired.");
  }
}
yearsUntilRetirement("John", 1990);
yearsUntilRetirement("Mike", 1969);
yearsUntilRetirement("Mary", 1948);

//ARRAYS
var names = ["john", "mike", "mary"];
var years = new Array(1990, 1969, 1948);
console.log(names[0]);
names[1] = "ben";
console.log(names);

var john = ["john", "smith", 1990, "coder", false];

john.unshift("mr.");
john.push("blue");
john.pop();
john.shift();

console.log(john);
if (john.indexOf("teacher") === -1) {
  console.log("john is NOT a teacher.");
}
*/
//objects

// var john = {
//   name: "john",
//   lastName: "smith",
//   yearOfBirth: 1990,
//   job: "teacher",
//   isMarried: false,
//   family: ["jane", "mark", "bob"],
//   calculateAge: function(yearOfBirth) {
//     return 2016 - this.yearOfBirth;
//   }
// };
//console.log(john.calculateAge(1990));
// console.log(john.calculateAge());

// var age = john.calculateAge();
// john.age = age;
// console.log(john);
// console.log(john.job);
// console.log(john.lastName);
// console.log(john.yearOfBirth);
// console.log(john.isMarried);

// var xyz = "job";
// console.log(john[xyz]);

// john.lastName = "bage";
// john["job"] = "programmer";

// console.log(john);

// var jane = new Object();
// jane.name = "jane";
// jane.lastName = "doe";
// jane["yearOfBirth"] = 1969;
// jane["job"] = "retired";
// jane["isMarried"] = true;

// console.log(jane);

// var john = {
//   name: "john",
//   lastName: "smith",
//   yearOfBirth: 1990,
//   job: "teacher",
//   isMarried: false,
//   family: ["jane", "mark", "bob"],
//   calculateAge: function(yearOfBirth) {
//     this.age = 2016 - this.yearOfBirth;
//   }
// };

// john.calculateAge();
// console.log(john);

//loops
/*
for (var i = 0; i < 10; i++) {
  console.log(i);
}
var names = ["john", "mark", "mary", "mike", "bob"];
for (var i = 0; i < 5; i++) {
  console.log(names[i]);
}

for (var i = -1; i < 5; i--) {
  console.log(names[i])
}
*/
/*
var years = [2001, 1985, 1994, 2014, 1973];
var ages = [];

for (var i = 0; i < years.length; i++) {
  ages[i] = 2016 - years[i];
}

for (i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {
    console.log("person is " + ages[i] + " years old,and is of full age.");
  } else {
    console.log("person is " + ages[i] + " years old,and is NOT of full age.");
  }
}
*/

//age = prompt("tell me your age.");
//console.log(age);

//is palindrome algorithm
/*

function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split("");
  var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
  else return false;
}

console.log(isPalindrome("race"));

*/

// const age = 24;
// console.log(age);
//scopes
/*
var a = "hello!";
first();

function first() {
  var b = "hi!";
  second();

  function second() {
    var c = "hey!";
    third();
  }
}

function third() {
  var d = "john";
  console.log(a + d);
  // console.log(c);
}
*/

// the this key word
//console.log(this);
/*
calculateAge(1985);

function calculateAge(year) {
  console.log(2016 - year);
  console.log(this);
}


var john = {
  name: "john",
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
  }
};
john.calculateAge();
*/

function trippleAdd(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}
trippleAdd(10)(20)(30);
