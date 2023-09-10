const dialogElm = document.getElementById('todo-dialog');
const closeButtonElement = document.getElementById('todo-cancel');

const todoDialog = {
  show() {
    dialogElm.showModal();
  },
  onSubmit(handleSubmit) {
    dialogElm.addEventListener('submit', handleSubmit);
  },
  close() {
    dialogElm.close();
  },
  getInput() {
    const titleElm = dialogElm.querySelector('#title-input');
    const descElm = dialogElm.querySelector('#description-input');
    const priorityElm = document.querySelector(
      'input[name="priority"]:checked'
    );
    const dueDateElm = dialogElm.querySelector('#duedate-input');

    const todo = {
      title: titleElm.value,
      description: descElm.value,
      priority: priorityElm.value,
      dueDate: dueDateElm.value
    };
    return todo;
  },
  populateInput(todo) {
    const titleElm = dialogElm.querySelector('#title-input');
    const descElm = dialogElm.querySelector('#description-input');
    const dueDateElm = dialogElm.querySelector('#duedate-input');
    const priorityElm = document.querySelectorAll('input[name="priority"]');

    titleElm.value = todo.title;
    descElm.value = todo.description;
    dueDateElm.value = todo.dueDate;
    priorityElm.forEach((pElm) => {
      if (pElm.value === todo.priority) pElm.checked = true;
    });
  },
  clearInput() {
    const titleElm = dialogElm.querySelector('#title-input');
    const descElm = dialogElm.querySelector('#description-input');
    const priorityElm = document.querySelector(
      'input[name="priority"]:checked'
    );
    const dueDateElm = dialogElm.querySelector('#duedate-input');
    const inputElms = [titleElm, descElm, dueDateElm];
    inputElms.forEach((elm) => {
      elm.value = '';
    });
    priorityElm.value = false;
  }
};

closeButtonElement.addEventListener('click', () => {
  todoDialog.close();
});

export default todoDialog;
