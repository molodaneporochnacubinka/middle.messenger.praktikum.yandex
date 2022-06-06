import { ProfilePage } from "../../modules/Profile/profile";
import { renderDOM } from "../../utils/renderDOM";
import { Button } from "../../components/Button/button";
import { Input } from "../../components/Input/input";
import { FormInfo } from "../../components/FormInfo/form-info";
import { Link } from "../../components/Link/link";
import registerComponent from "../../utils/registerComponent";
import data from "../../../data/data.json";

document.addEventListener("DOMContentLoaded", () => {
  registerComponent(Button);
  registerComponent(Input);
  registerComponent(FormInfo);
  registerComponent(Link);

  const profilePage = new ProfilePage({
    name: data.user.name,
    changeMode: false,
    backLinkHref: "chats-initial.html",
    info: data.user.info,
    modalTitle: "Загрузите файл",
    links: [
      {
        href: "user-info.html",
        text: "Изменить данные",
      },
      {
        href: "user-password.html",
        text: "Изменить пароль",
      },
      {
        href: "index.html",
        text: "Выйти",
        className: "cancel",
      },
    ],
  });
  renderDOM("#app", profilePage);
});
