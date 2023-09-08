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

  const headerRightElm = document.createElement('div');
  headerRightElm.classList.add('todo-header-right');

  const dueDateElm = document.createElement('span');
  dueDateElm.classList.add('due-date');
  dueDateElm.innerText = dueDate;

  const removeElm = document.createElement('button');
  removeElm.classList.add('todo-remove');
  removeElm.innerText = 'X';

  const headerElm = document.createElement('div');
  headerElm.classList.add('todo-header');

  headerRightElm.append(dueDateElm, removeElm);
  headerElm.append(titleElm, headerRightElm);
  todoContent.append(headerElm, descriptionElm);
  todoElm.append(priorityELm, todoContent);

  removeElm.onclick = () => {
    pubsub.publish('todoRemoveClicked', todo);
  };

  titleElm.addEventListener('click', () => {
    todoElm.classList.toggle('completed');
    pubsub.publish('todoTitleClicked', todo);
  });
  return todoElm;
};

export default Todo;
