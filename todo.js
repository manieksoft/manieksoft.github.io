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
        item.textContent = textInput.value;
        list.appendChild(item);
        textInput.value = '';
        msg.textContent = 'Kolejne elementy będą ukazane na liście poniżej. Aby usunąć wybrany element, należy na nim kliknąć i potwierdzić operację.';
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

function removeElement(e) {
    this.removeChild(e.target);
    console.log('Element został usunięty!');
}

addBtn.addEventListener('click', addElement);
delBtn.addEventListener('click', removeLastElement);
list.addEventListener('click', openModal);

// Dodać modal, który otwiera się po kliknięciu w element listy i to na nim potwierdzamy usunięcie elementu.

// Trzeba po DOM cofnąć się do body, potem zejśc do section -> list i odnaleźć element do usunięcia

const modal = document.getElementById('myModal');
const modalBtn = document.getElementById('modalBtn');
const modalCloseBtn = document.getElementsByClassName('close')[0];
const confirmBtn = document.getElementById('confirm');
const rejectBtn = document.getElementById('reject');

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

modalBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

confirmBtn.addEventListener('click', closeModal);
confirmBtn.addEventListener('click', removeElement);

rejectBtn.addEventListener('click', closeModal);