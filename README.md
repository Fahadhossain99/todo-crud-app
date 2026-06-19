# 📝 TODO CRUD App (Node.js + MySQL)

## 📖 Project Summary

This project is a console-based Todo Management Application developed using **Node.js**, **MySQL**, and **Sequelize ORM**. The application allows users to create an account, log in securely, and manage their personal tasks efficiently through a command-line interface.

The main objective of this project is to demonstrate the implementation of **CRUD (Create, Read, Update, Delete)** operations with database integration while maintaining a simple and user-friendly workflow. Each registered user can manage their own tasks independently, ensuring that task data remains separated between different users.

The application includes user authentication, input validation, task searching functionality, and database persistence. All user and task information is stored in a MySQL database and managed through Sequelize ORM, eliminating the need for writing raw SQL queries for most operations.

This project was built as part of a software quality assurance and backend development learning exercise to gain practical experience with:
- Node.js application development
- MySQL database management
- Sequelize ORM
- User authentication
- CRUD operations
- Input validation
- Git and GitHub workflow

The system provides a complete task management workflow where users can register, log in, create tasks, view their task list, update existing tasks, delete unwanted tasks, search tasks by keywords, and log out securely.

---


## 🚀 Features

### User Management
- User Registration
- User Login
- User Logout
- Email Validation
- Password Validation
- Duplicate Email Check

### Task Management
- Add Task
- View All Tasks
- Edit Task
- Delete Task
- Search Tasks
- Task Priority Management
- Task Status Management

---

## 🛠 Technologies Used

- Node.js
- JavaScript (ES6 Modules)
- MySQL
- Sequelize ORM
- dotenv
- readline-sync

---
---

## 🗄 Database Tables

### Users Table

| Field | Type |
|---------|---------|
| id | INTEGER |
| name | STRING |
| email | STRING |
| password | STRING |

### Tasks Table

| Field | Type |
|---------|---------|
| id | INTEGER |
| userId | INTEGER |
| title | STRING |
| description | STRING |
| dueDate | DATE |
| priority | STRING |
| status | STRING |
| createdAt | DATE |
| updatedAt | DATE |

---
## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Fahadhossain99/todo-crud-app.git
```

### Go to Project Directory

```bash
cd todo-crud-app
```

### Install Dependencies

```bash
npm install
```

### Create .env File

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=your_database_name
DB_USER=root
DB_PASSWORD=your_password
```

### Run Application

```bash
node main.js
```

---

## 📋 Application Workflow

### Main Menu

```text
Welcome to Todo App

1. Register
2. Login
3. Exit
```

### After Login

```text
Todo Menu

1. Add Task
2. View Tasks
3. Edit Task
4. Delete Task
5. Search Tasks
6. Logout
```

---

## ✅ Validation Implemented

### Registration Validation
- Name cannot be empty
- Email must be valid
- Password must be at least 4 characters
- Duplicate email not allowed

### Task Validation
- Task title cannot be empty
- Priority must be Low, Medium, or High
- Task ID validation
- Search keyword validation

---
## 🎥 Project Demo Video

📹 [Watch Project Demo Video](https://drive.google.com/file/d/1wocWzYsZ1U1yX-5YWMQJuKmPWnW8k6E7/view?usp=sharing)

## 📸 Sample Features Demonstrated

- User Registration
- User Login
- Add Task
- View Tasks
- Edit Task
- Delete Task
- Search Tasks
- Logout

---

## 👨‍💻 Author

**Fahad Hossain**

Graduate Student, Computer Science & Engineering

Dhaka International University

---

## 📄 License

This project was developed for educational and assignment purposes.
