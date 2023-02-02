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

    const title = titleElm.value;
    const description = descElm.value;
    const priority = priorityElm.value;
    const dueDate = dueDateElm.value;

    return [title, description, dueDate, priority];
  }
};

closeButtonElement.addEventListener('click', todoDialog.close);

export default todoDialog;
