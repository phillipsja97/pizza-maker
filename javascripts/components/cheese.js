import utilities from '../helpers/utilities.js';

const cheeses = [
{   id:'cheese1', 
    name:'swiss', 
    price:50,
},
{   id:'cheese2', 
    name:'mozzarella', 
    price:500,
},
{   id:'cheese3', 
    name:'white', 
    price: 5,
},
{   id:'cheese4', 
    name:'yellow', 
    price: 30,
}
];

const getSelectedCheeses = () => {
    const selectedCheeses = [];
    // get all cheese checkboxes
    const cheeseCheckboxes = document.getElementsByClassName('cheese');
    // keep the checked one in a new array
    for (let j=0; j < cheeseCheckboxes.length; j++) {
        for (let k=0; k < cheeses.length; k++) {
            if (cheeseCheckboxes[j].checked && cheeseCheckboxes[j].id === cheeses[k].id) {
                selectedCheeses.push(cheeses[k]);
            }
        }
    }
    // return the new array
    return selectedCheeses;
};

const cheeseCard = () => {
    let domString = '';
    for(let i=0; i < cheeses.length; i++) {
    
    domString += 
    `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
        <label class="form-check-label" for=${cheeses[i].id}>${cheeses[i].name}</label>
    </div>`;
}
    utilities.printToDom('cheeseCounter', domString);
};

export default { cheeseCard, getSelectedCheeses };
