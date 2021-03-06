import Block from "../../utils/Block";
import changeLocation from "../../utils/changeLocation";
import * as styles from "./login.pcss";
import * as mainstyles from "../../layout/css/main.pcss";

interface LoginPageProps {
  title: string;
  buttonLabel: string;
  linkText: string;
  linkHref: string;
  location: string;
  fields: Array<any>;
}

export class LoginPage extends Block {
  constructor({ title, buttonLabel, linkText, linkHref, location, fields }: LoginPageProps) {
    super({
      title,
      buttonLabel,
      linkText,
      linkHref,
      location,
      fields,
      onSubmit: () => {
        changeLocation(this.props.location);
      },
    });
  }

  render() {
    return `
<main class="${mainstyles.theme_light} ${styles.layout} ${styles.login}">
  <div class="${styles.form__container}">
    <h1 class="${styles.form__title} ${mainstyles["text-l"]}">{{title}}</h1>
    {{{ Form fields=fields buttonLabel=buttonLabel linkHref=linkHref linkText=linkText onSubmit=onSubmit }}}
  </div> 
</main>
`;
  }
}
