import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import completeTask from './checkbox'
import addTask from './addtodo'
const todoList = document.querySelector('#todoList');

const todos = [];

function displayToDoList() {
  let data = localStorage.getItem('todos') 
  if (data) {
    JSON.parse(data).forEach(todo => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    const text = `<div class="d-flex" id="${todo.index}">
    <input class="form-check-input" type="checkbox" value="" ${todo.completed ? 'checked' : ''} id="defaultCheck1"/>
          <div class="description flex-grow-1 ${todo.completed ? 'checked' : ''}" contenteditable="${!todo.completed}">${todo.description}</div>
          <i class="fas fa-trash delete mt-2 float-right"></i>
       </div>`;
    li.innerHTML = text;
    todoList.appendChild(li);
  });
}

  const checkboxesButtons = document.querySelectorAll('#defaultCheck1');
  checkboxesButtons.forEach((btn) => {
    btn.addEventListener('change', (e) => {
      completeTask(e)
    });
  });
}
displayToDoList();

inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && inputField.value ) {
    addTask(todos)
  todoList.innerHTML = ''
  displayToDoList()
  inputField.value = ''
  }
})