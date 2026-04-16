// Main file - all the UI logic is written here
// I am storing tasks in this array so I don't have to
// call the API every single time I need to show something

var taskList = [];

// This keeps track of which filter button is active
var activeFilter = "all";

// When the page loads, fetch all tasks from the server
window.onload = function() {
  loadAllTasks();
};

// Load Tasks from Server
function loadAllTasks() {
  getAllTasks()
    .then(function(tasks) {
      taskList = tasks;
      showTasks();
      updateCounts();
    })
    .catch(function() {
      alert("Could not connect to server. Please make sure JSON Server is running.");
    });
}

// Display Tasks on the Page
function showTasks() {
  var container = document.getElementById("taskContainer");
  container.innerHTML = "";

  // First filter the tasks based on which button is active
  var filteredTasks = [];

  if (activeFilter === "all") {
    filteredTasks = taskList;
  } else if (activeFilter === "pending") {
    filteredTasks = taskList.filter(function(task) {
      return task.status === "pending";
    });
  } else if (activeFilter === "completed") {
    filteredTasks = taskList.filter(function(task) {
      return task.status === "completed";
    });
  }

  // If nothing to show, display a simple message
  if (filteredTasks.length === 0) {
    container.innerHTML = '<p class="no-task-msg">No tasks found.</p>';
    return;
  }

  // Loop through filtered tasks and create a card for each one
  for (var i = 0; i < filteredTasks.length; i++) {
    var task = filteredTasks[i];
    var card = createTaskCard(task);
    container.appendChild(card);
  }
}

// Build a task card element and return it
function createTaskCard(task) {
  var card = document.createElement("div");
  card.className = "task-card";

  // If the task is completed, add an extra class for styling
  if (task.status === "completed") {
    card.classList.add("task-done");
  }

  // Set the label for the toggle button
  var toggleLabel = "Mark Complete";
  if (task.status === "completed") {
    toggleLabel = "Mark Pending";
  }

  card.innerHTML =
    '<div class="task-top">' +
      '<strong class="task-name">' + task.title + '</strong>' +
      '<span class="task-badge ' + task.status + '">' + task.status + '</span>' +
    '</div>' +
    '<p class="task-desc">' + (task.description || "") + '</p>' +
    '<div class="task-btns">' +
      '<button class="btn btn-sm btn-success" onclick="toggleStatus(\'' + task.id + '\', \'' + task.status + '\')">' + toggleLabel + '</button>' +
      '<button class="btn btn-sm btn-danger" onclick="removeTask(\'' + task.id + '\')">Delete</button>' +
    '</div>';

  return card;
}

// Add Task
function submitTask() {
  var titleInput = document.getElementById("titleInput");
  var descInput  = document.getElementById("descInput");
  var errorMsg   = document.getElementById("titleError");

  var title = titleInput.value.trim();
  var desc  = descInput.value.trim();

  // Check if title is empty - basic validation
  if (title === "") {
    errorMsg.style.display = "block";
    titleInput.focus();
    return;
  }

  errorMsg.style.display = "none";

  // Create the task object that will be sent to the server
  var newTask = {
    title: title,
    description: desc,
    status: "pending"
  };

  addTask(newTask)
    .then(function(savedTask) {
      // Push the saved task into our local array
      taskList.push(savedTask);

      // Clear the input fields
      titleInput.value = "";
      descInput.value  = "";

      // Refresh the list and update the count numbers
      showTasks();
      updateCounts();
    })
    .catch(function() {
      alert("Failed to add task. Please check if the server is running.");
    });
}

// Toggle Task Status
function toggleStatus(taskId, currentStatus) {
  // Flip the status
  var newStatus = "completed";
  if (currentStatus === "completed") {
    newStatus = "pending";
  }

  updateTaskStatus(taskId, newStatus)
    .then(function() {
      // Update the status in the local array as well
      for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].id == taskId) {
          taskList[i].status = newStatus;
          break;
        }
      }
      showTasks();
      updateCounts();
    })
    .catch(function() {
      alert("Could not update task status.");
    });
}

// Delete Task 
function removeTask(taskId) {
  var userConfirmed = window.confirm("Are you sure you want to delete this task?");
  if (!userConfirmed) return;

  deleteTask(taskId)
    .then(function() {
      // Remove the task from the local array manually
      var updatedList = [];
      for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].id != taskId) {
          updatedList.push(taskList[i]);
        }
      }
      taskList = updatedList;

      showTasks();
      updateCounts();
    })
    .catch(function() {
      alert("Could not delete the task.");
    });
}

// Filter Tasks
function filterTasks(filterType) {
  activeFilter = filterType;

  // Remove active class from all filter buttons
  var allButtons = document.querySelectorAll(".filter-btn");
  for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove("active");
  }

  // Add active class to the clicked button
  document.getElementById("btn-" + filterType).classList.add("active");

  // Re-render the task list
  showTasks();
}

// Update Count Numbers at the Top

function updateCounts() {
  var total     = taskList.length;
  var completed = 0;
  var pending   = 0;

  for (var i = 0; i < taskList.length; i++) {
    if (taskList[i].status === "completed") {
      completed = completed + 1;
    } else {
      pending = pending + 1;
    }
  }

  document.getElementById("totalCount").innerText     = total;
  document.getElementById("pendingCount").innerText   = pending;
  document.getElementById("completedCount").innerText = completed;
}
