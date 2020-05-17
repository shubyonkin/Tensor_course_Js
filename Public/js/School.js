

export class School{
    constructor(fabric){
        this.fabric = fabric;
        this.type =  "School";
        this.studArr = [];
        this.TeacherArr = [];
    }
    addStudent(name){
        let newStudent = this.fabric.create(name,"Student");
        newStudent.id = this.studArr.length + 1;
        this.studArr.push(newStudent);
        
    }
    addTeacher(name){
        let newTeacher = this.fabric.create(name,"Teacher");
        newTeacher.id  =  this.TeacherArr.length +  1;
        this.TeacherArr.push(newTeacher);
      
    }
    getStudentID(name){
        for(let i = 0;i<this.studArr.length;i++){
            if(this.studArr[i].name === name){
                return i;
            }
        }
    }
    findStudent(name){
        return this.studArr[this.getStudentID(name) - 1];
    }

    deleteStudent(name){
        let id = this.getStudentID(name);
        let deletedStudent = this.studArr[id];
        this.studArr.splice(id,1);
        return deletedStudent;
    }
    appendToDOM(element){
        let div = document.createElement('div');
        div.setAttribute('class', 'Students');
        div.innerHTML = 'Cписок студентов:'
        for(let i = 0;i<this.studArr.length;i++){
            let studDiv = document.createElement('div');
            studDiv.innerHTML = `${this.studArr[i].id}. ${this.studArr[i].name}`;
            div.append(studDiv);
        }

        let div1 = document.createElement('div');
        div1.setAttribute('class', 'Teachers');
        div1.innerHTML = 'Cписок учителей:'
        for(let i = 0;i<this.TeacherArr.length;i++){
            let teacherDiv = document.createElement('div');
            teacherDiv.innerHTML = `${this.TeacherArr[i].id}. ${this.TeacherArr[i].name}`;
            div1.append(teacherDiv);
        }
        element.append(div);
        element.append(div1);
        return element;
    }
}
