// hear i will refactor my code 

const selectElement = (oldText) => {
    const elementSelector = document.querySelector(`[data-text="${oldText}"]`);
    if (!elementSelector) {
        throw new Error(`Element with data-text="${oldText}" not found`);
    }
    return elementSelector;
}

const changeInnerTextOfElement = (oldText, newText) => {
    const elementSelector = selectElement(oldText);
    elementSelector.innerText = newText;
}

try {
    changeInnerTextOfElement('redux', 'Nodejs');
    changeInnerTextOfElement('React testing library', 'Mongo DB');
} catch (error) {
    console.error(error.message);
}


function addNewSkill(afterSkill, newSkill, years) {
    const newElementAsString  = `
        <li class="skills__column">
            <h2 data-text="${newSkill}" class="skills__title">${newSkill}</h2>
            <span class="skills__years">${years} years</span>
        </li>
    `;

    const elementSelector = document.querySelector(`[data-text="${afterSkill}"]`);

    if (elementSelector) {
        elementSelector.insertAdjacentHTML('afterend', newElementAsString);
    } else {
        console.log('Element not found');
    }
}

addNewSkill('javascript', 'TypeScript', '2');

function removeElement(selector) {
    const element = document.querySelector(selector);
    if(element){
        element.remove();
    } else {
        console.log(`Element with selector "${selector}" not found`);
    }
}

removeElement('.find-out-link');