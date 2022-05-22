import Block from './Block';
import {HelperOptions} from 'handlebars';
import Handlebars from 'handlebars';


interface BlockConstructable<Props = any> {
  new(props: Props): Block;
}

export default function registerComponent<Props = any>(Component: BlockConstructable) {
  Handlebars.registerHelper(Component.name, function ({ hash, data }: HelperOptions) {
    if (!data.root.children) {
      data.root.children = {};
    }

    const { children, refs } = data.root;

    const component = new Component(hash);

    children[component.id] = component;

    return `<div data-id="id-${component.id}"></div>`;
  })
}