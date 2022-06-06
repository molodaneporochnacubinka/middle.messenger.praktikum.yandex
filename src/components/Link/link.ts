import Block from "../../utils/Block";
import * as styles from "./link.pcss";
import * as mainstyles from "../../layout/css/main.pcss";

interface LinkProps {
  href: string;
  text: string;
  className?: string;
}

export class Link extends Block {
  static getComponentName = "Link";

  constructor({ href, text, className }: LinkProps) {
    super({
      href,
      text,
      className: styles[className],
    });
  }

  render() {
    return `
        <a class="${styles.link} ${mainstyles["text-s-m"]} {{className}}" href="{{href}}">{{text}}</a>
        `;
  }
}
