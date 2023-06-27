const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Character = require('../models/Character');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { ensureAuthenticated } = require('../config/auth');

router.get('/', ensureAuthenticated, (req, res) => 
Character.findAll()
    .then(characters => {
            res.render('characters', {
            characters: characters.map(character => character.get({
                plain: true
            }))
            })
        })
    
    .catch(err => console.log(err))
);

router.get('/:id', ensureAuthenticated, (req, res) => {
Character.findByPk(req.params.id)
.then(characters => {
    res.render('singleCharacter', {
        characters
        })
    })
    .catch(err => console.log(err))
});

//Display Character Creation Form

router.get('/create', ensureAuthenticated, (req,res) => res.render('create'));



router.post('/create', (req, res) => {
    const { name, character_class } = req.body;
    let errors = [];
    //Validate fields
    
    if(!name) {
        errors.push({ text: 'Please add a character name'})
    }
    if(!character_class) {
        errors.push({ text: 'Please add a character description'})
    }

    //Check for errors
    if(errors.length > 0) {
        console.log('error');
        res.render('create', {
            errors,
            name,
            character_class
        })
    } else {
        
        Character.create({
            name,
            character_class
        })
        .then(characters => res.redirect('/character'))
        .catch(err => console.log(err))
    }
})

// Search for characters


router.get('/search', ensureAuthenticated, (req, res) => {
    let { term } = req.query;
    
//Make Lowercase
    term = term.toLowerCase();

    Character.findAll({ where: {
        character_class: { [Op.like]: '%' + term + '%' }
    } })
  
    .then(characters => res.render('characters', { characters }))
    .catch(err => console.log(err))
});

module.exports = router;