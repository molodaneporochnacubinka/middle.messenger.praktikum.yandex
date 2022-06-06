import Block from "../../utils/Block";
import * as styles from "./button.pcss";
import * as mainstyles from "../../layout/css/main.pcss";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export class Button extends Block {
  static getComponentName = "Button";

  constructor({ label, className, onClick }: ButtonProps) {
    super({
      label,
      className: styles[className],
      events: {
        click: onClick,
      },
    });
  }

  render() {
    return `
        <input class={{className}} ${mainstyles["text-m"]}" type="submit" value={{label}}>
        `;
  }
}
