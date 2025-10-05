const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: String, required: true },
  role: { type: String, enum: ["Batsman", "Bowler", "All-Rounder", "Wicket-Keeper"], required: true },
  matches: { type: Number, default: 0 },
  runs: { type: Number, default: 0 },
  wickets: { type: Number, default: 0 },
  image: { type: String } // <-- new field to store image path
}, { timestamps: true });

module.exports = mongoose.model("Player", playerSchema);
