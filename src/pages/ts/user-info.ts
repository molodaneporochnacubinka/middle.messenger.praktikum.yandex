import { ProfilePage } from '../../modules/Profile/profile';
import { renderDOM } from '../../utils/renderDOM';
import { Button } from '../../components/Button/Button';
import { Info } from '../../components/Info/Info';
import { Link } from '../../components/Link/Link';
import { Modal } from '../../components/Modal/Modal';
import registerComponent from '../../utils/registerComponent';
import data from '../../../data/data.json';

document.addEventListener('DOMContentLoaded', () => {
    registerComponent(Button);
    registerComponent(Info);
    registerComponent(Link);
    registerComponent(Modal);

    const profilePage = new ProfilePage({
        name: data.user.name,
        buttonLabel: 'Сохранить',
        location: 'user.html',
        changeMode: 1,
        load: 1,
        backLinkHref: 'user.html',
        info: data.user.info,
        modalTitle: 'Загрузите файл',
        links: []
    });
    renderDOM('#app', profilePage);
});