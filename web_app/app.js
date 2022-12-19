const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
});

app.get('/hi', (req, res) => {
  res.send('Hello World!');
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});