const BASE_URL = "http://localhost:3000/tasks";

// GET all tasks
async function fetchTasks() {
    const res = await fetch(BASE_URL);
    return res.json();
}

// ADD task
async function createTask(task) {
    await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task)
    });
}

// UPDATE task
async function updateTask(id, updatedTask) {
    await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask)
    });
}

// DELETE task
async function removeTask(id) {
    await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
}