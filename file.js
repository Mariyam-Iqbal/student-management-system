class Institute {
    name;
    student = [];
    addStudent(studentobj) {
        this.student.push(studentobj);
    }
    constructor(instituename) {
        this.name = instituename;
    }
}
class student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class course {
    name;
    constructor(name) {
        this.name = name;
    }
}
class teacher {
    name;
    course = [];
    addCourse(courseobj) {
        this.course.push(courseobj);
    }
    constructor(name) {
        this.name = name;
    }
}
let one = new Institute("Khairpur University");
let studentobj = new student("Mariyam");
let Course = new course("Chemistry");
let Teacher = new teacher("Kainat");
one.addStudent(studentobj);
console.log(one);
Teacher.addCourse(Course);
console.log(Teacher);
export {};
