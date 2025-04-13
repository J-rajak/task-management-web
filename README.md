# 🛡️ MERN Task Manager with JWT Authentication & MySQL

This is a full-stack web application built with the MERN stack (MySQL, Express, React, Node.js) that supports user authentication (JWT-based) and a simple task manager feature.

## 🚀 Features

- User Registration & Login (with bcrypt password hashing)
- JWT-based authentication
- Store JWT in HTTP-only cookie & `localStorage`
- Task Manager (Add, View, Delete)
- Secure access to tasks (only authenticated users)
- Responsive frontend UI using React and Bootstrap
- MySQL database integration via Sequelize ORM

---

## 🧰 Tech Stack

**Frontend:**
- React.js
- Axios
- React Router
- Bootstrap

**Backend:**
- Node.js
- Express
- Sequelize (MySQL)
- bcrypt
- jsonwebtoken
- cookie-parser
- dotenv

---

## 📦 Installation

### 1. Clone the Repository

git clone 
cd task-management-web

Installation

1. Clone the Repository

git clone https://github.com/J-rajak/task-management-web
cd task-management-web
cd backend
cd frontend

2. Install Dependencies

npm install

3. Run the React App

npm start

The app will run on:

http://localhost:5000(backend)
http://localhost:3000(frontend)


API Endpoints Used

GET /api/tasks – Fetch all tasks

POST /api/tasks – Create a task

POST /api/register – Register user

POST /api/login – Login user

DELETE /api/tasks/:id – Delete task
