const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { ensureAuthenticated } = require("../config/auth");
const { Character, Equipment, Spellbook, Features, Journal } = require("../models");

// This gets the character creation page

router.get("/create", ensureAuthenticated, (req, res) => {
	res.render("create",  { 
		title: 'create', 
		bgImage: '/assets/img/other__12_.png',
		logged_in: req.isAuthenticated(), 
	});
});

// This code lists the characters

router.get("/", ensureAuthenticated, async (req, res) => {
	const characters = await Character.findAll();
	res.render("characters", {
		title: "characterRoutes",
		bgImage: "/assets/img/other__11_.png",
		characters: characters.map(character => character.get({
			plain: true
		})),
		logged_in: req.isAuthenticated(),
		}
		);
});

// This loads individual characters

router.get("/:id", ensureAuthenticated, async (req, res) => {
try {
	const characterData = await Character.findByPk(req.params.id, {
		include: [
			{
				model: Equipment
			},
			{
				model: Spellbook
			},
			{
				model: Features
			},
			{
				model: Journal
			}
		]
	});
	const character = characterData.get({ plain: true })
		res.render("singleCharacter", { 
			...character,
			logged_in: req.isAuthenticated(), });
	} catch (err) {
		console.log(err);
}
});


// Display Character Creation Form

router.post("/create", ensureAuthenticated, async (req, res) => {
const {
	name,
	character_class,
	race,
	strength,
	dexterity,
	constitution,
	wisdom,
	intelligence,
	charisma,
} = req.body;
let errors = [];
//Validate fields
if (!name) {
	errors.push({ text: "Please add a character name" });
}
if (!character_class) {
	errors.push({ text: "Please add a character description" });
}
if (!race) {
	errors.push({ text: "Please add a character race" });
}
if (!strength) {
	errors.push({ text: "Please add a strength score" });
}
if (!dexterity) {
	errors.push({ text: "Please add a dexterity score" });
}
if (!constitution) {
	errors.push({ text: "Please add a constitution score" });
}
if (!wisdom) {
	errors.push({ text: "Please add a wisdom score" });
}
if (!intelligence) {
	errors.push({ text: "Please add an intelligence score" });
}
if (!charisma) {
	errors.push({ text: "Please add a charisma score" });
}	

//Check for errors
if (errors.length > 0) {
	res.render("create", {
		errors,
		name,
		character_class,
		race,
		strength,
		dexterity,
		constitution,
		wisdom,
		intelligence,
		charisma,
		logged_in: req.isAuthenticated(), 
	});
} else {
	await Character.create({
		name,
		character_class,
		race,
		strength,
		dexterity,
		constitution,
		wisdom,
		intelligence,
		charisma,
	});
	res.redirect("/characters");
}
});
module.exports = router;
