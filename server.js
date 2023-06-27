const express = require('express');
const path = require ('path');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;

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
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index route - Can replace layout with a different one
app.get('/', (req, res) => res.render('homepage'));

app.use('/character', require('./controllers/character'));
app.use('/users', require('./controllers/userRoutes'));



