const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers')

app.use('/users', require('./controllers');


// helpers
const hbs = exphbs.create({ helpers });



// const sess = {
//   secret: process.env.SUPER_SECRET,
//   cookie: {
//     maxAge: 300000,
//     httpOnly: true,
//     secure: false,
//     sameSite: 'strict',
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// Test DB
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

    sequelize.sync({force: false})
    .then(
        app.listen(PORT, console.log(`Server started on port ${PORT}`))
    );

app.use(express.urlencoded({ extended: true }));

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index route - Can replace layout with a different one
app.get('/', (req, res) => res.render('index', { layout: main}));
