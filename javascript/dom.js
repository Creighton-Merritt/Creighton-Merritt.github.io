class Student {
    constructor(firstName, lastName, iNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.iNumber = iNumber;
    }
    
};

let students = [
    new Student('Merritt', 'Creighton', '999'),
    new Student('Merritt', 'Tuley', '999'),
    new Student('Merritt', 'Ann', '999'),
    new Student('Merritt', 'D\'Albini', '999'),
    new Student('Merritt', 'Pederson', '999')
];

console.table(students);

for (let i = 0; i < students.length; i++) {
    console.log(i);
    let tr = document.createElement("tr");
    let tdFirstName = document.createElement("td");
    let tdLastName = document.createElement("td");
    let tdiNumber = document.createElement("td");

    tdFirstName.innerHTML = students[i].firstName;
    tdLastName.innerHTML = students[i].lastName;
    tdiNumber.innerHTML = students[i].iNumber;

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdiNumber);

    document.getElementById("students").appendChild(tr);
}  