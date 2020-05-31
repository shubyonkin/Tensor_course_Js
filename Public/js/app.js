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
      this.type = 'model';
   }

   get_fullName() {
      return `${this.title}+1`;
   }
}



class DataSet{
   constructor(options){
      this.options = {
         ...{
      host: 'http://localhost:8080/api/',
      model: Model
         },
         ...options
      };
   }
   toModel(result){
      //console.log(`${this.options.model}  создался`)
      return new Model(result);
   }

   query(query,options,params){
      let url  = new URL(this.options.host);
      url.pathname += query;
      for (let k in params){
         url.searchParams.set(k,params[k]);
      }
      return fetch(url,options).then( response => response.json());

   }

   read(id){
      return this.query(
         `${this.options.object}/${id}`, 
         {
            method: 'GET'
         })
         .then(result => {
            return (this.toModel(result));
         });
   }

   create(data){
      return this.query(
         `${this.options.object}/${id}`, 
         {  method: 'POST',
            body:data
      });
   }

   delete(id){
      return this.query(
         `${this.options.object}/${id}`, 
         {method: 'DELETE'});
   }

   update(id,data){
      return this.query(
         `${this.options.object}/${id}`, 
         {  method: 'PATCH',
            body:data
      });
   }
   list(page,limit){
      return this.query(
         `${this.options.object}`,
         {
            method:'GET'
         },
         {
            '_page':page,
            '_limit':limit
         }).
         then(results=>{
            return   results.map((result) => this.toModel(result));
         });
   }

}

let dataset = new DataSet({
   object:"person",
   model:Model
});
  // console.log("dataset.read(1).fullName")
  // console.log(dataset.read(1).get_fullName())
  let model1 = dataset.read(1);
//alert( toString.call(model1) );
list.add(dataset.read(1));
list.add(dataset.read(2));
list.add(dataset.read(3));
list.add(dataset.read(4));
list.add(dataset.read(5));