export default (e) => {
  const data = localStorage.getItem('todos');
  const todoArrays = JSON.parse(data);
  const todoObject = todoArrays.find((x) => x.index === Number(e.target.parentNode.id));
  const index = todoArrays.indexOf(todoObject);
  if (!todoArrays[index].completed) {
    todoArrays[index].completed = 1;
    e.target.parentNode.children[1].classList.add('checked');
    localStorage.setItem('todos', JSON.stringify(todoArrays));
  } else {
    todoArrays[index].completed = 0;
    e.target.parentNode.children[1].classList.remove('checked');
    localStorage.setItem('todos', JSON.stringify(todoArrays));
  }
};