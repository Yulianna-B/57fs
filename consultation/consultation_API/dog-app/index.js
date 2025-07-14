const dogImageElement = document.getElementById("dog-image")
const newDogButton = document.getElementById("new-dog-button")

function fetchNewDogImage(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=>response.json())
    .then((obj)=> {
        const {message} = obj;
        dogImageElement.src = message
    }) 
}
fetchNewDogImage();
newDogButton.addEventListener("click", fetchNewDogImage)