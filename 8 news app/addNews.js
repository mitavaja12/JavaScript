let newsData = JSON.parse(localStorage.getItem('newsData')) || [];

const addNews = (e) => {
    e.preventDefault();

    let newsDetails = {
        title: document.getElementById('title').value,
        image: document.getElementById('image').value,
        description: document.getElementById('description').value
    };

    newsData.push(newsDetails);
    localStorage.setItem('newsData', JSON.stringify(newsData));
};

document.getElementById('addNewsForm').addEventListener('submit', addNews);
