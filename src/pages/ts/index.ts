import { LoginPage } from '../../modules/Login/login';
import { renderDOM } from '../../utils/renderDOM';
import { Button } from '../../components/Button/Button';
import Field from '../../components/Field';
import Link from '../../components/Link';
import Form from '../../components/Form';
import registerComponent from '../../utils/registerComponent';

document.addEventListener('DOMContentLoaded', () => {
    registerComponent(Button);
    registerComponent(Field);
    registerComponent(Link);
    registerComponent(Form);

    const loginPage = new LoginPage({
        title: 'Авторизация',
        buttonLabel: 'Войти',
        linkText: 'Зарегистрироваться',
        linkHref: 'sign-up.html',
        location: 'chats-initial.html',
        fields: [
            {
                label: 'Логин',
                name: 'login',
            },
            {
                label: 'Пароль',
                name: 'password',
            }
        ]

    });

    renderDOM('#app', loginPage);

    setTimeout( () => {
        // loginPage.setProps({ 
        //     buttonLabel: 'Click me please'
        // });
    }, 3000);
});