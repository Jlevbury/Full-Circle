const express = require("express");
const router = express.Router();
const Character = require("../models/Character");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { ensureAuthenticated } = require("../config/auth");

router.get("/create", (req, res) => {
	res.render("create");
});

router.get("/search", (req, res) => {
	res.render("search");

	// localhost:3001/characters/?search=archer = Search term
});

router.get("/search", (req, res) => {
	console.log(req.params);
	console.log(req.query);
	//Make Lowercase
	term = term.toLowerCase();

	Character.findAll({
		where: {
			character_class: { [Op.like]: "%" + term + "%" },
		},
	})

		.then((characters) => res.render("characters", { characters }))
		.catch((err) => console.log(err));
});

router.get("/", async (req, res) => {
	let { search } = req.query;
	if (search) {
		Character.findAll({
			where: {
				character_class: { [Op.like]: "%" + term + "%" },
			},
		});
	} else {
		await Character.findAll()
			.then((characters) => {
				res.render("characters", {
					title: "characterRoutes",
					bgImage: "/public/assets/img/other__11_.png",

					characters: characters.map((character) =>
						character.get({
							plain: true,
						})
					),
				});
			})

			.catch((err) => console.log(err));
	}
});

router.get("/:id", (req, res) => {
	Character.findByPk(req.params.id)
		.then((characters) => {
			console.log(characters);
			res.render("singleCharacter", {
				characters,
			});
		})
		.catch((err) => console.log(err));
});

// Display Character Creation Form

router.post("/create", async (req, res) => {
	const {
		name,
		character_class,
		strength,
		dexterity,
		constitution,
		wisdom,
		intelligence,
		charisma,
	} = req.body;
	let errors = [];
	//Validate fields
	console.log(req.body);
	if (!name) {
		errors.push({ text: "Please add a character name" });
	}
	if (!character_class) {
		errors.push({ text: "Please add a character description" });
	}

	//Check for errors
	if (errors.length > 0) {
		res.render("create", {
			errors,
			name,
			character_class,
		});
	} else {
		await Character.create({
			name,
			character_class,
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

// Search for characters

module.exports = router;
