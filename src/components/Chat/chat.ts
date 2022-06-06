import Block from "../../utils/Block";
import { changeLocation } from "../../utils/changeLocation";
import * as styles from "./chat.pcss";
import * as mainstyles from "../../layout/css/main.pcss";

interface ChatProps {
  name: string;
  isLast?: boolean;
  message: string;
  time: string;
  notes: string;
  onClick?: (event) => void;
}

export class Chat extends Block {
  static getComponentName = "Chat";

  constructor({ name, isLast, message, time, notes, onClick }: ChatProps) {
    console.log(onClick);
    super({
      name,
      isLast,
      message,
      time,
      notes,
      events: {
        click: (event) => {
            console.log(this);
            const prevChat = document.querySelector(`.${styles.chat}.${styles.active}`);
             if (prevChat) {
                 prevChat.classList.remove(`${styles.active}`);
            }
            this.element.classList.add(`${styles.active}`);
            changeLocation('chats.html');
        },
      },
    });
  }

  render() {
    return `
        <li class="${styles.chat}">
            <div class="${styles.chat__avatar}"></div>
            <div class="${styles.chat__text}">
                <div class="${mainstyles["text-m"]} ${mainstyles["text-semi"]}">{{name}}</div>
                <div class="${styles.chat__message} ${mainstyles["text-s-m"]}">
                    {{#if isLast}}
                        <span class="${styles.chat__author}">Вы: </span>
                    {{/if}}
                    <span>{{message}}</span>
                </div>
            </div>
            <div class="${styles.chat__time} ${mainstyles["text-s"]}">{{time}}</div>
            {{#if notes}}
                <div class="${styles.chat__notes} ${mainstyles["text-s-m"]}">{{notes}}</div>
            {{/if}}   
        </li>
        `;
  }
}
