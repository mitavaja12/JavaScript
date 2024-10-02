
const nav = (login = "login", signup = "signup") => {
  return `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
<img src="https://avatars.mds.yandex.net/i?id=5d4dc1d99b7402e73dd3cf767719c25b624bd62f-4578426-images-thumbs&n=13" alt="Logo" height="80px" width="100px">
    <a class="navbar-brand" href=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/product.html">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/addproduct.html" tabindex="-1">AddProducts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/cart.html" tabindex="-1">cart</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/login.html" tabindex="-1">${login}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/pages/signup.html" tabindex="-1">${signup}</a>
        </li>
      </ul>
      <form class="d-flex" id="Searching">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`
}

export default nav