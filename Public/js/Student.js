import {Person} from './Person.js';
export class Student extends Person{
    constructor(name){
        super(name);
        this.type = "Student"; 
    }
}