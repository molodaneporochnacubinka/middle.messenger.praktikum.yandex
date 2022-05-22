
import Block from '../../utils/Block';
import * as styles from './error.pcss';
import * as mainstyles from '../../layout/css/main.pcss';

export class ErrorPage extends Block {
    constructor(props: { 
        title: string,
        subtitle: string,
        linkText: string,
        linkHref: string,
     }) {
        super({ ...props, onClick: (event) => {
            event.preventDefault();
        } });
    }

    render() {
return `
<main class="${mainstyles.theme_light} ${styles.layout} ${styles.error}">
    <h1 class="${styles.title_error} ${mainstyles['text-x-l']}">{{title}}</h1>
    <div class="${styles.subtitle_error} ${mainstyles['text-l']}">{{subtitle}}</div>
    {{{ Link href=linkHref text=linkText }}}
</main>
`
    }
}