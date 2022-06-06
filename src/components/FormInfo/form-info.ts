import Block from "../../utils/Block";
import * as styles from "./form-info.pcss";
import { validateComponent } from "../../utils/validateComponent";
import * as mainstyles from "../../layout/css/main.pcss";

interface FormInfoProps {
  info: Array<any>;
  buttonLabel: string;
  changeMode: boolean;
  onSubmit?: () => void;
}

export class FormInfo extends Block {
  static getComponentName = "FormInfo";

  constructor({ info, buttonLabel, changeMode, onSubmit }: FormInfoProps) {
    super({
      info,
      buttonLabel,
      changeMode,
      events: {
        submit: (event) => {
          event.preventDefault();
          const { valid, data } = validateComponent(this);
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
        <form class="${styles.profile_info}">
            <div class="${styles.profile_info_content}">
                {{#if changeMode}}
                     {{#each info}}
                        <div class="${styles.item}">
                            <span class="${styles.info__name} ${mainstyles["text-m"]}">{{this.label}}</span>
                            {{{ Input name=this.name className="info__value" value=this.value }}}
                        </div>
                    {{/each}}
                {{else}}
                    {{#each info}}
                        <div class="${styles.item}">
                            <span class="${styles.info__name} ${mainstyles["text-m"]}">{{this.label}}</span>
                            {{{ Input name=this.name className="info__value" type=this.type value=this.value readonly="readonly" }}}
                        </div>
                    {{/each}}
                {{/if}}           
            </div>
            {{#if changeMode}}
                {{{ Button className="button" label=buttonLabel }}}
            {{/if}}
        </form>
        `;
  }
}
