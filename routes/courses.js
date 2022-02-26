const express = require('express');
const router = express.Router();
const courseUtils = require('../utils/course');
const isDeveloper = require('../config.json').developerMode;

// GET /courses - List all courses
router.get("/", (req, res) => {
    //Check if the user is logged in
    if (req.isAuthenticated() || isDeveloper) {
        const courses = courseUtils.getAllCourses();
        res.render("courses", {courses});
    } else {
        res.redirect("/login");
    }
});

module.exports = router;