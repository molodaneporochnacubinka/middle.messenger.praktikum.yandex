import Block from "../../utils/Block";
import * as styles from "./message.pcss";
import * as mainstyles from "../../layout/css/main.pcss";

interface MessageProps {
  text: string;
  time: string;
  byUser: boolean;
  containerClass: string;
}

export class Message extends Block {
  static getComponentName = "Message";

  constructor({ text, time, byUser }: MessageProps) {
    super({
      text,
      time,
      byUser,
    });
  }

  render() {
    return `
        <div class="${styles.message__container} {{containerClass}}">
            {{#if byUser}}
                <div class="${styles.message} ${styles.user} ${styles.text}">
                    <div class="${styles.message__content} ${mainstyles["text-s-m"]}">
                        {{text}}
                    </div>
                    <div class="${styles.message__meta}">
                        <span class="${styles.message__read} ${styles.user}"></span>  
                        <span class="${styles.message__time} ${styles.user} ${mainstyles["text-s"]}">
                            {{time}}
                        </span>   
                    </div>      
                </div>  
            {{else}}
                <div class="${styles.message} ${styles.text}">
                    <div class="${styles.message__content} ${mainstyles["text-s-m"]}">
                        {{text}}
                    </div>
                    <div class="${styles.message__meta}">
                        <span class="${styles.message__read}"></span>  
                        <span class="${styles.message__time} ${mainstyles["text-s"]}">
                            {{time}}
                        </span>   
                    </div>      
                </div> 
            {{/if}}       
        </div>
        `;
  }
}
