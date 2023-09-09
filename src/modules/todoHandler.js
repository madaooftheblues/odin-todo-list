const todoHandler = {
  todo: null,
  isBeingEdited: false,
  pushForEdit(todo) {
    todoHandler.todo = todo;
    todoHandler.isBeingEdited = true;
  }
};

export default todoHandler;
