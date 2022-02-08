const express = require('express');
const passport = require('passport');
const router = express.Router();
const url = require('url');

// GET /login - Login page
router.get("/", (req, res, next) => {
    if (!req.session.backURL && req.headers.referer) {

        const parsed = url.parse(req.headers.referer);
        const app = req.app;
        
        if (parsed.hostname === app.locals.domain) {
            req.session.backURL = parsed.path;
        }

    } else {
        req.session.backURL = "/";
    }
    next();
}, passport.authenticate("discord"));


module.exports = router;