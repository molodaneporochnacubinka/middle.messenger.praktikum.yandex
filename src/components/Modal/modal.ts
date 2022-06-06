import Block from "../../utils/Block";
import * as styles from "./modal.pcss";
import * as mainstyles from "../../layout/css/main.pcss";

interface ModalProps {
  title: string;
  load: boolean;
  buttonLabel: string;
}

export class Modal extends Block {
  static getComponentName = "Modal";

  constructor({ title, load, buttonLabel }: ModalProps) {
    super({
      title,
      load,
      buttonLabel,
    });
  }

  render() {
    return `
        <div class="${styles.modal}">
            <div class="${styles.modal__container}">
                <div class="${styles.modal__title} text-m-l">{{title}}</div>
                <form>
                    {{#if load }}
                        <div class="field">
                            <input class="field__load text-m" type="file" accept=".jpg, .jpeg, .png"><br>
                        </div>
                    {{else}}
                        {{{ Field }}}
                    {{/if}}
                    {{{ Button label=buttonLabel }}}
                </form>
                <div class="${styles.modal__subtitle}"></div>
            </div>
        </div>
        `;
  }
}
