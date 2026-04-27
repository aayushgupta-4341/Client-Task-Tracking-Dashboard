# 🚀 Client Task Tracking Dashboard

**Internship Minor Project | Full Stack Web Development**
**Duration:** April 07, 2026 – April 16, 2026

---

## Project Overview

The **Client Task Tracking Dashboard** is a simple yet functional web application built during a Full Stack Web Development Internship.

The application allows users to efficiently manage daily tasks by performing core operations such as:

* Adding new tasks
* Updating task status
* Deleting tasks
* Filtering tasks based on status

This project uses **JSON Server as a mock backend**, meaning no real database or backend framework is involved. All operations are handled using the **Fetch API** on the frontend.

---

## Features

* Add new tasks with validation
* Toggle task status (Pending ↔ Completed)
* Delete tasks with confirmation
* Filter tasks (All / Pending / Completed)
* Input validation (prevents empty tasks)
* Fetch data from JSON Server

---

## 🛠️ Tech Stack

| Technology       | Purpose                  |
| ---------------- | ------------------------ |
| HTML5            | Structure                |
| CSS3             | Styling                  |
| Bootstrap 5      | Responsive UI            |
| JavaScript (ES6) | Logic & DOM manipulation |
| Fetch API        | API calls                |
| JSON Server      | Mock backend             |

---

## 📁 Project Structure

```
client-dashboard/
│
├── index.html          # Main HTML file
│
├── css/
│   └── style.css       # Custom styles
│
├── js/
│   ├── api.js          # API calls (CRUD)
│   └── app.js          # DOM logic & events
│
├── assets/             # Images/icons
│
├── db.json             # Local database
│
└── README.md           # Documentation
```

---

## ⚙️ Getting Started (Run Locally)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/aayushgupta-4341/Client-Task-Tracking-Dashboard.git
```

### 2️⃣ Navigate into the project

```bash
cd Client-Task-Tracking-Dashboard
```

### 3️⃣ Start JSON Server

```bash
npx json-server --watch db.json --port 3000
```

### 4️⃣ Run the frontend

* Open `index.html` using **Live Server** in VS Code

---

⚠️ **Important:**
Make sure JSON Server is running before opening the app.

---

## 🔌 API Details

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| GET    | /tasks     | Fetch all tasks    |
| POST   | /tasks     | Add new task       |
| PATCH  | /tasks/:id | Update task status |
| DELETE | /tasks/:id | Delete task        |

📍 Base URL: `http://localhost:3000/tasks`

---

## 📅 Development Timeline

| Day | Date   | Task                        |
| --- | ------ | --------------------------- |
| 1   | Apr 07 | Project setup               |
| 2   | Apr 08 | UI layout with Bootstrap    |
| 3   | Apr 09 | DOM setup                   |
| 4   | Apr 10 | Task rendering              |
| 5   | Apr 11 | API integration             |
| 6   | Apr 12 | Add task functionality      |
| 7   | Apr 13 | Update status               |
| 8   | Apr 14 | Delete task                 |
| 9   | Apr 15 | Filtering + UI improvements |
| 10  | Apr 16 | Testing & deployment        |

---

## 📦 Git Commit Highlights

* Initial project setup
* UI development using Bootstrap
* DOM manipulation implementation
* API integration using Fetch
* CRUD operations completed
* UI enhancements & filtering
* Final testing and deployment

---

## 📚 Key Learnings

* Structuring scalable frontend projects
* DOM manipulation using JavaScript
* Working with APIs using Fetch
* Implementing CRUD operations
* Code separation (API vs UI logic)
* Form validation techniques
* Responsive design with Bootstrap

---

## 🔗 Links

* 🌐 **Live Demo:**
  https://client-task-tracking-dashboard.vercel.app/

* 💻 **GitHub Repository:**
  https://github.com/aayushgupta-4341/Client-Task-Tracking-Dashboard

---

## ⚠️ Notes

* Uses **JSON Server (mock backend)**
* Requires **localhost:3000** to be active
* Data is stored in `db.json`
* Beginner-friendly project

---

## 📄 License

This project is developed for learning purposes as part of an internship.

---

## 👨‍💻 Author

**Aayush Gupta**
Full Stack Web Development Intern

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
