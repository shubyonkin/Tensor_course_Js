
class Student {
    constructor(params) {
        this.fullName = params.fullName;
        this.photoUrl = params.PhotoUrl;
        this.university = params.university;
        this.course = params.course;
        this.birthDate = params.birthDate;
        this.flag = 0;
    }
    birthDay(){
        let k1 = '';
        let k2 = '';
        let age = (2020 - this.birthDate.getFullYear());
        if(this.birthDate.getDate()<=9){
            k1 = 0;
        }
        if(this.birthDate.getMonth()<=9){
            k2 = 0;
        }  
        return ` ${k1}${this.birthDate.getDate()}.${k2}${this.birthDate.getMonth()+1}.${this.birthDate.getFullYear()} ${age} лет`;

    }
    
 
    render(){
        let div = document.createElement('div');
        div.setAttribute('class', 'ava');
        let img = document.createElement('img');
        img.src = this.photoUrl;
        div.append(img);
        let p = document.createElement('p');
        p.innerHTML = `${this.fullName}`;
        div.append(p);
        let span = document.createElement('span');
        span.innerHTML = `${this.university} ${this.course} курс`;
        div.append(span);
        return div;
      }
      
    
    appendToDom() {
        const layout = this.render();
        document.getElementById('students').append(layout);
        layout.addEventListener('click',(event)=>{

        let card = document.createElement('div');
        card.setAttribute('class', 'card');
    

        let p = document.createElement('p');
        p.innerHTML = this.fullName;
        p.setAttribute('id','Name');
        card.append(p);


        let img = document.createElement('img');
        img.src = this.photoUrl;
        card.append(img);
       
        let p2 = document.createElement('p');
        p2.innerHTML = `День Рождения  ${this.birthDay()}`;
        card.append(p2);

        let span = document.createElement('span');
        span.innerHTML = `Учится :${this.university}, ${this.course} курс`;
        card.append(span);

            if(this.flag==0)
            {
                document.getElementById('students').append(card);
                this.flag++ ;
            }
        card.addEventListener('click',(event) =>{
            
            event.currentTarget.remove();
            this.flag--;
        })
        });
    }

  

}

let studArr = [
    {
        fullName: 'Шипов Казимир',
        university: 'УГАТУ',
        course: 2,
        birthDate: new Date(2000, 0, 1),
        PhotoUrl: "img/ava01.jpg"

    },
    {
        fullName: 'Кошелева Диана',
        university: 'СурГУ',
        course: 3,
        birthDate: new Date(2002, 4, 3),
        PhotoUrl: "img/ava02.jpg"
    },
    {
        fullName: 'Беляева Алёна',
        university: 'БГУ',
        course: 4,
        birthDate: new Date(2003, 1, 19),
        PhotoUrl: "img/ava03.jpg"

    }
];
studArr.forEach((item) => {
    const student = new Student(item);
    student.appendToDom();
});



