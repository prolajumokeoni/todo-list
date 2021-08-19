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
    const text = `<div class="d-flex" id="${todo.index}">
    <input class="form-check-input" type="checkbox" value="" ${todo.completed ? 'checked' : ''} id="defaultCheck1"/>
          <div class="description flex-grow-1 ${todo.completed ? 'checked' : ''}" contenteditable="${!todo.completed}">${todo.description}</div>
          <i class="fas fa-trash delete mt-2 float-right"></i>
       </div>`;
    li.innerHTML = text;
    todoList.appendChild(li);
  });
  const checkboxesButtons = document.querySelectorAll('#defaultCheck1');
  checkboxesButtons.forEach((btn) => {
    btn.addEventListener('change', (e) => {
      const todoObject = todos.find((x) => x.index === e.target.parentNode.id);
      const index = todos.indexOf(todoObject);
      if (!todos[index].completed) {
        todos[index].completed = 1;
        e.target.parentNode.children[1].classList.add('checked');
      } else {
        todos[index].completed = 0;
        e.target.parentNode.children[1].classList.remove('checked');
      }
    });
  });
}
displayToDoList();
