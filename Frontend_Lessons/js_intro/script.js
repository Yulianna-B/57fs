/*  Переменная в JS - это которую модна положить что угодно, а потом использовать (текст, число и  тд)
let - чаще всего используют можно переопределять значения (то есть можно менять значение заложенное в переменной)

ПРИМЕР */

let myname = "Yulianna"
console.log(myname);

// ! так же создать переменную можна со слова  const -  это константа, ее нельзя менять после создания.
// Пример 
 
const city = "Leipzig"
 city= Berlin  //! это будет ошибкаазначение все равно будет Leipzig
console.log(city);

// ! var - старый способ создать переменную , лучше не использовать сейчас пишут в основном let или const 

var age = 23
console.log(age);


// ! ТИПЫ ДАННЫХ в JS

/* 
String -  строка (текст) - "привет всем" (всегда пишут в кавычках)
Number - число - 23 ,17, 107
boolean - логическре значение - true (правда) или false (ложь)
null - пусто (намеренно) - let x = null 
Undefined - не задано - let y -> по умолчанию Undefined 
Oбьект - { name: "Юля" , age: 23}
Array - Массив(список) - let Fruits= [pineapple, banana, peach, apple] - всегда пишется в квадратных скобках!!!
Symbol - символ (редко нужен) - Symbol("id")
Bigint - большие числа 133568788900n 
*/

// ! Как узнать тип переменной? при поможи слова - typeof
// Пример 

let name1 = "Sasha"
console.log(typeof name1);

// ! ЧТО ТАКОЕ МАССИВ 
// Массив - это список или коробка в которой много знанчений всегда пишется в [ ] 

let Fruits = [pineapple, banana, peach, apple] // тут всего четыре элемента в програмированииий первый элемент находится под индексом 0 !!!
console.log(Fruits);


// ! Методы работы с массивами (действия с массивами)

//! 🔹 ДОБАВЛЕНИЕ / УДАЛЕНИЕ ЭЛЕМЕНТОВ 

// .push() – добавляет элемент в конец массива – fruits.push("апельсин");

// .pop() – удаляет последний элемент массива – fruits.pop();

// .unshift() – добавляет элемент в начало массива – fruits.unshift("ананас");

// .shift() – удаляет первый элемент массива – fruits.shift();

// .splice() – удаляет/заменяет/добавляет элементы (меняет оригинальный массив) – fruits.splice(1, 1, "киви");

// .fill() – заполняет массив одинаковыми значениями – new Array(3).fill("яблоко");

//! 🔹 ДОСТУП / ИЗВЛЕЧЕНИЕ */

// .length – возвращает количество элементов – fruits.length;

// .at() – возвращает элемент по индексу, поддерживает отрицательные индексы – fruits.at(-1);

// ! 🔹 ПОИСК И ПРОВЕРКА */

// .includes() – проверяет, есть ли такой элемент – fruits.includes("банан");

// .indexOf() – возвращает индекс элемента – fruits.indexOf("груша");

// .find() – возвращает первый элемент, подходящий по условию – fruits.find(fruit => fruit.startsWith("б"));

// .findIndex() – возвращает индекс первого элемента, подходящего по условию – fruits.findIndex(fruit => fruit === "киви");

// .every() – проверяет, соответствуют ли все элементы условию – numbers.every(num => num > 0);

// .some() – проверяет, соответствует ли хотя бы один элемент – numbers.some(num => num > 100);

// ! 🔹 ПЕРЕБОР И ПРЕОБРАЗОВАНИЕ */

// .forEach() – перебирает каждый элемент и выполняет действие – fruits.forEach(fruit => console.log(fruit));

// .map() – создаёт новый массив, изменяя каждый элемент – fruits.map(fruit => fruit.toUpperCase());

// .filter() – создаёт новый массив, оставляя только подходящие элементы – fruits.filter(fruit => fruit.length > 5);

// .flatMap() – применяет функцию и делает плоский массив – [1, 2, 3].flatMap(x => [x, x * 2]);

// .reduce() – сводит все элементы к одному значению (например, сумму) – numbers.reduce((acc, num) => acc + num, 0);

//! 🔹 ИЗВЛЕЧЕНИЕ И КОПИРОВАНИЕ */

// .slice() – копирует часть массива, не меняет оригинал – fruits.slice(0, 2);

// .copyWithin() – копирует часть массива внутрь этого же массива – [1, 2, 3, 4].copyWithin(1, 2); // [1, 3, 4, 4]

// ! 🔹 СОРТИРОВКА И ИЗМЕНЕНИЕ ПОРЯДКА */

// .sort() – сортирует массив (по алфавиту или числам) – numbers.sort((a, b) => a - b);

// .reverse() – переворачивает порядок элементов – fruits.reverse();

// ! 🔹 ОБЪЕДИНЕНИЕ И ПРЕОБРАЗОВАНИЕ В СТРОКУ */

// .concat() – объединяет два массива – fruits.concat(["персик", "манго"]);

// .join() – превращает массив в строку с разделителем – fruits.join(", ");

