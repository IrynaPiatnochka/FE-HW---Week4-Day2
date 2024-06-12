
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    let productList = document.getElementById("product-list");
    productList.innerHTML = ""; 

    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        let nameElement = document.createElement("h2");
        nameElement.textContent = product.name;

        let priceElement = document.createElement("p");
        priceElement.textContent = "Price: $" + product.price.toFixed(2);

        let descriptionElement = document.createElement("p");
        descriptionElement.textContent = product.description;

        productDiv.appendChild(nameElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(descriptionElement);

        productList.appendChild(productDiv);
    });
}

window.addEventListener("load", displayProducts);
