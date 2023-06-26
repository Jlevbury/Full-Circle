const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Character = require('../models/Character');

router.get('/',(req, res) => 
Character.findAll()
    .then(characters => {
        console.log(characters)
        res.render('characters', {
            characters
        })
    })
    
    .catch(err => console.log(err))
);

//Display Character Creation Form

router.get('/create', (req,res) => res.render('create'));

router.post('/create', (req, res) => {
    let { character_name, character_description } = req.body;
    let errors = [];
    //Validate fields
    
    if(!character_name) {
        errors.push({ text: 'Please add a character name'})
    }
    if(!character_description) {
        errors.push({ text: 'Please add a character description'})
    }

    //Check for errors
    if(errors.length > 0) {
        console.log(req.body)
        console.log('error');
        res.render('create', {
            errors,
            character_name,
            character_description
        })
    } else {
        console.log(req.body);
        Character.create({
            character_name,
            character_description
        })
        .then(characters => res.redirect('/character'))
        .catch(err => console.log(err))
    }
})

module.exports = router;