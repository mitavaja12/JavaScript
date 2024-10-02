const Navbar = () => {
  let isLogin = JSON.parse(localStorage.getItem('isLogin')) || false;
  let username = localStorage.getItem('username');

  return `
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
       <a class="navbar-brand" href="/index.html">
        <img src="/image/nykaa.png" class="brand-logo img-logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" href="/index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/pages/addProduct.html">Add Products</a>
            </li>
          </ul>
          <form class="d-flex">
            <input type="search" class="form-control me-2" placeholder="Search fashion items..." aria-label="Search">
            <button class="btn btn-outline-light" type="submit">Search</button>
          </form>
          <a href="/pages/login.html">
            <button id="authButton" class="btn btn-outline-light ms-2">${isLogin ? "Logout" : "Login"}</button>
          </a>
          <a href="/pages/signup.html">
            <button id="signupButton" class="btn btn-primary ms-2">${isLogin ? username : "Signup"}</button>
          </a>
        </div>
      </div>
    </nav>
  `
}

export default Navbar;
