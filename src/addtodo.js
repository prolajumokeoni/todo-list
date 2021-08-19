export default (todos) => {
	todos.push({description: inputField.value,
    completed: 0,
    index: todos.length + 1
  })
  localStorage.setItem('todos', JSON.stringify(todos))
}