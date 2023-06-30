const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

router.get("/", (req, res) => {
	res.render("rulebook", {
		title: "rulebook",
		bgImage: "/assets/img/rivers__1_.png",
	});
});

/* Dashboard

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard')
});*/

module.exports = router;
