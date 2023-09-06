import projectList from './projectList';
import { createTodoList, addTodo } from './todoList';
import { createTodo } from './todo';

const populateProjects = () => {
  const workout = createTodoList('workout');
  const bench = createTodo('benchpress', '', '2023-09-07', 'high');
  addTodo(workout, bench);

  projectList.addProject(workout);
};

export default populateProjects;
