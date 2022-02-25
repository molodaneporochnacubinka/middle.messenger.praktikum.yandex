const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  res.redirect('./500.html');
});
app.use((req, res) => {
  res.redirect('./404.html');
})

app.listen(PORT, () => {
  console.log(`Мой текст в логе после запуска ${PORT}!`);
});