import {Component} from './component.js';
export class Header extends Component {
    render({title, description}) {
        return `
        <header>
            <div class="card card_header">
                <img class="card__img" src="img/logo.jpg" alt="${title}" />
                <p class="card__title" title="${title}">${title}</p>
                <span class="card__description" title="${description}">${description}</span>
            </div>
        </header>`;
    }
}