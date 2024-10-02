let employees = []
let totalSalary = 0

const uimaker = () => {
    document.getElementById('tbody').innerHTML = ''

    for (let i = 0; i < employees.length; i++) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = i + 1
        let td2 = document.createElement('td')
        td2.innerHTML = employees[i].name
        let td3 = document.createElement('td')
        td3.innerHTML = employees[i].email
        let td4 = document.createElement('td')
        td4.innerHTML = employees[i].department
        let td5 = document.createElement('td')
        td5.innerHTML = employees[i].exc
        let td6 = document.createElement('td')
        td6.innerHTML = employees[i].level
        let td7 = document.createElement('td')
        td7.innerHTML = employees[i].salary

        tr.append(td1, td2, td3, td4, td5, td6, td7)
        document.getElementById('tbody').append(tr)
    }
}

const handledata = (e) => {
    e.preventDefault()

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let department = document.getElementById("department").value
    let exc = document.getElementById('exc').value
    let salary = document.getElementById('salary').value

    let level
    if (exc <= 5 && exc >= 0) {
        level = "Junior"
    } else {
        level = "Senior"
    }

    let employee = {
        name: name,
        email: email,
        department: department,
        exc: exc,
        level: level,
        salary: salary
    }

    employees.push(employee)
    uimaker()

    totalSalary += Number(salary)
    console.log(totalSalary)
    document.getElementById('totalSalary').innerHTML = `Total Salary: ${totalSalary}`
    document.getElementById('totalEmployees').innerHTML = `Total Employees: ${employees.length}`
}

document.getElementById('data').addEventListener('submit', handledata)