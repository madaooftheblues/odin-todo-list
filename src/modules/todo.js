export function createTodo(
  title,
  description,
  dueDate,
  priority,
  status = false
) {
  return { title, description, dueDate, priority, status };
}

export function toggleStatus(todo) {
  todo.status = !todo.status;
}

export function setTitle(todo, title) {
  todo.title = title;
}

export function setDescription(todo, des) {
  todo.description = des;
}

export function setDueDate(todo, date) {
  todo.dueDate = date;
}
