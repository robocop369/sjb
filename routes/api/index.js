const router = require("express").Router();
const landlordRoutes = require("./landlords");
const productRoutes = require("./products");
const chicagoDataRoutes = require("./chicagoData");
const buildingPermitsRoutes = require("./buildingPermits");
const userRoutes = require("./users");
const homepageRoutes = require("./homepage");
const learnaboutusRoutes = require("./learnaboutus");

// Landlord routes
router.use("/landlords", landlordRoutes);
router.use("/homepage", homepageRoutes);
router.use("/learnaboutus", learnaboutusRoutes);
router.use("/products", productRoutes);
router.use("/chicagodata", chicagoDataRoutes);
router.use("/users", userRoutes);
router.use("/buildingpermits", buildingPermitsRoutes);

module.exports = router;






