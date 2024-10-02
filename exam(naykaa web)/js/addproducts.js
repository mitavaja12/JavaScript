import getValue, { createTag } from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let isLogin = localStorage.getItem("isLogin") || false;

if (isLogin == false) {
    window.location.href = "/pages/login.html";
}

let products = JSON.parse(localStorage.getItem("products")) || [];

const handleSubmit = async (e) => {
    e.preventDefault();

    let product = {
        title: getValue("#productTitle"),
        price: getValue("#productPrice"),
        category: getValue("#floatingInput"),
        img: getValue("#productImage"),
        id: Date.now()
    };

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    try {
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        if (response.ok) {
            alert("Product added successfully!");
            window.location.href = "/pages/homepage.html"; 
        } 
    } catch (error) {
        alert("Error adding product to db.json: " + error.message);
    }
};

document.getElementById("addProductForm").addEventListener("submit", handleSubmit);
