export default () => {
  const data = JSON.parse(localStorage.getItem('todos'));
  let arrClear = data.filter(elem => elem.completed)
  arrClear.forEach(elem => {
    let index = data.indexOf(elem)
    data.splice(index, 1)
  })
  localStorage.setItem('todos', JSON.stringify(data))
}