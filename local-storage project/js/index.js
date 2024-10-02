
import footer from "../cōmpōnents/footer.js";
import nav from "../cōmpōnents/nav.js";

document.getElementById("nav").innerHTML = nav();
document.getElementById('footer').innerHTML=footer();
let SignupDetails = JSON.parse(localStorage.getItem("user"));


if (SignupDetails) {
    document.getElementById("nav").innerHTML = nav("logout", SignupDetails.username)
}
else {
    document.getElementById("nav").innerHTML = nav()
}