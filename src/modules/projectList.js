import pubsub from './pubsub';

const projectList = {
  projects: [],
  currentProject: {},
  setCurrentProject(project) {
    projectList.currentProject = project;
  },
  addProject(project) {
    if (projectList.projectExists(project)) return;
    projectList.projects.push(project);

    pubsub.publish('projectListUpdated', projectList.projects);
  },
  removeProject(project) {
    const index = projectList.projects.findIndex(
      (x) => x.title === project.title
    );
    if (index !== -1) projectList.projects.splice(index, 1);
  },
  getProjectList() {
    return projectList.projects;
  },
  projectExists(project) {
    return projectList.projects.some((x) => x.title === project.title);
  }
};

export default projectList;