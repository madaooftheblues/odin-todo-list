import './styles.css';
import todoDialog from './modules/DOM/todoDialog';
import { addTodo, createTodoList, printList } from './modules/todoList';
import { createTodo } from './modules/todo';

const fab = document.getElementById('fab');
const list = createTodoList();
fab.addEventListener('click', todoDialog.show);

function handleTodoSubmit() {
  const input = todoDialog.getInput();
  const todo = createTodo(...input);
  addTodo(list, todo);
  printList(list);
}

todoDialog.onSubmit(handleTodoSubmit);
