let Students = [
    { id: 1, name: "sana", age: 20 },
    { id: 2, name: "kainat", age: 22 },
    { id: 3, name: "shabana", age: 24 },
    { id: 4, name: "saba", age: 26 },
    { id: 5, name: "zeenat", age: 28 },
];
let StudentNames = Students.map(Students => Students.name);
console.log(StudentNames);
let youngStudent = Students.filter(Students => Students.age < 20);
console.log(youngStudent);
export {};
