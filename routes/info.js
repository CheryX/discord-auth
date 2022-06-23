const express = require('express');
const router = express.Router();

// GET /info: Get information about your profile
router.get("/", (req, res) => {

    //Check if the user is logged in
    if (req.isAuthenticated()) {

        let user = req.user;
        res.render("info", {user});
    
    } else {
        res.redirect("/login");
    }
});

module.exports = router;