#!/usr/bin/env node
import chalk from "chalk";
class Institute{
    name: string;
    student: any = []
    addStudent(studentobj:student){
        this.student.push(studentobj)
    }
    constructor(instituename:string){
this.name=instituename
    }
    
}
class student{
    name: string
    constructor(name:string){
        this.name=name
    }  
}
class course{
    name: string
    constructor(name:string){
        this.name=name
    }
}
class teacher{
    name: string
    course:any=[]
    addCourse(courseobj:course){
        this.course.push(courseobj)
    }
    constructor(name:string){
        this.name=name
    }
}


let one = new Institute("Khairpur University")
let studentobj =new student ("Mariyam")
let Course = new course ("Chemistry")
let Teacher = new teacher ("Kainat")

one.addStudent(studentobj)
console.log(one);

Teacher.addCourse(Course)
console.log(Teacher);


