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

  const info = [
    {
      label: "Старый пароль",
      name: "password",
      value: data.user.password,
    },
    {
      label: "Новый пароль",
      name: "password",
      value: "8Kdhjhnkjnk",
    },
    {
      label: "Повторите новый пароль",
      name: "password",
      value: "8Kdhjhnkjnk",
    },
  ];

  const profilePage = new ProfilePage({
    name: data.user.name,
    buttonLabel: "Сохранить",
    location: "user.html",
    changeMode: true,
    backLinkHref: "user.html",
    info,
    modalTitle: "Загрузите файл",
  });
  renderDOM("#app", profilePage);
});
