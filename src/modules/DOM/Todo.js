import pubsub from '../pubsub';

const Todo = (todo) => {
  const { title, description, dueDate } = todo;
  const todoElm = document.createElement('div');
  todoElm.classList.add('todo');

  const titleElm = document.createElement('h3');
  titleElm.classList.add('title');
  titleElm.innerText = title;

  const descriptionElm = document.createElement('p');
  descriptionElm.classList.add('description');
  descriptionElm.innerText = description;

  const dueDateElm = document.createElement('span');
  dueDateElm.classList.add('due-date');
  dueDateElm.innerText = dueDate;

  // const statusElm = document.createElement('input');
  // statusElm.setAttribute('type', 'checkbox');
  // statusElm.classList.add('status');
  // statusElm.checked = status;
  const headerElm = document.createElement('div');
  headerElm.classList.add('todo-header');

  headerElm.append(titleElm, dueDateElm);
  todoElm.append(headerElm, descriptionElm);

  pubsub.publish('todoClicked', todo);
  return todoElm;
};

export default Todo;
