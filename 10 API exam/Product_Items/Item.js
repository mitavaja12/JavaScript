let id = localStorage.getItem("id");

const ApiData = (ele) => {
    document.getElementById("product-details").innerHTML = "";

   
        let image = document.createElement('img');
        image.src = ele.thumbnail;

        let title = document.createElement('h2');
        title.innerHTML = ele.title;

        let price = document.createElement("p");
        price.innerHTML = `Price: $${ele.price}`;
        price.style.fontWeight="800"
        price.style.color="black";

        let category = document.createElement("p");
        category.innerHTML = ele.category;
        category.style.fontSize="25px";

        let rate = document.createElement("p");
        rate.innerHTML = `Rating: ${ele.rating}`;
        rate.style.color="red";
        rate.style.fontWeight="800"
        rate.style.fontSize="20px"

        let Desc = document.createElement("p");
        Desc.innerHTML = ele.description;
        Desc.style.color="black";
        Desc.style.fontWeight="700"

        let Discount = document.createElement("p")
        Discount.innerHTML = `Discount: ${ele.discountPercentage}%`;
        Discount.style.color="green";
        Discount.style.fontWeight="800"
        Discount.style.fontSize="20px"

        let Rname = document.createElement("p")
        Rname.innerHTML = `ReviewerName: ${ele.reviews[0].reviewerName}`;
        Rname.style.color="black"
        Rname.style.fontWeight="600"
        Rname.style.marginTop="20px"

        let Remail = document.createElement("p")
        Remail.innerHTML = `ReviewerEmail: ${ele.reviews[0].reviewerEmail}`;
        Remail.style.color="black"
        Remail.style.fontWeight="600"

        let btn = document.createElement("button")
        btn.innerHTML = "BUY";
        btn.style.padding = "15px 90px";
        btn.style.marginTop= "30px"
        btn.style.backgroundColor = "#CF4646";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.fontSize = "16px";
        btn.style.fontWeight = "bold";
        btn.style.cursor = "pointer";

        let div = document.createElement("div");
        div.addEventListener("click", ()=>{
            localStorage.setItem("id", ele.id);
            window.location.href="./item.html"
        })
        div.append(image, title, category, price,Discount, rate, Desc, Rname, Remail,btn);

        document.getElementById("product-details").append(div);

}


const getData = async (id) => {
    let req = await fetch(`https://dummyjson.com/products/${id}`);
    let res = await req.json();
    console.log(res); 
    products = res; 
    ApiData(res);
}
getData(id);