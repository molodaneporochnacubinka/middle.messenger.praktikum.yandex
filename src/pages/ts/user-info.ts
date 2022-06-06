import ProfilePage from "../../modules/Profile";
import renderDOM from "../../utils/renderDOM";
import Button from "../../components/Button";
import Input from "../../components/Input";
import FormInfo from "../../components/FormInfo";
import Link from "../../components/Link";
import Modal from "../../components/Modal";
import registerComponent from "../../utils/registerComponent";
import data from "../../../data/data.json";

document.addEventListener("DOMContentLoaded", () => {
  registerComponent(Button);
  registerComponent(Input);
  registerComponent(FormInfo);
  registerComponent(Link);
  registerComponent(Modal);

  const profilePage = new ProfilePage({
    name: data.user.name,
    buttonLabel: "Сохранить",
    location: "user.html",
    changeMode: true,
    load: true,
    backLinkHref: "user.html",
    info: data.user.info,
    modalTitle: "Загрузите файл",
    links: [],
  });
  renderDOM("#app", profilePage);
});
