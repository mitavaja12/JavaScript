let products = []; 

const ApiData = (data) => {
    document.getElementById("product-list").innerHTML = "";

    data.products.map((ele) => {
        let image = document.createElement('img');
        image.src = ele.thumbnail;

        let title = document.createElement('h2');
        title.innerHTML = ele.title;

        let price = document.createElement("p");
        price.innerHTML = `$${ele.price}`;

        let category = document.createElement("p");
        category.innerHTML = ele.category;

        let rate = document.createElement("p");
        rate.innerHTML = `Rating: ${ele.rating}`;

        let div = document.createElement("div");
        div.style.cursor="pointer"
        div.addEventListener("click", ()=>{
            localStorage.setItem("id", ele.id);
            window.location.href="./item.html"
        })
        div.append(image, title, price, category, rate);

        document.getElementById("product-list").append(div);
    });
}

const getData = async () => {
        let req = await fetch("https://dummyjson.com/products/");
        let res = await req.json();
        products = res; 
        ApiData(products);
  
}

getData();

const HandlePrice = (order) => {
    let temp;
    if (order === "LTH") {
        temp = products.products.sort((a, b) => a.price - b.price);
    } else {
        temp = products.products.sort((a, b) => b.price - a.price);
    }
    ApiData({ products: temp });
}

const HandleFilter = (category) => {
    let filter = products.products.filter((ele) => ele.category === category);
    ApiData({ products: filter });
}

const HandleSearch = (value) => {
    let temp = products.products.filter((e) => e.title.includes(value));
    ApiData({ products: temp });
}

const HandleSearchData = (e) => {
    e.preventDefault();
    let value = document.getElementById("Search").value;
    HandleSearch(value);
}

const HandleLiveInput = () => {
    let value = document.getElementById("Search").value;
    HandleSearch(value);
}

document.getElementById("Search").addEventListener("keypress", HandleLiveInput);
document.getElementById("Searching").addEventListener("submit", HandleSearchData);


document.getElementById("groceries").addEventListener("click" , ()=> HandleFilter("groceries"))
document.getElementById("furniture").addEventListener("click", ()=>  HandleFilter("furniture"))
document.getElementById("beauty").addEventListener("click" ,()=>  HandleFilter("beauty"))
document.getElementById("fragrances").addEventListener("click" ,()=>  HandleFilter("fragrances"))



document.getElementById("LTH").addEventListener("click", () => HandlePrice("LTH"));
document.getElementById("HTL").addEventListener("click", () => HandlePrice("HTL"));

