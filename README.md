Client Task Tracking Dashboard
Internship Minor Project | Full Stack Web Development
April 07, 2026 - April 16, 2026

================================================================

PROJECT OVERVIEW

This project is a Task Tracking Dashboard built as part of the
Full Stack Web Development Internship. The goal was to build a
working web application that lets users manage their daily tasks
— adding, updating, deleting, and filtering them.

The data is fetched from a mock API (JSONPlaceholder) on page
load. After that, all CRUD operations are handled on the frontend
using JavaScript and the Fetch API. No real backend or database
is involved.

================================================================

FEATURES

- Add a new task with a title
- Mark a task as Completed or toggle it back to Pending
- Delete a task from the list
- Filter tasks by All, Pending, or Completed
- Input validation — empty title is not allowed
- Initial task data fetched from JSONPlaceholder API

================================================================

TECH STACK

Technology          Purpose
-----------         --------------------------------
HTML5               Page structure and layout
CSS3                Custom styling for the UI
Bootstrap 5         Responsive grid and components
JavaScript (ES6)    DOM manipulation and app logic
Fetch API           Making HTTP requests to the mock API
JSON Placeholder    Mock backend — no real server needed

================================================================

PROJECT STRUCTURE

task-dashboard/
    index.html       - Main HTML page
    style.css        - All custom styles
    script.js        - All JavaScript logic

================================================================

HOW TO RUN LOCALLY

Step 1 — Clone or download the project folder to your computer.
Step 2 — Open the project folder in VS Code.
Step 3 — Install the Live Server extension in VS Code.
Step 4 — Right-click on index.html and select Open with Live Server.
Step 5 — The app will open in your browser automatically.

Note: An internet connection is required on first load because
Bootstrap and JSONPlaceholder are loaded from CDN.

================================================================

DAY-WISE PROGRESS

Day 1 | 07 Apr 2026 | Project Setup
Created the project folder. Added index.html, style.css, and
script.js files. Wrote basic HTML skeleton — head, body, title.
Status: Done

---

Day 2 | 08 Apr 2026 | UI Layout
Added Bootstrap CDN. Built the navbar, input form, and filter
buttons layout. Made the page responsive for mobile screens.
Status: Done

---

Day 3 | 09 Apr 2026 | DOM Setup
Selected all required HTML elements using getElementById and
querySelector. Set up the basic JS file structure with empty
functions.
Status: Done

---

Day 4 | 10 Apr 2026 | Task Rendering
Wrote the displayTasks() function. Used innerHTML to dynamically
create task cards and inject them into the container div.
Status: Done

---

Day 5 | 11 Apr 2026 | API Integration
Used the Fetch API to call JSONPlaceholder
(https://jsonplaceholder.typicode.com/todos).
Loaded the first 10 tasks on page load.
Status: Done

---

Day 6 | 12 Apr 2026 | Add Task
Built the Add Task feature. Added input validation to check for
empty title. On submit, a new task object is created and added
to the list.
Status: Done

---

Day 7 | 13 Apr 2026 | Update Status
Added a Mark Complete button on each task card. Clicking it
toggles the task status between pending and completed and
re-renders the list.
Status: Done

---

Day 8 | 14 Apr 2026 | Delete Task
Added a Delete button on each card. On click, the task is
removed from the local array and the list is refreshed.
Status: Done

---

Day 9 | 15 Apr 2026 | Filter + UI Polish
Added All / Pending / Completed filter buttons. Clicking a filter
re-renders only matching tasks. Improved card styles and badge
colors.
Status: Done

---

Day 10 | 16 Apr 2026 | Testing + Deploy
Tested all features manually. Fixed a bug where the filter was
not resetting after adding a new task. Deployed to Netlify.
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

Mock API used: JSONPlaceholder
Endpoint: https://jsonplaceholder.typicode.com/todos?_limit=10

This is a free, public REST API used for testing and prototyping.
It returns fake task/todo data in JSON format. The GET request is
made on page load using the Fetch API inside script.js.

Since JSONPlaceholder does not save POST/PATCH/DELETE changes,
all add, update, and delete operations are managed in a local
JavaScript array on the frontend.

================================================================

WHAT I LEARNED

- How to structure a frontend project from scratch
- DOM manipulation — creating and updating elements with JavaScript
- Making API calls using the Fetch API and handling the response
- Implementing CRUD operations without a real backend
- Form validation and handling user input
- Using Bootstrap to make a responsive layout quickly
- Maintaining clean code with proper function separation
- Writing meaningful Git commit messages day by day

================================================================

LINKS

Live Demo   : (Add your Netlify or Vercel link here)
GitHub Repo : (Add your GitHub repository link here)

================================================================

IMPORTANT NOTES

- This project uses a mock API — no real backend or database.
- All CRUD operations are handled in the frontend JavaScript.
- Refreshing the page resets the task list to the API data.
- The project is intentionally kept simple — beginner level.

================================================================

Full Stack Web Development Internship | Minor Project | 2026
