const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const { getPlayers, getPlayerById, addPlayer, updatePlayer, deletePlayer } = require("../controllers/playerController");

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Routes
router.get("/", getPlayers);
router.get("/:id", getPlayerById);
router.post("/", upload.single("image"), addPlayer);      // <-- use multer
router.put("/:id", upload.single("image"), updatePlayer); // <-- use multer
router.delete("/:id", deletePlayer);

module.exports = router;
