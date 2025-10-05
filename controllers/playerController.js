const Player = require("../models/Player");

// Get all players
exports.getPlayers = async (req, res) => {
  const players = await Player.find();
  res.json(players);
};

// Get single player
exports.getPlayerById = async (req, res) => {
  const player = await Player.findById(req.params.id);
  player ? res.json(player) : res.status(404).json({ msg: "Player not found" });
};

//Add player
exports.addPlayer = async (req, res) => {
  try {
    const newPlayer = await Player.create({
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : ""
    });
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Update player with optional image
exports.updatePlayer = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) updateData.image = `/uploads/${req.file.filename}`;
    const updated = await Player.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Delete player
exports.deletePlayer = async (req, res) => {
  await Player.findByIdAndDelete(req.params.id);
  res.json({ msg: "Player deleted" });
};
