import footer from "../cōmpōnents/footer.js";
import nav from "../cōmpōnents/nav.js";

document.getElementById("nav").innerHTML = nav();
document.getElementById("footer").innerHTML = footer();

let SignupDetails = JSON.parse(localStorage.getItem("user"));

if (SignupDetails) {
    document.getElementById("nav").innerHTML = nav("logout", SignupDetails.username);
} else {
    document.getElementById("nav").innerHTML = nav();
}

let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

const HandleDelete = (i) => {
    cartList.splice(i, 1);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    HandleCart(cartList);
    updateCartTotal();
};

const HandleQty = (i, operator) => {
    if (operator === "+") {
        cartList[i].qty += 1;
    } else {
        if (cartList[i].qty === 1) {
            HandleDelete(i);
        } else {
            cartList[i].qty -= 1;
        }
    }
    HandleCart(cartList);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    updateCartTotal();
};

const HandleCart = (cartList) => {
    document.getElementById("list").innerHTML = "";

    cartList.forEach((cart, i) => {
        let tr = document.createElement("tr");

        let image = document.createElement("td");
        let img = document.createElement("img");
        img.src = cart.img;
        image.append(img);

        let Title = document.createElement("td");
        Title.innerHTML = cart.title;

        let Category = document.createElement("td");
        Category.innerHTML = cart.category;

        let Price = document.createElement("td");
        Price.innerHTML = cart.price;

        let td = document.createElement("td");
        let btn1 = document.createElement("button");
        btn1.innerHTML = "-";
        let btn2 = document.createElement("button");
        btn2.innerHTML = cart.qty;
        let btn3 = document.createElement("button");
        btn3.innerHTML = "+";

        btn1.addEventListener("click", () => HandleQty(i, "-"));
        btn3.addEventListener("click", () => HandleQty(i, "+"));
        td.append(btn1, btn2, btn3);

        let td2 = document.createElement("td");
        td2.innerHTML = cart.price * cart.qty;

        let td3 = document.createElement("td");
        td3.innerHTML = "Remove";
        td3.style.cursor = "pointer";
        td3.addEventListener("click", () => HandleDelete(i));

        tr.append(image, Title, Category, Price, td, td2, td3);
        document.getElementById("list").append(tr);
    });
};

const updateCartTotal = () => {
    let totalPrice = 0;
    cartList.forEach((cart) => {
        totalPrice += cart.price * cart.qty;
    });

    let discount = totalPrice * 0.4; 
    let finalTotal = totalPrice - discount;

    document.getElementById("cartTotal").innerHTML = `
        <h5>Cart Total</h5>
        <p>Cart Subtotal: $${totalPrice.toFixed(2)}</p>
        <p>Discount: 40%</p>
        <p><strong>Final Total: $${finalTotal.toFixed(2)}</strong></p>
        <button class="btn1 apply-button" id="checkout">Checkout</button>
    `;

    document.getElementById("checkout").addEventListener("click", handleCheckout);
};

const handleCheckout = () => {
    if (cartList.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert("Checkout successful!");
    localStorage.removeItem("cartList"); 
    document.getElementById("list").innerHTML = ""; 
    updateCartTotal(); 
};

HandleCart(cartList);
updateCartTotal(); 