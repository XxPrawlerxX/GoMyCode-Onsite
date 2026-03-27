const nameInput = document.getElementById("fullName");
const gradeInput = document.getElementById("gradeInput");
const button = document.getElementById("submitBtn");
const outputBox = document.getElementById("outputBox");
const title = document.getElementById("titleText");
const prompt = document.getElementById("inputPrompt");

let students = [];

function getLetterGrade(score) {
    if (score >= 70) return "A";
    else if (score >= 60) return "B";
    else if (score >= 50) return "C";
    else if (score >= 45) return "D";
    else if (score >= 40) return "E";
    else return "F";
}

button.addEventListener("click", function () {
    const name = nameInput.value;
    const grade = Number(gradeInput.value);

    if (name === "" || isNaN(grade)) {
        prompt.textContent = "Please enter valid name and grade";
        prompt.style.color = "red";

        nameInput.value = "";
        gradeInput.value = "";
        return;
    }

    if (grade < 0 || grade > 100) {
        prompt.textContent = "Grade must be between 0 and 100";
        prompt.style.color = "red";

        gradeInput.value = "";
        return;
    }

    const letterGrade = getLetterGrade(grade);

    const student = {
        name: name,
        grade: letterGrade

    };

    students.push(student);

    title.textContent = "Next Student";

    const newStudent = document.createElement("p");

    newStudent.textContent = `Name: ${student.name} ||   Grade: ${student.grade}`;
    newStudent.className = "text-gray-700 py-2 text-left mx-4 px-2 border-l-2 border-l-blue-400 border-y border-y-blue-400";

    outputBox.appendChild(newStudent);

    prompt.textContent = "Please enter your full name and grade";
    prompt.style.color = "blue";

    nameInput.value = "";
    gradeInput.value = "";
});