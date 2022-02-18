const express = require('express');
const courseUtils = require('../utils/courses');
const router = express.Router();

// GET /courses/:id
router.get("/", (req, res) => {
    //Check if the user is logged in
    if (req.isAuthenticated() || 1 == 1) {
        const courseID = req.originalUrl.split('/')[2];
        const courseData = courseUtils.getCourse(courseID);

        res.render("coursePath", {
            course: courseData
        });
    } else {
        res.redirect("/login");
    }
});

module.exports = router;