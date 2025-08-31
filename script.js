// Part 1: Variable Declarations and Conditionals
let userName = "Alice";
let userAge = 21;
let isMember = true;

if (userAge >= 18) {
    console.log(`${userName} is an adult.`);
} else {
    console.log(`${userName} is a minor.`);
}

if (isMember) {
    console.log(`${userName} has membership privileges.`);
} else {
    console.log(`${userName} does not have membership.`);
}

// Part 2: Custom Functions

// Function to greet the user
function greetUser(name) {
    console.log(`Hello, ${name}! Welcome to the site.`);
}

// Function to check if a number is even or odd
function checkNumber(num) {
    return (num % 2 === 0) ? "even" : "odd";
}

greetUser(userName);
console.log(`5 is an ${checkNumber(5)} number.`);

// Part 3: Loop Examples

// Loop 1: For loop to print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(`Number: ${i}`);
}

// Loop 2: While loop to count down from 3
let countdown = 3;
while (countdown > 0) {
    console.log(`Counting down: ${countdown}`);
    countdown--;
}

// Part 4: DOM Interactions

// 1. Change text content of a paragraph
const changeTextBtn = document.getElementById("changeTextBtn");
const textPara = document.getElementById("textPara");

changeTextBtn.addEventListener("click", () => {
    textPara.textContent = "The text has been changed!";
});

// 2. Add a new list item when button clicked
const addElementBtn = document.getElementById("addElementBtn");
const itemList = document.getElementById("itemList");
let listItemCount = 1;

addElementBtn.addEventListener("click", () => {
    listItemCount++;
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${listItemCount}`;
    itemList.appendChild(newItem);
});

// 3. Toggle visibility of a div
const toggleVisibilityBtn = document.getElementById("toggleVisibilityBtn");
const toggleDiv = document.getElementById("toggleDiv");

toggleVisibilityBtn.addEventListener("click", () => {
    if (toggleDiv.style.display === "none") {
        toggleDiv.style.display = "block";
    } else {
        toggleDiv.style.display = "none";
    }
});

