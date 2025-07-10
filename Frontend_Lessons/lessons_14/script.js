const form = document.getElementById("add-book-form");

const books = [];

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.author.value);
  console.log(event.target.title.value);

  const newBook = {
    author: event.target.author.value,
    title: event.target.title.value,
  };
  books.push(newBook);
  console.log(books);
}

form.addEventListener("submit", handleSubmit);



function lateHappyBirthday() {
    setTimeout(() => {
      console.log(" Happy Birthday");
    }, 6000); 
  }
  
  lateHappyBirthday();


  let x = 12;
console.log(x);

x = 10;
console.log(x);
let myName;

setTimeout(() => {
  console.log("Hello 0 sec");
  myName = "Alisher";
}, 0);

console.log(myName);

// timers
setTimeout(() => {
  console.log("Hello 3 sec");
  console.log("Name: " + myName);
}, 3000);

console.log("Hello, no timer");

// Promise

// fullfilled
// rejected
// pending

const burgerPromise = new Promise(function (res, rej) {
    setTimeout(() => {
      // res("Burger");
      rej(new Error("Error: No bread!"));
    }, 5000);
  });
  
  console.log(burgerPromise); // Promise { <pending> }
  
  // setTimeout(() => {
  //   console.log(burgerPromise);
  // }, 6000);
  
  // then - можем получить значение без таймера -> fullfilled
  // catch - обработать ошибку - в случае reject -> rejected
  
  // Раскрыть промис без сет таймаут
  burgerPromise
    .then((burger) => {
      console.log(burger);
    })
    .catch((err) => {
      console.log(err);
    });