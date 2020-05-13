class Person{
    constructor(params){
        this.name =  params.name;
        this.type = "Person";
        this.id = -1;
    }

}
class Student extends Person{
    constructor(params){
        this.type = "Student"; 
    }
}
class Teacher extends Person{
    constructor(params){
        this.type = "Teacher"; 
    }
}
class Fabric {
    createStudent(name){
        return new Student({name});
    }
    createTeacher(name){
        return new Teacher({name});
    }
    createPerson(name){
        return new Person({name});
    }
    create(name,type){
        let inst;
        switch(type){
            case "Student": inst = createStudent({name}); break;
            case "Teacher": inst = createTeacher({name}); break;  
            default: inst = createPerson({name}); break;  
        }
        //inst.id  = Math.random().toString(12).slice();
        return inst;
    }
}

class School{
    constructor(fabric){
        this.fabric = fabric;
        this.type =  "School";
        this.studArr = [];
        this.TeacherArr = [];
    }
    addStudent(name){
        let newStudent = fabric.create(name,"Student");
        newStudent.id = this.studArr.length;
        this.studArr.push(newStudent);
        return newStudent;
    }
    addTeacher(name){
        let newTeacher = fabric.create(name,"Teacher");
        newTeacher.id  =  this.TeacherArr.length;
        this.TeacherArr.push(newTeacher);
        return newTeacher;
    }
    getStudentID(name){
        for(let i = 0;i<this.studArr.length;i++){
            if(this.studArr[i].name === name){
                return i;
            }
        }
    }
    findStudent(name){
        return this.studArr[this.getStudentID(name)];
    }

    deleteStudent(name){
        let id = this.getStudentID(name);
        let deletedStudent = this.studArr[id];
        this.studArr.splice(id,1);
        return deletedStudent;
    }
}
