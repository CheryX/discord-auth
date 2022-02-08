const express = require('express');
const router = express.Router();

// GET / - Home page
router.get("/", (req, res) => {
    if (req.user != undefined) {
        res.send("<h1>You are logged in</h1>" + JSON.stringify(req.user));
    } else {
        res.send("<h1>Main website</h1> <a href=\"http://localhost:8000/login\">Login</a>");
    }
});

module.exports = router;