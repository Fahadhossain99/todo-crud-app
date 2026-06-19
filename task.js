import { Task } from "./db.js";
import { Op } from "sequelize";

export async function addTask(userId, title, description, dueDate, priority) {
  if (!title.trim()) {
    console.log("Task title cannot be empty");
    return;
  }

  const validPriorities = ["Low", "Medium", "High"];

  priority = priority.charAt(0).toUpperCase() + priority.slice(1).toLowerCase();

  if (!validPriorities.includes(priority)) {
    console.log("Priority must be Low, Medium, or High");
    return;
  }

  const task = await Task.create({
    userId,
    title,
    description,
    dueDate,
    priority,
    status: "Pending",
  });

  console.log("Task added successfully!");
  return task;
}

export async function viewTasks(userId) {
  const tasks = await Task.findAll({
    where: { userId },
  });

  if (tasks.length === 0) {
    console.log("No tasks found.");
    return;
  }

  console.log("\nYour Tasks:\n");

  tasks.forEach((task) => {
    console.log(`
ID: ${task.id}
Title: ${task.title}
Due Date: ${task.dueDate}
Priority: ${task.priority}
Status: ${task.status}
----------------------

`);
  });
}

export async function editTask(taskId, title, description, dueDate, priority) {
  if (isNaN(taskId)) {
    console.log("Invalid task ID.");
    return;
  }

  const task = await Task.findByPk(taskId);

  if (!task) {
    console.log("Task not found.");
    return;
  }

  const validPriorities = ["Low", "Medium", "High"];

  priority = priority.charAt(0).toUpperCase() + priority.slice(1).toLowerCase();

  if (!validPriorities.includes(priority)) {
    console.log("Invalid priority.");
    return;
  }

  await task.update({
    title,
    description,
    dueDate,
    priority,
  });

  console.log("Task updated successfully!");
}

export async function deleteTask(taskId) {
  if (isNaN(taskId)) {
    console.log("Invalid task ID.");
    return;
  }

  const task = await Task.findByPk(taskId);

  if (!task) {
    console.log("Task not found.");
    return;
  }

  await task.destroy();

  console.log("Task deleted successfully!");
}

export async function searchTasks(keyword, userId) {
  if (!keyword.trim()) {
    console.log("Search keyword cannot be empty.");
    return;
  }

  const tasks = await Task.findAll({
    where: {
      userId,
      [Op.or]: [
        {
          title: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          description: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ],
    },
  });

  if (tasks.length === 0) {
    console.log("No matching tasks found.");
    return;
  }

  console.log("\nSearch Results:\n");

  tasks.forEach((task) => {
    console.log(`
ID: ${task.id}
Title: ${task.title}
Due Date: ${task.dueDate}
Priority: ${task.priority}
Status: ${task.status}
----------------------

`);
  });
}
