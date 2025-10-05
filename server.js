const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const fs = require("fs"); 

dotenv.config();
connectDB();


// ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("🏏 Cricket API Running"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/players", require("./routes/playerRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
