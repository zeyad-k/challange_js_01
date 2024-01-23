function addAlertMeOnClick(event,item) {
	console.log(event)
	console.log(event.target)
	console.log(event.currentTarget)
	// console.log(event.currentTarget.dataset.name)
	console.log(event.currentTarget.textContent);
	item.addEventListener('click',()=> 	alert('you added click me')
	)
 }

 const item = document.querySelector(".bio__objective")

 item.addEventListener('click',(event) =>addAlertMeOnClick(event,item))