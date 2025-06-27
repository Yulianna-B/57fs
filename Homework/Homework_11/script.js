// Homework

const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

//! 1.2 Создайте новый массив с джедаями младше 40 лет

const youngJedis = starWarsHeroes.filter((hero) => hero.age < 40);
console.log(youngJedis);

//! 1.3 Посчитайте возраст всех джедаев

const totalAge = starWarsHeroes
  .filter((hero) => hero.isJedi)
  .reduce((sumOfAges, hero) => sum + sumOfAges, 0);
console.log(totalAge);

//! 1.4 Повысьте возраст героев на 10 лет

const oldHeroes = starWarsHeroes.map((hero) => {
  age: hero.age + 10;
});
console.log(oldHeroes);

//!1.5 Создайте новый массив, где "Anakin Skywalker" заменен на:
//!`{ name: "Darth Vader", isJedi: false, age: 50 }`

const newArray = starWarsHeroes.map((hero) => {
  if (hero.name === "Anakin Skywalker") {
    return {
      name: "Darth Vader",
      age: 50,
      isJedi: false,
    };
  }
  return hero;
});
console.log(newArray);

/*!1.6 Создайте на основе старого массива новый массив объектов по образу:
`[{ name: "Luke Skywalker", isJedi: true }, { name: "Han Solo", isJedi: false }, ...]` */

const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

function selectNameandJedi(hero) {
  return {
    name: hero.name,
    isJedi: hero.isJedi,
  };
}
const UpdateArray = starWarsHeroes.map(selectNameandJedi);
console.log(UpdateArray);
