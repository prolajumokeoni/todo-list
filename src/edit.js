export default (e) => {
  const data = localStorage.getItem('todos');
  const todoArrays = JSON.parse(data);
  const todoObject = todoArrays.find((x) => x.index === Number(e.target.parentNode.id));
  const index = todoArrays.indexOf(todoObject);
  todoArrays[index].description = e.target.textContent;
  localStorage.setItem('todos', JSON.stringify(todoArrays));
};