let students = [];

// Function to add a student
function addStudent() {
    const nameInput = document.getElementById('nameInput');
    const regNumberInput = document.getElementById('regNumberInput');
    const departmentInput = document.getElementById('departmentInput');
    const facultyInput = document.getElementById('facultyInput');
    
    const student = {
        name: nameInput.value.trim(),
        regNumber: regNumberInput.value.trim(),
        department: departmentInput.value.trim(),
        faculty: facultyInput.value.trim()
    };

    if (student.name !== '' && student.regNumber !== '' && student.department !== '' && student.faculty !== '') {
        students.push(student);
        renderStudents();
        nameInput.value = '';
        regNumberInput.value = '';
        departmentInput.value = '';
        facultyInput.value = '';
    }
}

// Function to delete a student
function deleteStudent(index) {
    students.splice(index, 1);
    renderStudents();
}

// Function to render students
function renderStudents() {
    const studentTable = document.getElementById('studentTable');
    const tbody = studentTable.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        row.appendChild(nameCell);
        const regNumberCell = document.createElement('td');
        regNumberCell.textContent = student.regNumber;
        row.appendChild(regNumberCell);
        const departmentCell = document.createElement('td');
        departmentCell.textContent = student.department;
        row.appendChild(departmentCell);
        const facultyCell = document.createElement('td');
        facultyCell.textContent = student.faculty;
        row.appendChild(facultyCell);
        const actionCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'btn-action';
        editButton.onclick = () => editStudent(index);
        actionCell.appendChild(editButton);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn-action btn-delete';
        deleteButton.onclick = () => deleteStudent(index);
        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
        tbody.appendChild(row);
    });
}

// Function to edit a student
function editStudent(index) {
    const student = students[index];
    const newName = prompt('Enter new name:', student.name);
    const newRegNumber = prompt('Enter new registration number:', student.regNumber);
    const newDepartment = prompt('Enter new department:', student.department);
    const newFaculty = prompt('Enter new faculty:', student.faculty);
    
    if (newName !== null && newRegNumber !== null && newDepartment !== null && newFaculty !== null) {
        students[index] = {
            name: newName.trim(),
            regNumber: newRegNumber.trim(),
            department: newDepartment.trim(),
            faculty: newFaculty.trim()
        };
        renderStudents();
    }
}

// Initial render
renderStudents();