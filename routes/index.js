const express = require('express');
const router = express.Router();

// GET / - Home page
router.get("/", (req, res) => {
    res.render("index");
});

module.exports = router;