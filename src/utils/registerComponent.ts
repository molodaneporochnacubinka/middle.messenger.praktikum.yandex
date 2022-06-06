import Handlebars, { HelperOptions } from "handlebars";
import Block from "./Block";

interface BlockConstructable<Props = any> {
  getComponentName: string;
  new (props: Props): Block;
}

export default function registerComponent<Props = any>(
  Component: BlockConstructable
) {
  Handlebars.registerHelper(
    Component.getComponentName,
    ({ hash, data }: HelperOptions) => {
      if (!data.root.children) {
        data.root.children = {};
      }

      const { children, refs } = data.root;

      const component = new Component(hash);

      children[component.id] = component;

      return `<div data-id="id-${component.id}"></div>`;
    }
  );
}
