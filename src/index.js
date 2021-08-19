import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const inputField = document.querySelector('#inputField');
const todoList = document.querySelector('#todoList');

const todos = [
  {
    description: 'wash my hair',
    index: 1,
    completed: 0,
  },
  {
    description: 'sleep',
    index: 2,
    completed: 0,
  },
];
inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    todos.push({
      description: inputField.value,
      completed: 0,
      index: todos.length + 1,
    });
    localStorage.setItem('todos', JSON.stringify(todos));
    todoList.innerHTML = '';
    inputField.value = '';
  }
});

function displayToDoList() {
  const data = localStorage.getItem('todos');
  if (data) {
    JSON.parse(data).forEach((todo) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');
      const text = `<div class="content" id="${todo.index}"><div class="d-flex"><input class="form-check-input" type="checkbox" value="" ${todo.completed ? 'checked' : ''} id="defaultCheck1">
        <div class="description ${todo.completed ? 'checked' : ''}" contenteditable="${!todo.completed}">${todo.description}</div></div>
        <div  class="delete"><i class="fas fa-trash mt-2"></i></div>
       </div>`;
      li.innerHTML = text;
      todoList.appendChild(li);
    });
  }
}
displayToDoList();
