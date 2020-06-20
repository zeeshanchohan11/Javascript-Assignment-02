// CHAPTER NO. 21-25 (STRING METHODS) ================================================

// Task # 01

var firstName = prompt("Enter Your First Name", "first name");
var lastName = prompt("Enter Your Last Name", "last name");
var fullName = firstName + " " + lastName;
alert("Hello! \n" + fullName);



// Task # 02

var favouritePhone = prompt("Enter Your Favourite Phone", "my favourite phone is");
var len = favouritePhone.length;
document.write("My favourite phone is: " + favouritePhone);
document.write("<br>Length Of String Is: " + len);



// Task # 03

var word = "Pakistan";
document.write("<br><br>String: " + word + "<br>");
for (var i = 0; i < word.length; i++) {
    if (word.slice(i, i + 1) === "n") {
        document.write("Index of 'n': " + i);
    }
}



// Task # 04

var word1 = "Hello World";
document.write("String: " + word1 + "<br>");
var find = word1.lastIndexOf("l");
document.write("Last Index of 'l': " + find);



// Task # 05

var word = "Pakistani";
document.write("String: " + word + "<br>");
document.write("Character at Index 3: " + word[3]);



// Task # 06

var firstName = prompt("Enter Your First Name", "first name");
var lastName = prompt("Enter Your Last Name", "last name");
var fullName = firstName.concat(" " + lastName);
alert("Hey, Welcome... \n" + fullName);



// Task # 07

var city = "Hyderabad";
document.write("City: " + city + "<br>");
for (var i = 0; i < city.length; i++) {
    if (city.slice(i, i + 5) === "Hyder") {
        city = city.slice(0, i) + "Islam" + city.slice(i + 5);
        document.write("After Replacement: " + city);
    }
}



// Task # 08

var message = "Ali and Sami are best friends. They play cricket and football together.";
for (var i = 0; i < message.length; i++) {
    if (message.slice(i, i + 3) === "and") {
        message = message.slice(0, i) + "&" + message.slice(i + 3);

    }
}
document.write("var message = " + message);



// Task # 09

var string = "472";
console.log(string);
var number = parseInt(string);
console.log("Value: " + number);



// Task # 10

var user = prompt("Write Some Thing In Lower Case", "Enter Here");
var upperCase = user.toUpperCase();
alert("Upper Case: " + upperCase);



// Task # 11

var user = prompt("Enter in Lower Case", "Enter Here");
var firstChar = user.slice(0, 1);
var rem = user.slice(1);
firstChar = firstChar.toUpperCase();
user = firstChar.concat(rem);
alert("Title Case: " + user);



// Task # 12

var mul;
var num = 35.36;
var cal = num.toString();
var store;
for (var i = 0; i < cal.length; i++) {
    if (cal.slice(i, i + 1) === ".") {
        store = cal.slice(i + 1);
    }
}
var temp = store.length;
temp = Math.pow(10, temp);
num *= temp;
document.write("Result = " + num);



// Task # 13

var input = prompt("Enter your text", "Enter Here!");
for (var i = 0; i < input.length; i++) {
    if (input.slice(i, i + 1) === "@" || input.slice(i, i + 1) === "," || input.slice(i, i + 1) === "!" || input.slice(i, i + 1) === ".") {
        alert("Please Enter a valid user Name...");
    }
}



// Task # 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to ABC Bakery, \nWhat do you want to order Sir / Ma'am", "Enter Here");
var orderr = order.toLowerCase();
var temp = 0;
for (var i = 0; i < A.length; i++) {
    if (orderr === A[i]) {
        alert(order + " is avaliable at index " + i + " in our Bakery");
        break;
    }
    temp++
}

if (temp === 5) {
    alert("We are Sorry! " + order + " is not avaliable in our Bakery");
}



// Task # 15

var password = prompt("Enter Password!", "enter here!");
if (password.slice(0, 1) <= 48 && password.slice(0, 1) <= 57) {
    alert("Password Can not begin with a number");
    alert("Please Enter A Valid Password..");
}
else if (password.length < 6) {
    alert("Password Must be greater than 6");
}
else {
    alert("Welcome!");
}



// Task # 16

var university = "University Of Karachi";
for (var i = 0; i < university.length; i++) {
    document.write(university[i] + "<br>")
}



// Task # 17

var userInput = prompt("Enter Here!");
document.write("User Input = " + userInput + "<br>");
document.write("Last Character Of Input = " + userInput[userInput.length -1]);



// Task # 18

var string = "The quick brown fox jumps over the lazy dog";
document.write("String : " + string + "<br>");
var value = 0;
for (var i = 0; i < string.length; i++) {
    if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The") {
        value++;
    }
}
if(value >= 2){
    document.write("There are " + value + " Occurrence(s) of word 'the'");
}
else{
    document.write("There is " + value + " Occurrence of word 'the'");
}






// CHAPTER NO. 26-30 (MATH METHODS) ================================================

// Task # 01

