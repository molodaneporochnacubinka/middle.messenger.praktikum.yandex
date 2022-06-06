import Block from "../../utils/Block";
import * as styles from "./button.pcss";
import * as mainstyles from "../../layout/css/main.pcss";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export class Button extends Block {
  static getComponentName = "Button";

  constructor({ label, onClick }: ButtonProps) {
    super({
      label,
      events: {
        click: onClick,
      },
    });
  }

  render() {
    return `
        <input class="${styles.button} ${mainstyles["text-m"]}" type="submit" value={{label}}>
        `;
  }
}
