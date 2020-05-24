import {Header,ComponentFactory,PersonList,PopupStack} from './componentLib.js';


const stack = new PopupStack();

const factory = new ComponentFactory();

const head = factory.create(Header, {
   title: 'Tensor Scool',
   description: 'Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.'
});

head.mount(document.body);
const list = factory.create(PersonList);
list.mount(document.body);
stack.mount(document.body);

class Model {
   constructor(data) {
      for(let key in data) {
         this[key] = data[key];
      }
   }

   get fullName() {
      return `{this.title}`;
   }
}

let personModelList = 
[new Model({
   title: 'Женя Серова',
   photo: 'img/ava03.jpg',
   study: 'Угату',
   bday: new Date('1998-11-13'),
   phone: '+7 (963) 123-45-67',
   active: new Date('2020-04-03T20:00:00'),
   popupStack: stack 
}),
new Model({
   title: 'Полина Гришина',
   photo: 'img/ava02.jpg',
   study: 'Угату',
   bday: new Date('1998-11-13'),
   phone: '+7 (963) 123-45-67',
   active: new Date('2020-04-03T20:00:00'),
   popupStack: stack 
}),
new Model({
   title: 'Дмитрий Дмитриевич',
   photo: 'img/ava01.jpg',
   study: 'Угату',
   bday: new Date('1998-11-13'),
   phone: '+7 (963) 123-45-67',
   active: new Date('2020-04-03T20:00:00'),
   popupStack: stack 
}),

];


for(let i=0;i<personModelList.length;i++){
   list.add(personModelList[i]);
}