var inputNumber = prompt("Enter Positive Integer","Enter Here!");
document.write("Number : " + inputNumber + "<br>");
document.write("Round Off : " + Math.round(inputNumber) + "<br>");
document.write("Floor Value : " + Math.floor(inputNumber) + "<br>");
document.write("Ceil Value : " + Math.ceil(inputNumber));



// Task # 02

var inputNegativeNumber = prompt("Enter Negative Integer","Enter Here!");
document.write("Number : " + inputNegativeNumber + "<br>");
document.write("Round Off : " + Math.round(inputNegativeNumber) + "<br>");
document.write("Floor Value : " + Math.floor(inputNegativeNumber) + "<br>");
document.write("Ceil Value : " + Math.ceil(inputNegativeNumber));



// Task # 03

var absoluteValue = prompt("Enter Value:");
document.write("The absolute value of " + absoluteValue + " is " + Math.abs(absoluteValue));



// Task # 04

var generateRandom = parseInt((Math.random() * 6) + 1);
document.write("Random Dice Number Is : " + generateRandom);



// Task # 05

var toss = parseInt((Math.random() * 2) + 1);
document.write(toss + "<br>");
switch (toss) {
    case 1:
        document.write("Random coin Value : Tails");
        break;
    case 2:
        document.write("Random coin Value : Heads");
        break;
}



// Task # 06

var numbers = parseInt((Math.random() * 100) + 1);
document.write("Random numbers between 1 and 100 : " + numbers);



// Task # 07

var weight = prompt("Enter Weight in Kilograms:, 50 kgs");
var store;
for (var i = 0; i < weight.length; i++) {
    if (weight.slice(i, i + 3) === "kgs") {
        store = Number(weight.split("kgs",1));
        document.write("The Weight Of User Is " + store + " Kilograms");
        break;
    }
    else if (weight.slice(i, i + 2) === "kg") {
        store = weight.split("kg", 1);
        document.write("The Weight Of User Is " + store + " Kilograms");
        break;
    }
    else if (weight.slice(i, i + 9) === "kilograms" || weight.slice(i, i + 8) === "kilogram") {
        store = weight.split("kilograms", 1);
        store = weight.split("kilogram", 1);
        document.write("The Weight Of User Is " + store + " Kilograms");
        break;
    }
}



// Task # 08

var secretNumber = parseInt((Math.random() * 10) + 1);
var guess = Number(prompt("Guess a number between 1 - 10","Try your luck"));
if(guess === secretNumber){
    alert("Congratulations!!!");
}
else{
    alert("Try Again!");
}






// CHAPTER NO. 31 - 34 (DATE METHODS) ================================================

// Task # 01

var date = new Date();
document.write(date);



// Task # 02

var month = date.getMonth();
var monthsCollection = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
for (var i = 0; i < monthsCollection.length; i++) {
    if(month === i){
        document.write("<br>Current Month : "+ monthsCollection[month]);
        break;
    }
}



// Task # 03

var day = date.getDay();
var daysCollection = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
document.write("<br>Current Day Is : ");
for (var i = 0; i < daysCollection.length; i++) {
    if (day === i) {
         store = daysCollection[day];
        for (var j = 0; j < 3; j++) {
           document.write(store[j]);
        }
    }
}



// Task # 04

switch (day) {
    case 0: case 7:
        document.write("Its Funday");
        break;
    case 1: case 2: case 3: case 4: case 5: case 6:
        document.write("<br>Its Borr Day");
        break;
}



// Task # 05

var d = date.getDate();
if(d<= 15){
    document.write("First Fifteen Days Of the Month");
}
else{
    document.write("<br>Last Days Of the Month");
}



// Task # 06

var time = new Date();
document.write("<br>Current Date : " + time + "<br>");
document.write("Elapsed milliSecond Since January 1, 1970 : " + time.getTime() + "<br>");
document.write("Elapsed minuites Since January 1, 1970 : " + (time.getTime() / (1000 * 3600)));



// Task # 07

var find = time.getHours();
if (find >= 0 && find <= 12) {
    document.write(" Its AM")
}
else{
    document.write(" Its PM");
}



// Task # 08

var x = new Date("December 31, 2020");
document.write("<br>" + x);



// Task # 09

var $date = new Date("June 18, 2015");
var date = new Date();
var store = date - $date;
document.write("<br>" + (parseInt((store) / (1000 * 60 * 60 * 24))) + " days have passed since 1st Ramadan, 2015");



// Task # 10

var dateObj = new Date("2020");
var Current = new Date();
var randomVariable = Current - dateObj;
document.write("<br>" + parseInt((randomVariable)/(1000 * 60)) + " seconds had passed since the beginning of 2020");



// Task # 11

var current = new Date();
document.write("<br>Current Date : " + current);
current.setHours(current.getHours() - 1);
document.write("<br> 1 hour ago, it was " + current);



// Task # 12

var current = new Date();
document.write("<br>Current Date : " + current);
current.setFullYear(current.getFullYear() - 100);
document.write("<br>100 years back, it was " + current);



// Task # 13

var askUser = prompt("Enter Your Age","Iam 18 years old");
var dateObject = new Date();
var calculation = dateObject.getFullYear() - askUser;
document.write("<br>Your Age Is : " + askUser);
document.write("<br>Your Birth Year Is : " + calculation);



