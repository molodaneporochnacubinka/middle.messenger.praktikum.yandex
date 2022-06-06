import { ChatsPage } from "../../modules/Chats/chats";
import { renderDOM } from "../../utils/renderDOM";
import { Button } from "../../components/Button/button";
import { Input } from "../../components/Input/input";
import { Link } from "../../components/Link/link";
import { Chat } from "../../components/Chat/chat";
import { Message } from "../../components/Message/message";
import { MessageAttach } from "../../components/MessageAttach/message-attach";
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
