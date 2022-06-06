import Block from "../../utils/Block";
import { validate } from "../../utils/validate";
import * as styles from "./input.pcss";
import * as mainstyles from "../../layout/css/main.pcss";

interface InputProps {
  name: string;
  className: string;
  value?: string;
  placeholder?: string;
  readonly?: string;
}

export class Input extends Block {
  static getComponentName = "Input";

  value = "";

  constructor({ name, className, value, placeholder, readonly }: InputProps) {
    super({
      name,
      className: styles[className],
      value,
      placeholder,
      readonly,
      invalidClass: styles.invalid,
      events: {
        input: (event) => {
          this.value = event.target.value;
        },
        focus: () => {
          if (this.props.readonly) {
            return;
          }
          this.removeInvalid();
        },
        blur: () => {
          if (this.props.readonly) {
            return;
          }
          if (!validate(this.props.name, this.value)) {
            this.addInvalid();
          } else {
            this.removeInvalid();
          }
        },
      },
    });

    if (value) {
      this.value = value;
    }
  }

  addInvalid() {
    this.element.classList.add(this.props.invalidClass);
  }

  removeInvalid() {
    this.element.classList.remove(this.props.invalidClass);
  }

  render() {
    if (this.props.readonly != undefined) {
      return `<input class="{{className}} ${mainstyles["text-m"]}" type="text" name='{{name}}' value='{{value}}' placeholder='{{placeholder}}' readonly="readonly"><br>`;
    }
    if (this.props.name == "password") {
      return `<input class="{{className}} ${mainstyles["text-m"]}" type="password" name='{{name}}' value='{{value}}' placeholder='{{placeholder}}'><br>`;
    }
    return `<input class="{{className}} ${mainstyles["text-m"]}" type="text" name='{{name}}' value='{{value}}' placeholder='{{placeholder}}'><br>`;
  }
}
