const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
console.log(tasks)


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        
        const div = document.createElement("div");
        div.className = "task";

        div.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""}>
            <input class="edit" type="text" value="${task.text}">
            <button class="delete">❌</button>
        `;

        const checkbox = div.querySelector("input[type='checkbox']");
        const textInput = div.querySelector(".edit");
        const deleteBtn = div.querySelector(".delete");

        // Toggle complete
        checkbox.addEventListener("change", () => {
            tasks[index].completed = checkbox.checked;
            saveTasks();
        });

        // Edit task
        textInput.addEventListener("change", () => {
            tasks[index].text = textInput.value;
            saveTasks();
        });

        // Delete task
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        taskList.appendChild(div);
    });
}

addBtn.addEventListener("click",() => {
    const value = input.value.trim();
    if (value === "") return;

    tasks.push({ text: value, completed: false });
    saveTasks();
    renderTasks();

    input.value = "";
});

// Enter key support
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addBtn.click();
});

// Initial load
renderTasks();