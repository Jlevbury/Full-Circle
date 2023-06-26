const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;

// Database
const db = require('./config/connection');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('INDEX'));

app.use('/character', require('./controllers/character'));


app.listen(PORT, console.log(`Server started on port ${PORT}`));

