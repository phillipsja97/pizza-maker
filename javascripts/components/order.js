import utilities from '../helpers/utilities.js';
import cheese from './cheese.js';

const createFinalOrder = (items) => {
    let domString2 = '';
    for (let i = 0; i < items.length; i++) {
        domString2 += `<h2>${items[i].name}</h2>`
    }
    utilities.printToDom('finalOrder', domString2)
}

const createOrderEvent = () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    createFinalOrder(selectedCheeses);
};

const printOrderButton = () => {
    let domString = '<button id="order-button" class="btn btn-primary">Order!</button>'
    utilities.printToDom('finalOrder', domString);
    document.getElementById('order-button').addEventListener('click', createOrderEvent);
};



export default { printOrderButton };
