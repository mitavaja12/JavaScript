import getvalue from "../componants/helper.js";
import Navbar from "../componants/nav.js";

document.getElementById("navbar").innerHTML = Navbar();

let studentData = JSON.parse(localStorage.getItem('studentData')) || [];

const Studentsubmit = (e) => {
    e.preventDefault();

    const selectCourse = document.getElementById("chooseCourse");
    const courseName = selectCourse.options[selectCourse.selectedIndex].text; 
    const courseFee = getvalue("#courseFee"); 

    let student = {
        studentname: getvalue("#studentName"),  
        course: courseName,
        fees: courseFee,    
        studId: getvalue("#studentGRId"),
    };

    studentData.push(student);

    localStorage.setItem("studentData", JSON.stringify(studentData));
    console.log("New Student Data:", studentData);
};

document.getElementById("studentsInfo").addEventListener("submit", Studentsubmit);
