
const skillsH2  = document.querySelector("#skills .h2-heading");

skillsH2.addEventListener('click',() =>{
	alert('you clicked me')
})

// ------------
function alertMeOnClick() {
   
	alert('you clicked me')
}
const elements = document.querySelectorAll('.clients__opinion');

	elements.forEach((element) => {
		element.addEventListener('click', alertMeOnClick )
	})
	// elements.forEach((element) => {
	// 	element.removeEventListener('click', alertMeOnClick )
	// })

// --------------
 function addAlertMeOnClick(item) {
	item.addEventListener('click',()=> 	alert('you added click me')
	)
 }
 const item = document.querySelector(".bio__heading")
 item.addEventListener('click',() =>addAlertMeOnClick(item))