import footer from "../cōmpōnents/footer.js";
import nav from "../cōmpōnents/nav.js";

document.getElementById("nav").innerHTML = nav()
document.getElementById('footer').innerHTML=footer();

let SignupDetails = JSON.parse(localStorage.getItem("user"));

if (SignupDetails) {
    document.getElementById("nav").innerHTML = nav("logout", SignupDetails.username)
}
else {
    document.getElementById("nav").innerHTML = nav()
}

let products = JSON.parse(localStorage.getItem("products")) || [];

const productData = (e)=>{
    e.preventDefault()

    let product = {
        title : document.getElementById("title").value,
        img : document.getElementById("img").value,
        price : document.getElementById("price").value,
        category : document.getElementById("category").value,
        id : products.length == 0 ? 1 : products[products.length - 1].id + 1
    }

    products.push(product);
    localStorage.setItem("products" , JSON.stringify(products));
    alert("Product Added Successfully!!!")
    window.location.href = "/pages/product.html"

}

document.getElementById("addproduct").addEventListener("submit",productData)