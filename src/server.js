const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://VenkatSagi:mongodb.2004@cluster0.ijkgw8w.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const RaceData = require("./models/raceData"); // Update the path to your model file

app.get("/api/raceData", async (req, res) => {
  try {
    const raceData = await RaceData.find();
    res.json(raceData);
    console.log("loaded")
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error: " + error.message);
  }
});


const raceDataSchema = new mongoose.Schema({
  date: String,
  time: String,
  vehicle: String,
  locationOfRace: String,
  totalRaceTime: String,
  reactionTime: String,
  sixtyFootTime: String,
  threeThirtyFootTime: String,
  sixSixtyFootTime: String,
  oneEightMileSpeed: String,
  oneThousandFootTime: String,
  oneFourMileTime: String,
  oneFourMileSpeed: String,
  mph: String,
});

module.exports = mongoose.model("raceData", raceDataSchema); // Update the collection name
