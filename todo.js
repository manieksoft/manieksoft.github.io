const textInput = document.getElementById('text-input');
const addBtn = document.getElementById('add-button');
const delBtn = document.getElementById('remove-button');

const msg = document.getElementById('msg');

const section = document.querySelector('section');

const list = document.createElement('ol');

section.appendChild(list);

function addElement() {
    if (textInput.value === '') {
        msg.textContent = 'Nie podano wartości. Element nie został dodany do listy!';
    } else {
        let item = document.createElement('li');
        item.textContent = textInput.value
        list.appendChild(item);
        textInput.value = '';
        msg.textContent = 'Kolejne elementy będą ukazane na liście poniżej. Aby usunąć wybrany element, należy na nim kliknąć.';
    }
}

function removeLastElement() {
    let lastItem = list.lastChild;
    if (lastItem === null) {
        msg.textContent = 'Lista jest pusta. Dodaj elementy, by móc je usuwać.';
    } else {
        //lastItem.parentNode.removeChild(lastItem);
        lastItem.remove();
    }
}

// Dodać modal, który otwiera się po kliknięciu w element listy i to na nim potwierdzamy usunięcie elementu.

function removeElement(e) {
    this.removeChild(e.target);
}

addBtn.addEventListener('click', addElement);
delBtn.addEventListener('click', removeLastElement);
list.addEventListener('click', removeElement);