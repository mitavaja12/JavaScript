const Navbar = () => {

    return `
   <nav class="navbar navbar-expand-lg navbar-dark w-75 mx-auto">
        <a class="navbar-brand" href="#">
            <img src="/image/student.png" alt="Student Portal Logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/pages/home.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/pages/add.html">Add Student</a>
                </li>
            </ul>
            <form class="d-flex ms-auto" role="search">
            <input type="text" id="search" placeholder="Search student name..." class="form-control">
            <button id="searching" class="btn btn-primary mt-2">Search</button>

            </form>
        </div>
    </nav>
    `
};
export default Navbar;
