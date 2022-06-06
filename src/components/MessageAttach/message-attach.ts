import Block from "../../utils/Block";
import { getTime } from "../../utils/getTime";
import * as styles from "../Message/message.pcss";
import * as mainstyles from "../../layout/css/main.pcss";

interface MessageAttachProps {
  attach: string;
  time: string;
  byUser: boolean;
}

export class MessageAttach extends Block {
  static getComponentName = "MessageAttach";

  constructor({ attach, time, byUser }: MessageAttachProps) {
    super({
      attach,
      time: getTime(time),
      byUser,
    });
  }

  render() {
    return `
        <div class="${styles.message__container}">
            <div class="${styles.message} ${styles.img}">
                <img src={{attach}}>
                <div class="${styles.message__meta}">
                    {{#if byUser}}
                        <span class="${styles.message__read} ${styles.user}"></span>  
                        <span class="${styles.message__time} ${styles.user} ${mainstyles["text-s"]}">
                            {{time}}
                        </span> 
                    {{else}}
                        <span class="${styles.message__read}"></span>  
                        <span class="${styles.message__time} ${mainstyles["text-s"]}">
                            {{time}}
                        </span> 
                    {{/if}}  
                </div>
            </div>    
        </div>`;
  }
}
