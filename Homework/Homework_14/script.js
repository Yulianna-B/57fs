/*📘 Задание 1 — Промис с рандомной ошибкой
Создайте Promise, который с одинаковой вероятностью (50/50):

либо возвращает строку "Best day of my life"
либо выбрасывает ошибку с сообщением "Something is off"
Затем обработайте результат с помощью .then() и .catch().
*/

const MyPromise = new Promise((resolve,reject) => {
const random = Math.random() 

if (random < 0.5) {
    resolve ("Best day of my life")
} else {
reject ("Something is off")
}

});

MyPromise
.then((result) => {
    console.log("The result is completed successfully:", result);
    })

  .catch((error) => {
    console.log("Something went wrong:", error);
    
});


/*📘 Задание:
Сделай Promise, который:
через 2 секунды возвращает "Done" (через resolve)
Обработай через .then() и выведи результат
💡 Подсказка: используем setTimeout
*/

const Promise2 = new Promise((resolve) => {
 setTimeout(() => {
        resolve("Done");
     },2000);
        
    });

    Promise2
    .then((newResult) => {
console.log("Result is fully implemented:", newResult);


    });