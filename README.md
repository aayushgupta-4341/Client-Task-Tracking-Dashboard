# Client Task Tracking Dashboard

**Internship Minor Project | Full Stack Web Development**
**Duration:** 07 April 2026 – 16 April 2026

---

## Project Overview

This project is a **Task Tracking Dashboard** developed as part of a Full Stack Web Development Internship.

The goal was to build a simple and structured web application that allows users to efficiently manage daily tasks — including adding, updating, deleting, and filtering them.

On initial load, task data is fetched from a **mock API (JSONPlaceholder)**. All further operations (CRUD) are handled on the frontend using JavaScript, without any real backend or database.

---

## Features

* Add new tasks with input validation
* Update task status (Pending ↔ Completed)
* Delete tasks from the list
* Filter tasks (All / Pending / Completed)
* Fetch initial task data from API
* Responsive UI using Bootstrap

---

## 🛠️ Tech Stack

| Technology       | Purpose                              |
| ---------------- | ------------------------------------ |
| HTML5            | Structure of the application         |
| CSS3             | Styling and layout                   |
| Bootstrap 5      | Responsive design                    |
| JavaScript (ES6) | Application logic & DOM manipulation |
| Fetch API        | API integration                      |
| JSONPlaceholder  | Mock API for task data               |

---

## Project Structure

```
client-Task-Tracking-Dashboard/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── api.js
│   └── app.js
├── assets/
├── README.md
└── db.json
```

---

## ⚙️ How to Run Locally

1. Download or clone the repository
2. Open the folder in VS Code
3. Install **Live Server** extension (if not installed)
4. Right-click `index.html` → Open with Live Server

> ⚠️ Internet connection required (Bootstrap + API via CDN)

---

## 📆 Development Timeline

### Day 1 – Project Setup (07 April 2026)

* Initialized project structure
* Created HTML, CSS, and JS files
* Added basic HTML skeleton

**Commit:** `Initial project setup with basic HTML structure`

---

### Day 2 – UI Layout (08 April 2026)

* Integrated Bootstrap
* Built input form and filter buttons
* Ensured responsive layout

**Commit:** `Added Bootstrap UI layout and task input form`

---

### Day 3 – DOM Setup (09 April 2026)

* Selected elements using DOM methods
* Structured base JavaScript logic

**Commit:** `Implemented DOM selection and base JS setup`

---

### Day 4 – Task Rendering (10 April 2026)

* Created `displayTasks()` function
* Rendered tasks dynamically

**Commit:** `Added dynamic task rendering using DOM`

---

### Day 5 – API Integration (11 April 2026)

* Integrated Fetch API
* Loaded initial tasks from API

**API Endpoint:**
https://jsonplaceholder.typicode.com/todos?_limit=10

**Commit:** `Integrated API and fetched initial task data`

---

### Day 6 – Add Task (12 April 2026)

* Implemented Add Task functionality
* Added input validation

**Commit:** `Implemented add task functionality with validation`

---
### Day 7 – Update Task Status (13 April 2026)
* Added toggle functionality (Pending ↔ Completed)
* Updated UI dynamically

**Commit:** `Added task status update functionality`

---

### Day 8 – Delete Task (14 April 2026)
* Implemented delete functionality
* Updated UI after deletion

**Commit:** `Implemented delete task functionality`

---
### Day 9 – Filter & UI Improvements (15 April 2026)
* Added filter options (All / Pending / Completed)
* Improved UI styling

Commit: Added task filtering and improved UI
---

## API Details

* **API Used:** JSONPlaceholder
* **Endpoint:** https://jsonplaceholder.typicode.com/todos?_limit=10

This API provides mock task data for testing.
Since it does not persist changes, all CRUD operations are handled locally in JavaScript.

---

## Learning Outcomes

* DOM manipulation using JavaScript
* Implementing CRUD operations without backend
* Fetching and handling API data
* Form validation techniques
* Building responsive UI with Bootstrap
* Structuring a frontend project
* Maintaining clean Git commit history

---

## Live Demo

👉 (Add your deployment link here)

---

## GitHub Repository

https://github.com/aayushgupta-4341/Client-Task-Tracking-Dashboard.git

---

## Important Notes

* No real backend or database is used
* All operations are handled on frontend
* Data resets on page refresh
* Project focuses on frontend fundamentals

---

## Internship Context

This project was developed as part of a **Full Stack Web Development Internship (2026)** to simulate a real-world task management scenario using frontend technologies.

---
