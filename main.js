import readline from "readline-sync";
import { initDB } from "./db.js";
import { register, login } from "./auth.js";
import {
  addTask,
  viewTasks,
  editTask,
  deleteTask,
  searchTasks,
} from "./task.js";

await initDB();

let currentUser = null;

while (true) {
  if (!currentUser) {
    console.log(`
========================
   WELCOME TO TODO APP
========================
1. Register
2. Login
3. Exit
`);

    const choice = readline.question("Enter choice: ");

    if (choice === "1") {
      const name = readline.question("Enter name: ");
      const email = readline.question("Enter email: ");
      const password = readline.question("Enter password: ");

      currentUser = await register(name, email, password);
    } else if (choice === "2") {
      const email = readline.question("Enter email: ");
      const password = readline.question("Enter password: ");

      currentUser = await login(email, password);
    } else if (choice === "3") {
      console.log("Goodbye!");
      break;
    } else {
      console.log("Invalid choice!");
    }
  } else {
    console.log(`
========================
      TODO MENU
========================
1. Add Task
2. View Tasks
3. Edit Task
4. Delete Task
5. Search Tasks
6. Logout
`);

    const choice = readline.question("Enter choice: ");

    if (choice === "1") {
      const title = readline.question("Title: ");
      const description = readline.question("Description: ");
      const dueDate = readline.question("Due Date: ");
      const priority = readline.question("Priority: ");

      await addTask(currentUser.id, title, description, dueDate, priority);
    } else if (choice === "2") {
      await viewTasks(currentUser.id);
    } else if (choice === "3") {
      const id = readline.question("Task ID: ");
      const title = readline.question("New Title: ");
      const description = readline.question("New Description: ");
      const dueDate = readline.question("New Due Date: ");
      const priority = readline.question("New Priority: ");

      await editTask(id, title, description, dueDate, priority);
    } else if (choice === "4") {
      const id = readline.question("Task ID: ");
      await deleteTask(id);
    } else if (choice === "5") {
      const keyword = readline.question("Search keyword: ");
      await searchTasks(keyword, currentUser.id);
    } else if (choice === "6") {
      currentUser = null;
      console.log("Logged out!");
    } else {
      console.log("Invalid choice!");
    }
  }
}
