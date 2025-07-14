function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    //fetch — это встроенная функция JavaScript,
    // используемая для выполнения HTTP-запросов.
    // В данном случае она отправляет GET-запрос
    // на URL https://jsonplaceholder.typicode.com/users,
    // чтобы получить список пользователей.
    .then(response=>{
        if(response.status !=200){
            throw new Error ("Error");
        }
        return response.json();

       //После получения ответа (resp) проверяется его статус.
        // Если статус не равен 200, что означает успешный запрос,
        // выбрасывается ошибка. Если всё в порядке,
        // данные преобразуются из формата JSON в объект JavaScript с помощью resp.json()
    })
    // Обработка данных
    .then(json =>{
        const result = document.getElementById("content")
        result.innerHTML = ""; //очищаем содержимое перед обновлением данных
        const userList = document.createElement("ul")
        json.forEach(element => {
            const listItem =document.createElement('li')
            listItem.textContent = user.name;
            userList.appendChild(listItem)
             });
             result.appendChild(userList)
    })
    .catch((error)=> {
        console.error(error)
         });

}
document.getElementById("updateButton").addEventListener('click', fetchData)