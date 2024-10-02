import getValue from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = Navbar();

  document.getElementById("authButton").addEventListener("click", () => {
    let isLogin = JSON.parse(localStorage.getItem('isLogin')) || false;
    if (isLogin) {
      localStorage.removeItem('isLogin');
      localStorage.removeItem('username');
      window.location.href = '/login.html';  
    } else {
      window.location.href = '/login.html'; 
    }
  });

  document.getElementById("signupButton").addEventListener("click", () => {
    let isLogin = JSON.parse(localStorage.getItem('isLogin')) || false;
    if (!isLogin) {
      window.location.href = '/signup.html';  
    }
  });
});

let users = JSON.parse(localStorage.getItem("users")) || [];

const handleData = (e) => {
  e.preventDefault();

  let user = {
    email: getValue(".email"),
    password: getValue(".password"),
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailRegex.test(user.email)) {
    alert("Please enter a valid email address");
    return;
  }

  let isMatched = users.filter(
    (ele) => ele.email === user.email && ele.password === user.password
  );

  if (isMatched.length > 0) {
    alert("User matched");

    localStorage.setItem("username", isMatched[0].username);
    localStorage.setItem("isLogin", 'true');

    window.location.href = "/index.html";
  } else {
    alert("User not found");
  }
};

document.querySelector("#userData").addEventListener("submit", handleData);
