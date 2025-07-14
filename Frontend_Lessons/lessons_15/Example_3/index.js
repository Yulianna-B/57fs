const productsList = document.getElementById("products-list")

fetch("https://api.escuelajs.co/api/v1/products").then((res) => res.json())
.then((products) => {
    console.log(products);

    products.forEach((products)=> {
        const productItem = document.createElement("li")
        
    });
});