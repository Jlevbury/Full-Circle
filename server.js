const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require ('path');
const helpers = require('./utils/helpers');

const sequelize = require('sequelize');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

const hbs = exphbs.create({ helpers });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('index'));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });
