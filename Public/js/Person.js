import {Component,PopupList} from './componentLib.js';

export class Person extends Component {
    render({item}) {
       return `<div class="card card_person">
           <img class="card__img card__img_round" src="${item.photo || 'img/ui/default_pix.jpg'}" alt="Аватар ${item.title}" />
           <p class="card__title" title="${item.title || ''}">${item.title || ''}</p>
           <span class="card__description" title="${item.study || ''}">${item.study || ''}</span>
       </div>`;
    }
 
    afterMount() {
       this.container.addEventListener('click', (event) => this.onClick(event) );
    }
    
    onClick(event) {
       if (!this.popup) {
          this.popup = new PopupList();
          this.popup.mount(this.options.item.popupStack.getContainer());
       }
       
       this.popup.open('student', {
          caption: this.options.item.title,
          content: `<center><img height="300" width="300" class="card__img" src="${this.options.item.photo || 'img/ui/default_pix.jpg'}" alt="Аватар ${this.options.item.title}" /></center>`
       });
    }

    
 }