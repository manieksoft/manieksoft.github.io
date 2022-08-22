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
        msg.textContent = 'Kolejne elementy będą ukazane na liście poniżej.';
    }
}

function removeElement() {
    let lastItem = list.lastChild;
    if (lastItem === null) {
        msg.textContent = 'Lista jest pusta. Dodaj elementy, by móc je usuwać.';
    } else {
        //lastItem.parentNode.removeChild(lastItem);
        lastItem.remove();
    }
}

addBtn.addEventListener('click', addElement);
delBtn.addEventListener('click', removeElement);