export default (e) => {
		let data = localStorage.getItem('todos')
		let todoArrays = JSON.parse(data)
		const todoObject = todoArrays.find((x) => x.index == e.target.parentNode.id);
		let index = todoArrays.indexOf(todoObject)
		console.log(index)
		 todoArrays[index].description = e.target.textContent
		localStorage.setItem('todos', JSON.stringify(todoArrays))
};