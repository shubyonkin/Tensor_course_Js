import {Component} from './componentLib.js';
export class Popup extends Component {
    render({caption, content}) {
        return `<div class="popup">
            <div class="popup__header">
                <p class="popup__title" title="${caption}">${caption}</p>
                <img class="popup__closeButton" title="Закрыть" alt="Кнопка закрыть" src="img/ui/close_x.png"/>
            </div>
            <div class="popup__content">
            ${content}
            </div>
        </div>`;
    }
 
       afterMount() {
       this.container.querySelector('.popup__closeButton').addEventListener('click', () => this.unmount() );
    }
 }
 
 
 export class PopupList extends Component {
    constructor(options) {
       super(options);
       this.popups = {};
    }
 
    render() {
       return `<div class="popup-list"></div>`;
    }
   
    open(key, options) {
 
       if (this.popups[key]) {
          this.popups[key].unmount();
       }
 
   const popup = new Popup(options);
   
   this.popups[key] = popup;

   popup.mount(this.container);
  // popup.container.querySelector('.popup__closeButton').addEventListener('click', () => this.unmount() );

    }
 }