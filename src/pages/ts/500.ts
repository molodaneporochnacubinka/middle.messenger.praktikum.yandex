import { ErrorPage } from "../../modules/Error/error";
import { renderDOM } from "../../utils/renderDOM";
import Link from "../../components/Link";
import registerComponent from "../../utils/registerComponent";

document.addEventListener("DOMContentLoaded", () => {
  registerComponent(Link);
  const errorPage = new ErrorPage({
    title: "500",
    subtitle: "Мы уже фиксим",
    linkText: "Назад к чатам",
    linkHref: "chats.html",
  });
  renderDOM("#app", errorPage);
});
