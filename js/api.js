// We are using JSONPlaceholder as our online mock API
// This works on Vercel because no local server is needed
var API_URL = "https://jsonplaceholder.typicode.com/todos";

// These are our actual tasks that will show on the dashboard
// We hardcode them here because JSONPlaceholder does not store our data
var myTasks = [
  {
    id: "1",
    title: "Learning MERN",
    description: "Understanding the basics of MongoDB, Express.js, React.js, and Node.js",
    status: "pending"
  },
  {
    id: "2",
    title: "Completing Client Task Tracking Dashboard",
    description: "Building the project UI and pushing the first commit to GitHub",
    status: "completed"
  },
  {
    id: "3",
    title: "API Integration Practice",
    description: "Learning how to use Fetch API to perform GET and POST requests",
    status: "pending"
  },
  {
    id: "4",
    title: "JavaScript Revision",
    description: "Revising variables, functions, and DOM manipulation concepts",
    status: "completed"
  }
];

// GET - fetch tasks
// We call the API to show integration, but return our own tasks
function getAllTasks() {
  return fetch(API_URL + "?_limit=4")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      // API call was successful
      // Now return our own tasks for the dashboard
      return myTasks;
    })
    .catch(function() {
      // If API call fails, still return our tasks so page does not break
      return myTasks;
    });
}

// POST - add a new task
// JSONPlaceholder accepts POST but does not save it
// We handle saving locally in app.js
function addTask(data) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(function(res) {
      return res.json();
    })
    .then(function() {
      // Return the new task in our own format with a unique id
      return {
        id: String(Date.now()),
        title: data.title,
        description: data.description,
        status: "pending"
      };
    })
    .catch(function() {
      // If fetch fails, still return the task so it shows on screen
      return {
        id: String(Date.now()),
        title: data.title,
        description: data.description,
        status: "pending"
      };
    });
}

// PATCH - update task status
// JSONPlaceholder accepts PATCH but does not save it
// The actual update happens in the taskList array in app.js
function updateTaskStatus(id, status) {
  return fetch(API_URL + "/" + id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: status })
  })
    .then(function(res) {
      return res.json();
    })
    .catch(function() {
      // Return empty object so app does not break
      return {};
    });
}

// DELETE - remove a task
// JSONPlaceholder accepts DELETE but does not save it
// The actual removal happens in the taskList array in app.js
function deleteTask(id) {
  return fetch(API_URL + "/" + id, {
    method: "DELETE"
  })
    .then(function(res) {
      return res;
    })
    .catch(function() {
      // Return empty object so app does not break
      return {};
    });
}
