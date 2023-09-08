import pubsub from './modules/pubsub';
import './styles.css';
import render from './modules/render';
import todoDialog from './modules/DOM/todoDialog';
import projectList from './modules/projectList';
import ProjectList from './modules/DOM/ProjectList';
import newProject from './modules/DOM/newProject';
import { createTodo, toggleStatus } from './modules/todo';
import { addTodo, removeTodo } from './modules/todoList';
import populateProjects from './modules/populateProjects';
import menu from './modules/menu';

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
});
pubsub.subscribe('todoAdded', linkTodo);
pubsub.subscribe('itemSelected', renderItem);
pubsub.subscribe('itemSelected', (list) => {
  render.isProject = false;
  render.current = list;
});
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
  switch (item) {
    case 'today':
      render.list(projectList.getTodayTodos());
      break;
    case 'upcoming':
      render.list(projectList.getUpcomingTodos());
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
  const list = projectList.currentProject;
  addTodo(list, todo);
  render.project(projectList.currentProject);
}
