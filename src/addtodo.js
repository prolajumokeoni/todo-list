export default (todos, todo) => {
  todos.push({
    description: todo,
    completed: 0,
    index: todos.length + 1,
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};