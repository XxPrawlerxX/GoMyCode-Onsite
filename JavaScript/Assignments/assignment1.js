let number = 10;

if (number % 2 == 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


let score = prompt("Enter the student's score:");

if (score >= 70) {
    console.log("Grade A");
} else if (score >= 60) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else if (score >= 45) {
    console.log("Grade D");
} else if (score >= 40) {
    console.log("Grade E");
} else {
    console.log("Grade F");
}