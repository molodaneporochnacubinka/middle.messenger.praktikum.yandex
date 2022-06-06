import Block from "./Block";

export function renderDOM(rootSelector: string, component: Block) {
  const root = document.querySelector(rootSelector);

  if (!root) {
    throw new Error("Root is not found");
  }

  // @ts-ignore
  root.style.height = "100%";

  component.dispatchComponentDidMount();

  root.innerHTML = "";
  root.append(component.getContent()!);
}
