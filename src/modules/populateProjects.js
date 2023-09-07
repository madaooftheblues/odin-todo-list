import projectList from './projectList';
import { createTodoList, addTodo } from './todoList';
import { createTodo } from './todo';
import { date } from './Helper/helper';
const populateProjects = () => {
  const workout = createTodoList('workout');
  const bench = createTodo('benchpress', '', date.currentDate(), 'high');
  const backflip = createTodoList('learn backflip');
  const roll = createTodo(
    'learn to roll backwards on ground',
    '',
    date.nextWeek(),
    'high'
  );
  addTodo(workout, bench);
  addTodo(backflip, roll);
  projectList.addProject(workout);
  projectList.addProject(backflip);
};

export default populateProjects;
