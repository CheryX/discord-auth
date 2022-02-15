const express = require('express');
const router = express.Router();

// GET /courses - List all courses
router.get("/", (req, res) => {
    //Check if the user is logged in
    if (req.isAuthenticated()) {
        res.render("courses");
    } else {
        res.redirect("/login");
    }
});

module.exports = router;