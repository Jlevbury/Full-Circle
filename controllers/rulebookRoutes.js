const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

// This loads the rulebook page

router.get("/", (req, res) => {
	res.render("rulebook", {
		title: "rulebook",
		bgImage: "/assets/img/rivers__1_.png",
		logged_in: req.isAuthenticated(),
	});
});

module.exports = router;
