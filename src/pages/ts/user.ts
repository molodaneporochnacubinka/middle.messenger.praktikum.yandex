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

    const profilePage = new ProfilePage({
        name: data.user.name,
        changeMode: 0,
        backLinkHref: 'chats-initial.html',
        info: data.user.info,
        modalTitle: 'Загрузите файл',
        links: [
            {
                href: 'user-info.html',
                text: 'Изменить данные'
            },
            {
                href: 'user-password.html',
                text: 'Изменить пароль'
            },
            {
                href: 'index.html',
                text: 'Выйти',
                className: 'cancel'
            },
        ]
    });
    renderDOM('#app', profilePage);

    setTimeout( () => {
        // profilePage.setProps({ 
        //     name: 'Рада'
        // });
    }, 3000);
});