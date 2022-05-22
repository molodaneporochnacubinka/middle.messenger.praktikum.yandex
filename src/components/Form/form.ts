import Block from '../../utils/Block';
import * as styles from './form.pcss';
import { validate } from '../../utils/validate';
import Field from '../Field';

function validateForm(form: Form): any {
    const data = {};
    let valid = true;
    // @ts-ignore
    for (let child in form.children) {
        // @ts-ignore
        let component = form.children[child];
        if (component instanceof Field) {   
            // @ts-ignore
            const name = component.props.name;
            // @ts-ignore
            const value = component.props.value;                
            if (!validate(name, value)) {
                valid = false;
                component.setProps({invalid: 1});
            }
            else {
                component.setProps({invalid: 0});
            }
            data[name] = value;
        }
    }
    if (valid) {
        return data;
    }
    return valid;
}

interface FormProps {
    fields: Array<any>;
    buttonLabel: string;
    linkHref?: string;
    linkText?: string;
    onSubmit?: () => void;
}

export class Form extends Block {

    constructor({fields, buttonLabel, linkHref, linkText, onSubmit}: FormProps) {
        super({
            fields,
            buttonLabel,
            linkHref,
            linkText,
            events: 
            {
                submit: (event) => {
    
                    event.preventDefault();
                    const valid = validateForm(this);
                    console.log(valid);
                    if (valid) {
                        console.log(valid);
                        onSubmit();
                    }
                },
                focus: (event) => {
                    validateForm(this);
                },
                blur: (event) => {
                    validateForm(this);
                },
            }
        });
    }

    render() {
        return `
        <form class="${styles.form} ${styles.login}">
            {{#each fields}}
                {{{ Field label=this.label name=this.name }}}
            {{/each}}
            {{{ Button label=buttonLabel }}} 
            {{{ Link href=linkHref text=linkText }}}       
        </form>    
        `;
    }
}