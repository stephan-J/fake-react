import { User } from '../models/User';

export default class UserForm {
    eventsmap(): {[key: string]: () => void} {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.change-name': this.onSetNameClick
        }
    }

    onSetAgeClick = (): void => {
        this.model.set({ age: Math.floor(Math.random()*100)})
    }
    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        input ? this.model.set({ name: input.value }) : null;
    }
    constructor(public parent: Element, private model: User) {
        this.bindModel();
    }

    templete(): string {
        return `
            <div>
                <h1> User From </h1>
                <div> User Name : ${this.model.get('name')}</div>
                <div> User Age : ${this.model.get('age')} </div>
                <input />
                <button class="change-name">change name</button>
                <button class="set-age">set age</button>
            </div>
        `;
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsmap = this.eventsmap();
        for(let eventkey in eventsmap) {
            const [eventName, selector] = eventkey.split(':');
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsmap[eventkey]);
            })
        }
    }

    bindModel(): void {
        this.model.on('change', () => this.render());
    }

    render() {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.templete();
        this.bindEvents(templateElement.content);
        this.parent.appendChild(templateElement.content);
    }
}