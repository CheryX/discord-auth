const express = require('express');
const router = express.Router();
const courseUtils = require('../utils/course');
const isDeveloper = require('../config.json').developerMode;

// GET /courses/:courseID - Get course details
router.get("/", (req, res) => {

    //Check if the user is logged in
    if (req.isAuthenticated() || isDeveloper) {

        //idk why ther is no params in request (temp fix)
        const courseID = req.baseUrl.split("/")[2];

        const course = courseUtils.getCourse(courseID);

        // just render the content of the course (temp)
        res.render("courseMenu", {course})
    
    } else {
        res.redirect("/login");
    }
});

module.exports = router;