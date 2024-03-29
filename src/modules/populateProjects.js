import projectList from './projectList';
import { createTodoList, addTodo } from './todoList';
import { createTodo } from './todo';
import { date } from './Helper/helper';
const populateProjects = () => {
  const workout = createTodoList('workout');
  const leg = createTodo(
    'Leg day',
    'traditional squats and leg extension',
    date.nextWeek(),
    'med'
  );
  const backflip = createTodoList('learn backflip');
  const rollB = createTodo(
    'learn to roll backwards on ground',
    'perform 15 reps',
    date.currentDate(),
    'high'
  );
  const rollF = createTodo(
    'learn to roll forward on ground',
    'perform 15 reps',
    date.currentDate(),
    'high'
  );
  addTodo(workout, leg);
  addTodo(backflip, rollB);
  addTodo(backflip, rollF);
  projectList.addProject(workout);
  projectList.addProject(backflip);
};

export default populateProjects;
