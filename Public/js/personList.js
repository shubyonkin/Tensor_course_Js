import {Component,ComponentFactory,Person} from './componentLib.js';
export class PersonList extends Component {
    constructor(options) {
        super(options);
        this.persons = [];
    }

    render() {
       return `<div class="person-list"></div>`;
    }
    add(item){
        const factory = new ComponentFactory();
        const person  = factory.create(Person, {item});
        this.persons.push(person);
        person.mount(this.container);
 
    }
 
 }