// .toString() – превращает массив в строку – fruits.toString(); // "яблоко,банан"

// ! 🔹 ПРОВЕРКА ТИПА */

// Array.isArray() – проверяет, массив ли это – Array.isArray(fruits); // true



/*
  ===== ЧТО ТАКОЕ DOM? =====

  DOM (Document Object Model) — это объектная модель документа,
  которая представляет HTML-страницу в виде дерева элементов (узлов).
  Каждый тег, текст и атрибут — это объект, к которому можно обращаться
  и менять его через JavaScript.

  С помощью DOM мы можем:
  - НАХОДИТЬ ЭЛЕМЕНТЫ НА СТРАНИЦЕ,
  - МЕНЯТЬ ИХ СОДЕРЖИМОЕ И СТИЛИ,
  - РЕАГИРОВАТЬ НА ДЕЙСТВИЯ ПОЛЬЗОВАТЕЛЯ (КЛИКИ, ВВОД И Т.Д.),
  - СОЗДАВАТЬ И УДАЛЯТЬ ЭЛЕМЕНТЫ ДИНАМИЧЕСКИ.

  DOM — это мост между твоим кодом JS и видимой страницей в браузере.
*/

/* ===== ОСНОВНЫЕ МЕТОДЫ И СВОЙСТВА DOM С ПРИМЕРАМИ ===== */

// ! 1. ПОИСК ЭЛЕМЕНТОВ

// ! getElementById(id) — ищет элемент по ID
const elemById = document.getElementById("myId"); 
// пример: <div id="myId"></div>

// ! querySelector(selector) — ищет первый элемент по CSS-селектору
const firstElem = document.querySelector(".myClass"); 
// пример: <div class="myClass"></div>

// ! querySelectorAll(selector) — ищет все элементы по CSS-селектору
const allElems = document.querySelectorAll("p"); 
// пример: <p></p><p></p>

// ! getElementsByClassName(className) — возвращает коллекцию элементов с классом
const elemsByClass = document.getElementsByClassName("item"); 
// пример: <div class="item"></div>

// ! getElementsByTagName(tagName) — возвращает коллекцию элементов по тегу
const elemsByTag = document.getElementsByTagName("div"); 
// пример: <div></div>

// 2. РАБОТА С СОДЕРЖИМЫМ

// ! textContent — получает или задаёт текст внутри элемента (без HTML)
elemById.textContent = "Привет!"; 
// изменит содержимое <div id="myId"></div> на текст "Привет!"

// ! innerHTML — получает или задаёт HTML-код внутри элемента
elemById.innerHTML = "<b>Жирный текст</b>"; 
// изменит содержимое, вставив HTML-тег <b>

// ! value — получает или задаёт значение для input, textarea
const input = document.querySelector("input");
input.value = "Текст для input";

// 3. РАБОТА СО СТИЛЯМИ И КЛАССАМИ

// ! style.property — изменяет CSS-свойство элемента
elemById.style.color = "red"; 
// сделает текст красным

// ! classList.add(className) — добавляет класс элементу
elemById.classList.add("active"); 

// ! classList.remove(className) — удаляет класс у элемента
elemById.classList.remove("hidden"); 

// ! classList.toggle(className) — переключает класс (если есть — убирает, если нет — добавляет)
elemById.classList.toggle("open"); 

// ! classList.contains(className) — проверяет наличие класса, возвращает true/false
const hasClass = elemById.classList.contains("active"); 

// 4. ОБРАБОТКА СОБЫТИЙ

// ! addEventListener(event, handler) — добавляет обработчик события
elemById.addEventListener("click", () => {
  console.log("Клик по элементу!");
});

// ! onclick — альтернативный способ назначить обработчик события
elemById.onclick = function() {
  alert("Элемент был кликнут!");
};

// 5. СОЗДАНИЕ И ВСТАВКА ЭЛЕМЕНТОВ

// ! createElement(tagName) — создаёт новый элемент
const newDiv = document.createElement("div");

// ! appendChild(child) — добавляет дочерний элемент в конец родителя
document.body.appendChild(newDiv);

// ! prepend(child) — добавляет дочерний элемент в начало родителя
document.body.prepend(newDiv);

// ! remove() — удаляет элемент из DOM
newDiv.remove();

// 6. НАВИГАЦИЯ ПО DOM

// ! parentElement — родительский элемент
const parent = elemById.parentElement;

// ! children — коллекция дочерних элементов
const children = elemById.children;

// ! firstElementChild — первый дочерний элемент
const firstChild = elemById.firstElementChild;

// ! nextElementSibling — следующий соседний элемент
const nextSibling = elemById.nextElementSibling;

// ===== ПРИМЕР НА ПРАКТИКЕ =====

const nameInput = document.getElementById("nameInput");
const sayHelloBtn = document.getElementById("sayHelloBtn");
const output = document.getElementById("output");

sayHelloBtn.addEventListener("click", () => {
  const name = nameInput.value;
  output.textContent = `Привет, ${name}!`;
});
