import { ProfilePage } from '../../modules/Profile/profile';
import { renderDOM } from '../../utils/renderDOM';
import { Button } from '../../components/Button/button';
import { Info } from '../../components/Info/info';
import { Link } from '../../components/Link/link';
import registerComponent from '../../utils/registerComponent';
import data from '../../../data/data.json';

document.addEventListener('DOMContentLoaded', () => {

    registerComponent(Button);
    registerComponent(Info);
    registerComponent(Link);

    const info = [
        {
            label: 'Старый пароль',
            name: 'password',
            value: data.user.password
        },
        {
            label: 'Новый пароль',
            name: 'password',
            value: '••••••••••••'
        },
        {
            label: 'Повторите новый пароль',
            name: 'password',
            value: '••••••••••••'
        }
    ];

    const profilePage = new ProfilePage({
        name: data.user.name,
        buttonLabel: 'Сохранить',
        location: 'user.html',
        changeMode: 1,
        backLinkHref: 'user.html',
        info: info,
        modalTitle: 'Загрузите файл'
    });
    renderDOM('#app', profilePage);
});