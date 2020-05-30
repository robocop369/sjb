const router = require("express").Router();
const landlordRoutes = require("./landlords");
const productRoutes = require("./products");
const chicagoDataRoutes = require("./chicagoData");
const buildingPermitsRoutes = require("./buildingPermits");
const abanBuildingsRoutes = require("./abanBuildings");

const userRoutes = require("./users");
const homepageRoutes = require("./homepage");
const learnaboutusRoutes = require("./learnaboutus");
//const userRoutes = require("./user2");

// Landlord routes
router.use("/landlords", landlordRoutes);

// all sjb routes
router.use("/homepage", homepageRoutes);
router.use("/learnaboutus", learnaboutusRoutes);

// Post routes
router.use("/products", productRoutes);
router.use("/chicagodata", chicagoDataRoutes);
router.use("/users", userRoutes);
router.use("/buildingpermits", buildingPermitsRoutes);
router.use("/abanbuildings", abanBuildingsRoutes);




module.exports = router;






