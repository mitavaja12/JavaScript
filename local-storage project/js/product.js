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
let cartList = JSON.parse(localStorage.getItem("cartList")) || [];

const idExists = (id)=>{
    let temp = cartList.filter((item) => item.id == id)
    return temp.length > 0 ? true : false
}

const HandlecartList=(e)=>{
    
    if(idExists(e.id)){
        cartList.map((item , i)=>{
            if(item.id == e.id){
                cartList[i].qty += 1;
            }
        })
        alert("Quantity Added Successfully");
        window.location.href = "/pages/cart.html"
    }
    else{
        cartList.push({...e, qty: 1})
        alert("Added to the cart")
    }

    localStorage.setItem("cartList", JSON.stringify(cartList));
}

const ProductItems = (data)=>{
    document.getElementById("productList").innerHTML = "";

    data.map((e)=>{
        let img = document.createElement("img")
        img.src = e.img

        let title = document.createElement("h2")
        title.innerHTML = e.title

        let price = document.createElement("p")
        price.innerHTML = e.price

        let category = document.createElement("p")
        category.innerHTML = e.category

        let btn = document.createElement("button")
        btn.innerHTML = "BUY"
        btn.addEventListener("click",()=>HandlecartList(e))

        let div = document.createElement("div")

        div.append(img , title , price , category , btn)

        document.getElementById("productList").append(div);
    })
}

ProductItems(products);

const HandlePrice=(order)=>{

    if(order == "LTH"){

        let temp = products.sort((a,b) => a.price - b.price)
        ProductItems(temp)
    }
    else{
        let temp = products.sort((a,b) => b.price - a.price)
        ProductItems(temp)
    }
}

const HandleFilter=(category)=>{

    let filtercategory = products.filter((ele)=> ele.category == category)
    ProductItems(filtercategory)

}

const HandleSearch=(value)=>{
    let temp = products.filter((e) => e.title.includes(value))
    ProductItems(temp)
}

const HandleSearchData=(e)=>{
    e.preventDefault();
    let value = document.getElementById("Search").value
    HandleSearch(value)

}

const HandleLiveInput=()=>{

    let value = document.getElementById("Search").value
    HandleSearch(value)

}

document.getElementById("Search").addEventListener("keypress" , HandleLiveInput)
document.getElementById("Searching").addEventListener("submit" , HandleSearchData)

document.getElementById("LTH").addEventListener("click" , ()=>HandlePrice("LTH"))
document.getElementById("HTL").addEventListener("click" , ()=>HandlePrice("HTL"))

document.getElementById("men").addEventListener("click" , ()=> HandleFilter("men"))
document.getElementById("women").addEventListener("click", ()=>  HandleFilter("women"))
document.getElementById("kids").addEventListener("click" ,()=>  HandleFilter("kids"))