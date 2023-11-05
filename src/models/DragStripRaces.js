const mongoose = require('mongoose');

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

module.exports = mongoose.model('DragStripRaces', raceDataSchema);
