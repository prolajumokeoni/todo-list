import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const todoList = document.querySelector('#todoList');

const todos = [
  {
    description: 'Go to the cinema',
    index: 1,
    completed: 0,
  },
  {
    description: 'wash my hair',
    index: 2,
    completed: 0,
  },
  {
    description: 'sleep',
    index: 3,
    completed: 0,
  },
];

function displayToDoList() {
  todos.forEach((todo) => {
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
displayToDoList();
