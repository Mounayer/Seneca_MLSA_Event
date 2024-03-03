const express = require("express");
const router = express.Router();

router.get("/", require("./HealthTest"));
router.get("/generatepage", require("./GeneratePage"));
router.post("/generateelement", require("./GenerateElement"));
router.post("/chat", require("./Chat"));

module.exports = router;
