//Practice I did while watching along with teacher video

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

console.log(students);

localStorage.setItem("students", JSON.stringify(students));

let myStudents = JSON.parse(localStorage.getItem("students"));

// Display object when button is clicked
function display() {
    for (let i = 0; i < myStudents.length; i++) {
        let nameString = myStudents[i].firstName + " " + myStudents[i].lastName + " " + myStudents[i].iNumber + "<br>";
        console.log(nameString);
        document.getElementById("names").innerHTML += nameString;
    }
}



