import Block from '../../utils/Block';
import * as styles from '../Message/message.pcss';
import * as mainstyles from '../../layout/css/main.pcss';

interface MessageAttachProps {
    attach: string;
    time: string;
    byUser: 0 | 1;
}

export class MessageAttach extends Block {

    constructor({attach, time, byUser}: MessageAttachProps) {
        super({
            attach,
            time,
            byUser     
        });
    }


    render() {
        return `
        <div class="${styles.message__container}">
            <div class="${styles.message} ${styles.img}">
                <img class="${styles.message__content}" src={{attach}}>
                <div class="${styles.message__meta}">
                    {{#if byUser}}
                        <span class="${styles.message__read} ${styles.user}"></span>  
                        <span class="${styles.message__time} ${styles.user} ${mainstyles['text-s']}">
                            {{time}}
                        </span> 
                    {{else}}
                        <span class="${styles.message__read}"></span>  
                        <span class="${styles.message__time} ${mainstyles['text-s']}">
                            {{time}}
                        </span> 
                    {{/if}}  
                </div>
            </div>    
        </div>`;
    }
}