export default () => {
  const data = JSON.parse(localStorage.getItem('todos'));
  const arrClear = data.filter((elem) => elem.completed);
  arrClear.forEach((elem) => {
    const index = data.indexOf(elem);
    data.splice(index, 1);
  });
  localStorage.setItem('todos', JSON.stringify(data));
};