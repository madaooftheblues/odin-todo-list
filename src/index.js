import pubsub from './modules/pubsub';
import './styles.css';
import render from './modules/render';
import { date } from './modules/Helper/helper';
import todoDialog from './modules/DOM/todoDialog';
import projectList from './modules/projectList';
import ProjectList from './modules/DOM/ProjectList';
import newProject from './modules/DOM/newProject';
import { createTodo, toggleStatus } from './modules/todo';
import { addTodo, createTodoList, removeTodo } from './modules/todoList';
import populateProjects from './modules/populateProjects';
import menu from './modules/menu';
import home from './modules/home';

render.current = home;
render.list(render.current.todos);
const fab = document.getElementById('fab');

fab.addEventListener('click', todoDialog.show);

function handleTodoSubmit() {
  const input = todoDialog.getInput();
  const todo = createTodo(
    input.title,
    input.description,
    input.dueDate,
    input.priority
  );
  pubsub.publish('todoAdded', todo);
}

todoDialog.onSubmit(handleTodoSubmit);

pubsub.subscribe('projectAdded', projectList.addProject);
pubsub.subscribe('projectListUpdated', renderProjectList);
pubsub.subscribe('projectSelected', render.project);
pubsub.subscribe('projectSelected', projectList.setCurrentProject);
pubsub.subscribe('projectSelected', (proj) => {
  render.isProject = true;
  render.current = proj;
  fab.style = 'display:flex';
});
pubsub.subscribe('todoAdded', linkTodo);
pubsub.subscribe('itemSelected', renderItem);
pubsub.subscribe('todoTitleClicked', toggleStatus);
pubsub.subscribe('todoRemoveClicked', (todo) => {
  removeTodo(todo.parent, todo);
  if (render.isProject) return render.project(render.current);
  return renderItem(render.current);
});

populateProjects();
menu.bindEvents();
newProject.bindEvents();

function renderItem(item) {
  fab.style = 'display:none';
  render.isProject = false;

  switch (item) {
    case 'home':
      fab.style = 'display:flex';
      render.current = home;
      render.list(home.todos);
      break;
    case 'today':
      render.current = createTodoList('today');
      render.current.todos = home.todos
        .filter((todo) => date.isToday(todo.dueDate))
        .concat(projectList.getTodayTodos());
      render.list(render.current.todos);
      break;
    case 'upcoming':
      render.current = createTodoList('upcoming');
      render.list(
        home.todos
          .filter((todo) => date.isUpcoming(todo.dueDate))
          .concat(projectList.getUpcomingTodos())
      );
      break;
  }
}

function renderProjectList(list) {
  const projectsElm = document.getElementById('project-list');
  projectsElm.textContent = '';
  const projectListElm = ProjectList(list);
  projectListElm.addEventListener('click', (e) => {
    const liElm = e.target.closest('li');
    const index = liElm.getAttribute('id');
    pubsub.publish('projectSelected', projectList.projects[index]);
  });
  projectsElm.appendChild(projectListElm);
}

function linkTodo(todo) {
  const list = render.current;
  addTodo(list, todo);
  if (render.isProject) render.project(list);
  else render.list(list.todos);
}
