let input = document.getElementById("todoInput");
let button = document.getElementById("addButton");
let list = document.getElementById("todoList");

button.addEventListener("click", function () {

    let task = input.value.toUpperCase();

    if (task === "") return; // Prevent empty tasks

    // Create list item
    let li = document.createElement("li");
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    li.style.fontSize = "16px";
    li.style.color = "#172554";
    li.style.padding = "5px 0";

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px";

    // Create span for task text
    let taskText = document.createElement("span");
    taskText.textContent = task;

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.borderWidth = "1px";
    deleteBtn.style.borderStyle = "solid";
    deleteBtn.style.borderColor = "#172554";
    deleteBtn.style.paddingLeft = "5px";
    deleteBtn.style.paddingRight = "5px";
    deleteBtn.style.borderRadius = "8px";
    deleteBtn.style.backgroundColor = "white";
    deleteBtn.style.color = "#172554";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.transition = "all 0.2s";

    // Hover effect for delete button
    deleteBtn.addEventListener("mouseenter", function () {
        deleteBtn.style.backgroundColor = "#172554";
        deleteBtn.style.color = "white";
    });

    deleteBtn.addEventListener("mouseleave", function () {
        deleteBtn.style.backgroundColor = "white";
        deleteBtn.style.color = "#172554";
    });

    // Delete button functionality
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Append elements in order: checkbox, text, delete button
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    // Add li to the list
    list.appendChild(li);

    // Clear input
    input.value = "";
});