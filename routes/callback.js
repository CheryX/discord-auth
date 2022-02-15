const express = require('express');
const passport = require('passport');
const router = express.Router();

// GET /callback - Callback route for Discord
router.get("/", passport.authenticate("discord", { failureRedirect: "/" }), (req, res) => {
    if (req.session.backURL) {
        const backURL = req.session.backURL;
        req.session.backURL = null;
        res.redirect(backURL);
    } else {
        res.redirect("/courses");
    }
}
);

module.exports = router;