import { ChatsPage } from "../../modules/Chats/chats";
import { renderDOM } from "../../utils/renderDOM";
import { Button } from "../../components/Button/Button";
import { Link } from "../../components/Link/Link";
import { Chat } from "../../components/Chat/Chat";
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
