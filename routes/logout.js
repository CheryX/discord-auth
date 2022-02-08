const express = require('express');
const router = express.Router();

// GET /logout - Logout function
router.get("/", function (req, res) {
    req.session.destroy(() => {
        req.logout();
        res.redirect("/");
    });
});


module.exports = router;