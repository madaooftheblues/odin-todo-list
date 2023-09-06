import Todo from './Todo';
const Project = (title, list) => {
  const projectElm = document.createElement('div');
  projectElm.classList.add('project');
  const titleElm = document.createElement('h2');
  titleElm.classList.add('title');
  titleElm.innerText = title;
  if (list.length === 0) {
    const listEmptyElm = document.createElement('h3');
    listEmptyElm.textContent = 'list is empty.';
    projectElm.appendChild(titleElm);
    projectElm.appendChild(listEmptyElm);

    return projectElm;
  }
  const listElm = document.createElement('ul');
  listElm.classList.add('todo-list');

  list.forEach((todo, index) => {
    const todoElm = Todo(todo);
    const liElm = document.createElement('li');
    liElm.appendChild(todoElm);
    liElm.setAttribute('id', index);
    listElm.appendChild(liElm);
  });

  projectElm.appendChild(titleElm);
  projectElm.appendChild(listElm);

  return projectElm;
};

export default Project;
