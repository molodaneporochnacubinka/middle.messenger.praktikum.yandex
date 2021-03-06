import Block from "./Block";

export default function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);

  if (!root) {
    throw new Error("Root is not found");
  }

  component.dispatchComponentDidMount();

  root.innerHTML = "";
  root.append(component.getContent()!);
}
