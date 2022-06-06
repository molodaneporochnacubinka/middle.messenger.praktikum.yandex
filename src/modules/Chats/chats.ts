import Block from "../../utils/Block";
import { validateComponent } from "../../utils/validateComponent";
import * as styles from "./chats.pcss";
import * as mainstyles from "../../layout/css/main.pcss";

interface ChatsPageProps {
    linkText: string;
    linkHref: string;
    linkClass: string;
    searchText: string;
    chats: Array<any>;
    initial: boolean;
    emptyText?: string;
    messages?: Array<any>;
    messageText?: string;
    btnClassName?: string;
    chatAvatar?: string;
    chatName?: string;
}

export class ChatsPage extends Block {
    constructor({ linkText, linkHref, linkClass, searchText, chats, initial, emptyText, messages, messageText, btnClassName, chatAvatar, chatName }: ChatsPageProps) {
    super({
        linkText,
        linkHref,
        linkClass,
        searchText,
        chats,
        initial,
        emptyText,
        messages,
        messageText,
        btnClassName,
        chatAvatar,
        chatName,
        onClick: (event) => {
            const { valid, data } = validateComponent(this);
            console.log(data);
        }
    });
  }
  render() {
    return `
<main class="${mainstyles.theme_light} ${styles.layout} ${styles.chats}">
    <div class="${styles.sidebar}">
        {{{ Link href=linkHref text=linkText className=linkClass }}}
    <br>
    <div class="${styles.chats__search__container}">
        <input class="${styles.chats__search} ${mainstyles["text-m"]}" type="text" name="search" placeholder={{searchText}} onfocus="this.placeholder=''" onblur="this.placeholder={{searchText}}">
    </div>
    <nav>
        <ul>
            {{#each chats}}                       
                {{{  Chat name = this.name  isLast = this.isLast message = this.message time = this.time notes = this.notes }}}
            {{/each}}
        </ul>
    </nav>
    </div>
    {{#if initial}}
        <div class="${styles.chat_body} ${styles.empty} ${mainstyles["text-m"]}">
            {{emptyText}}
        </div>
    {{else}}
        <div class="${styles.chat_body}">
            <div class="${styles.chat_body__header}">
                <div class="${styles.chat_body__avatar}">
                    <div class="${styles.chat_body__avatar_img}">{{chatAvatar}}</div>
                    <div class="${styles.chat_body__avatar_name} ${mainstyles["text-m"]} ${mainstyles["text-semi"]}">{{chatName}}</div>
                </div>
                <button class="${styles.chat_body__menu}"></button>
            </div>
            <div class="${styles.chat_body__content}">
                <div class="${styles.chat__date} ${mainstyles["text-s-m"]}">19 июня</div>
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
                {{{ Input name="message" className="chat_body__message" placeholder=messageText }}}
                {{{ Button className=btnClassName label='' onClick=onClick }}}
            </div>
        </div>
        {{/if}} 
    </main>
`;
  }
}
