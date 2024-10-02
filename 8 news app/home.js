let signUpData = JSON.parse(localStorage.getItem('signUp')) || [];
let newsData = JSON.parse(localStorage.getItem('newsData')) || [];

const displaySignUp = (signUpData) => {
    const userDataDiv = document.getElementById('userDetails'); 
    userDataDiv.innerHTML = "";

    for (let i = 0; i < signUpData.length; i++) {
        let img = document.createElement("img");
        img.src = signUpData[i].img;
        img.alt = "User Image"; 

        let name = document.createElement("h2");
        name.textContent = signUpData[i].name;

        let div = document.createElement("div");
        div.className = "user-profile";
        div.append(img, name);

        userDataDiv.append(div);
    }
};

const displayNews = (newsData) => {
    const newsDataDiv = document.getElementById('newsDetails'); 
    newsDataDiv.innerHTML = ""; 

    for (let i = 0; i < newsData.length; i++) {
        let title = document.createElement("h3");
        title.textContent = newsData[i].title;

        let img = document.createElement("img");
        img.src = newsData[i].image;
        img.alt = "News Image";

        let description = document.createElement("p");
        description.textContent = newsData[i].description;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            newsData.splice(i, 1); 
            localStorage.setItem('newsData', JSON.stringify(newsData));
            displayNews(newsData);
        };

        let div = document.createElement("div");
        div.className = "news-item"; 
        div.append(title, img, description, deleteBtn);

        newsDataDiv.append(div);
    }
};

displaySignUp(signUpData);
displayNews(newsData);
