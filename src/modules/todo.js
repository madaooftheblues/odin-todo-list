import { generateUniqueId } from './Helper/helper';

export function createTodo(
  title,
  description,
  dueDate,
  priority,
  status = false,
  parent = null
) {
  const id = generateUniqueId();
  return { id, title, description, dueDate, priority, status, parent };
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

export function setParent(todo, parent) {
  todo.parent = parent;
}
