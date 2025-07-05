/*### Задание: Список любимых книг

По аналогии с примером на лекции создайте небольшое приложение.

1. Сделайте форму с двумя полями:
   - Название книги
   - Имя автора

2. Ниже формы должен быть список, куда будут добавляться книги.

3. Когда пользователь заполняет форму и нажимает кнопку «Добавить», книга появляется в списке в таком формате:
   **"Гарри Поттер" от Джоан Роулинг**

4. Если такая книга уже есть в списке (название и автор совпадают — неважно, в каком регистре), показывайте `alert` с текстом:
   **"Эта книга уже в списке!"**

5. Добавьте кнопку **"Очистить список"**, которая полностью удаляет все книги из списка.

* доп. задание: в этот раз для отображения элементов итерируйтесь по массиву через map() и на каждой итерации создавайте элемент списка. Чтобы данные приходили из массива. 
** Для тестовых данных добавьте в исходный массив несколько книжек для отображения в самом начале до всех действий пользователя.

*/

let books = [];

const form = document.getElementById("whatTodo");
const titleInput = form.elements["title"]
const authorInput = form.elements["author"]
const bookList = document.getElementById("bookList")
const clearBtn =document.getElementById("clearBtn")

function renderBooks() {
bookList.innerHTML = "";

books.map((book) => {
const li = document.createElement("li")
li.textContent = `"${book.title}" by ${book.author}`;
bookList.appendChild(li);
});
}

 form.addEventListener("submit", function(e) {
   e.preventDefault();
 
   const title =titleInput.value.trim();
   const author=authorInput.value.trim();

   const exists = books.some(
      (book) => book.title.toLowerCase()=== title.toLowerCase() && book.author.toLowerCase() === author.toLowerCase()
   );

   if (exists) {
   alert("This book is already on the list!")
   return;
   }

   books.push({title, author});

   titleInput.value = "";
   authorInput.value= "";


clearBtn.addEventListener("click", function() {
   books = [];
   renderBooks();
});

renderBooks();

});