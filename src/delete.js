export default (e) => {
  const data = localStorage.getItem('todos');
  const todoArrays = JSON.parse(data);
  const todoObject = todoArrays.find((x) => x.index === Number(e.target.parentNode.id));
  todoArrays.splice(todoArrays.indexOf(todoObject), 1);
  localStorage.setItem('todos', JSON.stringify(todoArrays));
};