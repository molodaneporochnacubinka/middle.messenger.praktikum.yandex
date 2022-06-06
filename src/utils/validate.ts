export function validate(name: string, value: string): boolean {
  if (value === undefined) {
    return false;
  }
  switch (name) {
    case "login":
      return /^[a-zA-Z0-9-_\.]{3,20}$/.test(value);  
    case "email":
      return /\S+@\S+\.\S+$/.test(value);
    case "first_name":
      return /^[А-ЯЁA-Z][а-яА-ЯёЁa-zA-Z-\.]+$/.test(value);
    case "second_name":
      return /^[А-ЯЁA-Z][а-яА-ЯёЁa-zA-Z-\.]+$/.test(value);
    case "password":
      return /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value);
    case "phone":
      return /^(\+?)[0-9-\(\)]{10,16}$/.test(value);
    case "message":
      return /.+/.test(value);
  }
}
