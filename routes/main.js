const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const { getWeather } = require("../middleware/weather");

const eventsController = require("../controllers/events");
const aboutController = require("../controllers/about");
const weatherController = require("../controllers/weather");


//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, getWeather, postsController.getProfile);
router.get("/feed", ensureAuth, getWeather, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/events", ensureAuth, getWeather, eventsController.getEvents);
router.get("/about", aboutController.getAbout);
router.get("/weather", weatherController.getWeather);

router.get("/like-event/:id", eventsController.likeEvent);




module.exports = router;
