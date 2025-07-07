let persons = [];

const formElement = document.getElementById("form");
const listElement = document.getElementById('person-list')
const clearBtnElement = document.getElementById('clear')
const clearOneBtnElement =document.getElementById('clear-one')

function clearList() {
    while (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
}
persons.length= 0;

}

function clearOne() {
    if (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
        persons.shift();

    }
}

function clearInputs(event) {
    event.target.nickname.value = '';
    event.target.place.value = '';
}


function changeStatus(event) {
    const li = event.target;
    if (li.style.textDecoration === 'line-through') {
        li.style.textDecoration = 'none'
    } else {
        li.style.textDecoration = 'line-through'
    }
}

formElement.addEventListener('submit', function(event) {
    event.preventDefault();


const person = {
    name: event.target.nickname.value,
    place: event.target.place.value
 };

 persons.push(person);

 const li = document.createElement('li');
 li.textContent = `${person.name} ${person.place}🥷🏼`;
 li.addEventListener('click', changeStatus);

listElement.appendChild(li);
clearInputs(event);

});

clearBtnElement.addEventListener('click', clearList);
clearOneBtnElement.addEventListener('click', clearOne);