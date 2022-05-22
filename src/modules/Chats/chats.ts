
import Block from '../../utils/Block';
import { changeLocation } from '../../utils/changeLocation';
import * as styles from './chats.pcss';
import * as mainstyles from '../../layout/css/main.pcss';

export class ChatsPage extends Block {
    constructor(props: { 
        linkText: string,
        linkHref: string,
        linkClass: string,
        searchText: string,
        chats: Array<any>,
        initial: 0 | 1,
        emptyText?: string,
        messages?: Array<any>,
        messageText?: string,
        chatAvatar?: string,
        chatName?: string,
     }) {
        super({ ...props, onClick: (event) => {
            console.log('Click');
        } });
    }

    render() {
return `
<main class="${mainstyles.theme_light} ${styles.layout} ${styles.chats}">
    <div class="${styles.sidebar}">
        {{{ Link href=linkHref text=linkText className=linkClass }}}
    <br>
    <div class="${styles.chats__search__container}">
        <input class="${styles.chats__search} ${mainstyles['text-m']}" type="text" name="search" placeholder={{searchText}} onfocus="this.placeholder=''" onblur="this.placeholder={{searchText}}">
    </div>
    <nav>
        <ul class="${styles.chats__list}">
            {{#each chats}}                       
                {{{  Chat name = this.name  isLast = this.isLast message = this.message time = this.time notes = this.notes onClick=onClick }}}
            {{/each}}
        </ul>
    </nav>
    </div>
    {{#if initial}}
        <div class="${styles.chat_body} ${styles.empty} ${mainstyles['text-m']}">
            {{emptyText}}
        </div>
    {{else}}
        <div class="${styles.chat_body}">
            <div class="${styles.chat_body__header}">
                <div class="${styles.chat_body__avatar}">
                    <div class="${styles.chat_body__avatar_img}">{{chatAvatar}}</div>
                    <div class="${styles.chat_body__avatar_name} ${mainstyles['text-m']} ${mainstyles['text-semi']}">{{chatName}}</div>
                </div>
                <button class="${styles.chat_body__menu}"></button>
            </div>
            <div class="${styles.chat_body__content}">
                <div class="${styles.chat__date} ${mainstyles['text-s-m']}">19 июня</div>
                {{#each messages}}
                    {{#if this.attach}}
                        {{{ MessageAttach attach=this.attach byUser=this.byUser time=this.date }}}
                    {{else}}
                        {{#if @first}}
                            {{{ Message text = this.text byUser=this.byUser containerClass="group" time=this.date }}}
                        {{else}}
                            {{{ Message text = this.text byUser=this.byUser time=this.date }}}
                        {{/if}}
                    {{/if}}
                {{/each}}
            </div>
            <div class="${styles.chat_body__footer}">
                <button class="${styles.chat_body__attach}"></button>
                <input class="${styles.chat_body__message} ${mainstyles['text-m']}" type="text" name="message" placeholder={{messageText}} onfocus="this.placeholder=''" onblur="this.placeholder={{messageText}}">
                <button class="${styles.chat_body__send}"></button>
            </div>
        </div>
        {{/if}} 
    </main>
`
    }
}