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
    const data = {
        character_name: "Brutalitops!",
        character_description: "The magician"
    }

    let { character_name, character_description } = data;

    Character.create({
        character_name,
        character_description
    })
    .then(character => res.redirect('/character'))
    .catch(err => console.log(err))
})

module.exports = router;