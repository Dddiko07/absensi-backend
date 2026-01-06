const express = require("express");
const router = express.Router();
const controller = require("../controllers/absensiController");

router.get("/", controller.getAbsensi);
router.post("/", controller.addAbsensi);

module.exports = router;
