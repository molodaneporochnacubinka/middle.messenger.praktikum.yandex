export function validate(name: string, value: string): boolean {
    if (name == 'login') {
        return /^[a-zA-Z0-9-_\.]{3,20}$/.test(value)
    }
    else if (name == 'email') {
        return /\S+@\S+\.\S+$/.test(value)
    }
    else if (name == 'first_name' || name == 'second_name') {
        return /^[А-ЯЁA-Z][а-яА-ЯёЁa-zA-Z-\.]+$/.test(value)
    }
    else if (name == 'password') {
        return /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(value)
    }
    else if (name == 'phone') {
        return /^(\+?)[0-9]{10,15}$/.test(value)
    }
    else if (name == 'message') {
        return /.+/.test(value)
    }
}