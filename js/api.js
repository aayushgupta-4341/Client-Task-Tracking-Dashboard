// Using JSONPlaceholder as online mock API
// This works on Vercel because it is always online
var API_URL = "https://jsonplaceholder.typicode.com/todos";

// GET - fetch first 10 tasks on page load
function getAllTasks() {
  return fetch(API_URL + "?_limit=10").then(function(res) {
    return res.json();
  }).then(function(data) {
    // JSONPlaceholder returns "completed: true/false"
    // We convert it to "status: pending/completed" for our app
    return data.map(function(item) {
      return {
        id: item.id,
        title: item.title,
        description: "",
        status: item.completed ? "completed" : "pending"
      };
    });
  });
}

// POST - JSONPlaceholder accepts POST but does not save it
// We just return a fake saved task so our app logic works
function addTask(data) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(function(res) {
    return res.json();
  }).then(function(saved) {
    // Return the task with our format
    return {
      id: Date.now(),
      title: data.title,
      description: data.description,
      status: "pending"
    };
  });
}

// PATCH - JSONPlaceholder accepts but does not save
// We just resolve so our local array update works
function updateTaskStatus(id, status) {
  return fetch(API_URL + "/" + id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: status })
  }).then(function(res) {
    return res.json();
  });
}

// DELETE - JSONPlaceholder accepts but does not save
function deleteTask(id) {
  return fetch(API_URL + "/" + id, {
    method: "DELETE"
  });
}
