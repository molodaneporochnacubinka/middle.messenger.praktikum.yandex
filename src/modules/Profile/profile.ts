import Block from "../../utils/Block";
import changeLocation from "../../utils/changeLocation";
import * as styles from "./profile.pcss";
import * as mainstyles from "../../layout/css/main.pcss";

interface ProfilePageProps {
  name: string;
  buttonLabel?: string;
  location?: string;
  changeMode: boolean;
  load?: boolean;
  backLinkHref: string;
  info: any;
  links?: Array<any>;
  modalTitle: string;
}

export class ProfilePage extends Block {
  constructor({ name, buttonLabel, location, changeMode, load, backLinkHref, info, links, modalTitle }: ProfilePageProps) {
    super({
      name,
      buttonLabel,
      location,
      changeMode,
      load,
      backLinkHref,
      info,
      links,
      modalTitle,
      onSubmit: (event) => {
        changeLocation(this.props.location);
      },
    });
  }

  render() {
    return `
<main class="${mainstyles.theme_light} ${styles.layout} ${styles.profile}">
  <div class="${styles.profile_sidebar}">
      <a class="${styles["link-back"]}" href={{backLinkHref}}></a> 
  </div>
  <div class="${styles.profile_container}">
      <div class="${styles.profile_content}">
          <button class="${styles.avatar_img}"></button>
          <div class="${styles.avatar_name} ${mainstyles["text-semi"]} ${mainstyles["text-m-l"]}">{{name}}</div>
          {{{ FormInfo info=info buttonLabel=buttonLabel onSubmit=onSubmit changeMode=changeMode}}}
          {{#if changeMode}}
          {{else}}
            <div class="${styles.profile_actions}">
                <nav class="${styles.profile_actions__nav}">
                    <ul class="${styles.profile_actions__list}">
                        {{#each links}}
                            <li class="${styles.item}">
                                {{{ Link href=this.href text=this.text className=this.className }}}
                            </li>
                        {{/each}}  
                    </ul>
                </nav>
            </div> 
          {{/if}}                      
    </div> 
  </div>
  {{{ Modal title=modalTitle load=load }}}
</main>
`;
  }
}
