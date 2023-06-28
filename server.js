const express = require('express');
const path = require ('path');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')
const routes = require('./controllers')


// Passport Config
require('./config/passport')(passport);

// Database
const sequelize = require('./config/connection');

// Test DB
sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

    sequelize.sync({force: false})
    .then(
        app.listen(PORT, console.log(`Server started on port ${PORT}`))
    );

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Express Session
const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: true,
    saveUninitialized: true,
  };
  
  app.use(session(sess));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

  // Connect Flash
  app.use(flash());

  // Global Vars
  app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next();
  })

  

// Set static folder
app.use("/public", express.static(path.join(__dirname, 'public')));

// Index route - Can replace layout with a different one
//app.get('/', (req, res) => res.render('homepage'));
app.get('/', (req, res) => {
    res.render('homepage', { bgImage: '/public/assets/img/mountains__2_.png' });
});
//LOGIN PAGE BACKGROUND IMAGE ROUTE IS BELOW THIS COMMENT
app.get('login', (req, res) => {
    res.render('login', { bgImage: '/public/assets/img/other__11_.png' });
});
app.get('monsters', (req, res) => {
  res.render('monsters', { title: 'monsters', bgImage: '/public/assets/img/other__16_.png' })
});



app.use(routes);

