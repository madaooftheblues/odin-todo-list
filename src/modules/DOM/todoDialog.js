const dialogElm = document.getElementById('todo-dialog');
const closeButtonElement = document.getElementById('todo-cancel');

const todoDialog = {
  show() {
    dialogElm.showModal();
  },
  onSubmit(handleSubmit) {
    dialogElm.addEventListener('close', handleSubmit);
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
    priorityElm.checked = false;
  }
};

closeButtonElement.addEventListener('click', () => {
  todoDialog.close();
  todoDialog.clearInput();
});

export default todoDialog;
