import { validate } from "./validate";
import Form from "../components/Form";
import FormInfo from "../components/FormInfo";
import Input from "../components/Input";

export function validateForm(form: Form | FormInfo): any {
  const data = {};
  let valid = true;
  for (const child in form.children) {
    const component = form.children[child];
    if (component instanceof Input) {
      const { name } = component.props;
      const { value } = component;
      if (!validate(name, value)) {
        valid = false;
        component.addInvalid();
      } else {
        component.removeInvalid();
      }
      data[name] = value;
    }
  }
  return { valid, data };
}
