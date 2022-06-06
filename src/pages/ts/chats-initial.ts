import ChatsPage from "../../modules/Chats";
import renderDOM from "../../utils/renderDOM";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Chat from "../../components/Chat";
import registerComponent from "../../utils/registerComponent";
import data from "../../../data/data.json";

document.addEventListener("DOMContentLoaded", () => {
  registerComponent(Button);
  registerComponent(Link);
  registerComponent(Chat);

  const { chats } = data;

  const chatsPage = new ChatsPage({
    linkText: "Профиль >",
    linkHref: "user.html",
    linkClass: "sidebar",
    searchText: "Поиск",
    chats,
    initial: true,
    emptyText: "Выберите чат, чтобы отправить сообщение",
  });
  renderDOM("#app", chatsPage);
});
