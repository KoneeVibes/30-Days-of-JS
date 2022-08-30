const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    e.preventDefault();
    // collect the input value and put that in an object
    const textValue = (this.querySelector('[name = item]')).value;
    const item = {
        text : textValue,
        done: false,
    }
    items.push(item)

    // populate the list
    populateList(items, itemsList)

    // implementing local storage - note that local storage only stores strings, so we have to stringify our items object
    localStorage.setItem('items', JSON.stringify(items));

    // reset the input value
    this.reset();
    console.log(items)
}

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type = 'checkbox' data-index = ${i} id='item${i}' ${plate.done? 'checked': ''}/>
                <label for = 'item${i}'>${plate.text}</label>
            </li>
        `
    }).join('');
}

// function for event delegation
function toogleDone(e){
    if (!e.target.matches('input')) return
    // console.log(e)
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList)
}

// upon page load

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toogleDone)

populateList(items, itemsList)