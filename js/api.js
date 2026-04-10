// This file handles all the API calls
// I am using JSON Server as a fake backend running on port 3000

var API_URL = "http://localhost:3000/tasks";

// Get all tasks from the server
function getAllTasks() {
  return fetch(API_URL)
    .then(function(response) {
      return response.json();
    });
}

// Add a new task - sending data as POST request
function addTask(taskData) {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskData)
  }).then(function(response) {
    return response.json();
  });
}

// Update only the status field of a task using PATCH
function updateTaskStatus(taskId, newStatus) {
  return fetch(API_URL + "/" + taskId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status: newStatus })
  }).then(function(response) {
    return response.json();
  });
}

// Delete a task by its id
function deleteTask(taskId) {
  return fetch(API_URL + "/" + taskId, {
    method: "DELETE"
  });
}
