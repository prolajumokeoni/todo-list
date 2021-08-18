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
      let text = `<div id="${todo.index}">  
        <input class="form-check-input" type="checkbox" value="" ${todo.completed ? 'checked' : ''} id="defaultCheck1">
        <div class="description ${todo.completed ? 'checked' : ''}" contenteditable="${!todo.completed}">${todo.description}</div> 
          <button class="delete">Delete</button>
       </div>`
      li.innerHTML = text
      todoList.appendChild(li)
      })
  }
  
  const deleteButtons = document.querySelectorAll('.delete')
  deleteButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let data = localStorage.getItem('todos')
      let todoArrays = JSON.parse(data)
      const todoObject = todoArrays.find((x) => x.index == e.target.parentNode.id);
      todoArrays.splice(todoArrays.indexOf(todoObject), 1)
      localStorage.setItem('todos', JSON.stringify(todoArrays))
      todoList.innerHTML = ''
        displayToDoList()
    })
  })
  //editable
  const editButtons = document.querySelectorAll('.description')
  editButtons.forEach(btn => {
    btn.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        let data = localStorage.getItem('todos')
        let todoArrays = JSON.parse(data)
        const todoObject = todoArrays.find((x) => x.index == e.target.parentNode.id);
        let index = todoArrays.indexOf(todoObject)
         todoArrays[index].description = e.target.textContent
        localStorage.setItem('todos', JSON.stringify(todoArrays))
        todoList.innerHTML = ''
        displayToDoList()
      }
    })
  })
  // checkbox function
  const checkboxesButtons = document.querySelectorAll('#defaultCheck1')
  checkboxesButtons.forEach(btn => {
    btn.addEventListener('change', (e) => {
      let data = localStorage.getItem('todos')
      let todoArrays = JSON.parse(data)
      const todoObject = todoArrays.find((x) => x.index == e.target.parentNode.id);
      let index = todoArrays.indexOf(todoObject)
      if (!todoArrays[index].completed) {
        todoArrays[index].completed = 1
        e.target.parentNode.children[1].classList.add('checked')
        localStorage.setItem('todos', JSON.stringify(todoArrays))
      } 
      else {
        todoArrays[index].completed = 0
        e.target.parentNode.children[1].classList.remove('checked')
        localStorage.setItem('todos', JSON.stringify(todoArrays))
      }
    })
  })
}

displayToDoList()