// Task # 14

var name = prompt("Enter Your Name", "My name is");
document.write("<h1> K-Electric Bill </h2> ");
var units = 410;
var charge = 16;
var late = 350
document.write("Customer Name : <b>" + name + "</b> <br>");
document.write("Month : <b>June</b> <br>");
document.write("Number Of Units : <b>" + units + "</b> <br>");
document.write("Charge per Unit : <b>" + charge + " Pkr</b> <br>");
var onDue = units * charge;
document.write("<br>Net Amount Payable (within Due Date) Is : <b>" + Math.round(onDue) + "</b><br>");
document.write("Late Payment Charger : <b>" + late + " </b> <br>")
var notDue = onDue + late;
document.write("Gross Amount Payable (after due date) Is : <b>" + Math.round(notDue) + "</b>");






// CHAPTER NO. 35 - 38 (FUNCTION) ================================================

// Task # 01

function date() {
    var currentDate = new Date();
    document.write(currentDate);
}
date();



// Task # 02

function greet(f, l) {
    var conact = f + " " + l;
    alert("Hello! " + conact);
}
var firstnAme = prompt("Enter Your First Name:");
var lastnAme = prompt("Enter Your Last Name:");
greet(firstnAme,lastnAme);



// Task # 03

function addTwo(int1, int2) {
    return int1 + int2;
}
var num1 = Number(prompt("Enter First Number"));
var num2 = Number(prompt("Enter Second Number"));
var result = addTwo(num1, num2);
alert("Sum Of " + num1 + " and " + num2 + " Is : " + result);



// Task # 04

function calculator(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    }
    else if (operator === "-") {
        return num1 - num2;
    }
    else if (operator === "*") {
        return num1 * num2;
    }
    else if (operator === "/") {
        return num1 / num2;
    }
    else if (operator === "%") {
        return num1 % num2;
    }
    else {
        return "Invalid";
    }
}
var int1 = Number(prompt("Enter First Number"));
var ope = prompt("Enter Operator Number");
var int2 = Number(prompt("Enter Second Number"));
var cal = calculator(int1, ope, int2);
alert(int1 + " " + ope + " " + int2 + " = " + cal);



// Task # 05

function square(num) {
    return Math.pow(num, 2);
}
var user = prompt("Enter Number");
var ans = square(user);
alert("Square Of " + user + " is : " + ans);



// Task # 06

function factorial(num) {
    var store = 1
    for (var i = 1; i <= num; i++) {
        store *= i
    }
    document.write("The Factorial Of " + num + " is : " + store);
}
var user = Number(prompt("Enter Number"));
factorial(user);



// Task # 07

function counting(first, last) {
    for (var i = first; i <= last; i++) {
        document.write(i + " ");
    }
}

var start = Number(prompt("Enter Start Number"));
var end = Number(prompt("Enter Last Number"));
counting(start, end);




// Task # 08

function calculateHypotenuse(b, p) {
    function calculateSquare(n) {
        return Math.pow(n, 2);
    }
    return calculateSquare(b) + calculateSquare(p);
}
var base = Number(prompt("Enter Base"));
var perpendicular = Number(prompt("Enter Perpendicular"));
var calcu = calculateHypotenuse(base, perpendicular);
document.write("Hypotenuse Is : " + calcu);




// Task # 09

function areaOfReactangle(val1, val2) {
    var A = val1 * val2;
    alert("Area Of Reactangle Is : " + A);
}
var height = 23;
var width = 81;
areaOfReactangle(3, 8); // as value
areaOfReactangle(height, width); // as Variable



// Task # 10

function palindrome(str, num) {
    var temp = "";
    for (var i = num; i >= 0; i--) {
        temp = temp + str[i]
    }
    if(temp === str){
        document.write(str + " Is Palindrome");
    }
    else{
        document.write(str + " Is Not Palindrome");
    }
}
var pal = prompt("Enter Word");
len = pal.length - 1;
palindrome(pal, len);



// Task # 11

function Upper(string = "") {
    var split = string.toLowerCase().split(" ");
    for (var i = 0; i < split.length; i++) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
    }
    string = split.join(" ");
    document.write(string);
}
var str = "the quick brown fox";
Upper(str);



// Task # 12

function longest(str = "") {
    var long = str.split(" ");
    longestWord = 0;
    store = "";
    for (var i = 0; i < long.length; i++) {
        if (long[i].length > longestWord) {
            longestWord = long[i].length;
            store = long[i]
        }
    }
    document.write(store);
}
longest("Web Development Tutorial");


// Task # 13

function Occurence(string = "", letter = "") {
    var val = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.slice(i, i + 1) === letter) {
            val++;
        }
    }
    document.write(letter + " appears " + val + " times");
}

Occurence("muhammad", "m")



// Task # 14

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The Circumference Of Circle Is " + circumference.toFixed(2) + "<br>");
}
function calcArea(radius) {
    var area = (Math.PI * Math.pow(radius,2));
    document.write("The Area Of Circle Is " + area.toFixed(2));
}
calcCircumference(5);
calcArea(4);
