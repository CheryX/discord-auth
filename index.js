const ejs = require("ejs");
const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");
const strategy = require("passport-discord").Strategy;
const MemoryStore = require("memorystore")(session);
const logger = require("log4js").getLogger();

const app = express()

//Serializing and deserializing user
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// INFO: Create your own config.json with following schema:
// {
//     "id": "",
//     "clientSecret": "",
//     "callbackURL": ""
//  }
const config = require("./config.json");

//Set up passport for discord
passport.use(
    new strategy({
        clientID: config.id,
        clientSecret: config.clientSecret,
        callbackURL: config.callbackUrl,
        scope: ["identify"],
    }, (_accessToken, _refreshToken, profile, done) => {
        process.nextTick(() => done(null, profile));
    })
)

//Create session that lasts for a month
app.use(
    session({
        store: new MemoryStore({ checkPeriod: 86400000 }),
        secret: "language-app",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30,
        }
    }),
);

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());

//Setup render engine
app.set('view engine', 'ejs');

//Add /public directory
app.use(express.static(__dirname + '/public'));

//Allow parsing body to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Pages
app.use("/login", require("./routes/login"));
app.use("/callback", require("./routes/callback"));
app.use("/logout", require("./routes/logout"));
app.use("/", require("./routes/"));

//Set up logger
logger.level = "info";

//Listen to website
app.listen(8000, () => {
    logger.info("Website listening on http://localhost:8000") 
});