let input = document.getElementById("todoInput");
let button = document.getElementById("addButton");
let list = document.getElementById("todoList");
let todos = [];
let clearAllButton = document.getElementById("clearAll");

button.addEventListener("click", function () {
    let todo = input.value.toUpperCase();
    if (todo==="") return;
    todos.push(todo);
    console.log(todos);
    let li = document.createElement("li");
    li.style.display = "grid";
    li.style.gridTemplateColumns = "50px 1fr 100px 80px";
    li.style.alignItems = "center";
    li.style.fontSize = "16px";
    li.style.color = "#172554";
    li.style.padding = "10px";
    li.style.borderBottom = "1px solid #172554"
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.appearance = "none";
    checkbox.style.width = "20px";
    checkbox.style.height = "20px";
    checkbox.style.border = "2px solid #172554";
    checkbox.style.borderRadius = "50%";
    checkbox.style.cursor = "pointer";
    checkbox.style.position = "relative";
    checkbox.style.width = "30px";
    checkbox.style.height = "30px";
    checkbox.style.flex = "0 0 auto";
    checkbox.style.borderRadius = "30px";
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            todoText.style.color = "gray";
            todoText.style.textDecoration = "line-through";
            checkbox.style.backgroundColor = "#172554";
        } else {
            todoText.style.color = "#172554";
            todoText.style.textDecoration = "none";
            checkbox.style.backgroundColor = "transparent";
        }
    });
    let todoText = document.createElement("span");
    todoText.textContent = todo;
    todoText.style.color = "#172554";
    todoText.style.fontSize = "16px";
    todoText.style.wordBreak = "break-word";
    todoText.style.padding = "0px 40px";
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.style.borderWidth = "1px";
    editBtn.style.borderColor = "#172554";
    editBtn.style.paddingLeft = "5px";
    editBtn.style.paddingRight = "5px";
    editBtn.style.borderRadius = "8px";
    editBtn.style.height = "30px";
    editBtn.style.width = "60px";
    editBtn.style.margin = "0px 10px"
    editBtn.addEventListener("mouseenter", function () {
        editBtn.style.backgroundColor = "#172554";
        editBtn.style.color = "white";
    });
    editBtn.addEventListener("mouseleave", function () {
        editBtn.style.backgroundColor = "transparent";
        editBtn.style.color = "#172554";
    });
    editBtn.addEventListener("click", function () {
        let inputEdit = document.createElement("input");
        inputEdit.type = "text";

        inputEdit.value = todoText.textContent;
        li.replaceChild(inputEdit, todoText);
        editBtn.textContent = "Save";
        editBtn.onclick = function() {
            todoText.textContent = inputEdit.value.toUpperCase();
            li.replaceChild(todoText, inputEdit);
            editBtn.textContent = "Edit";
            let index = todos.indexOf(todo);
            if (index > -1) {
                todos[index] = todoText.textContent;
            }
        }
    })
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.borderWidth = "1px";
    deleteBtn.style.borderColor = "#172554";
    deleteBtn.style.paddingLeft = "5px";
    deleteBtn.style.paddingRight = "5px";
    deleteBtn.style.borderRadius = "8px";
    deleteBtn.style.height = "30px";
    deleteBtn.style.width = "80px";
    deleteBtn.style.margin = "0px 10px"
    deleteBtn.addEventListener("mouseenter", function () {
        deleteBtn.style.backgroundColor = "#172554";
        deleteBtn.style.color = "white";
    });
    deleteBtn.addEventListener("mouseleave", function () {
        deleteBtn.style.backgroundColor = "transparent";
        deleteBtn.style.color = "#172554";
    });
    deleteBtn.addEventListener("click", function () {
        li.remove();
        let index = todos.indexOf(todo);
        if (index > -1) {
            todos.splice(index, 1);
        }
        console.log(todos);
    });
    
    li.appendChild(checkbox);
    li.appendChild(todoText);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    list.appendChild(li);
    input.value = "";
});
clearAll.addEventListener("click", function () {
    list.innerHTML = "";
    todos = [];
});
