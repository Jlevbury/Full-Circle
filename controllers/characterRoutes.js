const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { ensureAuthenticated } = require("../config/auth");
const { Character, Equipment, Spellbook, Features } = require("../models");

router.get("/create", (req, res) => {
	res.render("create",  { title: 'create', bgImage: '/assets/img/other__12_.png'});
});

router.get("/search", async (req, res) => {
	let term = req.query.search;
	term = term.toLowerCase();

	try {
		const characters = await Character.findAll({
			where: {
				character_class: { [Op.like]: "%" + term + "%" },
			},
		});
		res.render("characters", { characters })
	} catch (err) {
		console.log(err);
	}
});

router.get("/", async (req, res) => {
	let term = req.query.search;
	if (term) {
		term = term.toLowerCase();
		const characters = await Character.findAll({
			where: {
				character_class: { [Op.like]: "%" + term + "%" },
			},
		});
		res.render("characters", { characters });
	} else {
		const characters = await Character.findAll();
		res.render("characters", {
			title: "characterRoutes",
			bgImage: "/assets/img/other__11_.png",
			characters: characters.map(character => character.get({
				plain: true
			})),
		}
		);
	}
});

router.get("/:id", async (req, res) => {
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
				}
			]
		});
		const character = characterData.get({ plain: true })
		console.log(character);
		res.render("singleCharacter", { 
			...character });
	} catch (err) {
		console.log(err);
	}
});


// Display Character Creation Form

router.post("/create", async (req, res) => {
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
