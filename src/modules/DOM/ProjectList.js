const ProjectList = (list) => {
  const projectListElm = document.createElement('ul');
  projectListElm.classList.add('project-list');
  list.forEach((project, index) => {
    const projectElm = document.createElement('li');
    projectElm.innerText = project.title;
    projectElm.setAttribute('id', index);
    projectListElm.appendChild(projectElm);
  });

  return projectListElm;
};
export default ProjectList;
