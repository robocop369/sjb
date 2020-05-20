const router = require("express").Router();
const bookRoutes = require("./books");
const productRoutes = require("./products");
const userRoutes = require("./users");

// Book routes
router.use("/books", bookRoutes);

// Post routes
router.use("/products", productRoutes);
router.use("/users", userRoutes);

module.exports = router;
