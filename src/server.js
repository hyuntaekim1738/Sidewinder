const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://VenkatSagi:mongodb.2004@cluster0.ijkgw8w.mongodb.net/ToyotaRaces?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Here is where you put the new model definition
let DragStripRaces;
try {
  DragStripRaces = mongoose.model('DragStripRaces');
} catch (error) {
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
  DragStripRaces = mongoose.model('DragStripRaces', raceDataSchema, 'DragStripRaces');
}

app.get("/api/DragStripRaces", async (req, res) => {
  try {
    const raceData = await DragStripRaces.find();
    res.json(raceData);
    console.log("loaded")
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error: " + error.message);
  }
});
