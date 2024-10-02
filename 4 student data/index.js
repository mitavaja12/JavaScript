let students = []
let totalstudents = 0
let totalfees = 0

const uimaker = () => {
    document.getElementById('tbody').innerHTML = ''
    totalstudents = students.length
    document.getElementById('totalStudents').innerHTML = `Total Students: ${totalstudents}`
    document.getElementById('totalFees').innerHTML = `Total Fees: ${totalfees}`

    for (let i = 0; i < students.length; i++) {
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        td1.innerHTML = students[i].course
        let td2 = document.createElement('td')
        td2.innerHTML = students[i].name
        let td3 = document.createElement('td')
        td3.innerHTML = students[i].fee
        let td4 = document.createElement('td')
        td4.innerHTML = 'remove'
        td4.addEventListener('click', () => removeStudent(i))
        tr.append(td1, td2, td3, td4)
        document.getElementById('tbody').append(tr)
    }
}

const removeStudent = (index) => {
    let fee = students[index].fee
    students.splice(index, 1)
    totalfees -= fee
    uimaker()
}

const handleData = (e) => {
    e.preventDefault()

    let feeText = document.getElementById('fee').value
    let feeAmount = 0

    if (feeText) {
        feeAmount = Number(feeText.split('-')[1])
    }

    let student = {
        fee: feeAmount,
        name: document.getElementById('name').value,
        gr: document.getElementById('gr').value,
        course: document.getElementById('course').value,
        number: document.getElementById('number').value
    }

    if (student.name.length <= 2) {
        alert('Enter a meaningful name')
        return
    }
    if (student.gr.length !== 4) {
        alert('Invalid GR id')
        return
    }
    if (student.number.length !== 10) {
        alert('Invalid number')
        return
    }

    students.push(student)
    totalfees += feeAmount
    uimaker()
}

document.getElementById('studentData').addEventListener('submit', handleData)
