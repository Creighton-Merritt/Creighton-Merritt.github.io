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

myStudents.push(
    new Student('Merritt', 'Jean', '999')
);

console.log(myStudents);

localStorage.removeItem("students");


//create if statement to check if object is in memory.