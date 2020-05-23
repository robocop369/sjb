const router = require("express").Router();

const homepageRoutes = require("./homepage");
const learnaboutusRoutes = require("./learnaboutus");
const userRoutes = require("./user");

// all sjb routes
router.use("/homepage", homepageRoutes);
router.use("/learnaboutus", learnaboutusRoutes);
router.use("/user", userRoutes);

module.exports = router;
