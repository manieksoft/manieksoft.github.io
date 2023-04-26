// Add and remove elements
const textInput = document.querySelector("#text-input");
const addBtn = document.querySelector("#add-button");
const delBtn = document.querySelector("#remove-button");

// Message
const msg = document.querySelector("#msg");

// Elements list
const section = document.querySelector("#preview");
const list = document.createElement("ol");
section.appendChild(list);

// Modal
const modal = document.querySelector("#myModal");
const modalCloseBtn = document.querySelector(".close");
const confirmBtn = document.querySelector("#confirm");
const rejectBtn = document.querySelector("#reject");

// Clicked element variable
let clickedElement;

// Add and remove element functions
function addElement() {
    if (textInput.value === "") {
        msg.textContent =
            "Nie podano wartości. Element nie został dodany do listy!";
    } else {
        let item = document.createElement("li");
        item.textContent = textInput.value;
        list.appendChild(item);
        textInput.value = "";
        msg.textContent =
            "Kolejne elementy będą ukazane na liście poniżej. Aby usunąć wybrany element, należy na nim kliknąć i potwierdzić operację.";
    }
}

function removeLastElement() {
    let lastItem = list.lastChild;
    if (lastItem === null) {
        msg.textContent = "Lista jest pusta. Dodaj elementy, by móc je usuwać.";
    } else {
        lastItem.remove();
    }
}

// Store and remove clicked element functions
function storeClickedElement(e) {
    clickedElement = e.target;
    console.log(clickedElement.textContent);
}

function removeElement() {
    clickedElement.remove();
    clickedElement = undefined;
    msg.textContent = "Wybrany element został usunięty!";
}

// Modal functions
function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

// Add and remove buttons events
addBtn.addEventListener("click", addElement);
delBtn.addEventListener("click", removeLastElement);

// Modal Events
modalCloseBtn.addEventListener("click", closeModal);
rejectBtn.addEventListener("click", closeModal);
confirmBtn.addEventListener("click", () => {
    closeModal();
    removeElement();
});

// Items list elements
list.addEventListener("click", (e) => {
    openModal();
    storeClickedElement(e);
});
