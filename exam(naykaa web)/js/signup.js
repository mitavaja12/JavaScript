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

const usernameRegex = /^[a-zA-Z0-9]{3,15}$/; 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

const handleData = (e) => {
  e.preventDefault();

  let username = getValue(".username");
  let email = getValue(".email");
  let password = getValue(".password");

  if (!usernameRegex.test(username)) {
    alert("Username must be alphanumeric and between 3 and 15 characters.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!passwordRegex.test(password)) {
    alert("Password must be at least 8 characters long, include at least one letter and one number.");
    return;
  }

  let user = {
    username: username,
    email: email,
    password: password,
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "/index.html";
};

document.querySelector("#userData").addEventListener("submit", handleData);
