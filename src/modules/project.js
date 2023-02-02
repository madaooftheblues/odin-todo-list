function createProject(title, list) {
  return { title, list };
}

function setTitle(project, title) {
  project.title = title;
}

export { createProject, setTitle };
