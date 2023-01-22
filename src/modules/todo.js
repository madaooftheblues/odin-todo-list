function createTodo(title, description, dueDate, priority, status = false) {
  return { title, description, dueDate, priority, status };
}

function toggleStatus(todo) {
  todo.status = !todo.status;
}

function setTitle(todo, title) {
  todo.title = title;
}

function setDescription(todo, des) {
  todo.description = des;
}

function setDueDate(todo, date) {
  todo.dueDate = date;
}

export { createTodo, toggleStatus, setDescription, setTitle, setDueDate };
