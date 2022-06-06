import ErrorPage from "../../modules/Error";
import renderDOM from "../../utils/renderDOM";
import Link from "../../components/Link";
import registerComponent from "../../utils/registerComponent";

document.addEventListener("DOMContentLoaded", () => {
  registerComponent(Link);
  const errorPage = new ErrorPage({
    title: "404",
    subtitle: "Не туда попали",
    linkText: "Назад к чатам",
    linkHref: "chats.html",
  });
  renderDOM("#app", errorPage);
});
