import {Student,Teacher } from "./PersonLib.js";
export class Fabric {
    createStudent(name){
        return new Student(name);
    }
    createTeacher(name){
        return new Teacher(name);
    }
    createPerson(name){
        return new Person(name);
    }
    create(name,type){
        let inst;
        switch(type){
            case "Student": inst = this.createStudent(name); break;
            case "Teacher": inst = this.createTeacher(name); break;  
            default: inst = this.createPerson(name); break;  
        }
        //inst.id  = Math.random().toString(12).slice();
        return inst;
    }
}
