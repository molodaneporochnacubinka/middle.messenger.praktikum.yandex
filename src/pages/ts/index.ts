import LoginPage from "../../modules/Login";
import renderDOM from "../../utils/renderDOM";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Form from "../../components/Form";
import registerComponent from "../../utils/registerComponent";

document.addEventListener("DOMContentLoaded", () => {
  registerComponent(Button);
  registerComponent(Input);
  registerComponent(Link);
  registerComponent(Form);

  const loginPage = new LoginPage({
    title: "Авторизация",
    buttonLabel: "Войти",
    linkText: "Зарегистрироваться",
    linkHref: "sign-up.html",
    location: "chats-initial.html",
    fields: [
      {
        label: "Логин",
        name: "login",
      },
      {
        label: "Пароль",
        name: "password",
      },
    ],
  });
  renderDOM("#app", loginPage);
});
