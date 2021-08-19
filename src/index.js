import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

let inputField = document.querySelector('#inputField')
let todoList = document.querySelector('#todoList')

const todos= []
inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
  console.log(inputField.value)
  todos.push({description: inputField.value,
    completed: 0,
    index: todos.length + 1
  })
  localStorage.setItem('todos', JSON.stringify(todos))
  todoList.innerHTML = ''
  displayToDoList()
  inputField.value = ''
  }
})

function displayToDoList() {
  let data = localStorage.getItem('todos') 
  if (data) {
    JSON.parse(data).forEach(todo => {
      const li = document.createElement('li')
      li.classList.add('list-group-item')
      let text = `<div class="content" id="${todo.index}">  
			<div class="d-flex">
			<input class="form-check-input" type="checkbox" value="" ${todo.completed ? 'checked' : ''} id="defaultCheck1">
        <div class="description ${todo.completed ? 'checked' : ''}" contenteditable="${!todo.completed}">${todo.description}</div> 
			</div>
        <div  class="delete"><i class="fas fa-trash mt-2"></i></div>
       </div>`
      li.innerHTML = text
      todoList.appendChild(li)
      })
  }
 
}
displayToDoList()
