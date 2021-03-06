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
    title: "Регистрация",
    buttonLabel: "Зарегистрироваться",
    linkText: "Войти",
    linkHref: "index.html",
    location: "index.html",
    fields: [
      {
        label: "Email",
        name: "email",
      },
      {
        label: "Логин",
        name: "login",
      },
      {
        label: "Имя",
        name: "first_name",
      },
      {
        label: "Фамилия",
        name: "second_name",
      },
      {
        label: "Телефон",
        name: "phone",
      },
      {
        label: "Пароль",
        name: "password",
      },
      {
        label: "Пароль (ещё раз)",
        name: "password",
      },
    ],
  });
  renderDOM("#app", loginPage);
});
