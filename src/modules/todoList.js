export function createTodoList(title = 'untitled') {
  const todos = [];
  return { title, todos };
}

export function addTodo(list, todo) {
  todo.parent = list;
  list.todos.push(todo);
}

export function removeTodo(list, todo) {
  const index = list.todos.findIndex((x) => x.title === todo.title);
  if (index !== -1) list.todos.splice(index, 1);
}

export function clearList(list) {
  list.todos.length = 0;
}
