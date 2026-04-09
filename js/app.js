let tasks = [];
let currentFilter = "all";

// Load tasks on page load
window.onload = async () => {
    tasks = await fetchTasks();
    displayTasks(tasks);
};

async function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Task cannot be empty!");
        return;
    }

    let newTask = {
        text: text,
        completed: false
    };

    await createTask(newTask);

    input.value = "";
    tasks = await fetchTasks();
    applyFilter();
}

function displayTasks(taskArray) {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    taskArray.forEach(task => {
        let li = document.createElement("li");

        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>

            <div>
                <button class="btn btn-sm btn-success" onclick="toggleTask(${task.id})">✔</button>
                <button class="btn btn-sm btn-danger" onclick="deleteTask(${task.id})">❌</button>
            </div>
        `;

        list.appendChild(li);
    });
}

async function toggleTask(id) {
    let task = tasks.find(t => t.id === id);
    task.completed = !task.completed;

    await updateTask(id, task);

    tasks = await fetchTasks();
    applyFilter();
}

async function deleteTask(id) {
    await removeTask(id);

    tasks = await fetchTasks();
    applyFilter();
}

function filterTasks(type) {
    currentFilter = type;
    applyFilter();
}

function applyFilter() {
    if (currentFilter === "all") {
        displayTasks(tasks);
    } else if (currentFilter === "pending") {
        displayTasks(tasks.filter(t => !t.completed));
    } else {
        displayTasks(tasks.filter(t => t.completed));
    }
}