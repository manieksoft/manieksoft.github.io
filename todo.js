// Dodawanie i usuwanie elementów

const textInput = document.getElementById('text-input');
const addBtn = document.getElementById('add-button');
const delBtn = document.getElementById('remove-button');

// Komunikat

const msg = document.getElementById('msg');

// Lista elementów

const section = document.querySelector('section');
const list = document.createElement('ol');
section.appendChild(list);

// Modal

const modal = document.getElementById('myModal');
const modalBtn = document.getElementById('modalBtn');
const modalCloseBtn = document.getElementsByClassName('close')[0];
const confirmBtn = document.getElementById('confirm');
const rejectBtn = document.getElementById('reject');

// Kliknięty element

let clickedElement;

// Funkcje dodawania i usuwania elementu

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

// Funkcje przechowywania i usuwania wybranego elementu

function storeClickedElement(e) {
    clickedElement = e.target;
    console.log(clickedElement.textContent);
}

function removeElement() {
    //clickedElement.parentNode.removeChild(clickedElement);
    clickedElement.remove();
    msg.textContent = 'Wybrany element został usunięty!';
}

// Funkcje modala

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

// Eventy dla przycisków dodawania i usuwania elementu

addBtn.addEventListener('click', addElement);
delBtn.addEventListener('click', removeLastElement);

// Eventy dla modala

modalBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
confirmBtn.addEventListener('click', closeModal);
confirmBtn.addEventListener('click', removeElement);
rejectBtn.addEventListener('click', closeModal);

// Eventy dla listy

// list.addEventListener('click', openModal);
// list.addEventListener('click', storeClickedElement);

list.addEventListener('click', (e) => {
    openModal();
    storeClickedElement(e);
})