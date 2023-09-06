import pubsub from '../pubsub';
import { createTodoList } from '../todoList';

const newProjectBtn = document.querySelector('#new-project-btn');
const projectInputCont = document.querySelector('.project-input-container');
const newProjectInput = projectInputCont.querySelector('#new-project-input');
const submitBtn = projectInputCont.querySelector('#submit-project');
const closeBtn = projectInputCont.querySelector('#cancel-project');

function addProject() {
  const title = getInput();
  if (title === '') return;
  clearInput();
  const project = createTodoList(title);
  pubsub.publish('projectAdded', project);
}

function getInput() {
  return newProjectInput.value;
}

function clearInput() {
  newProjectInput.value = '';
}

const newProject = {
  bindEvents() {
    newProjectBtn.addEventListener('click', function () {
      projectInputCont.classList.toggle('show');
    });

    closeBtn.addEventListener('click', function () {
      projectInputCont.classList.remove('show');
    });

    newProjectInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') addProject();
    });
    submitBtn.addEventListener('click', addProject);
  }
};

export default newProject;
