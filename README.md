Client Task Tracking Dashboard
Internship Minor Project | Full Stack Web Development
April 07, 2026 - April 16, 2026

================================================================

PROJECT OVERVIEW

This project is a Task Tracking Dashboard built as part of the
Full Stack Web Development Internship. The goal was to build a
working web application that lets users manage their daily tasks
— adding, updating, deleting, and filtering them.

The data is fetched from JSON Server running on localhost:3000.
All CRUD operations — add, update, delete — are handled on the
frontend using JavaScript and the Fetch API. No real backend or
database is involved.

================================================================

FEATURES

- Add a new task with a title
- Mark a task as Completed or toggle it back to Pending
- Delete a task from the list
- Filter tasks by All, Pending, or Completed
- Input validation — empty title is not allowed
- Task data fetched from JSON Server using Fetch API

================================================================

TECH STACK

Technology          Purpose
-----------         --------------------------------
HTML5               Page structure and layout
CSS3                Custom styling for the UI
Bootstrap 5         Responsive grid and components
JavaScript (ES6)    DOM manipulation and app logic
Fetch API           Making HTTP requests to JSON Server
JSON Server         Mock backend running on localhost:3000

================================================================

PROJECT STRUCTURE

client-dashboard/
│
├── index.html          - Main HTML page
│
├── css/
│   └── style.css       - All custom styles
│
├── js/
│   ├── api.js          - All API fetch calls (GET, POST, PATCH, DELETE)
│   └── app.js          - All DOM logic and event handling
│
├── assets/             - Images or icons if any
│
├── db.json             - Local database file for JSON Server
│
└── README.md           - Project documentation

================================================================

HOW TO RUN LOCALLY

Step 1 — Clone or download the project folder to your computer.

Step 2 — Open the project folder in VS Code.

Step 3 — Open the terminal and run this command to start JSON Server:
         npx json-server --watch db.json --port 3000

Step 4 — Install the Live Server extension in VS Code
         if not already installed.

Step 5 — Right-click on index.html and select Open with Live Server.

Step 6 — The app will open in your browser automatically.
         Make sure JSON Server is running before opening the app.

Note: An internet connection is required on first load because
Bootstrap is loaded from CDN.

================================================================

DAY-WISE PROGRESS

Day 1 | 07 Apr 2026 | Project Setup
Created the project folder client-dashboard. Added all files —
index.html inside root, style.css inside css folder, api.js and
app.js inside js folder, db.json in root. Wrote basic HTML
skeleton — head, body, title tag.
Status: Done

---

Day 2 | 08 Apr 2026 | UI Layout
Added Bootstrap CDN link in index.html. Built the navbar at the
top, stats row showing total, pending and completed counts, the
add task form with input fields, and filter buttons. Made the
page responsive using Bootstrap grid.
Status: Done

---

Day 3 | 09 Apr 2026 | DOM Setup
Opened app.js and selected all required HTML elements using
getElementById and querySelector. Created empty variables —
taskList array to store tasks and activeFilter variable set to
"all". Wrote empty function definitions as placeholders.
Status: Done

---

Day 4 | 10 Apr 2026 | Task Rendering
Wrote the showTasks() function in app.js. Used createElement
to build each task card dynamically. Each card shows the title,
status badge, Mark Complete button and Delete button. Cards are
appended into the taskContainer div.
Status: Done

---

Day 5 | 11 Apr 2026 | API Integration
Wrote getAllTasks() function in api.js using fetch() to call
JSON Server at http://localhost:3000/tasks. Called this function
inside window.onload so tasks load automatically when the page
opens. Stored the result in the taskList array.
Status: Done

---

Day 6 | 12 Apr 2026 | Add Task
Wrote addTask() in api.js using POST method. Wrote submitTask()
in app.js which reads the input, validates that title is not
empty, creates a task object and sends it to JSON Server. After
saving, the new task is pushed into taskList and the list is
refreshed.
Status: Done

---

Day 7 | 13 Apr 2026 | Update Status
Wrote updateTaskStatus() in api.js using PATCH method. Wrote
toggleStatus() in app.js which flips the status between pending
and completed. Connected it to the Mark Complete button on each
task card. List re-renders after every status change.
Status: Done

---

Day 8 | 14 Apr 2026 | Delete Task
Wrote deleteTask() in api.js using DELETE method. Wrote
removeTask() in app.js which asks for confirmation first. After
the user confirms, the task is deleted from JSON Server and
removed from the taskList array. List re-renders after delete.
Status: Done

---

Day 9 | 15 Apr 2026 | Filter + UI Polish
Wrote filterTasks() function in app.js. Filter buttons now
highlight the active one and re-render only matching tasks.
Updated style.css — improved task card spacing, badge colors
for pending and completed, and made the layout look cleaner.
Status: Done

---

Day 10 | 16 Apr 2026 | Testing + Deploy
Tested all features manually — add, complete, delete, filter,
and validation. Fixed a bug where the filter was not resetting
to All after a new task was added. Deployed the project to
Netlify. Added live link and GitHub link to README.
Status: Done

================================================================

GIT COMMIT MESSAGES

Day 1  —  Initial project setup with basic HTML structure
Day 2  —  Added Bootstrap UI layout and task input form
Day 3  —  Implemented DOM selection and base JS setup
Day 4  —  Added dynamic task rendering using DOM
Day 5  —  Integrated API and fetched initial task data
Day 6  —  Implemented add task functionality with validation
Day 7  —  Added task status update functionality
Day 8  —  Implemented delete task functionality
Day 9  —  Added task filtering and improved UI
Day 10 —  Final testing, bug fixes, and project deployment

================================================================

API DETAILS

Mock API used   : JSON Server
Endpoint        : http://localhost:3000/tasks
db.json         : Local file that acts as the database

API calls made in api.js:

GET    /tasks         - Fetch all tasks on page load
POST   /tasks         - Add a new task
PATCH  /tasks/:id     - Update status of a task
DELETE /tasks/:id     - Delete a task

JSON Server reads and writes directly to db.json. All data
is saved locally and persists until the file is changed.

================================================================

WHAT I LEARNED

- How to structure a multi-file frontend project
- DOM manipulation — creating and updating elements with JavaScript
- Making API calls using Fetch API and handling responses
- Implementing CRUD operations with JSON Server
- Separating API logic (api.js) from UI logic (app.js)
- Form validation and handling user input
- Using Bootstrap to build a responsive layout quickly
- Writing meaningful Git commit messages day by day

================================================================

LINKS

Live Demo   : https://client-task-tracking-dashboard.vercel.app/
GitHub Repo : https://github.com/aayushgupta-4341/Client-Task-Tracking-Dashboard

================================================================

IMPORTANT NOTES

- This project uses JSON Server as a mock backend.
- JSON Server must be running on port 3000 before opening the app.
- All CRUD operations are handled via Fetch API calls to JSON Server.
- db.json acts as the local database — data is saved there.
- The project is intentionally kept simple — beginner level.

================================================================

Full Stack Web Development Internship | Minor Project | 2026
