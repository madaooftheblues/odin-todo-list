import pubsub from '../pubsub';

const Todo = (todo) => {
  const { title, description, dueDate, priority, status } = todo;
  const todoElm = document.createElement('div');
  todoElm.classList.add('todo');
  status && todoElm.classList.add('completed');

  const priorityELm = document.createElement('div');
  priorityELm.classList.add('prio-box');
  priorityELm.classList.add(priority);

  const todoContent = document.createElement('div');
  todoContent.classList.add('todo-content');

  const titleElm = document.createElement('h3');
  titleElm.classList.add('title');
  titleElm.innerText = title;

  const descriptionElm = document.createElement('p');
  descriptionElm.classList.add('description');
  descriptionElm.innerText = description;

  const dueDateElm = document.createElement('span');
  dueDateElm.classList.add('due-date');
  dueDateElm.innerText = dueDate;

  const headerElm = document.createElement('div');
  headerElm.classList.add('todo-header');

  headerElm.append(titleElm, dueDateElm);
  todoContent.append(headerElm, descriptionElm);
  todoElm.append(priorityELm, todoContent);

  titleElm.addEventListener('click', () => {
    todoElm.classList.toggle('completed');
    pubsub.publish('todoTitleClicked', todo);
  });
  return todoElm;
};

export default Todo;
