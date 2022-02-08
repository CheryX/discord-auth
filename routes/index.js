const express = require('express');
const router = express.Router();

//Function that checks if user is logged in (not used ATM)
const checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
};

// GET / - Home page
router.get("/", (req, res) => {
    if (req.isAuthenticated()) {
        res.send("<h1>You are logged in</h1>" + JSON.stringify(req.user));
    } else {
        res.send("<h1>Main website</h1> <a href=\"http://localhost:8000/login\">Login</a>");
    }
});

module.exports = router;