import { createTag } from "../componants/helper.js";
import Navbar from "../componants/nav.js";

document.getElementById("navbar").innerHTML = Navbar();

let studentData = JSON.parse(localStorage.getItem('studentData')) || [];

const mapper = (data) => {
    document.getElementById("studentList").innerHTML = "";
    data.forEach((ele) => {
        let studentName = createTag("p", ele.studentname);
        let studId = createTag("p", ele.studId);
        let fees = createTag("h2", `Fees: ${ele.fees}`); 
        let course = createTag("p", `Course: ${ele.course}`); 

        let div = document.createElement("div");
        div.append(studentName, studId, fees, course); 

        document.getElementById("studentList").append(div); 
    });
};

mapper(studentData); 

const handleSort = (orderBy) => {
    let sortedDetails = [...studentData].sort((a, b) => orderBy === "lth" ? a.fees - b.fees : b.fees - a.fees);
    mapper(sortedDetails);
};

const handleCourse = (category) => {
    let filteredStudents = studentData.filter((ele) => ele.course === category);
    mapper(filteredStudents);
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));

document.getElementById("Graphics").addEventListener("click", () => handleCourse("Graphics"));
document.getElementById("Web").addEventListener("click", () => handleCourse("Web"));
document.getElementById("Animation").addEventListener("click", () => handleCourse("Animation"));

const search = (e) => {
    e.preventDefault();
    
    let searchValue = document.querySelector("#search").value; 

    if (!searchValue) {
        return;
    }
    let filteredStudents = studentData.filter((ele) => 
        ele.studentname.toLowerCase().includes(searchValue.toLowerCase())
    );

    mapper(filteredStudents);
};

document.getElementById("searching").addEventListener("click", search);
