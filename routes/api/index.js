const router = require("express").Router();
const landlordRoutes = require("./landlords");
const productRoutes = require("./products");
const userRoutes = require("./users");

// Landlord routes
router.use("/landlords", landlordRoutes);

// Post routes
router.use("/products", productRoutes);
router.use("/users", userRoutes);

module.exports = router;
