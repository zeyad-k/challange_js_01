// mission_01 update js redux -> nodejs
// const reduxSelector = document.querySelector('[data-text=redux]');
// // console.log(reduxSelector.innerText)
// reduxSelector.innerText = 'Nodejs'
// //  console.log(reduxSelector.innerText)
const changeInnerTextOfElement = (oldText, newText) => {
    const elementSelector = document.querySelector(`[data-text="${oldText}"]`);
    if (elementSelector) {
        return elementSelector.innerText = newText;
    } else {
        return 'Element not found';
    }
}
changeInnerTextOfElement('redux', 'Node.js');
changeInnerTextOfElement('React testing library', 'MongoDB');



// mission_02 Add new skill Typescript-2years After JS
const newElementAsString  = `
    <li class="skills__column">
        <h2 data-text="TypeScript" class="skills__title">TypeScript</h2>
        <span class="skills__years">2 years</span>
    </li>
`;

const elementSelector = document.querySelector(`[data-text="javascript"]`);

if (elementSelector) {
    elementSelector.insertAdjacentHTML('afterend', newElementAsString);
} else {
    console.log('Element not found');
}



 // mission_03 remove downlod it element
function removeElement(selector) {
    const element = document.querySelector(selector);
    if(element){
        element.remove();
    } else {
        console.log(`Element with selector "${selector}" not found`);
    }
}
removeElement('.find-out-link');



// mission_04 personal image => width 36 rem
function updateAttrValue(selector) {
	const element = document.querySelector(selector);
	if(element){
		element.style.maxWidth = "36rem";
 
	} else {
		console.log(`Element with selector "${selector}" not found`);
	}
}
updateAttrValue('.bio__pic');




 
// mission_05 add underline if clicked any item on skills list
function updateAttrValue(selector, attr, value) {
    const elements = document.querySelectorAll(selector);
    if(elements.length){
        elements.forEach(element => {
                 element.style[attr] = value;
        });     
    } else {
        console.log(`Element with selector "${selector}" not found`);
    }
}

updateAttrValue('.skills__column', 'cursor', 'pointer');

function toggleClassOnClick(selector, className) {
    const elements = document.querySelectorAll(selector);
    if(elements.length){
        elements.forEach(element => {
            element.addEventListener('click', function() {
                // this.classList.toggle(className);
                const activeElement = document.querySelector('.' + className)
                if (activeElement) {
                    activeElement.classList.remove(className)
                }
                element.classList.add(className)
            });
        });
    } else {
        console.log(`Element with selector "${selector}" not found`);
    }
}

toggleClassOnClick(".skills__column", "underline");