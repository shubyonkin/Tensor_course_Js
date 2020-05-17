import {Person} from './Person.js';
export class Teacher extends Person{
    constructor(name){
        super(name);
        this.type = "Teacher"; 
    }
}