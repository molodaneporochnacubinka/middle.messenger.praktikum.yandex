import Block from '../../utils/Block';
import { changeLocation } from '../../utils/changeLocation';
import * as styles from './chat.pcss';
import * as mainstyles from '../../layout/css/main.pcss';

interface ChatProps {
    name: string;
    isLast?: 0 | 1;
    message: string;
    time: string;
    notes: string;
    onClick?: (event) => void;
}

export class Chat extends Block {

    constructor({name, isLast, message, time, notes, onClick}: ChatProps) {
        super({
            name,
            isLast,
            message,
            time,
            notes,
            events: {
                click: onClick
                // click: (event) => {
                //     console.log(event.target);
                //     const prevChat = document.querySelector(`.${styles.chat}.${styles.active}`);
                //      if (prevChat) {
                //          prevChat.classList.remove(`${styles.active}`);
                //     }
                //     event.target.classList.add(`${styles.active}`);
                // },
            }
        });
    }

    render() {
        return `
        <li class="${styles.chat}">
            <div class="${styles.chat__avatar}"></div>
            <div class="${styles.chat__text}">
                <div class="${styles.chat__name} ${mainstyles['text-m']} ${mainstyles['text-semi']}">{{name}}</div>
                <div class="${styles.chat__message} ${mainstyles['text-s-m']}">
                    {{#if isLast}}
                        <span class="${styles.chat__author}">Вы: </span>
                    {{/if}}
                    <span>{{message}}</span>
                </div>
            </div>
            <div class="${styles.chat__time} ${mainstyles['text-s']}">{{time}}</div>
            {{#if notes}}
                <div class="${styles.chat__notes} ${mainstyles['text-s-m']}">{{notes}}</div>
            {{/if}}   
        </li>
        `;
    }
}