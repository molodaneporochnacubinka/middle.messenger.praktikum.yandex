import Block from '../../utils/Block';
import * as styles from './info.pcss';
import * as mainstyles from '../../layout/css/main.pcss';

interface InfoProps {
    label: string;
    name: string;
    value: string;
}

export class Info extends Block {

    constructor({label, name, value}: InfoProps) {
        super({
            label,
            name,
            value,
        });
    }

    render() {
        return `
        <div class="${styles.item}">
            <span class="${styles.info__name} ${mainstyles['text-m']}">{{label}}</span>
            <input class="${styles.info__value} ${mainstyles['text-m']}" type="text" {{readonly}} value={{value}} name={{name}}>
        </div>
        `;
    }
}