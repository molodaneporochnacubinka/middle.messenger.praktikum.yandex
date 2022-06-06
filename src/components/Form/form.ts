import Block from "../../utils/Block";
import * as styles from "./form.pcss";
import { validateForm } from "../../utils/validateForm";
import * as mainstyles from "../../layout/css/main.pcss";

interface FormProps {
  fields: Array<any>;
  buttonLabel: string;
  linkHref?: string;
  linkText?: string;
  onSubmit?: () => void;
}

export class Form extends Block {
  static getComponentName = "Form";

  constructor({
    fields,
    buttonLabel,
    linkHref,
    linkText,
    onSubmit,
  }: FormProps) {
    super({
      fields,
      buttonLabel,
      linkHref,
      linkText,
      events: {
        submit: (event) => {
          event.preventDefault();
          const { valid, data } = validateForm(this);
          console.log(data);
          if (valid) {
            onSubmit();
          }
        },
      },
    });
  }

  render() {
    return `
        <form class="${styles.form}">
            {{#each fields}}
                <div class=${styles.field}>
                    <span class="${styles.field__label} ${mainstyles["text-s"]}">{{this.label}}</span><br>
                    {{{ Input name=this.name className="field__input" type=this.type value=this.value }}}
                </div>
            {{/each}}
            {{{ Button label=buttonLabel }}} 
            {{{ Link href=linkHref text=linkText }}}       
        </form>    
        `;
  }
}
