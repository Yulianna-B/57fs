/* Задание 1
Создайте массив из следующих элементов: "Семен", "Иван", "Петр", "Татьяна". Создайте еще один массив с возрастами: 18, 27, 74, 34; Создайте и заполните при помощи цикла этот новый массив новыми элементами по образу: "Семен 18 лет/годов"*/

let names = [ "Семен", "Иван", "Петр", "Татьяна"]
let age = [18, 27, 74, 34]

let result = []

for (let i = 0 ; i < names.length; i++) {
    result.push (`${names[i]} ${age [i]} лет`);
}
console.log(result);

/*Задание 2
Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности.*/


let reversed = result.reverse();
console.log(reversed);

/*
Задание 3
Создайте пустой массив fruits. добавьте в массив следующие фрукты: "яблоко", "банан", "апельсин". Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите fruits в консоль
*/

let fruits = []
fruits.push(apple)
fruits.push(banana)
fruits.push(orange)

let deleteOrange = fruits.pop()
fruits.unshift(deleteOrange)
console.log(fruits);

/*Задание 4
Объедините fruits с массивом veggies (в него добавьте строки овощи) через spread в массив fruitsAndVeggies Используя деструктуризацию заведите переменную под каждый элемент нового массива Выведите fruitsAndVeggies в консоль
*/

let fruits = ["apple", "banana", "orange"];
let veggies = ["tomato", "carrot" , "potato", "beet"]

let fruitsAndVeggies = [...fruits, ...veggies];

let [fruit1, fruit2, fruit3, veg1, veg2, veg3, veg4] = fruitsAndVeggies;

console.log(fruitsAndVeggies);
console.log(fruit1); 
console.log(veg1);   

