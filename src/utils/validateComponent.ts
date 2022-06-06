import { validate } from "./validate";
import Block from "./Block";
import Input from "../components/Input";

export default function validateComponent(component: Block): any {
  const data = {};
  let valid = true;
  for (const child in component.children) {
    const childComponent = component.children[child];
    if (childComponent instanceof Input) {
      const { name } = childComponent.props;
      const { value } = childComponent;
      if (!validate(name, value)) {
        valid = false;
        childComponent.addInvalid();
      } else {
        childComponent.removeInvalid();
      }
      data[name] = value;
    }
  }
  return { valid, data };
}
