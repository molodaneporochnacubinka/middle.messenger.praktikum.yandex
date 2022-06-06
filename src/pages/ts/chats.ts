import ChatsPage from "../../modules/Chats";
import renderDOM from "../../utils/renderDOM";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import Chat from "../../components/Chat";
import Message from "../../components/Message";
import MessageAttach from "../../components/MessageAttach";
import registerComponent from "../../utils/registerComponent";
import data from "../../../data/data.json";

document.addEventListener("DOMContentLoaded", () => {
  registerComponent(Button);
  registerComponent(Input);
  registerComponent(Link);
  registerComponent(Chat);
  registerComponent(Message);
  registerComponent(MessageAttach);

  const { chats } = data;

  const chatsPage = new ChatsPage({
    linkText: "Профиль >",
    linkHref: "user.html",
    linkClass: "sidebar",
    searchText: "Поиск",
    chats,
    initial: false,
    messages: chats[3].messages,
    messageText: "Сообщение",
    btnClassName: "chat_body__send",
    chatAvatar: "",
    chatName: chats[3].name,
  });
  renderDOM("#app", chatsPage);
});
