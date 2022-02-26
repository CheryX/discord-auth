const express = require('express');
const router = express.Router();
const courseUtils = require('../utils/course');
const isDeveloper = require('../config.json').developerMode;

// GET /courses/:courseID - Get course details
router.get("/", (req, res) => {

    //Check if the user is logged in
    if (req.isAuthenticated() || isDeveloper) {

        //Get params
        const courseID = req.baseUrl.split("/")[2];
        const topicID = req.baseUrl.split("/")[3];

        const course = courseUtils.getCourse(courseID);

        res.render("topic", {course, topicID});
    
    } else {
        res.redirect("/login");
    }
});

module.exports = router;