'use strict';

 class Header extends React.Component {
    constructor(props){
        super(props);
        this.state  = {
            title: props.title,
            description: props.description
        };
    }
    render() {
        return(
        <header>
            <div className="card card_header">
                <img className="card__img" src="img/logo.jpg" alt="${title}" />
                <p className="card__title" title="${title}">{this.state.title}</p>
                <span className="card__description" title="${description}">{this.state.description}</span>
            </div>
        </header>
        );
    }
}

/**
 * компонент персоны
 */
class PersonList extends React.Component{
    constructor(props) {
        super(props);
        this.state  = {
            persons:props.personArray,
            clickedPerson: null
        };
        this.onClickEvent = this.onClickEvent.bind(this);
    }
    onClickEvent(e){
        
            this.setState({
                clickedPerson: this.state.persons[e.target.getAttribute('data-key')]        
            });
           // alert("www");
        
        
    }

    render() {
        let personList = [];
        let i =  0
        this.state.persons.forEach((item)=>{
            personList.push(<Person  photo ={item.photo} title = {item.title}  study = {item.study} key = {i}/>);
            i++;
        }
        );
        return( 
        
        <div className="persons" onClick = {this.onClickEvent }> 
            {personList}  
            <Popup clickedPerson = {this.state.clickedPerson}/>
        </div>
        
         );
    }
}


class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            photo: props.photo,
            title: props.title,
            study: props.study
        };
    }

    render() {
        return( 
            
        <div className="card card_person" data-key = {this._reactInternalFiber.key}>
            <img className="card__img card__img_round" src={this.state.photo} alt="Аватар {item.title}" />
            <p className="card__title" >{this.state.title || ''}</p>
            <span className="card__description" >{this.state.study || ''}</span>
        </div>);
    }
  
}




 class Popup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clickedPerson:props.clickedPerson
            
        };
        this.onClickEvent = this.onClickEvent.bind(this);
    }
    onClickEvent(e){
      
            e.target.remove();
        //document.getElementById('popup').remove();
            console.log(this.state.flag);
    
        
}
    
    render() {
      
            if(this.props.clickedPerson){
            return (<div className="popup"  id = 'popup' >
                <div className="popup__header">
                    <p className="profile-mini__title_big" title="${caption}">{this.props.clickedPerson.title}
                    </p>
                    
               
                
                </div>
                <div className="popup__content">
                <img className="profile-mini__photo" src={this.props.clickedPerson.photo} alt="Аватар {item.title}"/>
                <span className="profile-mini__futter"> {this.props.clickedPerson.study}</span>
                
                </div>
                
                
            </div>);
            }
            else {
                return <div></div>;
            }
    }
       
    }

 class DataSet{
        constructor(options){
           this.options = {
              ...{
           host: 'http://localhost:8080/api/',
              },
              ...options
           };
        }
     
     
        query(query,options,params){
           let url  = new URL(this.options.host);
           url.pathname += query;
           for (let k in params){
              url.searchParams.set(k,params[k]);
           }
           return fetch(url, options)
           .then(response => response.json());
        }
     
        read(id){
           return this.query(
              `${this.options.object}/${id}`, 
              {
                 method: 'GET'
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
   
     
     }

ReactDOM.render(<Header title = 'Tensor School' description ='Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.' />, document.getElementById('container'));

let personArr =[{
    id: 1,
    title: "Миша Петров",
    photo: "img/ava01.jpg",
    study: "Угату",
    bday: "2000-05-01T00:00:00.000Z",
    phone: "+7 (963) 123-45-67",
    active: "2020-04-11T18:01:47.339Z"
  },
  {
    id: 2,
    title: "Женя Серова",
    photo: "img/ava03.jpg",
    study: "Угату",
    bday: "1998-11-13T00:00:00.000Z",
    phone: "+7 (963) 123-45-67",
    active: "2020-04-03T15:00:00.000Z"
  },
  {
    id: 3,
    title: "Вася Васильев",
    photo: "img/ava04.jpg",
    study: "Угату",
    bday: "2000-05-01T00:00:00.000Z",
    phone: "+7 (963) 123-45-67",
    active: "2020-04-11T18:01:47.340Z"
  },
  {
    id: 4,
    title: "Вика Цукерберг",
    photo: "img/ava05.jpg",
    study: "БГПУ",
    bday: "2001-02-08T00:00:00.000Z",
    phone: "+7 (963) 123-45-67",
    active: "2020-03-05T15:00:00.000Z"
  },
  {
    id: 5,
    title: "Дедя Федор Илынбаев",
    photo: "img/ava06.jpg",
    study: "",
    bday: "1974-07-24T00:00:00.000Z",
    phone: "+7 (963) 123-45-67",
    active: "2020-04-03T15:00:00.000Z"
  }];

let dataset = new DataSet({
    object:"person"
})
let temp ;
/* Заполнение массива через запросы, почему то значение каждого элемента массива становится undefined
for(let i=1;i<=5;i++){
 dataset.read(i).then( result =>{
        personArr[i] = {result};
        console.log(personArr[i]);
    });
 console.log(personArr[i]);
}
*/

ReactDOM.render(<PersonList  personArray = {personArr}/>, document.getElementById('persons'));
