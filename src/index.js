import pubsub from './modules/pubsub';
import './styles.css';
import todoDialog from './modules/DOM/todoDialog';
import projectList from './modules/projectList';
import ProjectList from './modules/DOM/ProjectList';
import newProject from './modules/DOM/newProject';
import Project from './modules/DOM/Project';
import { createTodo } from './modules/todo';
import { addTodo } from './modules/todoList';

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
  pubsub.publish('projectUpdated');
}

todoDialog.onSubmit(handleTodoSubmit);

pubsub.subscribe('projectAdded', projectList.addProject);
pubsub.subscribe('projectListUpdated', renderProjectList);
pubsub.subscribe('projectSelected', renderProject);
pubsub.subscribe('projectSelected', projectList.setCurrentProject);
pubsub.subscribe('todoAdded', linkTodo);

newProject.bindEvents();

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

function renderProject(proj) {
  const mainElm = document.getElementById('current-list');
  const projectElm = Project(proj.title, proj.todos);
  mainElm.textContent = '';
  mainElm.appendChild(projectElm);
}

function linkTodo(todo) {
  const list = projectList.currentProject;
  addTodo(list, todo);
  renderProject(projectList.currentProject);
}
