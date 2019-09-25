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

const cheeseCard = () => {
    let domString = '';
    for(let i=0; i < cheeses.length; i++) {
    
    domString += 
    `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="${cheeses[i].id}">
        <label class="form-check-label" for=${cheeses[i].id}>${cheeses[i].name}</label>
    </div>`;
}
    utilities.printToDom('cheeseCounter', domString);
};

export default { cheeseCard };
