import Block from '../../utils/Block';
import * as styles from './field.pcss';
import * as mainstyles from '../../layout/css/main.pcss';

interface FieldProps {
    label: string;
    name: string;
}

export class Field extends Block {

    constructor({label, name}: FieldProps) {
        super({
            label,
            name,
            invalid: 0,
            events: {
                input: (event) => {
                    // @ts-ignore
                    this.value = event.target.value;
                }
            }
        });
    }

    setProps(nextProps: any) {
        // @ts-ignore
        nextProps.value = this.value;
        super.setProps(nextProps);
    }
    
    render() {
        return `
        <div class=${styles.field}>
            <span class="${styles.field__label} ${mainstyles['text-s']}">{{label}}</span><br>
            {{#if invalid}}
                <input class="${styles.field__input} ${mainstyles['text-m']} ${styles.invalid}" type="text" name={{name}} value='{{value}}'><br>
            {{else}}
                <input class="${styles.field__input} ${mainstyles['text-m']}" type="text" name={{name}} value='{{value}}'><br>
            {{/if}} 
        </div>
        `;
    }
}