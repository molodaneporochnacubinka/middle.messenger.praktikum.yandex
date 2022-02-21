const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const PORT = 3000;

const app = express();

app.use(express.static('dist'));

const hbs = expbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'src/layout'), 
  partialsDir: path.join(__dirname, 'src/components'), 
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('views', 'dist');
app.set('view engine', 'hbs');

app.use('/signin', function (request, response) {
  const signinFields = [
    {
      label: 'Email',
      name: 'email'
    },
    {
      label: 'Логин',
      name: 'login'
    },
    {
      label: 'Имя',
      name: 'first_name'
    },
    {
      label: 'Фамилия',
      name: 'second_name'
    },
    {
      label: 'Телефон',
      name: 'phone'
    },
    {
      label: 'Пароль',
      name: 'password'
    },
    {
      label: 'Пароль (ещё раз)',
      name: 'password'
    },
  ];
  response.render('login', {
    title: 'Регистрация',
    style: 'login.css',
    themeClass: 'theme_light',
    script: 'login.js',
    fields: signinFields,
    btnText: 'Зарегистрироваться',
    link: {
      href: './login',
      text: 'Войти'
    }
  });
})

app.use('/login', function (request, response) {
  const loginFields = [
    {
      label: 'Логин',
      name: 'login'
    },
    {
      label: 'Пароль',
      name: 'password'
    }
  ];
  response.render('login', {
    title: 'Авторизация',
    style: 'login.css',
    themeClass: 'theme_light',
    script: 'login.js',
    fields: loginFields,
    btnText: 'Войти',
    link: {
      href: './signin',
      text: 'Зарегистрироваться'
    }
  })
})

app.get('/chats', (request, response) => {
  const jsonPath = path.resolve(__dirname, 'data', 'data.json');
  const temPath = path.resolve(__dirname, 'data', 'data.json');
  const datajson = JSON.parse(fs.readFileSync(jsonPath, {encoding:'utf8'}));
  const chats = datajson.chats;
  response.render('chats', {
    title: 'Чаты',
    style: 'chats.css',
    themeClass: 'theme_light',
    script: 'chats.js',
    templateScript: 'chat_body.precompiled.js',
    chats: chats
  })
})


app.use('/profile', function (request, response) {
  const infoFields = [
    {
      label: 'Email',
      name: 'email',
      value: 'pochta@yandex.ru',
    },
    {
      label: 'Логин',
      name: 'login',
      value: 'ivanivanov@yandex.ru',
    },
    {
      label: 'Имя',
      name: 'first_name',
      value: 'Иван',
    },
    {
      label: 'Фамилия',
      name: 'second_name',
      value: 'Иванов',
    },
    {
      label: 'Имя в чате',
      name: '',
      value: 'Иван',
    },
    {
      label: 'Телефон',
      name: 'phone',
      value: '+7(909)-967-30-30',
    },
  ];
  response.render('profile', {
    title: 'Профиль',
    style: 'profile.css',
    script:  'profile.js',
    themeClass: 'theme_light',
    name: 'Иван',
    info: infoFields,
    href: './chats',
    changeMode: 0
  })
})

app.use('/info', function (request, response) {
  const infoFields = [
    {
      label: 'Email',
      name: 'email',
      value: 'pochta@yandex.ru',
    },
    {
      label: 'Логин',
      name: 'login',
      value: 'ivanivanov@yandex.ru',
    },
    {
      label: 'Имя',
      name: 'first_name',
      value: 'Иван',
    },
    {
      label: 'Фамилия',
      name: 'second_name',
      value: 'Иванов',
    },
    {
      label: 'Имя в чате',
      name: '',
      value: 'Иван',
    },
    {
      label: 'Телефон',
      name: 'phone',
      value: '+7(909)-967-30-30',
    },
  ];
  response.render('profile', {
    title: 'Изменить данные',
    style: 'profile.css',
    themeClass: 'theme_light',
    script: 'profile.js',
    name: 'Иван',
    info: infoFields,
    href: './profile',
    changeMode: 1
  })
})

app.use('/password', function (request, response) {
  const infoFields = [
    {
      label: 'Старый пароль',
      name: 'password',
      value: '•••••••••',
    },
    {
      label: 'Новый пароль',
      name: 'password',
      value: '••••••••••••',
    },
    {
      label: 'Повторите новый пароль',
      name: 'password',
      value: '••••••••••••',
    }
  ];
  response.render('profile', {
    title: 'Изменить пароль',
    style: 'profile.css',
    themeClass: 'theme_light',
    script: 'profile.js',
    name: 'Иван',
    info: infoFields,
    href: './profile',
    changeMode: 1
  })
})

app.use(function(err, request, response, next) {
  console.error(err.stack);
  response.status(500);
  response.render('500', { 
    url: request.url,
    style: 'error.css',
    themeClass: 'theme_light',
   });
});

app.get('/', (request, response) => {
  const loginFields = [
    {
      label: 'Логин',
      name: 'login'
    },
    {
      label: 'Пароль',
      name: 'password'
    }
  ];
  response.render('login', {
    title: 'Авторизация',
    style: 'login.css',
    themeClass: 'theme_light',
    script: 'login.js',
    fields: loginFields,
    btnText: 'Войти',
    link: {
      href: './signin',
      text: 'Зарегистрироваться'
    }
  })
})

app.use(function(request, response) {
  response.status(404);

  if (request.accepts('html')) {
    response.render('404', { 
      url: request.url,
      style: 'error.css',
      themeClass: 'theme_light',
     });
    return;
  }
});

app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});