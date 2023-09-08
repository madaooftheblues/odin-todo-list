import Project from './DOM/Project';
import Todo from './DOM/Todo';
const mainElm = document.getElementById('current-list');

const render = {
  isProject: false,
  current: null,
  project(proj) {
    const projectElm = Project(proj.title, proj.todos);
    mainElm.textContent = '';
    mainElm.appendChild(projectElm);
  },
  list(list) {
    const todosElm = list.map((todo) => Todo(todo));
    mainElm.textContent = '';
    todosElm.forEach((elm) => {
      mainElm.appendChild(elm);
    });
  }
};

export default render;
